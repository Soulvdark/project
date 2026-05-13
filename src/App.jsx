import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import World from './components/World'
import Gameplay from './components/Gameplay'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-zone-bg">
      <Navbar />
      <Hero />
      <div className="fade-in">
        <About />
      </div>
      <div className="fade-in">
        <World />
      </div>
      <div className="fade-in">
        <Gameplay />
      </div>
      <div className="fade-in">
        <Features />
      </div>
      <Footer />
    </div>
  )
}

export default App
