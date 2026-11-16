import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const socials = [
  { Icon: FaGithub, href: 'https://github.com/sharath1606', label: 'GitHub' },
  { Icon: FaLinkedinIn, href: 'https://linkedin.com/in/sharathsnair16062003', label: 'LinkedIn' },
  { Icon: FaEnvelope, href: 'mailto:nairsharath20@gmail.com', label: 'Email' },
]

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-emerald-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-3xl font-bold text-white hover:opacity-80 transition"
          >
            Sarath<span className="gradient-text">.</span>
          </button>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-semibold text-gray-400 hover:text-white transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-white hover:text-gray-950 text-gray-300 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="w-full border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm">© {currentYear} Sarath S Nair. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
