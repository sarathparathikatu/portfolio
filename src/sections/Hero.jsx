import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaDownload, FaCircle } from 'react-icons/fa'
import { SiPython, SiReact, SiFastapi, SiSpringboot } from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'

const roles = ['Gen AI Developer', 'Full-Stack Engineer', 'React Developer', 'Problem Solver']

function useTypewriter(words, typeSpeed = 75, deleteSpeed = 40, pause = 1800) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timer
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

const socials = [
  { Icon: FaGithub, href: 'https://github.com/sharath1606', label: 'GitHub' },
  { Icon: FaLinkedinIn, href: 'https://linkedin.com/in/sharathsnair16062003', label: 'LinkedIn' },
  { Icon: FaEnvelope, href: 'mailto:nairsharath20@gmail.com', label: 'Email' },
]

// syntax-highlighted lines for the code window (rendered with staggered entrance)
const codeLines = [
  [
    { t: 'const ', c: 'text-purple-400' },
    { t: 'developer', c: 'text-sky-300' },
    { t: ' = {', c: 'text-gray-300' },
  ],
  [
    { t: '  name', c: 'text-emerald-300' },
    { t: ': ', c: 'text-gray-400' },
    { t: "'Sarath S Nair'", c: 'text-amber-300' },
    { t: ',', c: 'text-gray-400' },
  ],
  [
    { t: '  role', c: 'text-emerald-300' },
    { t: ': ', c: 'text-gray-400' },
    { t: "'Gen AI Developer'", c: 'text-amber-300' },
    { t: ',', c: 'text-gray-400' },
  ],
  [
    { t: '  company', c: 'text-emerald-300' },
    { t: ': ', c: 'text-gray-400' },
    { t: "'UST'", c: 'text-amber-300' },
    { t: ',', c: 'text-gray-400' },
  ],
  [
    { t: '  stack', c: 'text-emerald-300' },
    { t: ': [', c: 'text-gray-400' },
    { t: "'React'", c: 'text-amber-300' },
    { t: ', ', c: 'text-gray-400' },
    { t: "'FastAPI'", c: 'text-amber-300' },
    { t: ', ', c: 'text-gray-400' },
    { t: "'LangChain'", c: 'text-amber-300' },
    { t: '],', c: 'text-gray-400' },
  ],
  [
    { t: '  focus', c: 'text-emerald-300' },
    { t: ': ', c: 'text-gray-400' },
    { t: "'RAG Pipelines & Agents'", c: 'text-amber-300' },
    { t: ',', c: 'text-gray-400' },
  ],
  [
    { t: '  problemSolver', c: 'text-emerald-300' },
    { t: ': ', c: 'text-gray-400' },
    { t: 'true', c: 'text-emerald-400' },
    { t: ',', c: 'text-gray-400' },
  ],
  [
    { t: '  hireable', c: 'text-emerald-300' },
    { t: ': ', c: 'text-gray-400' },
    { t: '() => ', c: 'text-purple-400' },
    { t: 'true', c: 'text-emerald-400' },
    { t: ',', c: 'text-gray-400' },
  ],
  [{ t: '}', c: 'text-gray-300' }],
]

const orbitIcons = [
  { Icon: SiReact, color: '#61DAFB', className: '-left-7 top-8', delay: '' },
  { Icon: SiPython, color: '#3776AB', className: '-right-6 top-24', delay: 'animation-delay-1000' },
  { Icon: TbBrandOpenai, color: '#74AA9C', className: '-left-8 bottom-24', delay: 'animation-delay-2000' },
  { Icon: SiFastapi, color: '#009688', className: '-right-7 -bottom-5', delay: 'animation-delay-1000' },
  { Icon: SiSpringboot, color: '#6DB33F', className: 'left-16 -bottom-7', delay: '' },
]

