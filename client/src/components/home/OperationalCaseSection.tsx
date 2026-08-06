import ObservationLabel from "./ObservationLabel";

export default function OperationalCaseSection() {
  return (
    <section className="operational-case-section">
      <div className="operational-case-axis" aria-hidden="true"><i /><span /></div>
      <div className="v2-shell operational-case-layout" data-reveal>
        <header>
          <ObservationLabel>ONE DEVIATION / ONE CLOSED LOOP</ObservationLabel>
          <h2>See it before it becomes<br /><em style={{ fontFamily: "'Playfair Display', serif" }}>a failed run.</em></h2>
          <p>A single process event shows how Cultzyme moves from observation to physical action.</p>
        </header>
        <div className="operational-case-flow">
          <article><span>00 / DRIFT</span><h3>Trajectory changes.</h3><p>A critical process parameter begins moving outside its expected range.</p></article>
          <article><span>01 / SENSE</span><h3>Live sensing detects.</h3><p>The change becomes visible at process cadence.</p></article>
          <article><span>02 / MODEL</span><h3>Models predict.</h3><p>Impact is modeled and a control strategy is proposed.</p></article>
          <article><span>03 / ACT</span><h3>Automation executes.</h3><p>An approved adjustment reaches connected equipment.</p></article>
        </div>
        <section className="loop-outcomes" aria-labelledby="loop-outcomes-title">
          <header className="loop-outcomes__header">
            <ObservationLabel>RESULTS / CLOSED LOOP</ObservationLabel>
            <h3 id="loop-outcomes-title">What you get<br /><em style={{ fontFamily: "'Playfair Display', serif" }}>out of the loop.</em></h3>
          </header>
          <div className="loop-outcomes__grid">
            <article>
              <span>CONSISTENCY</span>
              <h4>Right first-time, batch after batch</h4>
              <p>Tighter batch-to-batch variability and higher RFT, whoever is on shift and wherever it runs.</p>
            </article>
            <article>
              <span>QUALITY</span>
              <h4>Specs held, not chased</h4>
              <p>Critical quality attributes stay inside range because the process corrects while the cells are still responding.</p>
            </article>
            <article>
              <span>YIELD</span>
              <h4>More out of the same inputs</h4>
              <p>More product from the same run, the same media, the same suite.</p>
            </article>
            <article>
              <span>FAILED BATCHES</span>
              <h4>Fewer, and cheaper when they happen</h4>
              <p>Fewer deviations, and fewer investigations, CAPAs and QA hours behind each one.</p>
            </article>
            <article>
              <span>TRANSFERABILITY</span>
              <h4>Portable across scales, sites and partners</h4>
              <p>Setpoints don&apos;t transfer between vessels; cell state does. CDMO to in-house or one CDMO to the next, the model is yours and travels with you. Comparability starts from evidence you already own, not from re-running development at the receiving site.</p>
            </article>
            <article>
              <span>CONTAMINATION RISK</span>
              <h4>Closed by default</h4>
              <p>Continuous in-line readings mean fewer offline samples, fewer open manipulations and less operator time at the vessel. These are the routes most contamination actually takes.</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
