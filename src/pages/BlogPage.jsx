import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'
import { blogPosts } from '../data/siteData'

export default function BlogPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Blog' }]} />

      <PageHero
        eyebrow="Conseils experts"
        title="Blog AfriSmile : pratique, terrain et orienté décision"
        subtitle="Des contenus utiles pour optimiser vos choix d’équipement, vos standards de sécurité et l’organisation de votre cabinet."
        showImage={false}
        chips={['Guides d’achat', 'Bonnes pratiques cliniques', 'Mises à jour secteur']}
      />

      <section className="section-shell">
        <h2 className="section-title">Pages stratégiques à consulter</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/materiel-dentaire-senegal" className="btn-secondary">Matériel dentaire Sénégal</Link>
          <Link to="/devis-materiel-dentaire" className="btn-secondary">Devis matériel dentaire</Link>
          <Link to="/blog/devis-materiel-dentaire-senegal-comment-comparer-2026" className="btn-secondary">Comparer un devis</Link>
          <Link to="/blog/materiel-cabinet-dentaire-complet-prix-senegal-2026" className="btn-secondary">Prix cabinet complet</Link>
          <Link to="/blog/appareil-dentaire-prix-dakar-senegal-2026" className="btn-secondary">Prix appareil dentaire Dakar</Link>
          <Link to="/fauteuil-dentaire-senegal" className="btn-secondary">Fauteuil dentaire Sénégal</Link>
          <Link to="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Autoclave Classe B</Link>
          <Link to="/scanner-intra-oral-senegal" className="btn-secondary">Scanner intra-oral</Link>
          <Link to="/materiel-dentaire-cameroun" className="btn-secondary">Matériel dentaire Cameroun</Link>
          <Link to="/materiel-dentaire-ghana" className="btn-secondary">Matériel dentaire Ghana</Link>
          <Link to="/materiel-dentaire-nigeria" className="btn-secondary">Matériel dentaire Nigeria</Link>
        </div>
      </section>


      <section className="section-shell">
        <h2 className="section-title">Cibles Afrique de l’Ouest</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/materiel-dentaire-cote-divoire" className="btn-secondary">Côte d’Ivoire</Link>
          <Link to="/materiel-dentaire-cameroun" className="btn-secondary">Cameroun</Link>
          <Link to="/materiel-dentaire-ghana" className="btn-secondary">Ghana</Link>
          <Link to="/materiel-dentaire-nigeria" className="btn-secondary">Nigeria</Link>
          <Link to="/materiel-dentaire-mauritanie" className="btn-secondary">Mauritanie</Link>
          <Link to="/materiel-dentaire-niger" className="btn-secondary">Niger</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Articles récents</h2>
        <div className="mt-6 grid gap-4">
          {blogPosts.map((post) => (
            <article key={post.id} className="card">
              <Link to={`/blog/${post.slug}`} className="block">
                <h2 className="font-heading text-2xl font-bold text-brand-dark transition hover:text-brand-blue">{post.title}</h2>
              </Link>
              <p className="mt-2 text-slate-600">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link to={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-blue transition hover:text-brand-cyan">Lire l’article →</Link>
                <a href="/contact" className="text-sm font-semibold text-slate-600 transition hover:text-brand-blue">Recevoir un conseil personnalisé</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
