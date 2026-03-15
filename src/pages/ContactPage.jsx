import QuoteForm from '../components/QuoteForm'

export default function ContactPage() {
  return (
    <main className="container-page py-10">
      <h1 className="section-title">Contact / Devis</h1>
      <p className="section-subtitle">Parlez-nous de votre projet de cabinet ou de renouvellement d’équipement.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <QuoteForm />
        <section className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-brand-dark">Contact rapide</h2>
          <p className="mt-3 text-slate-700">Adresse: Dakar, Sénégal</p>
          <a className="mt-2 block font-medium text-brand-blue" href="tel:+221770000000">📞 +221 77 000 00 00</a>
          <a className="block font-medium text-brand-blue" href="mailto:contact@afrismile.com">✉️ contact@afrismile.com</a>
          <a className="mt-3 inline-block rounded-lg bg-brand-green px-4 py-2 font-semibold text-white" href="https://wa.me/221770000000?text=Bonjour%20AfriSmile%2C%20je%20souhaite%20un%20devis." target="_blank" rel="noreferrer">WhatsApp direct</a>
          <a href="/catalogue-afrismile.pdf" className="mt-5 block rounded-lg bg-brand-cyan px-4 py-2 text-center font-semibold text-white">Télécharger le catalogue PDF</a>
        </section>
      </div>
    </main>
  )
}
