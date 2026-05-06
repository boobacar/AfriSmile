import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-brand-dark text-slate-200">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-xl font-bold text-white">AfriSmile</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Votre partenaire au Sénégal pour l’équipement dentaire, l’installation de cabinet,
            la maintenance technique et l’accompagnement professionnel.
          </p>
          <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition hover:text-white" href="https://wa.me/221770946397" target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp direct
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-white">Pages utiles</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/produits" className="transition hover:text-white">Produits</Link></li>
            <li><Link to="/materiel-dentaire-senegal" className="transition hover:text-white">Matériel dentaire Sénégal</Link></li>
            <li><Link to="/equipement-dentaire-dakar" className="transition hover:text-white">Équipement dentaire Dakar</Link></li>
            <li><Link to="/service-technique" className="transition hover:text-white">SAV matériel dentaire</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">Contact / devis</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm text-slate-300"><strong>Adresse:</strong> Liberté 06 Cité CSE Villa 72, Dakar, Sénégal</p>
          <a href="tel:+221770946397" className="mt-1 block text-sm font-semibold text-white"><strong>Téléphone:</strong> +221 77 094 63 97</a>
          <a href="mailto:contact@afrismile.net" className="block text-sm text-slate-300 transition hover:text-white"><strong>Email:</strong> contact@afrismile.net</a>
        </div>

        <div>
          <h3 className="font-semibold text-white">Informations légales</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/conditions-generales" className="transition hover:text-white">Conditions générales</Link></li>
            <li><Link to="/politique-confidentialite" className="transition hover:text-white">Politique de confidentialité</Link></li>
            <li><Link to="/mentions-legales" className="transition hover:text-white">Mentions légales</Link></li>
          </ul>
        </div>
      </div>

      <p className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} AfriSmile. Tous droits réservés.
      </p>
    </footer>
  )
}
