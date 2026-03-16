import { Mail, Phone } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'En combien de temps recevez-vous une réponse ?',
    a: 'Nous répondons généralement en moins de 24h ouvrées avec une première orientation claire.',
  },
  {
    q: 'Pouvez-vous accompagner une ouverture de cabinet ?',
    a: 'Oui, nous pouvons proposer un plan d’équipement progressif selon votre budget et vos priorités cliniques.',
  },
  {
    q: 'Intervenez-vous en dehors de Dakar ?',
    a: 'Oui, selon le projet, nous organisons la logistique et le support technique dans les régions et en Afrique de l’Ouest.',
  },
  {
    q: 'Dans quels pays pouvez-vous livrer et installer ?',
    a: 'Nous opérons au Sénégal, en Mauritanie, Côte d’Ivoire, Bénin, Burkina Faso, Cameroun, Cap-Vert, Gambie, Ghana, Guinée, Guinée-Bissau, Niger, Nigeria et Togo.',
  },
]

export default function ContactPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <main className="container-page page-wrap space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]} />

      <PageHero
        eyebrow="Parlons de votre projet"
        title="Contact / Devis AfriSmile"
        subtitle="Parlez-nous de votre ouverture, de votre renouvellement d’équipement ou d’un besoin de maintenance prioritaire."
        image="/assets/page-contact.jpg"
        chips={['Réponse rapide', 'Conseil personnalisé', 'Suivi par un expert']}
      />

      <section className="section-shell">
        <h2 className="section-title">Pourquoi passer par AfriSmile</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="card-muted text-sm font-semibold text-slate-700">✓ Devis structuré selon votre budget</div>
          <div className="card-muted text-sm font-semibold text-slate-700">✓ Installation et mise en service</div>
          <div className="card-muted text-sm font-semibold text-slate-700">✓ SAV local et support WhatsApp</div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="min-w-0">
          <QuoteForm />
        </div>

        <section className="card min-w-0">
          <h2 className="font-heading text-2xl font-bold text-brand-dark">Contact rapide</h2>
          <p className="mt-4 text-slate-700">Adresse : Liberté 06 Cité CSE Villa 72, Dakar, Sénégal</p>
          <a className="mt-2 inline-flex items-center gap-2 font-medium text-brand-blue" href="tel:+221770946397"><Phone size={16} /> +221 77 094 63 97</a>
          <a className="mt-1 inline-flex items-center gap-2 font-medium text-brand-blue" href="mailto:contact@afrismile.net"><Mail size={16} /> contact@afrismile.net</a>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-primary" href="https://wa.me/221770946397?text=Bonjour%20AfriSmile%2C%20je%20souhaite%20un%20devis." target="_blank" rel="noreferrer">WhatsApp direct</a>
          </div>

          <div className="mt-6 rounded-xl border border-brand-cyan/20 bg-brand-light/60 p-4 text-sm text-slate-700">
            Un conseiller AfriSmile vous rappelle pour confirmer les besoins techniques, les délais et l’installation.
          </div>
        </section>
      </div>

      <section className="section-shell">
        <h2 className="section-title">Zone d’intervention AfriSmile</h2>
        <p className="section-subtitle">Base opérationnelle à Dakar avec déploiement au Sénégal et dans plusieurs pays d’Afrique de l’Ouest.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="card-muted text-sm text-slate-700"><strong>Sénégal</strong><br/>Dakar et régions, intervention planifiée.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Afrique de l’Ouest</strong><br/>Mauritanie, Côte d’Ivoire, Bénin, Burkina Faso, Cameroun, Cap-Vert, Gambie, Ghana.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Autres pays couverts</strong><br/>Guinée, Guinée-Bissau, Niger, Nigeria, Togo.</div>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <strong>Livraison & installation CEDEAO :</strong> déploiement sur étude technique avec planning, logistique et mise en service coordonnés selon le pays.
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ devis & contact</h2>
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
