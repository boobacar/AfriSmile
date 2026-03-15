import { useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  product: 'Fauteuil dentaire',
  need: '',
}

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm)

  const onChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = [
      'Bonjour AfriSmile, je souhaite un devis.',
      `Nom: ${form.name}`,
      `Téléphone: ${form.phone}`,
      `Email: ${form.email || 'Non renseigné'}`,
      `Produit d’intérêt: ${form.product}`,
      `Besoin: ${form.need || 'Non précisé'}`,
    ].join('\n')

    const url = `https://wa.me/221770000000?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="card" aria-label="Formulaire de devis rapide" onSubmit={handleSubmit}>
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
          <input required value={form.name} onChange={onChange('name')} placeholder="Votre nom" className="input-ui" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Téléphone</label>
          <input required value={form.phone} onChange={onChange('phone')} type="tel" placeholder="+221 ..." className="input-ui" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Email</label>
          <input value={form.email} onChange={onChange('email')} type="email" placeholder="vous@cabinet.com" className="input-ui" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Produit d’intérêt</label>
          <select value={form.product} onChange={onChange('product')} className="input-ui">
            <option>Fauteuil dentaire</option>
            <option>Radiologie</option>
            <option>Stérilisation</option>
            <option>Consommables</option>
            <option>Pack cabinet</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Votre besoin</label>
          <textarea value={form.need} onChange={onChange('need')} rows="4" placeholder="Décrivez votre projet" className="input-ui" />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full">Envoyer la demande</button>
      <p className="mt-2 text-center text-xs text-slate-500">Envoi direct sur WhatsApp pour traitement rapide.</p>
    </form>
  )
}
