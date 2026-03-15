import QuoteForm from '../components/QuoteForm'

export default function ContactPage() {
  return (
    <main className="container-page py-10">
      <h1 className="section-title">Contact / Devis</h1>
      <p className="section-subtitle">Parlez-nous de votre projet de cabinet ou de renouvellement d’équipement.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <QuoteForm />
        <section className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-brand-dark">Coordonnées</h2>
          <p className="mt-3 text-slate-700">Téléphone: +221 77 000 00 00</p>
          <p className="text-slate-700">Email: contact@afrismile.com</p>
          <p className="text-slate-700">Adresse: Dakar, Sénégal</p>
          <a href="/catalogue-afrismile.pdf" className="mt-5 inline-block rounded-lg bg-brand-cyan px-4 py-2 text-white font-semibold">Télécharger le catalogue PDF</a>
        </section>
      </div>
    </main>
  )
}
