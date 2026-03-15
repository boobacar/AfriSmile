import { categories } from '../data/siteData'

export default function ChairComparator() {
  const chairs = categories.find((c) => c.key === 'fauteuils')?.products || []

  return (
    <section className="card min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="section-title">Comparateur de fauteuils dentaires</h2>
          <p className="section-subtitle mt-1">Comparez les options techniques et gardez vos repères de budget en FCFA.</p>
        </div>
        <span className="chip">Tarifs indicatifs TTC</span>
      </div>
      <div className="mt-5 w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-[720px] text-sm">
          <thead>
            <tr className="bg-brand-light text-left text-brand-dark">
              <th className="p-3 font-semibold">Modèle</th>
              <th className="p-3 font-semibold">Moteur</th>
              <th className="p-3 font-semibold">Lampe</th>
              <th className="p-3 font-semibold">Mémoire</th>
              <th className="p-3 font-semibold">Tarif</th>
            </tr>
          </thead>
          <tbody>
            {chairs.map((chair) => (
              <tr key={chair.id} className="border-b border-slate-100 bg-white transition hover:bg-slate-50 last:border-none">
                <td className="p-3 font-medium text-slate-800">{chair.name}</td>
                <td className="p-3 text-slate-600">{chair.specs?.moteur}</td>
                <td className="p-3 text-slate-600">{chair.specs?.lampe}</td>
                <td className="p-3 text-slate-600">{chair.specs?.memo}</td>
                <td className="p-3 font-semibold text-brand-blue">{chair.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
