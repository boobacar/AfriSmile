import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

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
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Fauteuil dentaire Sénégal' }]} />

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
        <h2 className="section-title">Prix, installation et coût total</h2>
        <p className="section-subtitle">
          Le prix d’un fauteuil dentaire au Sénégal varie selon la marque, les options, l’unité d’instruments,
          la lampe, l’aspiration, les raccordements et le niveau de maintenance. Un devis fiable doit intégrer
          l’installation, la formation de l’équipe, les pièces d’usure et le support technique après mise en service.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="card-muted text-sm text-slate-700"><strong>Cabinet en ouverture</strong><br/>Priorité à la fiabilité, au confort patient et à une configuration simple à maintenir.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Cabinet en croissance</strong><br/>Options évolutives, ergonomie renforcée et anticipation d’un deuxième poste de soin.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Clinique multi-praticiens</strong><br/>Standardisation des modèles, planning de maintenance et disponibilité des pièces.</div>
        </div>
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
