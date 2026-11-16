import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // preloader plays ~2.2s, then slides away; unmount after its exit transition
    const finishTimer = setTimeout(() => {
      setLoaded(true)
      document.body.style.overflow = ''
    }, 2200)
    const unmountTimer = setTimeout(() => setShowPreloader(false), 3000)
    return () => {
      clearTimeout(finishTimer)
      clearTimeout(unmountTimer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      {showPreloader && <Preloader exiting={loaded} />}
      <Navbar />
      <main>
        <Hero loaded={loaded} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
