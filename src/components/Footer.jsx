import { Link } from 'react-router-dom'

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
          <a
            className="mt-4 inline-block text-sm font-semibold text-brand-cyan"
            href="https://wa.me/221770000000"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp direct
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-white">Navigation</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/produits" className="hover:text-white">Produits</Link></li>
            <li><Link to="/solutions-cabinets" className="hover:text-white">Solutions cabinets</Link></li>
            <li><Link to="/service-technique" className="hover:text-white">Service technique</Link></li>
            <li><Link to="/espace-pro" className="hover:text-white">Espace professionnel</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact / devis</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm text-slate-300">Dakar, Sénégal</p>
          <a href="tel:+221770000000" className="mt-1 block text-sm font-semibold text-white">+221 77 000 00 00</a>
          <a href="mailto:contact@afrismile.com" className="block text-sm text-slate-300 hover:text-white">contact@afrismile.com</a>
          <a href="/catalogue-afrismile.pdf" className="btn-accent mt-4">Télécharger le catalogue PDF</a>
        </div>

        <div>
          <h3 className="font-semibold text-white">Informations légales</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/conditions-generales" className="hover:text-white">Conditions générales</Link></li>
            <li><Link to="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
            <li><Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
          </ul>
        </div>
      </div>

      <p className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} AfriSmile. Tous droits réservés.
      </p>
    </footer>
  )
}
