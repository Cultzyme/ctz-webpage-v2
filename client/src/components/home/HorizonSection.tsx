import ScaleUpVisual from "@/components/ScaleUpVisual";
import ObservationLabel from "./ObservationLabel";

export default function HorizonSection() {
  return (
    <section className="horizon-section" id="scale">
      <div className="horizon-orbit" aria-hidden="true">
        <span className="horizon-orbit__outer" />
        <span className="horizon-orbit__middle" />
        <span className="horizon-orbit__inner" />
        <span className="horizon-orbit__signal" />
      </div>
      <ScaleUpVisual />
      <div className="v2-shell horizon-layout" data-reveal>
        <ObservationLabel>BUILT FOR CELLS / READY FOR SCALE</ObservationLabel>
        <h2>Built for cells.<br /><em style={{ fontFamily: "'Playfair Display', serif" }}>Ready for scale.</em></h2>
        <p>
          Across biologics, biosimilars and ATMPs, Cultzyme carries process understanding from development
          into manufacturing, reducing physical iteration while protecting quality, yield and robustness.
        </p>
        <p className="horizon-audiences">PROCESS DEVELOPMENT / MSAT / MANUFACTURING</p>
        <div className="scale-track" aria-label="Lab to plant continuity">
          <span><i /><b>LAB</b><em /><small>DISCOVER</small></span>
          <span><i /><b>PILOT</b><em /><small>TRANSFER</small></span>
          <span><i /><b>PLANT</b><em /><small>CONTROL</small></span>
        </div>
      </div>
    </section>
  );
}
