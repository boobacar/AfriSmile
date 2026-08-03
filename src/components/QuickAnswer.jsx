export default function QuickAnswer({ text }) {
  return (
    <section className="section-shell border-l-4 border-l-brand-cyan">
      <p className="text-xs font-bold uppercase tracking-wide text-brand-cyan">En bref</p>
      <p className="mt-2 font-heading text-lg font-semibold leading-relaxed text-brand-dark">{text}</p>
    </section>
  )
}
