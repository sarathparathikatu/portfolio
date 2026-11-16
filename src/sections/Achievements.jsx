import { FaTrophy, FaAward, FaRocket, FaSeedling } from 'react-icons/fa'
import Reveal from '../components/Reveal'

const achievements = [
  { Icon: FaTrophy, title: 'KSCSTE TECHFEST 2024', desc: 'Final Round Participant', year: '2024' },
  { Icon: FaRocket, title: 'NASA Space App Challenge', desc: 'Global Hackathon Participant', year: '2024' },
  { Icon: FaSeedling, title: 'Vaiga Agri Hack', desc: 'Grand Finale Participant', year: '2023' },
  { Icon: FaAward, title: 'KSCSTE TECHFEST 2022', desc: 'Final Round Participant', year: '2022' },
]

export default function Achievements() {
  return (
    <section className="relative bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dots opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-emerald-600" /> Recognition <span className="w-8 h-px bg-emerald-600" />
          </p>
          <h2 className="section-title mb-5">
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.title} delay={i * 120} className="h-full">
              <div className="card p-8 text-center group hover:-translate-y-1 h-full relative overflow-hidden">
                <span className="absolute top-4 right-5 font-display text-5xl font-bold text-gray-100 group-hover:text-emerald-100 transition-colors duration-300 select-none">
                  {achievement.year.slice(2)}
                </span>
                <div className="relative w-12 h-12 mx-auto mb-5 bg-emerald-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <achievement.Icon className="text-white" size={18} />
                </div>
                <h3 className="relative text-gray-950 font-bold mb-2">{achievement.title}</h3>
                <p className="relative text-gray-500 text-sm">{achievement.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
