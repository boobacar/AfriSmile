import { brands } from '../data/siteData'

export default function BrandsPage() {
  return (
    <main className="container-page py-10">
      <h1 className="section-title">Nos marques</h1>
      <p className="section-subtitle">AfriSmile distribue des références internationales du secteur dentaire.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <article key={brand} className="rounded-2xl bg-white p-6 text-center shadow-soft">
            <h2 className="text-lg font-semibold text-brand-dark">{brand}</h2>
            <p className="mt-2 text-sm text-slate-600">Partenaire certifié AfriSmile</p>
          </article>
        ))}
      </div>
    </main>
  )
}
