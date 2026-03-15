export default function QuoteForm() {
  return (
    <form className="rounded-2xl bg-white p-6 shadow-soft" aria-label="Formulaire de devis rapide">
      <h3 className="text-xl font-semibold text-brand-dark">Demande de devis rapide</h3>
      <p className="mt-1 text-sm text-slate-600">Réponse sous 24h ouvrées.</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <input required placeholder="Nom" className="rounded-lg border border-slate-300 px-3 py-2" />
        <input required type="tel" placeholder="Téléphone" className="rounded-lg border border-slate-300 px-3 py-2" />
        <input type="email" placeholder="Email" className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2" />
        <select className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2">
          <option>Produit d’intérêt</option>
          <option>Fauteuil dentaire</option>
          <option>Radiologie</option>
          <option>Stérilisation</option>
          <option>Consommables</option>
        </select>
        <textarea rows="3" placeholder="Votre besoin" className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2" />
      </div>
      <button type="submit" className="mt-4 w-full rounded-lg bg-brand-blue px-4 py-2 font-semibold text-white">Envoyer la demande</button>
    </form>
  )
}
