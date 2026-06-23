const steps = [
  ["🚀", "PHASE 1", "Wake Up X DOGE", "Launch SPCXDOGE and build the foundation."],
  ["⚔", "PHASE 2", "Build The Army", "Grow community awareness across BSC and X."],
  ["🌌", "PHASE 3", "Expand The Universe", "Develop the SPCXDOGE ecosystem and meme culture."],
  ["🌎", "PHASE 4", "Global Growth", "Reach new communities, KOLs and markets worldwide."],
  ["🌕", "PHASE 5", "Moon Mission", "The next chapter of the X DOGE journey begins."],
];

export function Roadmap() {
  return (
    <section id="roadmap" className="roadmap section-dark anchor-section">
      <div className="card roadmap-card">
        <div className="section-head centered compact">
          <span>06</span>
          <h2>Moon Roadmap</h2>
        </div>
        <div className="road-line">
          {steps.map(([icon, phase, title, text]) => (
            <div className="road-step" key={title}>
              <b>{icon}</b>
              <small>{phase}</small>
              <span>{title}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
