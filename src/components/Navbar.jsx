import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ссылки навбара
  const links = [
    { name: 'О игре', href: '#about' },
    { name: 'Мир', href: '#world' },
    { name: 'Геймплей', href: '#gameplay' },
    { name: 'Особенности', href: '#features' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'nav-top'}`}>
      <div className="nav-container flex items-center justify-between">
        <a href="#" className='nav-logo'>
          PROJECT<span className="green-accent">:</span> ZONE
        </a>

        {/* десктоп меню */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* бургер для мобилки */}
        <button className="nav-burger md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" fill="none" stroke="#fff" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu md:hidden">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="nav-mobile-link">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
