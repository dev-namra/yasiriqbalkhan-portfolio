import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Work from './components/Work'
import Brands from './components/Brands'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'

// overflow-x-clip (not hidden) so sticky cards keep working
export default function App() {
  // Fade-and-rise any element tagged data-reveal="<delay ms>" when it scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.15 })
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.transitionDelay = `${el.dataset.reveal || 0}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return (
    <div id="top" className="overflow-x-clip">
      <Nav />
      <Hero />
      <Ticker />
      <Work />
      <Brands />
      <Testimonials />
      <About />
      <Footer />
    </div>
  )
}
