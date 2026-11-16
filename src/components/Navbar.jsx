import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 24)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)

      // scroll-spy: highlight the section currently in view
      let current = 'home'
      for (const link of links) {
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = link.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-emerald-600 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => goTo('home')}
            className="font-display text-2xl font-bold text-gray-950 hover:opacity-80 transition"
          >
            Sarath<span className="gradient-text">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1 bg-gray-100/60 backdrop-blur rounded-full px-2 py-1.5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === link.id
                    ? 'bg-white text-gray-950 shadow-sm'
                    : 'text-gray-500 hover:text-gray-950'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => goTo('contact')}
            className="hidden md:inline-flex px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Let's Talk
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-900 hover:text-emerald-600 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-gray-100 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`text-left px-4 py-3 rounded-xl font-semibold transition ${
                active === link.id
                  ? 'bg-gray-100 text-gray-950'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
