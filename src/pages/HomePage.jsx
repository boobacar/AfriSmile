import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import PromoBanner from '../components/PromoBanner'
import QuoteForm from '../components/QuoteForm'
import ChairComparator from '../components/ChairComparator'
import PageHero from '../components/PageHero'
import { blogPosts, brands, categories } from '../data/siteData'

const trustSignals = ['Livraison & installation', 'SAV réactif', 'Formations équipes', 'Conseil achat pro']
const prioritySeoSlugs = [
  'devis-materiel-dentaire-senegal-comment-comparer-2026',
  'materiel-cabinet-dentaire-complet-prix-senegal-2026',
  'appareil-dentaire-prix-dakar-senegal-2026',
]
const prioritySeoPosts = prioritySeoSlugs
  .map((slug) => blogPosts.find((post) => post.slug === slug))
  .filter(Boolean)

export default function HomePage() {
  return (
    <main className="container-page page-wrap space-y-10">
      <PageHero
        eyebrow="Distributeur dentaire professionnel"
        title="Matériel dentaire au Sénégal pour équiper votre cabinet avec confiance"
        subtitle="AfriSmile accompagne les dentistes avec des équipements performants, une logistique locale et un support technique terrain pour accélérer vos décisions d’investissement."
        image="/assets/page-home.jpg"
        chips={['Dakar & régions', 'Devis personnalisés', 'Accompagnement de bout en bout']}
      >
        <Link to="/produits" className="btn-primary">Voir le catalogue</Link>
      </PageHero>

      <section className="section-shell">
        <div className="flex flex-wrap gap-2 text-sm">
          <Link to="/devis-materiel-dentaire" className="btn-primary">Devis gratuit →</Link>
          <Link to="/blog/devis-materiel-dentaire-senegal-comment-comparer-2026" className="btn-secondary">Comparer un devis</Link>
          <Link to="/blog/materiel-cabinet-dentaire-complet-prix-senegal-2026" className="btn-secondary">Prix cabinet complet</Link>
          <Link to="/blog/appareil-dentaire-prix-dakar-senegal-2026" className="btn-secondary">Prix appareil dentaire Dakar</Link>
          <Link to="/materiel-dentaire-senegal" className="btn-secondary">Matériel dentaire Sénégal</Link>
          <Link to="/equipement-dentaire-dakar" className="btn-secondary">Équipement dentaire Dakar</Link>
          <Link to="/fauteuil-dentaire-senegal" className="btn-secondary">Fauteuil dentaire Sénégal</Link>
          <Link to="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Autoclave Classe B Sénégal</Link>
          <Link to="/scanner-intra-oral-senegal" className="btn-secondary">Scanner intra-oral Sénégal</Link>
          <Link to="/materiel-dentaire-cameroun" className="btn-secondary">Matériel dentaire Cameroun</Link>
          <Link to="/materiel-dentaire-ghana" className="btn-secondary">Matériel dentaire Ghana</Link>
          <Link to="/materiel-dentaire-nigeria" className="btn-secondary">Matériel dentaire Nigeria</Link>
          <Link to="/materiel-dentaire-mauritanie" className="btn-secondary">Matériel dentaire Mauritanie</Link>
          <Link to="/materiel-dentaire-niger" className="btn-secondary">Matériel dentaire Niger</Link>
          <Link to="/materiel-dentaire-guinee-bissau" className="btn-secondary">Matériel dentaire Guinée-Bissau</Link>
        </div>
      </section>

      <section className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title">Articles créés depuis les données Search Console</h2>
            <p className="section-subtitle">Cibles avec impressions Google mais peu de clics : devis, prix cabinet complet et appareil dentaire à Dakar.</p>
          </div>
          <Link to="/blog" className="btn-secondary">Tous les guides</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {prioritySeoPosts.map((post) => (
            <article key={post.id} className="card p-5">
              <Link to={`/blog/${post.slug}`} className="block">
                <h3 className="font-heading text-xl font-bold text-brand-dark transition hover:text-brand-blue">{post.title}</h3>
              </Link>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-brand-blue transition hover:text-brand-cyan">Lire le guide →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="section-shell">
          <h2 className="section-title">Pourquoi les cabinets choisissent AfriSmile</h2>
          <p className="section-subtitle">Une approche orientée résultats cliniques, performance opérationnelle et sérénité après installation.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {trustSignals.map((signal) => (
              <article key={signal} className="card-muted">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark"><CheckCircle2 size={16} className="text-brand-cyan" /> {signal}</p>
                <p className="mt-1 text-sm text-slate-600">Processus clair, interlocuteur unique et suivi structuré de vos priorités.</p>
              </article>
            ))}
          </div>
        </div>
        <PromoBanner />
      </section>

      <section className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title">Catégories à fort volume</h2>
            <p className="section-subtitle">Une sélection lisible pour comparer rapidement les gammes et finaliser votre shortlist.</p>
          </div>
          <Link to="/produits" className="btn-secondary">Tout le catalogue</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat) => (
            <article key={cat.key} className="card p-5">
              <h3 className="font-heading text-xl font-bold text-brand-dark">{cat.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{cat.products[0]?.name} et une gamme complète pour cabinets urbains et régionaux.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-cyan">{cat.products.length} références</span>
                <Link className="text-sm font-semibold text-brand-blue transition hover:text-brand-cyan" to="/produits">Explorer →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="min-w-0">
          <QuoteForm />
        </div>
        <div className="min-w-0">
          <ChairComparator />
        </div>
      </section>

      <section className="section-shell">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="section-title">Marques partenaires</h2>
            <p className="section-subtitle">Des fabricants reconnus pour la qualité, la durabilité et la disponibilité des pièces.</p>
          </div>
          <Link to="/marques" className="btn-secondary">Voir toutes les marques</Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {brands.map((brand) => (
            <span key={brand} className="chip">{brand}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
