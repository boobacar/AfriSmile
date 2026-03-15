import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const faqs = [
  { q: 'Quel budget prévoir pour un fauteuil dentaire au Sénégal ?', a: 'Le budget dépend des options cliniques, de l’ergonomie et de la marque. Nous proposons plusieurs gammes et un devis personnalisé.' },
  { q: 'Assurez-vous la maintenance ?', a: 'Oui, AfriSmile accompagne la maintenance préventive et corrective avec disponibilité pièces selon modèle.' },
]

export default function FauteuilDentaireSenegalPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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

      <section className="section-shell">
        <h2 className="section-title">FAQ fauteuil dentaire Sénégal</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item) => (
            <article key={item.q} className="card-muted">
              <h3 className="font-semibold text-brand-dark">{item.q}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
