export default function Footer() {
  const year = 2026

  return (
    <footer className="footer-base">
      <div className="section-container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              PROJECT<span className='green-accent'>:</span> ZONE
            </div>
            <p className="footer-sub">MMO FPS Survival Horror | Pre-Alpha Build</p>
          </div>

          <div className="footer-meta">
            <p>Индивидуальный проект</p>
            <p className="mt">Москва, {year}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">&copy; {year} Project: Zone. All rights reserved.</span>
          <span className="footer-version">v0.1.0-alpha</span>
        </div>
      </div>
    </footer>
  )
}
