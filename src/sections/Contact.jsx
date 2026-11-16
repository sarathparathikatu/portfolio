import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane, FaCheck } from 'react-icons/fa'
import Reveal from '../components/Reveal'

const contactInfo = [
  { Icon: FaEnvelope, title: 'Email', value: 'nairsharath20@gmail.com', href: 'mailto:nairsharath20@gmail.com' },
  { Icon: FaPhone, title: 'Phone', value: '+91 9400881226', href: 'tel:+919400881226' },
  { Icon: FaMapMarkerAlt, title: 'Location', value: 'Thrissur, Kerala, India', href: null },
]

const inputClass =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all duration-300'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`)
    window.location.href = `mailto:nairsharath20@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${body}`
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-grid overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-emerald-600" /> Contact <span className="w-8 h-px bg-emerald-600" />
          </p>
          <h2 className="section-title mb-5">
            Let's build something <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="space-y-5">
              {contactInfo.map((contact) => (
                <div key={contact.title} className="card p-6 flex items-center gap-5 group hover:-translate-y-1">
                  <div className="w-12 h-12 shrink-0 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <contact.Icon className="text-white" size={16} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-950 font-bold text-sm mb-0.5">{contact.title}</h3>
                    {contact.href ? (
                      <a href={contact.href} className="text-gray-600 hover:text-emerald-600 transition font-medium text-sm break-all">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 font-medium text-sm">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="card p-6">
                <h3 className="text-gray-950 font-bold text-sm mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {[
                    { Icon: FaGithub, label: 'GitHub', url: 'https://github.com/sharath1606' },
                    { Icon: FaLinkedinIn, label: 'LinkedIn', url: 'https://linkedin.com/in/sharathsnair16062003' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <social.Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={250} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-8 md:p-10">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2 text-sm">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2 text-sm">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-gray-900 font-semibold mb-2 text-sm">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="What's this about?" />
              </div>

              <div className="mb-7">
                <label className="block text-gray-900 font-semibold mb-2 text-sm">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className={`${inputClass} resize-none`} placeholder="Tell me about your project..." />
              </div>

              <button type="submit" className="btn-primary w-full group">
                {submitted ? (
                  <>
                    <FaCheck size={14} /> Opening your mail app…
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" size={14} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
