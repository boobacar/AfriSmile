import PageHero from '../components/PageHero'
import { brands } from '../data/siteData'

export default function BrandsPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Réseau de fabricants"
        title="Des marques de référence pour sécuriser vos investissements"
        subtitle="AfriSmile distribue des références internationales reconnues pour la fiabilité, la durabilité et l’accessibilité des pièces."
        image="/assets/page-brands.jpg"
        chips={['Partenaires certifiés', 'Suivi local', 'Qualité éprouvée']}
      />

      <section className="section-shell">
        <h2 className="section-title">Nos marques partenaires</h2>
        <p className="section-subtitle">Chaque marque est sélectionnée pour sa robustesse et sa compatibilité avec les réalités terrain.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <article key={brand} className="card text-center">
              <h2 className="font-heading text-xl font-bold text-brand-dark">{brand}</h2>
              <p className="mt-2 text-sm text-slate-600">Partenaire certifié AfriSmile</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
