import Image from "next/image";

const art = [
  { file: "fan-moon.png", title: "Moon Landing", text: "X DOGE plants the SPCXDOGE flag on the moon." },
  { file: "fan-rocket.png", title: "Rocket Launch", text: "The beginning of the X DOGE mission." },
  { file: "fan-xenergy.png", title: "Cyber X DOGE", text: "The future guardian of X City." },
  { file: "fan-army.png", title: "Moon Army", text: "Thousands of holders. One destination." },
  { file: "fan-lp.png", title: "Golden Capital", text: "A city powered by SPCXB innovation." },
  { file: "fan-galaxy.png", title: "X DOGE Legend", text: "The symbol of the next generation." },
];

export function FanArt() {
  const loop = [...art, ...art];
  return (
    <section id="fan-art" className="fan section-yellow anchor-section">
      <div className="section-head dark-head centered">
        <span>03</span>
        <h2>X Doge Universe</h2>
      </div>
      <p className="fan-intro">One logo. One dog. One universe. Every visual expands the X DOGE story.</p>
      <div className="marquee" aria-label="SPCXDOGE fan art gallery">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <div className="fan-card" key={`${item.file}-${index}`}>
              <Image src={`/images/${item.file}`} alt={item.title} width={800} height={800} />
              <div className="fan-logo"><Image src="/images/logo.png" alt="X DOGE logo" width={54} height={54} /></div>
              <div className="fan-caption">
                <div className="fan-label">{item.title}</div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
