import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-slate-200">
      <div className="container-page grid gap-8 py-10 md:grid-cols-4">
        <div>
          <h3 className="font-semibold">AfriSmile</h3>
          <p className="mt-2 text-sm text-slate-300">Votre partenaire au Sénégal pour l’équipement dentaire, l’installation et la maintenance de cabinet.</p>
        </div>
        <div>
          <h3 className="font-semibold">Liens rapides</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/produits">Produits</Link></li>
            <li><Link to="/solutions-cabinets">Solutions cabinets</Link></li>
            <li><Link to="/service-technique">Service technique</Link></li>
            <li><Link to="/contact">Demander un devis</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact rapide</h3>
          <p className="mt-2 text-sm">📞 +221 77 000 00 00</p>
          <p className="text-sm">📧 contact@afrismile.com</p>
          <a className="text-sm text-brand-cyan" href="https://wa.me/221770000000" target="_blank" rel="noreferrer">💬 WhatsApp direct</a>
        </div>
        <div>
          <h3 className="font-semibold">Juridique</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/conditions-generales">Conditions générales</Link></li>
            <li><Link to="/politique-confidentialite">Politique de confidentialité</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} AfriSmile. Tous droits réservés.</p>
    </footer>
  )
}
