import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function PromoBanner() {
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-light via-white to-white p-7 shadow-raised">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-cyan/10" />
      <div className="absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-brand-blue/10 blur-xl" />
      <p className="chip inline-block">Promotion du mois</p>
      <h2 className="mt-3 font-heading text-2xl font-extrabold text-brand-dark md:text-3xl">-12% sur les fauteuils Cingol A3</h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
        Offre valable jusqu’au 31 mars, installation incluse à Dakar et périphérie, assistance technique à la mise en route et briefing opératoire inclus.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {['Garantie fabricant + support local', 'Paramétrage ergonomique du fauteuil', 'Session d’initiation de l’équipe'].map((item) => (
          <li key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-cyan" /> {item}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link to="/contact" className="btn-primary">Demander cette offre</Link>
        <Link to="/modeles-achat" className="btn-secondary">Voir les options d’achat</Link>
      </div>
    </aside>
  )
}
