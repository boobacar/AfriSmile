export default function QuoteForm() {
  return (
    <form className="card" aria-label="Formulaire de devis rapide">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h3 className="font-heading text-2xl font-bold text-brand-dark">Demande de devis rapide</h3>
          <p className="mt-1 text-sm text-slate-600">Réponse sous 24h ouvrées avec proposition adaptée à votre budget.</p>
        </div>
        <span className="chip">Sans engagement</span>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Nom</label>
          <input required placeholder="Votre nom" className="input-ui" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Téléphone</label>
          <input required type="tel" placeholder="+221 ..." className="input-ui" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Email</label>
          <input type="email" placeholder="vous@cabinet.com" className="input-ui" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Produit d’intérêt</label>
          <select className="input-ui">
            <option>Fauteuil dentaire</option>
            <option>Radiologie</option>
            <option>Stérilisation</option>
            <option>Consommables</option>
            <option>Pack cabinet</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Votre besoin</label>
          <textarea rows="4" placeholder="Décrivez votre projet" className="input-ui" />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-brand-cyan/20 bg-brand-light/60 p-3 text-sm text-slate-700">
        💡 Astuce : mentionnez votre calendrier d’ouverture pour recevoir un plan de déploiement réaliste.
      </div>

      <button type="submit" className="btn-primary mt-5 w-full">Envoyer la demande</button>
    </form>
  )
}
