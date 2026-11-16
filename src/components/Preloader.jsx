const letters = 'SARATH'.split('')

export default function Preloader({ exiting }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-emerald-950 transition-transform duration-700 ease-in-out ${
        exiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="font-display text-5xl md:text-7xl font-bold text-white tracking-[0.2em] mb-3">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="preloader-letter"
            style={{ animationDelay: `${0.15 + i * 0.09}s` }}
          >
            {letter}
          </span>
        ))}
        <span
          className="preloader-letter gradient-text"
          style={{ animationDelay: `${0.15 + letters.length * 0.09}s` }}
        >
          .
        </span>
      </div>

      <p
        className="preloader-letter text-emerald-300/60 text-xs tracking-[0.4em] uppercase mb-10"
        style={{ animationDelay: '0.9s' }}
      >
        Gen AI Developer
      </p>

      <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="preloader-bar h-full bg-white rounded-full" />
      </div>
    </div>
  )
}
