import { useEffect, useRef, useState } from "react";
import ContactStation from "@/components/ContactStation";
import ContactStationPreview from "@/components/ContactStationPreview";
import HeroSection from "@/components/home/HeroSection";
import HorizonSection from "@/components/home/HorizonSection";
import LoopSection from "@/components/home/LoopSection";
import OperationalCaseSection from "@/components/home/OperationalCaseSection";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";
import ThesisSection from "@/components/home/ThesisSection";
import VisionSection from "@/components/home/VisionSection";

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );
    revealNodes.forEach((node) => revealObserver.observe(node));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let detachInteractionUnmute: (() => void) | undefined;

    // Autoplay-with-sound is browser-blocked without a prior user gesture; unmute on the
    // visitor's first click/keypress anywhere on the page, since that counts as one.
    const unmuteOnInteraction = () => {
      const video = heroVideoRef.current;
      if (!video) return;
      video.muted = false;
      video.play().then(() => setSoundEnabled(true)).catch(() => undefined);
    };

    const attachInteractionUnmute = () => {
      document.addEventListener("click", unmuteOnInteraction, { once: true });
      document.addEventListener("keydown", unmuteOnInteraction, { once: true });
      detachInteractionUnmute = () => {
        document.removeEventListener("click", unmuteOnInteraction);
        document.removeEventListener("keydown", unmuteOnInteraction);
      };
    };

    const syncMotionPreference = () => {
      const prefersReducedMotion = motionPreference.matches;
      const video = heroVideoRef.current;

      setReducedMotion(prefersReducedMotion);
      detachInteractionUnmute?.();

      if (!video) return;

      if (prefersReducedMotion) {
        video.pause();
        video.muted = true;
        setSoundEnabled(false);
        return;
      }

      // Try sound-on autoplay first; browsers without a prior user gesture
      // reject it, so fall back to muted autoplay and let the toggle re-enable sound.
      video.muted = false;
      video
        .play()
        .then(() => setSoundEnabled(true))
        .catch(() => {
          video.muted = true;
          setSoundEnabled(false);
          void video.play().catch(() => undefined);
          attachInteractionUnmute();
        });
    };

    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);
    return () => {
      motionPreference.removeEventListener("change", syncMotionPreference);
      detachInteractionUnmute?.();
    };
  }, []);

  const toggleHeroSound = async () => {
    const video = heroVideoRef.current;
    if (!video || reducedMotion) return;

    if (soundEnabled) {
      video.muted = true;
      setSoundEnabled(false);
      return;
    }

    video.muted = false;
    try {
      await video.play();
      setSoundEnabled(true);
    } catch {
      video.muted = true;
      setSoundEnabled(false);
    }
  };

  return (
    <div className="observatory">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <SiteHeader soundEnabled={soundEnabled} reducedMotion={reducedMotion} onToggleSound={toggleHeroSound} />

      <main id="main-content">
        <HeroSection videoRef={heroVideoRef} soundEnabled={soundEnabled} />
        <ThesisSection />
        <LoopSection />
        <OperationalCaseSection />
        <VisionSection />
        <HorizonSection />
        <ContactStation />
        <ContactStationPreview />
      </main>

      <SiteFooter />
    </div>
  );
}
