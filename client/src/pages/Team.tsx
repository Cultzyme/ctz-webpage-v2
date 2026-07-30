/**
 * Cultzyme V25 / Multidisciplinary Team page.
 * Profile slots are intentionally explicit until the user supplies verified names, roles, photos and links.
 */
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useEffect } from "react";

const WORDMARK = "/manus-storage/cultzyme-wordmark-clean_7ed67d66.png";

type ProfileSlotProps = {
  index: number;
  group: "Founder" | "Team" | "Advisor";
};

function ProfileSlot({ index, group }: ProfileSlotProps) {
  return (
    <article className="team-profile" aria-label={`${group} profile placeholder ${index}`}>
      <div className="team-profile__photo" aria-hidden="true">
        <span>{String(index).padStart(2, "0")}</span>
        <Plus size={22} strokeWidth={1.2} />
        <small>ADD PHOTO</small>
      </div>
      <div className="team-profile__meta">
        <span>{group.toUpperCase()} PROFILE</span>
        <h3>Profile to be added</h3>
        <p>NAME / ROLE / LINKEDIN</p>
      </div>
    </article>
  );
}

export default function Team() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Team | Cultzyme";
    window.scrollTo(0, 0);
    return () => { document.title = previous; };
  }, []);

  return (
    <div className="manifesto-page team-page">
      <header className="manifesto-header">
        <a href="/" className="manifesto-header__brand" aria-label="Cultzyme home">
          <img src={WORDMARK} alt="Cultzyme" />
        </a>
        <nav aria-label="Team page navigation">
          <a href="#founders">FOUNDERS</a>
          <a href="#team-roster">TEAM</a>
          <a href="#advisors">ADVISORS</a>
        </nav>
        <a href="/" className="manifesto-back"><ArrowLeft size={15} />HOME</a>
      </header>

      <main>
        <section className="team-section team-section--standalone" id="team">
          <div className="manifesto-shell">
            <span className="manifesto-kicker"><i />CULTZYME / MULTIDISCIPLINARY BY DESIGN</span>
            <h1>Different disciplines.<br /><em>One mission.</em></h1>
            <p className="team-intro">
              Cultzyme is a multidisciplinary team built across biology, engineering, AI and industrial systems.
              We work as one to move biomanufacturing from observation to autonomous action.
            </p>

            <section className="team-group team-group--founders" id="founders" aria-labelledby="founders-title">
              <header><span>01 / LEADERSHIP</span><h2 id="founders-title">Founders</h2></header>
              <div className="team-profile-grid team-profile-grid--founders">
                <ProfileSlot index={1} group="Founder" />
                <ProfileSlot index={2} group="Founder" />
              </div>
            </section>

            <section className="team-group" id="team-roster" aria-labelledby="team-roster-title">
              <header><span>02 / BUILDERS</span><h2 id="team-roster-title">Team</h2></header>
              <div className="team-profile-grid team-profile-grid--team">
                {[1, 2, 3, 4].map((index) => <ProfileSlot key={index} index={index} group="Team" />)}
              </div>
            </section>

            <section className="team-group" id="advisors" aria-labelledby="advisors-title">
              <header><span>03 / GUIDANCE</span><h2 id="advisors-title">Advisors</h2></header>
              <div className="team-profile-grid team-profile-grid--advisors">
                {[1, 2, 3].map((index) => <ProfileSlot key={index} index={index} group="Advisor" />)}
              </div>
            </section>

            <section className="team-join" aria-labelledby="team-join-title">
              <span>04 / YOU</span>
              <h2 id="team-join-title">Join us.</h2>
              <a className="team-cta" href="mailto:juan@cultzyme.com?subject=Building%20with%20Cultzyme">
                JOIN CULTZYME <ArrowRight size={18} />
              </a>
            </section>
          </div>
        </section>
      </main>

      <footer className="manifesto-footer">
        <div className="manifesto-shell">
          <img src={WORDMARK} alt="Cultzyme" />
          <p>SPEEDING BIOMANUFACTURING WITH REAL INTELLIGENCE.</p>
          <span>© {new Date().getFullYear()} CULTZYME S.L.</span>
        </div>
      </footer>
    </div>
  );
}
