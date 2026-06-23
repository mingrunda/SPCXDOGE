import Image from "next/image";

const art = [
  { file: "fan-moon.png", title: "Moon Mission" },
  { file: "fan-rocket.png", title: "Rocket Doge" },
  { file: "fan-xenergy.png", title: "X Power" },
  { file: "fan-king.png", title: "Meme King" },
  { file: "fan-galaxy.png", title: "Galaxy Doge" },
  { file: "fan-army.png", title: "LP Army" },
  { file: "fan-lp.png", title: "DOGE × SPCX" },
  { file: "fan-wow.png", title: "To The Moon" },
];

export function FanArt() {
  const loop = [...art, ...art];
  return (
    <section id="fan-art" className="fan section-yellow anchor-section">
      <div className="section-head dark-head centered">
        <span>03</span>
        <h2>Fan Art</h2>
      </div>
      <div className="marquee" aria-label="SPCXDOGE fan art gallery">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <div className="fan-card" key={`${item.file}-${index}`}>
              <Image src={`/images/${item.file}`} alt={item.title} width={800} height={800} />
              <div className="fan-label">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
