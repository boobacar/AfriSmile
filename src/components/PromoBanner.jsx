export default function PromoBanner() {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-light via-white to-white p-7 shadow-raised">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-cyan/10" />
      <p className="chip inline-block">Promotion du mois</p>
      <h2 className="mt-3 font-heading text-2xl font-extrabold text-brand-dark md:text-3xl">-12% sur les fauteuils Cingol A3</h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
        Offre valable jusqu’au 31 mars, installation incluse à Dakar et périphérie, avec assistance technique à la mise en route.
      </p>
      <a href="/contact" className="btn-primary mt-5">Demander cette offre</a>
    </aside>
  )
}
