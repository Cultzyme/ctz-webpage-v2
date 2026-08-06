/**
 * Cultzyme V25 / Multidisciplinary Team page.
 * Profile slots are intentionally explicit until the user supplies verified names, roles, photos and links.
 */
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { ASSETS } from "@/components/home/assets";
import juanGarzonPhoto from "@/assets/founders/juan-garzon.png";
import rubenPalomeroPhoto from "@/assets/founders/ruben-palomero.png";
import julenCaoPhoto from "@/assets/team/julen-cao.png";
import alejandroVicentePhoto from "@/assets/team/alejandro-vicente.png";
import amitChandrakarPhoto from "@/assets/team/amit-chandrakar.png";
import micaelaLopezRenaudPhoto from "@/assets/team/micaela-lopez-renaud.png";
import antonioPiattiFaddaPhoto from "@/assets/team/antonio-piatti-fadda.png";
import mathiasCharconnetPhoto from "@/assets/team/mathias-charconnet.png";
import sandraGarciaPhoto from "@/assets/team/sandra-garcia.png";
import tiagoOloPhoto from "@/assets/team/tiago-olo.png";
import christinaNeshevaPhoto from "@/assets/advisors/christina-nesheva.png";
import jonathanSouquetPhoto from "@/assets/advisors/jonathan-souquet.png";
import carolinaVillaPhoto from "@/assets/advisors/carolina-villa.png";

type Group = "Founder" | "Team" | "Advisor";

type Member = {
  name: string;
  role: string;
  linkedin?: string;
  photo?: string;
};

const FOUNDERS: Member[] = [
  { name: "Juan Garzón", role: "CEO & Co-founder", linkedin: "https://www.linkedin.com/in/juanmanuelgarzon/", photo: juanGarzonPhoto },
  { name: "Rubén Palomero", role: "CTO & Co-founder", linkedin: "https://www.linkedin.com/in/ruben-cultzyme/", photo: rubenPalomeroPhoto },
];

const TEAM: Member[] = [
  { name: "Julen Cao", role: "Head of Software", photo: julenCaoPhoto },
  { name: "Alejandro Vicente", role: "Lead Bioprocess Engineer", photo: alejandroVicentePhoto },
  { name: "Amit Chandrakar", role: "Mechanical Engineer", photo: amitChandrakarPhoto },
  { name: "Micaela Lopez Renaud", role: "UI/UX Designer", photo: micaelaLopezRenaudPhoto },
  { name: "Antonio Piatti Fadda", role: "Front-end Developer", photo: antonioPiattiFaddaPhoto },
  { name: "Mathias Charconnet", role: "Data Scientist", photo: mathiasCharconnetPhoto },
  { name: "Sandra García", role: "Financial Analyst", photo: sandraGarciaPhoto },
  { name: "Tiago Olo", role: "Founder Associate", photo: tiagoOloPhoto },
];

const ADVISORS: Member[] = [
  { name: "Dr. Jonathan Souquet", role: "Tech / Industry Advisor", photo: jonathanSouquetPhoto },
  { name: "Christina Nesheva", role: "Commercial Advisor", photo: christinaNeshevaPhoto },
  { name: "Dr. Carolina Villa", role: "Investor & Advisor", photo: carolinaVillaPhoto },
];

type ProfileSlotProps = {
  index: number;
  group: Group;
  member: Member | null;
};

function ProfileSlot({ index, group, member }: ProfileSlotProps) {
  const label = member ? `${group} profile: ${member.name}` : `${group} profile placeholder ${index}`;

  return (
    <article className="team-profile" aria-label={label}>
      {member?.photo ? (
        <div className="team-profile__photo team-profile__photo--filled">
          <img src={member.photo} alt={member.name} />
        </div>
      ) : (
        <div className="team-profile__photo" aria-hidden="true">
          <span>{String(index).padStart(2, "0")}</span>
          <Plus size={22} strokeWidth={1.2} />
          <small>ADD PHOTO</small>
        </div>
      )}
      {member ? (
        <div className="team-profile__meta">
          <span>{group.toUpperCase()}</span>
          <h3>{member.name}</h3>
          <p className="team-profile__identity">
            {member.role}
            {member.linkedin && (
              <>
                {" / "}
                <a href={member.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
              </>
            )}
          </p>
        </div>
      ) : (
        <div className="team-profile__meta">
          <span>{group.toUpperCase()} PROFILE</span>
          <h3>Profile to be added</h3>
          <p>NAME / ROLE / LINKEDIN</p>
        </div>
      )}
    </article>
  );
}

export default function Team() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const previous = document.title;
    document.title = "Team | Cultzyme";
    window.scrollTo(0, 0);
    return () => { document.title = previous; };
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="manifesto-page team-page">
      <header className={`manifesto-header ${isScrolled ? "manifesto-header--scrolled" : ""}`}>
        <div className="v2-shell manifesto-header__inner">
          <a href="/" className="manifesto-header__brand" aria-label="Cultzyme home">
            <img src={ASSETS.wordmark} alt="Cultzyme" />
          </a>
          <nav aria-label="Team page navigation">
            <a href="#founders">FOUNDERS</a>
            <a href="#team-roster">TEAM</a>
            <a href="#advisors">ADVISORS</a>
          </nav>
          <a href="/" className="manifesto-back"><ArrowLeft size={15} />HOME</a>
        </div>
      </header>

      <main>
        <section className="team-section team-section--standalone" id="team">
          <div className="manifesto-shell">
            <span className="manifesto-kicker"><i />CULTZYME / MULTIDISCIPLINARY BY DESIGN</span>
            <h1>Different disciplines.<br /><em style={{ fontFamily: "'Playfair Display', serif" }}>One mission.</em></h1>
            <p className="team-intro">
              Cultzyme is a multidisciplinary team built across biology, engineering, AI and industrial systems.
              We work as one to move biomanufacturing from observation to autonomous action.
            </p>

            <section className="team-group team-group--founders" id="founders" aria-labelledby="founders-title">
              <header><span>01 / LEADERSHIP</span><h2 id="founders-title">Founders</h2></header>
              <div className="team-profile-grid team-profile-grid--founders">
                {FOUNDERS.map((founder, i) => (
                  <ProfileSlot key={founder.name} index={i + 1} group="Founder" member={founder} />
                ))}
              </div>
            </section>

            <section className="team-group" id="team-roster" aria-labelledby="team-roster-title">
              <header><span>02 / BUILDERS</span><h2 id="team-roster-title">Team</h2></header>
              <div className="team-carousel" aria-label="Team members">
                <div className="team-carousel__track">
                  {[...TEAM, ...TEAM].map((member, i) => (
                    <ProfileSlot key={`${member.name}-${i}`} index={(i % TEAM.length) + 1} group="Team" member={member} />
                  ))}
                </div>
              </div>
            </section>

            <section className="team-group" id="advisors" aria-labelledby="advisors-title">
              <header><span>03 / GUIDANCE</span><h2 id="advisors-title">Advisors</h2></header>
              <div className="team-profile-grid team-profile-grid--advisors">
                {ADVISORS.map((member, i) => (
                  <ProfileSlot key={member?.name ?? i} index={i + 1} group="Advisor" member={member} />
                ))}
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
          <img src={ASSETS.wordmark} alt="Cultzyme" />
          <p>SPEEDING BIOMANUFACTURING WITH REAL INTELLIGENCE.</p>
          <span>© {new Date().getFullYear()} CULTZYME S.L.</span>
        </div>
      </footer>
    </div>
  );
}