export default function Hero({ loaded }) {
  const typed = useTypewriter(roles)
  const tiltRef = useRef(null)

  // subtle 3D tilt on the code window, following the cursor
  const handleTilt = (e) => {
    const node = tiltRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    node.style.transform = `perspective(1100px) rotateX(${py * -5}deg) rotateY(${px * 7}deg)`
  }

  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)'
  }

  // staggered fade-up entrance once the preloader finishes
  const entrance = `transition-all duration-700 ease-out ${
    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* soft drifting light sources, barely there */}
      <div className="absolute top-24 -right-24 w-[32rem] h-[32rem] bg-emerald-100/60 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -left-24 w-[26rem] h-[26rem] bg-teal-100/50 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left content */}
          <div className="space-y-8">
            <div className={entrance} style={{ transitionDelay: '100ms' }}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                <span className="relative w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-green-500 pulse-dot" />
                </span>
                Available for opportunities
              </span>
            </div>

            <div className={entrance} style={{ transitionDelay: '250ms' }}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-950 leading-[1.05] tracking-tight">
                Hi, I'm
                <br />
                Sarath S Nair<span className="text-emerald-600">.</span>
              </h1>
            </div>

            <div className={entrance} style={{ transitionDelay: '400ms' }}>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-gray-500 h-10">
                {typed}
                <span className="animate-blink text-gray-400">|</span>
              </p>
            </div>

            <div className={entrance} style={{ transitionDelay: '550ms' }}>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                I build intelligent enterprise solutions with{' '}
                <span className="font-semibold text-gray-900">Azure OpenAI</span>,{' '}
                <span className="font-semibold text-gray-900">LangChain</span> &{' '}
                <span className="font-semibold text-gray-900">LangGraph</span> — backed by
                full-stack expertise across React, FastAPI, and Spring Boot.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 ${entrance}`} style={{ transitionDelay: '700ms' }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                Explore My Work
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
              </button>
              <a href="/Sarath_S_Nair_Resume.pdf" download="Sarath_S_Nair_Resume.pdf" className="btn-secondary">
                <FaDownload size={14} />
                Download Resume
              </a>
            </div>

            <div className={`flex gap-4 ${entrance}`} style={{ transitionDelay: '850ms' }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-12 h-12 bg-white border border-gray-200 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white text-gray-600 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — animated developer code window */}
          <div className={`hidden md:block ${entrance}`} style={{ transitionDelay: '500ms' }}>
            <div
              ref={tiltRef}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="relative max-w-lg mx-auto transition-transform duration-200 ease-out will-change-transform"
            >
              {/* editor window */}
              <div className="relative rounded-2xl bg-emerald-950 border border-white/10 shadow-2xl overflow-hidden">
                {/* title bar */}
                <div className="flex items-center gap-2 px-5 py-4 bg-white/5 border-b border-white/10">
                  <FaCircle className="text-red-400" size={11} />
                  <FaCircle className="text-yellow-400" size={11} />
                  <FaCircle className="text-green-400" size={11} />
                  <span className="ml-3 text-gray-400 text-xs font-semibold tracking-wide">
                    developer.js
                  </span>
                  <span className="ml-auto text-gray-600 text-[10px] font-bold tracking-widest uppercase">
                    ● Live
                  </span>
                </div>

                {/* code body — lines cascade in after the preloader */}
                <div className="p-6 font-mono text-[13.5px] leading-7">
                  {codeLines.map((line, i) => (
                    <div
                      key={i}
                      className={`flex transition-all duration-500 ease-out ${
                        loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${800 + i * 130}ms` }}
                    >
                      <span className="w-7 shrink-0 text-emerald-800 select-none text-right pr-4">{i + 1}</span>
                      <span className="whitespace-pre">
                        {line.map((token, j) => (
                          <span key={j} className={token.c}>
                            {token.t}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                  <div
                    className={`flex transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${800 + codeLines.length * 130}ms` }}
                  >
                    <span className="w-7 shrink-0 pr-4" />
                    <span className="animate-blink text-emerald-400">▌</span>
                  </div>
                </div>

                {/* mini terminal footer */}
                <div className="px-6 py-4 bg-white/5 border-t border-white/10 font-mono text-xs">
                  <p className="text-gray-500">
                    <span className="text-emerald-400">➜</span>{' '}
                    <span className="text-sky-300">~</span> developer.hireable()
                  </p>
                  <p
                    className={`text-emerald-400 mt-1 transition-opacity duration-500 ${
                      loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: '2400ms' }}
                  >
                    true ✓
                  </p>
                </div>
              </div>

              {/* floating tech icons around the window — muted, monochrome */}
              {orbitIcons.map(({ Icon, className, delay }, i) => (
                <div key={i} className={`absolute ${className} animate-float ${delay}`}>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-200/80 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:scale-105 transition-all duration-300">
                    <Icon size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll-down indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about section"
        className={`hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2.5 text-gray-400 hover:text-emerald-600 transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-current animate-scroll-wheel" />
        </span>
      </button>
    </section>
  )
}
