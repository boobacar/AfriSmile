import { Link } from 'react-router-dom'
import PromoBanner from '../components/PromoBanner'
import QuoteForm from '../components/QuoteForm'
import ChairComparator from '../components/ChairComparator'
import { brands, categories } from '../data/siteData'

export default function HomePage() {
  return (
    <main className="container-page py-10">
      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark">Solutions d’équipement dentaire pour cabinets modernes en Afrique</h1>
          <p className="mt-4 text-slate-600">AfriSmile accompagne les dentistes avec des équipements fiables, des prix transparents et un service de proximité: installation, maintenance et formation d’équipe.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/produits" className="rounded-lg bg-brand-blue px-4 py-2 text-white font-semibold">Voir le catalogue</Link>
            <a href="/catalogue-afrismile.pdf" className="rounded-lg border border-brand-blue px-4 py-2 text-brand-blue font-semibold">Télécharger le PDF</a>
          </div>
        </div>
        <PromoBanner />
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {categories.slice(0, 3).map((cat) => (
          <article key={cat.key} className="rounded-2xl bg-white p-5 shadow-soft">
            <h2 className="font-semibold text-brand-dark">{cat.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{cat.products[0]?.name} et plus encore.</p>
            <Link className="mt-3 inline-block text-sm font-semibold text-brand-blue" to="/produits">Explorer →</Link>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <QuoteForm />
        <ChairComparator />
      </section>

      <section className="mt-12 rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="section-title">Marques partenaires</h2>
        <p className="section-subtitle">Des fabricants reconnus pour la qualité et la durabilité.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {brands.map((brand) => (
            <span key={brand} className="rounded-full bg-brand-light px-4 py-2 text-sm font-medium text-brand-dark">{brand}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
