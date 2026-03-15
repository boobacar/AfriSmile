import PageHero from '../components/PageHero'
import { blogPosts } from '../data/siteData'

export default function BlogPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Conseils experts"
        title="Blog AfriSmile : pratique, terrain et orienté décision"
        subtitle="Des contenus utiles pour optimiser vos choix d’équipement, vos standards de sécurité et l’organisation de votre cabinet."
        image="/assets/page-blog.jpg"
        chips={['Guides d’achat', 'Bonnes pratiques cliniques', 'Mises à jour secteur']}
      />

      <section className="section-shell">
        <h2 className="section-title">Articles récents</h2>
        <div className="mt-6 grid gap-4">
          {blogPosts.map((post) => (
            <article key={post.id} className="card">
              <h2 className="font-heading text-2xl font-bold text-brand-dark">{post.title}</h2>
              <p className="mt-2 text-slate-600">{post.excerpt}</p>
              <a href="/contact" className="mt-4 inline-block text-sm font-semibold text-brand-blue transition hover:text-brand-cyan">Recevoir un conseil personnalisé →</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
