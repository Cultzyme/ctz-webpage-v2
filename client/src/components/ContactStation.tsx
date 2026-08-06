/**
 * Cultzyme V8 / contact control handoff.
 * A precise email form is paired with an abstract SENSE / MODEL / ACT control aperture.
 * No mascot or assistant metaphor: the interaction remains industrial and process-led.
 */
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import DataLayersVisual from "./DataLayersVisual";

export default function ContactStation() {
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
    window.location.href = `mailto:juan@cultzyme.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-station" id="contact">
      <div className="contact-axis" aria-hidden="true"><i /><span /></div>
      <div className="v2-shell contact-layout">
        <div className="contact-copy" data-reveal>
          <span className="observation-label"><i aria-hidden="true" />START WITH YOUR PROCESS</span>
          <h2>Bring us your process.<br /><em style={{ fontFamily: "'Playfair Display', serif" }}>We&apos;ll map the loop.</em></h2>
          <p>
            Tell us where data arrives too late, where scale-up creates uncertainty or where an approved
            action still depends on manual intervention. We’ll identify the fastest starting point: sensing,
            existing data or equipment-level control.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">NAME</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required  />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">WORK EMAIL</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required  />
            </div>
            <div className="contact-field contact-field--wide">
              <label htmlFor="contact-company">COMPANY</label>
              <input id="contact-company" name="company" type="text" autoComplete="organization" required  />
            </div>
            <div className="contact-field contact-field--wide">
              <label htmlFor="contact-challenge">CURRENT CHALLENGE</label>
              <textarea id="contact-challenge" name="challenge" rows={4} required  />
            </div>
            <div className="contact-form__action contact-field--wide">
              <button type="submit">
                {prepared ? "LOOP BRIEF READY" : "PREPARE LOOP BRIEF"}
                <span aria-hidden="true"><ArrowRight size={20} strokeWidth={1.4} /></span>
              </button>
            </div>
          </form>
        </div>

        <DataLayersVisual />
      </div>
    </section>
  );
}
