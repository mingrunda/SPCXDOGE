import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="hero section-dark">
      <div className="hero-copy">
        <p className="pill">DOGE CONSENSUS × SPCXB NARRATIVE</p>
        <h1 className="display-title">SPCXDOGE</h1>
        <h2>JUST A DOGE WITH AN X</h2>
        <p className="hero-text">
          SPCXDOGE is born from the fusion of meme culture and tokenized growth narratives.
          Built on DOGE consensus. Inspired by SPCXB innovation. A new generation asset for the next cycle.
        </p>
        <div className="hero-actions">
          <a href="#community" className="btn btn-yellow">Buy Now 🚀</a>
          <a href="https://t.me/SPCXDOGE_BSC" target="_blank" rel="noreferrer" className="btn btn-outline">Join Telegram</a>
        </div>
      </div>
      <div className="hero-art" aria-label="SPCXDOGE final header artwork">
        <Image src="/images/hero-banner.png" width={1983} height={793} alt="SPCXDOGE final meme header" priority />
      </div>
    </section>
  );
}
