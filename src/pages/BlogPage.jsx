import { blogPosts } from '../data/siteData'

export default function BlogPage() {
  return (
    <main className="container-page page-wrap">
      <h1 className="section-title">Blog</h1>
      <p className="section-subtitle">Conseils pratiques pour optimiser votre cabinet et vos achats.</p>
      <div className="mt-6 space-y-4">
        {blogPosts.map((post) => (
          <article key={post.id} className="card">
            <h2 className="font-heading text-2xl font-bold text-brand-dark">{post.title}</h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
