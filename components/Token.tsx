const token = [
  ["Token Name", "SPCXDOGE"],
  ["Total Supply", "1,000,000,000"],
  ["Chain", "BSC"],
  ["Pair", "SPCXDOGE / USDT"],
  ["Tax", "3%"],
];

const tax = [
  ["1%", "Marketing", "Expanding the SPCXDOGE ecosystem, community reach and brand exposure."],
  ["1%", "SPCXB Rewards", "Supporting the tokenized bStock and space-economy narrative."],
  ["1%", "DOGE Rewards", "Strengthening meme culture and LP-holder participation."],
];

export function Token() {
  return (
    <section id="token" className="token section-dark anchor-section">
      <div className="section-head centered compact">
        <span>02</span>
        <h2>Tokenomics</h2>
      </div>
      <div className="token-layout">
        <div className="card token-card">
          <h3>Token Details</h3>
          <div className="token-list">
            {token.map(([label, value]) => (
              <div key={label} className="token-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <p className="token-note">SPCXDOGE is built as a meme-first community asset with a clear tax structure and a unified X DOGE brand identity.</p>
        </div>
        <div className="card rewards-card">
          <div className="card-title-row">
            <h3>Tax Breakdown</h3>
            <span className="tax-badge">3%</span>
          </div>
          <div className="reward-list">
            {tax.map(([pct, title, text]) => (
              <div className="reward-row" key={title}>
                <b>{pct}</b>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
