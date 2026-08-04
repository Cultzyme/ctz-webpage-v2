/**
 * Cultzyme V28 / Cinematic Process Hero / Accessible Sound.
 * Metallic blue-black editorial framing keeps the process film atmospheric while an explicit sound control preserves reliable autoplay.
 */
import type { RefObject } from "react";
import { ASSETS } from "./assets";
import TextLink from "./TextLink";

interface HeroSectionProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  soundEnabled: boolean;
}

export default function HeroSection({ videoRef, soundEnabled }: HeroSectionProps) {
  return (
    <section className="v2-hero v2-hero--glass" id="top">
      <div className="hero-video-media" aria-hidden="true">
        <img
          className="hero-video-poster"
          src={ASSETS.heroPoster}
          alt=""
        />
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted={!soundEnabled}
          loop
          playsInline
          preload="auto"
          poster={ASSETS.heroPoster}
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
        <span className="hero-video-scrim" />
      </div>
      <div className="v2-hero__veil" aria-hidden="true" />

      <div className="v2-shell v2-hero__content" data-reveal>
        <h1>Self-driving biomanufacturing.<br /><em>From live signal</em><br />to physical action.</h1>
        <div className="v2-hero__lower">
          <p>
            Cultzyme turns live multiparameter process data into model-driven, automated action. One intelligence
            layer connects sensing, AI models and equipment across development and manufacturing, helping teams
            reduce trial-and-error, find robust operating conditions faster and scale with control.
          </p>
          <div className="v2-hero__actions">
            <TextLink href="#contact">MAP YOUR FIRST CLOSED LOOP</TextLink>
            <span className="live-status"><i />LAB → PILOT → PLANT / ALWAYS UNDER YOUR CONTROL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
