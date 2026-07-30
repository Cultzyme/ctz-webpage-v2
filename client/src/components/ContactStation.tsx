/**
 * Cultzyme V8 / contact control handoff.
 * A precise email form is paired with an abstract SENSE / MODEL / ACT control aperture.
 * No mascot or assistant metaphor: the interaction remains industrial and process-led.
 */
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

type FocusField = "name" | "email" | "company" | "challenge" | null;

export default function ContactStation() {
  const [focusField, setFocusField] = useState<FocusField>(null);
  const [prepared, setPrepared] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const challenge = String(data.get("challenge") ?? "");
    const subject = encodeURIComponent(`Cultzyme process conversation: ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nWork email: ${email}\nCompany: ${company}\n\nCurrent challenge:\n${challenge}`,
    );

    setPrepared(true);
    setFocusField(null);
    window.location.href = `mailto:juan@cultzyme.com?subject=${subject}&body=${body}`;
  };

  const activeLayer = prepared
    ? "all"
    : focusField === "company"
      ? "model"
      : focusField === "challenge"
        ? "act"
        : focusField
          ? "sense"
          : "standby";

  const status = prepared
    ? "CONTROL BRIEF / READY"
    : focusField
      ? `MAPPING / ${focusField.toUpperCase()}`
      : "";

  return (
    <section className="contact-station" id="contact">
      <div className="contact-axis" aria-hidden="true"><i /><span /></div>
      <div className="v2-shell contact-layout">
        <div className="contact-copy" data-reveal>
          <span className="observation-label"><i aria-hidden="true" />START WITH YOUR PROCESS</span>
          <h2>Bring us your process.<br /><em>We&apos;ll map the loop.</em></h2>
          <p>
            Tell us where data arrives too late, where scale-up creates uncertainty or where an approved
            action still depends on manual intervention. We’ll identify the fastest starting point: sensing,
            existing data or equipment-level control.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">NAME</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required onFocus={() => setFocusField("name")} onBlur={() => setFocusField(null)} />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">WORK EMAIL</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required onFocus={() => setFocusField("email")} onBlur={() => setFocusField(null)} />
            </div>
            <div className="contact-field contact-field--wide">
              <label htmlFor="contact-company">COMPANY</label>
              <input id="contact-company" name="company" type="text" autoComplete="organization" required onFocus={() => setFocusField("company")} onBlur={() => setFocusField(null)} />
            </div>
            <div className="contact-field contact-field--wide">
              <label htmlFor="contact-challenge">CURRENT CHALLENGE</label>
              <textarea id="contact-challenge" name="challenge" rows={4} required onFocus={() => setFocusField("challenge")} onBlur={() => setFocusField(null)} />
            </div>
            <div className="contact-form__action contact-field--wide">
              <button type="submit">
                {prepared ? "LOOP BRIEF READY" : "PREPARE LOOP BRIEF"}
                <span aria-hidden="true"><ArrowRight size={20} strokeWidth={1.4} /></span>
              </button>
            </div>
          </form>
        </div>

        <div className={`control-aperture-panel is-${activeLayer}`} aria-label="Cultzyme control aperture showing Sense, Model and Act layers">
          {status ? <div className="control-aperture-status"><i />{status}</div> : null}
          <div className="control-aperture" aria-hidden="true">
            <span className="control-aperture__ring control-aperture__ring--outer" />
            <span className="control-aperture__ring control-aperture__ring--model" />
            <span className="control-aperture__ring control-aperture__ring--act" />
            <span className="control-aperture__axis control-aperture__axis--x" />
            <span className="control-aperture__axis control-aperture__axis--y" />
            <span className="control-aperture__core"><i />GLASS BOX<small>CONTROL APERTURE</small></span>
            <span className="control-aperture__node control-aperture__node--sense"><i />SENSE</span>
            <span className="control-aperture__node control-aperture__node--model"><i />MODEL</span>
            <span className="control-aperture__node control-aperture__node--act"><i />ACT</span>
          </div>
          <div className="control-aperture-formula" aria-hidden="true">
            <span>MULTIPARAMETER SENSING</span><i /><span>AGENTIC MODELS</span><i /><span>PHYSICAL AI</span>
          </div>
          <p>CULTZYME</p>
        </div>
      </div>
    </section>
  );
}
