import { Mail, Phone } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import PageHero from '../components/PageHero'

export default function ContactPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Parlons de votre projet"
        title="Contact / Devis AfriSmile"
        subtitle="Parlez-nous de votre ouverture, de votre renouvellement d’équipement ou d’un besoin de maintenance prioritaire."
        image="/assets/page-contact.jpg"
        chips={['Réponse rapide', 'Conseil personnalisé', 'Suivi par un expert']}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <QuoteForm />

        <section className="card">
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
    </main>
  )
}
