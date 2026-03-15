export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-slate-200">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">AfriSmile</h3>
          <p className="mt-2 text-sm text-slate-300">Votre partenaire au Sénégal pour l’équipement dentaire, l’installation et la maintenance de cabinet.</p>
        </div>
        <div>
          <h3 className="font-semibold">Liens rapides</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/produits">Produits</a></li>
            <li><a href="/solutions-cabinets">Solutions cabinets</a></li>
            <li><a href="/contact">Demander un devis</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2 text-sm">Dakar, Sénégal</p>
          <p className="text-sm">+221 77 000 00 00</p>
          <p className="text-sm">contact@afrismile.com</p>
        </div>
      </div>
      <p className="border-t border-slate-700 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} AfriSmile. Tous droits réservés.</p>
    </footer>
  )
}
