import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['/', 'Accueil'],
  ['/produits', 'Produits'],
  ['/solutions-cabinets', 'Solutions cabinets'],
  ['/service-technique', 'Service technique'],
  ['/marques', 'Marques'],
  ['/blog', 'Blog'],
  ['/espace-pro', 'Espace pro'],
  ['/a-propos', 'À propos'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-100 bg-brand-dark text-[11px] text-slate-200">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2">
          <p>Distribution d’équipements dentaires professionnels au Sénégal et en Afrique de l’Ouest.</p>
          <p className="font-semibold">📞 +221 77 000 00 00</p>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/logo-afrismile.png" alt="AfriSmile" className="h-11 w-11 rounded-xl border border-slate-200 bg-white p-1 object-contain" />
          <div>
            <p className="font-heading text-lg font-extrabold text-brand-dark">AfriSmile</p>
            <p className="text-xs text-slate-500">Équipement dentaire professionnel</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm xl:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-2 py-1 transition hover:text-brand-cyan ${isActive ? 'font-semibold text-brand-blue' : 'text-slate-700'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary">Contact / Devis</Link>
        </nav>

        <button
          className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <nav className="container-page grid gap-1 py-3">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-brand-light font-semibold text-brand-blue' : 'text-slate-700'}`}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Contact / Devis</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
