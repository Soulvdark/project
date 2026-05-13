const tags = ['MMO', 'FPS', 'HORROR', 'SURVIVAL']

export default function Hero() {
  return (
    <section className="hero-scanline hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="hero-glow absolute pointer-events-none" />

      <div className="hero-content">
        <div className="hero-tags">
          {tags.map((tag) => (
            <span key={tag} className="hero-tag">{tag}</span>
          ))}
        </div>

        <h1 className='glitch-text hero-title'>
          PROJECT<span className="green-accent">:</span><br />ZONE
        </h1>

        <p className="hero-tagline">
          Зона живёт. Она следит за каждым шагом.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="btn-primary">Узнать больше</a>
          <a href='#gameplay' className="btn-secondary">Геймплей</a>
        </div>

        <div className="hero-status">
          <span>STATUS: UNSTABLE</span>
          <span>BUILD: PRE-ALPHA</span>
          <span>COORDS: 42.06X, 85.27Y</span>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-label">Scroll</span>
        <div className="scroll-line animate-pulse" />
      </div>
    </section>
  )
}
