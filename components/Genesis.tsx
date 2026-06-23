import Image from "next/image";

const tiers = [
  ["X DOGE GOLD", "Founding Members", "300 USDT", "500 Seats Only", "Permanent recognition inside the SPCXDOGE ecosystem."],
  ["X DOGE DIAMOND", "LP Army", "Core Supporters", "Liquidity Builders", "Helping build long-term liquidity and community strength."],
  ["X DOGE LEGEND", "Moon Club", "Future Leaders", "Special Access", "Reserved for the most dedicated members of the SPCXDOGE universe."],
];

export function Genesis() {
  return (
    <section className="genesis section-dark">
      <div className="section-head centered">
        <span>05</span>
        <h2>Genesis Shareholder</h2>
      </div>
      <p className="genesis-intro">Genesis Shareholders are the earliest believers of X DOGE. Limited seats, permanent recognition and future ecosystem benefits.</p>
      <div className="tier-grid">
        {tiers.map(([name, role, price, tag, desc]) => (
          <article className="tier-card" key={name}>
            <div className="tier-badge image-badge"><Image src="/images/logo.png" alt="X DOGE badge" width={110} height={110} /></div>
            <h3>{name}</h3>
            <p className="tier-role">{role}</p>
            <div className="tier-meta">
              <span>{price}</span>
              <span>{tag}</span>
            </div>
            <p className="tier-desc">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
