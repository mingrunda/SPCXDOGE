const memes = [
  { title: 'WOW', text: 'Much X. Much Doge.' },
  { title: 'TO THE MOON', text: 'Rocket mode activated.' },
  { title: 'SEND IT', text: 'The pack moves together.' },
  { title: 'WEN MOON?', text: 'When the LP army wakes up.' },
  { title: 'LFG', text: 'Community first. Always.' },
  { title: 'X DOGE', text: 'Doge energy with X power.' },
];

const stats = [
  { label: 'Holders', value: '12,856', note: '+258 today' },
  { label: 'LP Value', value: '$352,781', note: '+4.21%' },
  { label: 'SPCX Rewards', value: '1,250,000', note: 'distributed' },
  { label: 'DOGE Rewards', value: '65,320', note: 'distributed' },
];

const roadmap = [
  ['01', 'Launch', 'SPCXDOGE goes live.'],
  ['02', 'LP Army', 'Community LP power grows.'],
  ['03', 'SPCX Rewards', 'LP holders earn SPCX.'],
  ['04', 'DOGE Rewards', 'LP holders earn DOGE.'],
  ['05', 'Moon', 'Meme, value, community.'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#hero">
          <img src="/logo.png" alt="SPCXDOGE logo" />
          <span>SPCXDOGE</span>
        </a>
        <div className="links">
          <a href="#gallery">Gallery</a>
          <a href="#data">Live Data</a>
          <a href="#lp">LP</a>
          <a href="#genesis">Genesis</a>
          <a href="#roadmap">Roadmap</a>
        </div>
        <a className="pill" href="#dapp">Enter DApp</a>
      </nav>

      <section id="hero" className="hero section">
        <div className="heroText">
          <div className="tag">WOW · TO THE MOON</div>
          <h1>SPCXDOGE</h1>
          <h2>MEME × VALUE</h2>
          <p>DOGE energy. X power. Community first.</p>
          <div className="cta">
            <a className="btn" href="#dapp">Buy Now 🚀</a>
            <a className="btn outline" href="#community">Join Community</a>
          </div>
        </div>
        <div className="heroLogo">
          <img src="/logo.png" alt="SPCXDOGE mascot" />
        </div>
      </section>

      <section id="gallery" className="gallery section">
        <div className="sectionHead">
          <h3>Meme Gallery</h3>
          <p>Made for the timeline. Built for the pack.</p>
        </div>
        <div className="memeGrid">
          {memes.map((m) => (
            <div className="meme" key={m.title}>
              <b>{m.title}</b>
              <span>{m.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="data" className="data section">
        <div className="sectionHead">
          <h3>Live Data</h3>
          <p>Numbers update here after DApp connection.</p>
        </div>
        <div className="statGrid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span>{s.label}</span>
              <b>{s.value}</b>
              <em>{s.note}</em>
            </div>
          ))}
        </div>
      </section>

      <section id="lp" className="flywheel section">
        <div className="sectionHead">
          <h3>Why Hold LP?</h3>
          <p>Hold LP. Earn SPCX. Earn DOGE. Repeat.</p>
        </div>
        <div className="steps">
          {[
            ['🛒', 'Buy', 'SPCXDOGE'],
            ['💧', 'Add LP', 'Lock liquidity'],
            ['❎', 'Earn', 'SPCX rewards'],
            ['🐕', 'Earn', 'DOGE rewards'],
            ['🚀', 'Repeat', 'To the moon'],
          ].map(([icon, title, text]) => (
            <div className="step" key={title + text}>
              <div>{icon}</div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tokenomics section split">
        <div>
          <h3>Tokenomics</h3>
          <p className="big">3% Tax</p>
          <p className="muted">Every trade supports the meme engine.</p>
        </div>
        <div className="taxGrid">
          <div>1%<span>Marketing</span></div>
          <div>1%<span>SPCX Rewards</span></div>
          <div>1%<span>DOGE Rewards</span></div>
        </div>
      </section>

      <section id="genesis" className="genesis section">
        <div className="sectionHead">
          <h3>Genesis Shareholder</h3>
          <p>Early seats for the first pack.</p>
        </div>
        <div className="cards">
          <div className="card hot">
            <small>Phase 1</small>
            <h4>Genesis</h4>
            <b>500 Seats</b>
            <span>300 USDT / Seat</span>
            <a href="#dapp">Claim Now</a>
          </div>
          <div className="card">
            <small>Phase 2</small>
            <h4>Eco</h4>
            <b>100 Seats</b>
            <span>150 USDT / Seat</span>
            <a href="#dapp">Join Waitlist</a>
          </div>
        </div>
      </section>

      <section id="roadmap" className="roadmap section">
        <div className="sectionHead">
          <h3>Roadmap</h3>
          <p>Simple path. Maximum meme energy.</p>
        </div>
        <div className="road">
          {roadmap.map(([num, title, text]) => (
            <div className="roadItem" key={num}>
              <i>{num}</i>
              <b>{title}</b>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="community" className="community section split">
        <div>
          <h3>Community</h3>
          <p className="bigline">The pack decides how loud the meme gets.</p>
        </div>
        <div className="communityBtns">
          <a>Twitter</a>
          <a>Telegram</a>
          <a>Docs</a>
        </div>
      </section>

      <section id="dapp" className="dapp section split">
        <div>
          <h3>Enter DApp</h3>
          <p className="bigline">Connect wallet. Join the LP army. Track rewards.</p>
        </div>
        <a className="pill large">Enter DApp →</a>
      </section>

      <footer>SPCXDOGE · WOW TO THE MOON · MEME × VALUE</footer>
    </main>
  );
}
