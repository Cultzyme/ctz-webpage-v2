/**
 * PREVIEW ONLY — duplicate of ContactStation using the designer's DataLayersVisual handoff.
 * Placed right below the live ContactStation to compare side by side before deciding whether
 * to replace the interactive control-aperture panel. Remove once a decision is made.
 */
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import DataLayersVisual from "./DataLayersVisual";

export default function ContactStationPreview() {
  const [prepared, setPrepared] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPrepared(true);
  };

  return (
    <section className="contact-station contact-station--preview" aria-label="Contact section preview with data layers visual">
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
              <label htmlFor="contact-preview-name">NAME</label>
              <input id="contact-preview-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-preview-email">WORK EMAIL</label>
              <input id="contact-preview-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="contact-field contact-field--wide">
              <label htmlFor="contact-preview-company">COMPANY</label>
              <input id="contact-preview-company" name="company" type="text" autoComplete="organization" required />
            </div>
            <div className="contact-field contact-field--wide">
              <label htmlFor="contact-preview-challenge">CURRENT CHALLENGE</label>
              <textarea id="contact-preview-challenge" name="challenge" rows={4} required />
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
