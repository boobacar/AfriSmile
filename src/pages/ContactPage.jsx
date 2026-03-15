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
    a: 'Oui, selon le projet, nous organisons la logistique et le support technique dans les régions.',
  },
]

export default function ContactPage() {
  return (
    <main className="container-page page-wrap space-y-8">
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
          <p className="mt-4 text-slate-700">Adresse : Dakar, Sénégal</p>
          <a className="mt-2 inline-flex items-center gap-2 font-medium text-brand-blue" href="tel:+221770000000"><Phone size={16} /> +221 77 000 00 00</a>
          <a className="mt-1 inline-flex items-center gap-2 font-medium text-brand-blue" href="mailto:contact@afrismile.com"><Mail size={16} /> contact@afrismile.com</a>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-primary" href="https://wa.me/221770000000?text=Bonjour%20AfriSmile%2C%20je%20souhaite%20un%20devis." target="_blank" rel="noreferrer">WhatsApp direct</a>
            <a href="/catalogue-afrismile.pdf" className="btn-secondary">Télécharger le catalogue PDF</a>
          </div>

          <div className="mt-6 rounded-xl border border-brand-cyan/20 bg-brand-light/60 p-4 text-sm text-slate-700">
            Un conseiller AfriSmile vous rappelle pour confirmer les besoins techniques, les délais et l’installation.
          </div>
        </section>
      </div>

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
