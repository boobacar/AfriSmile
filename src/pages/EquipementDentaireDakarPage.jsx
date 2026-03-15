import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'Intervenez-vous uniquement à Dakar ?', a: 'Nous intervenons à Dakar et dans les régions selon le projet, avec organisation logistique adaptée.' },
  { q: 'Quels services sont inclus ?', a: 'Conseil, livraison, installation, paramétrage, formation initiale et support après-vente.' },
]

export default function EquipementDentaireDakarPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Équipement dentaire Dakar' }]} />

      <PageHero
        eyebrow="Dakar"
        title="Équipement dentaire à Dakar : vente, livraison, installation et maintenance"
        subtitle="Nous accompagnons les cabinets dentaires de Dakar dans la sélection des équipements, la mise en service et le suivi technique après installation."
        image="/assets/illustration-clinic.jpg"
        chips={['Dakar & régions', 'Intervention terrain', 'Support réactif']}
      >
        <Link to="/contact" className="btn-primary">Obtenir un devis rapide</Link>
        <Link to="/service-technique" className="btn-secondary">Service technique</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Pourquoi AfriSmile à Dakar</h2>
        <p className="section-subtitle">Un interlocuteur unique pour accélérer vos décisions d’investissement et sécuriser votre exploitation quotidienne.</p>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ équipement dentaire Dakar</h2>
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
