import { useEffect, useRef, useState } from 'react'

// Scroll-reveal wrapper: children fade + slide in once when they enter the viewport.
export default function Reveal({ children, delay = 0, className = '', y = 'translate-y-10' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : `opacity-0 ${y}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
