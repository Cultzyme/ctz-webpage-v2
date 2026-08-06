import ObservationLabel from "./ObservationLabel";

export default function VisionSection() {
  return (
    <section className="autonomous-vision-section" id="vision" aria-labelledby="autonomous-vision-title">
      <div className="autonomous-vision__orbits" aria-hidden="true"><i /><span /></div>
      <div className="v2-shell autonomous-vision__layout" data-reveal>
        <ObservationLabel>VISION / AUTONOMOUS BIOLOGICS</ObservationLabel>
        <h2 id="autonomous-vision-title">
          The world taught AI to<br />discover biologics.<br />
          <em style={{ fontFamily: "'Playfair Display', serif" }}>We&apos;re teaching it to<br />manufacture them.</em>
        </h2>
        <p>
          Manufacturing is where biologics succeed or fail and much of it still depends on sparse data and
          manual intervention. Cultzyme is building the intelligence layer that makes cell-based processes
          observable, predictable and self-directed.
        </p>
      </div>
    </section>
  );
}
