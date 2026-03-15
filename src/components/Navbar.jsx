import { NavLink } from 'react-router-dom'

const links = [
  ['/', 'Accueil'],
  ['/produits', 'Produits'],
  ['/solutions-cabinets', 'Solutions cabinets'],
  ['/service-technique', 'Service technique'],
  ['/marques', 'Marques'],
  ['/blog', 'Blog'],
  ['/espace-pro', 'Espace pro'],
  ['/a-propos', 'À propos'],
  ['/contact', 'Contact / Devis'],
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/assets/logo-afrismile.png" alt="AfriSmile" className="h-10 w-10 rounded bg-brand-light object-contain p-1" />
          <div>
            <p className="font-bold text-brand-dark">AfriSmile</p>
            <p className="text-xs text-slate-500">Équipement dentaire professionnel</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-5 text-sm xl:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `hover:text-brand-cyan ${isActive ? 'font-semibold text-brand-blue' : 'text-slate-700'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
