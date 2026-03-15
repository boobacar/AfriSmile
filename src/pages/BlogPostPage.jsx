import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { blogPosts } from '../data/siteData'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <main className="container-page page-wrap space-y-6">
        <section className="section-shell">
          <h1 className="section-title">Article introuvable</h1>
          <p className="section-subtitle">Cet article n’existe pas ou a été déplacé.</p>
          <Link to="/blog" className="btn-secondary mt-4">Retour au blog</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Blog AfriSmile"
        title={post.title}
        subtitle={post.excerpt}
        image="/assets/page-blog.jpg"
        chips={['Guide pratique', 'Décision achat', 'Cabinets dentaires']}
      />

      <section className="section-shell">
        <p className="text-sm leading-7 text-slate-700">{post.content}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Parler à un conseiller</Link>
          <Link to="/blog" className="btn-secondary">Voir les autres articles</Link>
        </div>
      </section>
    </main>
  )
}
