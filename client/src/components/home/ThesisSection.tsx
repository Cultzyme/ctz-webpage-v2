import ObservationLabel from "./ObservationLabel";

export default function ThesisSection() {
  return (
    <section className="thesis-section" id="loop">
      <div className="thesis-signal" aria-hidden="true"><i /><span /></div>
      <div className="v2-shell thesis-layout" data-reveal>
        <ObservationLabel>FROM SPARSE DATA TO SELF-DRIVING BIOPROCESSING</ObservationLabel>
        <h2>More process truth.<br /><em style={{ fontFamily: "'Playfair Display', serif" }}>Less trial-and-error.</em></h2>
        <div className="thesis-copy">
          <span>FEWER BLIND ITERATIONS</span>
          <p>
            Most bioprocess decisions still rely on delayed samples, disconnected models and manual execution.
            Cultzyme converts live process state and model outputs into automated, traceable actions across
            connected upstream and downstream equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
