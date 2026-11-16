import {
  FaRobot, FaDollarSign, FaMapMarkerAlt, FaCode, FaMicrochip, FaLeaf, FaCheck,
  FaJava, FaBluetoothB, FaSignal, FaEye, FaBolt,
} from 'react-icons/fa'
import {
  SiReact, SiFastapi, SiLangchain, SiSpringboot, SiMongodb, SiPython,
  SiArduino, SiJavascript, SiNodedotjs, SiGooglemaps, SiVite,
} from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'
import Reveal from '../components/Reveal'

// icon shown inside each tech chip
const techIcons = {
  'React 19': SiReact,
  React: SiReact,
  FastAPI: SiFastapi,
  'Azure OpenAI': TbBrandOpenai,
  LangChain: SiLangchain,
  'Spring Boot': SiSpringboot,
  Java: FaJava,
  MongoDB: SiMongodb,
  'YOLO v8': FaEye,
  Python: SiPython,
  Arduino: SiArduino,
  JavaScript: SiJavascript,
  'Node.js': SiNodedotjs,
  'Maps API': SiGooglemaps,
  Vite: SiVite,
  'Flex Sensors': FaBolt,
  Bluetooth: FaBluetoothB,
  GSM: FaSignal,
}

const projects = [
  {
    id: 1,
    title: 'AI-Enabled Training Operations Platform',
    date: 'Mar 2026 – Aug 2026',
    category: 'Gen AI',
    description:
      'Full-stack training operations platform with GenAI-powered content generation, role-based workflows, and workforce analytics.',
    highlights: [
      'GenAI course & document generation with Azure OpenAI GPT-4o',
      'Role-based workflows for learners, SMEs, managers & admins',
      'Automated quiz generation with human-in-the-loop review',
    ],
    stack: ['React 19', 'FastAPI', 'Azure OpenAI', 'LangChain'],
    Icon: FaRobot,
  },
  {
    id: 2,
    title: 'Loan Management Application',
    date: 'Feb 2026',
    category: 'Full-Stack',
    description:
      'Responsive loan management platform with an intuitive dashboard for loan applications, approvals, and tracking.',
    highlights: [
      'React frontend with intuitive dashboard',
      'Spring Boot backend with RESTful APIs',
      'Role-based access control',
    ],
    stack: ['React', 'Spring Boot', 'Java', 'MongoDB'],
    Icon: FaDollarSign,
  },
  {
    id: 3,
    title: 'AquaVac – Waste Collection Robot',
    date: 'Mar 2025',
    category: 'IoT & Robotics',
    description:
      'Water-borne robot collecting floating waste with automated segregation using YOLO-based computer vision.',
    highlights: [
      'YOLO v8-based vision system',
      'Automated waste segregation',
      'Bluetooth teleoperation with Arduino control',
    ],
    stack: ['YOLO v8', 'Python', 'Arduino'],
    Icon: FaMicrochip,
  },
  {
    id: 4,
    title: 'Bus Link – Real-Time Transit Tracking',
    date: 'Jan 2024',
    category: 'Full-Stack',
    description:
      'Online platform optimizing public transportation with live bus tracking and an enhanced commuter experience.',
    highlights: [
      'Live bus tracking with Google Maps API',
      'Real-time location updates',
      'Commuter-friendly interface',
    ],
    stack: ['JavaScript', 'Node.js', 'MongoDB', 'Maps API'],
    Icon: FaMapMarkerAlt,
  },
  {
    id: 5,
    title: 'SIGNER – Gesture-to-Speech Glove',
    date: 'Mar 2024',
    category: 'IoT & Robotics',
    description:
      'Wearable glove translating sign language gestures to verbal language for individuals with speech impairment.',
    highlights: [
      'Real-time gesture recognition',
      'Speech synthesis integration',
      'Flex-sensor wearable electronics',
    ],
    stack: ['Flex Sensors', 'Arduino', 'Bluetooth'],
    Icon: FaCode,
  },
  {
    id: 6,
    title: 'AgroShield – Wildlife Deterrent Device',
    date: 'Jan 2022',
    category: 'IoT & Robotics',
    description:
      'IoT device using ultrasonic sound to protect farm crops from wild animals, with remote monitoring.',
    highlights: [
      'Ultrasonic deterrent system',
      'GSM-based remote monitoring',
      'Arduino-based control',
    ],
    stack: ['Arduino', 'Python', 'GSM'],
    Icon: FaLeaf,
  },
]

function ProjectCard({ project, index }) {
  const { Icon } = project

  // track cursor position for the spotlight glow
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      onMouseMove={handleMove}
      className="group relative h-full rounded-2xl bg-white border border-gray-200/80 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-full p-7 flex flex-col overflow-hidden rounded-2xl">
        {/* cursor spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(16, 185, 129, 0.07), transparent 65%)',
          }}
        />

        {/* top accent bar sweeps in on hover */}
        <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

        {/* index watermark */}
        <span className="absolute -top-3 right-4 font-display text-7xl font-bold text-gray-100 group-hover:text-emerald-100 transition-colors duration-300 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative flex items-center justify-between mb-6">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Icon className="text-white" size={18} />
          </div>
          <span className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full tracking-wide">
            {project.date}
          </span>
        </div>

        <span className="relative inline-flex w-fit text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
          {project.category}
        </span>

        <h3 className="relative font-display text-xl font-bold text-gray-950 mb-3 leading-snug">
          {project.title}
        </h3>

        <p className="relative text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>

        <ul className="relative space-y-2.5 mb-6 flex-1">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2.5">
              <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                <FaCheck className="text-gray-500" size={8} />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="relative flex flex-wrap gap-2 pt-5 border-t border-gray-100">
          {project.stack.map((tech) => {
            const TechIcon = techIcons[tech]
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-xs bg-gray-50 border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/60 text-gray-600 px-3 py-1.5 rounded-full font-medium transition-colors duration-300"
              >
                {TechIcon && <TechIcon className="text-emerald-600" size={12} />}
                {tech}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#fafbfc] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-dots opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-emerald-600" /> Portfolio <span className="w-8 h-px bg-emerald-600" />
          </p>
          <h2 className="section-title mb-5">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            From enterprise AI platforms to assistive hardware — a selection of work I'm proud of.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 130} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
