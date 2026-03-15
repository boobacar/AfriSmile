import { categories } from '../data/siteData'

export default function ChairComparator() {
  const chairs = categories.find((c) => c.key === 'fauteuils')?.products || []

  return (
    <section className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="section-title">Comparateur de fauteuils dentaires</h2>
      <p className="section-subtitle">Comparez rapidement les modèles adaptés à votre cabinet.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-brand-light text-left">
              <th className="p-3">Modèle</th>
              <th className="p-3">Moteur</th>
              <th className="p-3">Lampe</th>
              <th className="p-3">Mémoire</th>
              <th className="p-3">Tarif</th>
            </tr>
          </thead>
          <tbody>
            {chairs.map((chair) => (
              <tr key={chair.id} className="border-b border-slate-100">
                <td className="p-3 font-medium">{chair.name}</td>
                <td className="p-3">{chair.specs?.moteur}</td>
                <td className="p-3">{chair.specs?.lampe}</td>
                <td className="p-3">{chair.specs?.memo}</td>
                <td className="p-3 text-brand-blue font-semibold">{chair.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
