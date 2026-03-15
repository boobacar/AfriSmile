import { categories } from '../data/siteData'

export default function ProductsPage() {
  return (
    <main className="container-page page-wrap">
      <h1 className="section-title">Produits dentaires</h1>
      <p className="section-subtitle">Fauteuils, consommables, instruments, stérilisation et radiologie avec accompagnement de configuration.</p>

      <div className="sticky top-[118px] z-30 mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white/90 p-2 backdrop-blur">
        <div className="flex min-w-max items-center gap-2">
          {categories.map((cat) => (
            <a key={cat.key} href={`#${cat.key}`} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand-cyan hover:text-brand-cyan">
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {categories.map((cat) => (
          <section key={cat.key} id={cat.key} className="card scroll-mt-40">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-heading text-2xl font-bold text-brand-dark">{cat.name}</h2>
              <span className="chip">Stock & commande sur devis</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {cat.products.map((p) => (
                <article key={p.id} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-slate-800">{p.name}</h3>
                    <span className="rounded-full bg-brand-light px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-cyan">Pro</span>
                  </div>

                  <p className="text-sm font-semibold text-brand-blue">{p.price}</p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    <li>• Photos HD disponibles</li>
                    <li>• Fiche technique détaillée</li>
                    <li>• Vidéo de démonstration</li>
                    <li>• Brochure PDF</li>
                  </ul>

                  <div className="mt-4 flex gap-2">
                    <a href="/contact" className="btn-primary flex-1">Demander un devis</a>
                    <a href="/catalogue-afrismile.pdf" className="btn-secondary">PDF</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
