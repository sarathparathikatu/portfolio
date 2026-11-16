import { useEffect, useRef, useState } from 'react'
import { FaBrain, FaLayerGroup, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import Reveal from '../components/Reveal'

function Counter({ target, suffix = '', decimals = 0, duration = 1600 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(target * eased)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const stats = [
  { target: 6, suffix: '+', label: 'Projects Built' },
  { target: 4, suffix: '+', label: 'Hackathons' },
  { target: 8.4, decimals: 1, label: 'CGPA' },
  { target: 15, suffix: '+', label: 'Technologies' },
]

const cards = [
  {
    Icon: FaBrain,
    title: 'Gen AI Expertise',
    text: 'Building enterprise-scale AI solutions with Azure OpenAI, LangChain, and LangGraph — RAG pipelines, knowledge extraction systems, and intelligent workflow automation.',
  },
  {
    Icon: FaLayerGroup,
    title: 'Full-Stack Development',
    text: 'Scalable applications across the entire stack: React frontends, FastAPI and Spring Boot backends, and robust database design with MongoDB and SQL.',
  },
  {
    Icon: FaBriefcase,
    title: 'Experience',
    text: 'Gen AI Developer at UST (Dec 2025 – Present), delivering GenAI-powered platforms with role-based workflows and human-in-the-loop review systems.',
  },
  {
    Icon: FaGraduationCap,
    title: 'Education',
    text: 'B.Tech in Computer Science & Engineering, Jyothi Engineering College Thrissur (2021 – 2025), graduating with a CGPA of 8.4.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-dots opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-emerald-600" /> About Me <span className="w-8 h-px bg-emerald-600" />
          </p>
          <h2 className="section-title mb-5">
            Turning ideas into <span className="gradient-text">intelligent products</span>
          </h2>
          <p className="section-subtitle">
            Passionate about creating solutions that solve real-world problems — from AI training
            platforms to assistive hardware.
          </p>
        </Reveal>

        {/* stats bar */}
        <Reveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-8 text-center group hover:bg-emerald-50/40 transition-colors duration-300">
                <p className="font-display text-4xl md:text-5xl font-bold text-gray-950 group-hover:text-emerald-600 transition-colors duration-300 mb-2">
                  <Counter target={stat.target} suffix={stat.suffix} decimals={stat.decimals || 0} />
                </p>
                <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <div className="card p-8 group hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <card.Icon className="text-white" size={18} />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-950 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
