import { Link } from 'react-router-dom'
import PromoBanner from '../components/PromoBanner'
import QuoteForm from '../components/QuoteForm'
import ChairComparator from '../components/ChairComparator'
import { brands, categories } from '../data/siteData'

const trustSignals = ['Livraison & installation', 'SAV réactif', 'Formations équipes', 'Conseil achat pro']

export default function HomePage() {
  return (
    <main className="container-page page-wrap space-y-12">
      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="chip inline-block">Distributeur dentaire professionnel</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-brand-dark md:text-5xl">
            Équipez votre cabinet avec une expérience d’achat claire, fiable et premium.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            AfriSmile accompagne les dentistes avec des équipements performants, une logistique locale, un support technique
            terrain et des parcours de devis simples pour accélérer vos décisions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/produits" className="btn-primary">Voir le catalogue</Link>
            <a href="/catalogue-afrismile.pdf" className="btn-secondary">Télécharger le PDF</a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {trustSignals.map((signal) => (
              <span key={signal} className="chip">✓ {signal}</span>
            ))}
          </div>
        </div>

        <PromoBanner />
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title">Catégories à fort volume</h2>
            <p className="section-subtitle">Une sélection lisible pour comparer rapidement les gammes.</p>
          </div>
          <Link to="/produits" className="btn-secondary">Tout le catalogue</Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat) => (
            <article key={cat.key} className="card p-5">
              <h3 className="font-heading text-xl font-bold text-brand-dark">{cat.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{cat.products[0]?.name} et une gamme complète pour cabinets.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-cyan">{cat.products.length} références</span>
                <Link className="text-sm font-semibold text-brand-blue" to="/produits">Explorer →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <QuoteForm />
        <ChairComparator />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="card lg:col-span-2">
          <h2 className="section-title">Service technique complet</h2>
          <p className="section-subtitle">Installation, maintenance, formation et pièces de rechange avec une équipe dédiée pour réduire les interruptions.</p>
          <Link to="/service-technique" className="btn-accent mt-5">Voir le service technique</Link>
        </article>

        <article className="card bg-brand-dark text-white">
          <h2 className="font-heading text-2xl font-bold">Espace professionnel</h2>
          <p className="mt-2 text-sm text-slate-200">Tarifs B2B, promotions privées et ressources techniques dédiées.</p>
          <Link to="/espace-pro" className="btn-secondary mt-5 border-white/30 bg-white/10 text-white hover:bg-white/20">Découvrir l’espace pro</Link>
        </article>
      </section>

      <section className="card">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="section-title">Marques partenaires</h2>
            <p className="section-subtitle">Des fabricants reconnus pour la qualité et la durabilité.</p>
          </div>
          <Link to="/marques" className="btn-secondary">Voir toutes les marques</Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {brands.map((brand) => (
            <span key={brand} className="chip">{brand}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
