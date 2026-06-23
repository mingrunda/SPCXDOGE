const links = [
  ["𝕏 / Twitter", "https://x.com/SPCXDOGE_BSC"],
  ["Telegram", "https://t.me/SPCXDOGE_BSC"],
  ["BscScan", "#"],
  ["DexScreener", "#"],
  ["PancakeSwap", "#"],
];

export function Community() {
  return (
    <section id="community" className="community section-yellow anchor-section">
      <div className="section-head dark-head centered">
        <span>07</span>
        <h2>Join The X Doge Army</h2>
      </div>
      <p className="community-intro">Thousands of holders. One community. One mission. To the moon.</p>
      <div className="community-links">
        {links.map(([label, href]) => (
          <a href={href} key={label} target={href === "#" ? undefined : "_blank"} rel={href === "#" ? undefined : "noreferrer"}>{label}</a>
        ))}
      </div>
      <div id="dapp" className="dapp-panel anchor-section">
        <h3>Ready To Take Off?</h3>
        <p>Enter the SPCXDOGE DApp and start your X DOGE journey.</p>
        <a href="#" className="btn btn-yellow">Enter DApp 🚀</a>
      </div>
    </section>
  );
}
