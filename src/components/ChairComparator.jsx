import { categories } from '../data/siteData'

export default function ChairComparator() {
  const chairs = categories.find((c) => c.key === 'fauteuils')?.products || []

  return (
    <section className="card">
      <h2 className="section-title">Comparateur de fauteuils dentaires</h2>
      <p className="section-subtitle">Comparez rapidement les modèles adaptés à votre cabinet.</p>
      <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
        <table className="min-w-full text-sm">
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
              <tr key={chair.id} className="border-b border-slate-100 bg-white last:border-none">
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
