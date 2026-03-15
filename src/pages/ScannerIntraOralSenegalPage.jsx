import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'Un scanner intra-oral est-il rentable ?', a: 'Oui, il peut réduire les reprises, accélérer la prise d’empreinte et améliorer l’expérience patient.' },
  { q: 'Proposez-vous la formation des équipes ?', a: 'Oui, AfriSmile accompagne la prise en main et l’intégration au workflow clinique.' },
]

export default function ScannerIntraOralSenegalPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Scanner intra-oral Sénégal' }]} />

      <PageHero
        eyebrow="Dentisterie numérique"
        title="Scanner intra-oral au Sénégal : gagnez en précision et en productivité"
        subtitle="Digitalisez vos empreintes, accélérez votre flux clinique et améliorez l’expérience patient avec un scanner intra-oral adapté."
        image="/assets/page-solutions.jpg"
        chips={['Workflow numérique', 'Formation', 'Support local']}
      >
        <Link to="/contact" className="btn-primary">Recevoir une proposition</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Bénéfices pour votre cabinet</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Empreintes plus rapides et confort patient amélioré</li>
          <li className="card-muted">Meilleure communication praticien-laboratoire</li>
          <li className="card-muted">Réduction des reprises et gain de temps clinique</li>
          <li className="card-muted">Traçabilité numérique des cas</li>
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ scanner intra-oral Sénégal</h2>
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
