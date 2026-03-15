import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function FauteuilDentaireSenegalPage() {
  return (
    <main className="container-page page-wrap space-y-10">
      <PageHero
        eyebrow="Fauteuils dentaires"
        title="Fauteuil dentaire au Sénégal : choisir le bon modèle selon votre pratique"
        subtitle="AfriSmile vous aide à comparer ergonomie, options cliniques, fiabilité et budget pour un investissement durable."
        image="/assets/page-products.jpg"
        chips={['Installation pro', 'Formation équipe', 'SAV & pièces']}
      >
        <Link to="/contact" className="btn-primary">Demander prix & options</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Critères de choix</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Ergonomie praticien et confort patient</li>
          <li className="card-muted">Fiabilité des composants et maintenance</li>
          <li className="card-muted">Évolutivité (caméra, instrumentation, etc.)</li>
          <li className="card-muted">Budget d’achat et coût total d’exploitation</li>
        </ul>
      </section>
    </main>
  )
}
