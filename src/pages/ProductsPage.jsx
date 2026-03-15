import { categories } from '../data/siteData'

export default function ProductsPage() {
  return (
    <main className="container-page py-10">
      <h1 className="section-title">Produits dentaires</h1>
      <p className="section-subtitle">Fauteuils dentaires, consommables, instruments, stérilisation et radiologie.</p>
      <div className="mt-8 space-y-8">
        {categories.map((cat) => (
          <section key={cat.key} id={cat.key} className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-brand-dark">{cat.name}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cat.products.map((p) => (
                <article key={p.id} className="rounded-xl border border-slate-100 p-4">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-brand-blue">{p.price}</p>
                  <a href="/contact" className="mt-3 inline-block text-sm font-semibold text-brand-cyan">Demander un devis</a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
