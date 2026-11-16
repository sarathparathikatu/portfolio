import {
  SiPython, SiJavascript, SiReact, SiFastapi, SiSpringboot, SiMongodb,
  SiNodedotjs, SiMysql, SiGit, SiTailwindcss, SiVite,
  SiLangchain, SiLanggraph, SiOpencv, SiJsonwebtokens,
} from 'react-icons/si'
import {
  TbBrandOpenai, TbBrain, TbTerminal2, TbDatabase, TbApi, TbPrompt,
  TbVectorTriangle, TbSparkles, TbEye, TbLetterC,
} from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import Reveal from '../components/Reveal'

/* ---------- orbital system data ---------- */

const rings = [
  {
    radius: 24, // % of stage width
    duration: '26s',
    reverse: false,
    icons: [
      { Icon: TbBrandOpenai, color: '#74AA9C' },
      { Icon: SiLangchain, color: '#65D9AC' },
      { Icon: SiLanggraph, color: '#34D399' },
    ],
  },
  {
    radius: 36,
    duration: '40s',
    reverse: true,
    dashed: true,
    icons: [
      { Icon: SiPython, color: '#4B8BBE' },
      { Icon: SiReact, color: '#61DAFB' },
      { Icon: SiFastapi, color: '#009688' },
      { Icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    radius: 48,
    duration: '56s',
    reverse: false,
    icons: [
      { Icon: SiNodedotjs, color: '#5FA04E' },
      { Icon: SiSpringboot, color: '#6DB33F' },
      { Icon: SiJavascript, color: '#F7DF1E' },
      { Icon: SiTailwindcss, color: '#38BDF8' },
      { Icon: SiGit, color: '#F05032' },
    ],
  },
]

/* ---------- editorial domain rows ---------- */

const domains = [
  {
    title: 'AI & Generative AI',
    tagline: 'Agents, retrieval & vision',
    Icon: TbBrain,
    featured: true,
    items: [
      { Icon: TbBrandOpenai, name: 'Azure OpenAI', color: '#74AA9C' },
      { Icon: TbSparkles, name: 'GPT-4o', color: '#10A37F' },
      { Icon: SiLangchain, name: 'LangChain', color: '#65D9AC' },
      { Icon: SiLanggraph, name: 'LangGraph', color: '#65D9AC' },
      { Icon: TbVectorTriangle, name: 'RAG Pipelines', color: '#34D399' },
      { Icon: TbDatabase, name: 'ChromaDB', color: '#FACC15' },
      { Icon: TbPrompt, name: 'Prompt Engineering', color: '#6EE7B7' },
      { Icon: TbEye, name: 'YOLO v8', color: '#C084FC' },
      { Icon: SiOpencv, name: 'Computer Vision', color: '#818CF8' },
    ],
  },
  {
    title: 'Backend Engineering',
    tagline: 'APIs built to scale',
    Icon: TbTerminal2,
    items: [
      { Icon: SiPython, name: 'Python', color: '#4B8BBE' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#5FA04E' },
      { Icon: SiFastapi, name: 'FastAPI', color: '#009688' },
      { Icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
      { Icon: FaJava, name: 'Java', color: '#F89820' },
      { Icon: TbApi, name: 'REST APIs', color: '#38BDF8' },
      { Icon: SiJsonwebtokens, name: 'JWT Auth', color: '#FB7185' },
    ],
  },
  {
    title: 'Frontend',
    tagline: 'Interfaces with polish',
    Icon: SiReact,
    items: [
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38BDF8' },
      { Icon: SiVite, name: 'Vite', color: '#9499FF' },
    ],
  },
  {
    title: 'Data & Tools',
    tagline: 'Storage & workflow',
    Icon: TbDatabase,
    items: [
      { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
      { Icon: SiMysql, name: 'SQL', color: '#4479A1' },
      { Icon: SiGit, name: 'Git', color: '#F05032' },
      { Icon: TbLetterC, name: 'C', color: '#A8B9CC' },
    ],
  },
]

/* Tech icons orbiting a glowing core on slowly rotating rings. */
function OrbitStage() {
  return (
    <div className="relative w-full max-w-[26rem] mx-auto aspect-square select-none">
      {/* ambient glow behind the system */}
      <div className="absolute inset-10 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* static ring outlines */}
      {rings.map((ring, i) => (
        <div
          key={`circle-${i}`}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
            ring.dashed ? 'border-dashed border-white/15' : 'border-white/10'
          }`}
          style={{ width: `${ring.radius * 2}%`, height: `${ring.radius * 2}%` }}
        />
      ))}

      {/* glowing core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-4xl shadow-[0_0_45px_rgba(16,185,129,0.45)]">
          <TbBrain />
          <div
            className="absolute inset-0 rounded-full border border-emerald-400/60 animate-ping"
            style={{ animationDuration: '2.6s' }}
          />
        </div>
      </div>

      {/* rotating icon layers — inner chips counter-rotate to stay upright */}
      {rings.map((ring, i) => (
        <div
          key={`ring-${i}`}
          className={`absolute inset-0 ${ring.reverse ? 'animate-orbit-reverse' : 'animate-orbit'}`}
          style={{ '--orbit-duration': ring.duration }}
        >
          {ring.icons.map(({ Icon, color }, j) => {
            const angle = -90 + i * 30 + (j * 360) / ring.icons.length
            const rad = (angle * Math.PI) / 180
            return (
              <div
                key={j}
                className="absolute"
                style={{
                  left: `${50 + ring.radius * Math.cos(rad)}%`,
                  top: `${50 + ring.radius * Math.sin(rad)}%`,
                }}
              >
                <div
                  className={`w-12 h-12 -ml-6 -mt-6 ${ring.reverse ? 'animate-orbit' : 'animate-orbit-reverse'}`}
                  style={{ '--orbit-duration': ring.duration }}
                >
                  <div
                    className="w-full h-full rounded-2xl bg-emerald-950/80 backdrop-blur border border-white/15 flex items-center justify-center text-xl transition-transform duration-300 hover:scale-125"
                    style={{ color, boxShadow: `0 0 18px -6px ${color}` }}
                  >
                    <Icon />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function DomainRow({ domain, index }) {
  return (
    <div className="group relative py-7 pl-6 pr-2 transition-colors duration-300 hover:bg-white/[0.02]">
      {/* accent bar that grows on hover */}
      <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-emerald-400 to-teal-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

      <div className="flex items-center gap-4 mb-3.5">
        <span className="font-display text-sm font-bold text-emerald-500/50 group-hover:text-emerald-400 transition-colors duration-300">
          0{index + 1}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white/70 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
          {domain.title}
        </h3>
        {domain.featured && (
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold tracking-widest uppercase">
            Core Focus
          </span>
        )}
        <domain.Icon className="ml-auto shrink-0 text-2xl text-gray-600 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300" />
      </div>

      <p className="text-xs uppercase tracking-[0.18em] text-gray-600 group-hover:text-gray-500 mb-3 transition-colors duration-300">
        {domain.tagline}
      </p>

      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {domain.items.map(({ Icon, name, color }) => (
          <span
            key={name}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 group-hover:text-gray-300 hover:!text-white transition-colors duration-300 cursor-default"
          >
            <Icon className="text-base opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ color }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-emerald-950 bg-grid-dark overflow-hidden">
      {/* ambient glows */}
      <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16 lg:mb-20">
          <p className="section-tag justify-center text-emerald-400">
            <span className="w-8 h-px bg-emerald-400" /> My Toolkit <span className="w-8 h-px bg-emerald-400" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Technologies I build with
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A stack refined through enterprise projects, hackathons, and countless hours of building.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <Reveal className="lg:col-span-5" y="translate-y-6">
            <OrbitStage />
          </Reveal>

          <div className="lg:col-span-7 border-y border-white/10 divide-y divide-white/10">
            {domains.map((domain, i) => (
              <Reveal key={domain.title} delay={i * 100}>
                <DomainRow domain={domain} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
