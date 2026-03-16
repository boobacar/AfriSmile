export default function PageHero({ eyebrow, title, subtitle, chips = [], image = '/assets/illustration-clinic.jpg', showImage = true, children }) {
  return (
    <section className="hero-panel">
      <div className={`relative z-10 grid gap-6 ${showImage ? 'lg:grid-cols-[1.1fr_0.9fr] lg:items-center' : ''}`}>
        <div>
          {eyebrow && <p className="chip inline-block border-white/30 bg-white/10 text-white">{eyebrow}</p>}
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-100 md:text-base">{subtitle}</p>
          {chips.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {chip}
                </span>
              ))}
            </div>
          )}
          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>

        {showImage && (
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-xl" />
            <img src={image} alt="Illustration AfriSmile" className="h-56 w-full rounded-2xl border border-white/20 object-cover shadow-soft md:h-72" loading="lazy" />
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/15" />
      <div className="pointer-events-none absolute -bottom-24 left-20 h-56 w-56 rounded-full bg-brand-cyan/35 blur-2xl" />
    </section>
  )
}
