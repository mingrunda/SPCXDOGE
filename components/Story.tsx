const panels = [
  {
    title: "DOGE",
    label: "Meme Consensus",
    text: "The original king of meme culture. DOGE united millions through humor, community and unstoppable viral energy."
  },
  {
    title: "SPCXB",
    label: "Tokenized Narrative",
    text: "A tokenized bStock narrative inspired by SpaceX-related market exposure and next-generation space innovation."
  },
  {
    title: "FUSION",
    label: "Value × Culture",
    text: "Most projects choose attention. Others choose value. SPCXDOGE chooses both. Meme consensus meets future narratives."
  },
  {
    title: "SPCXDOGE",
    label: "The X Doge",
    text: "A new generation meme asset powered by community, driven by narrative and built for the next cycle."
  },
];

const reasons = [
  ["DOGE CONSENSUS", "One of the strongest meme communities ever created in crypto."],
  ["SPCXB NARRATIVE", "Inspired by tokenized market access and future innovation narratives."],
  ["COMMUNITY FIRST", "Built by holders, powered by culture and amplified by communities."],
  ["LONG-TERM VISION", "Combining meme energy with next-generation financial narratives."],
];

export function Story() {
  return (
    <section id="story" className="story section-yellow anchor-section">
      <div className="section-head dark-head">
        <span>01</span>
        <h2>The Story</h2>
      </div>
      <div className="story-grid">
        {panels.map((item, i) => (
          <article className="story-card" key={item.title}>
            <div className="story-num">{i + 1}</div>
            <h3>{item.title}</h3>
            <b className="story-label">{item.label}</b>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="why-strip">
        <div className="why-head">
          <span>WHY SPCXDOGE?</span>
          <h3>Most memes have attention. Most value narratives have conviction. SPCXDOGE brings both together.</h3>
        </div>
        <div className="why-grid">
          {reasons.map(([title, text]) => (
            <div className="why-card" key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
