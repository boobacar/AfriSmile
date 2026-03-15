export default function PromoBanner() {
  return (
    <aside className="rounded-2xl border border-brand-cyan/30 bg-gradient-to-r from-brand-light to-white p-4 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-cyan">Promotion du mois</p>
      <h2 className="mt-1 text-xl font-bold text-brand-dark">-12% sur les fauteuils Cingol A3</h2>
      <p className="mt-1 text-sm text-slate-600">Offre valable jusqu’au 31 mars, installation incluse à Dakar et périphérie.</p>
      <a href="/contact" className="mt-3 inline-block rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white">Demander cette offre</a>
    </aside>
  )
}
