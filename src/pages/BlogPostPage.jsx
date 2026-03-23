import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'
import { blogPosts } from '../data/siteData'

const relatedMoneyPages = [
  { to: '/materiel-dentaire-senegal', label: 'Matériel dentaire Sénégal' },
  { to: '/fauteuil-dentaire-senegal', label: 'Fauteuil dentaire Sénégal' },
  { to: '/autoclave-dentaire-classe-b-senegal', label: 'Autoclave dentaire Classe B' },
  { to: '/scanner-intra-oral-senegal', label: 'Scanner intra-oral Sénégal' },
]

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

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://afrismile.net'
  const articleUrl = `${origin}/blog/${post.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'AfriSmile' },
    publisher: {
      '@type': 'Organization',
      name: 'AfriSmile',
      logo: { '@type': 'ImageObject', url: `${origin}/assets/logo-afrismile.png` },
    },
    mainEntityOfPage: articleUrl,
    image: `${origin}/assets/page-blog.jpg`,
  }

  const faqJsonLd = post.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null

  const contentParagraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <main className="container-page page-wrap space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Blog', to: '/blog' }, { label: post.title }]} />

      <PageHero
        eyebrow="Blog AfriSmile"
        title={post.title}
        subtitle={post.excerpt}
        showImage={false}
        chips={['Guide pratique', 'Décision achat', 'Cabinets dentaires']}
      />

      <section className="section-shell">
        <article className="space-y-4 text-sm leading-7 text-slate-700">
          {contentParagraphs.map((paragraph, index) => (
            <p key={`${post.id}-p-${index}`}>{paragraph}</p>
          ))}
        </article>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Parler à un conseiller</Link>
          <Link to="/blog" className="btn-secondary">Voir les autres articles</Link>
        </div>
      </section>

      {post.faq?.length ? (
        <section className="section-shell">
          <h2 className="section-title">FAQ</h2>
          <div className="mt-4 space-y-3">
            {post.faq.map((item, index) => (
              <article key={`${post.id}-faq-${index}`} className="card-muted">
                <h3 className="font-heading text-base font-bold text-brand-dark">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell">
        <h2 className="section-title">Pages recommandées après cet article</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {relatedMoneyPages.map((item) => (
            <Link key={item.to} to={item.to} className="btn-secondary">{item.label}</Link>
          ))}
          <Link to="/contact" className="btn-primary">Demander un devis</Link>
        </div>
      </section>
    </main>
  )
}
