import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'
import { blogPosts } from '../data/siteData'

const defaultRelatedMoneyPages = [
  { to: '/materiel-dentaire-senegal', label: 'Matériel dentaire Sénégal' },
  { to: '/fauteuil-dentaire-senegal', label: 'Fauteuil dentaire Sénégal' },
  { to: '/autoclave-dentaire-classe-b-senegal', label: 'Autoclave dentaire Classe B' },
  { to: '/scanner-intra-oral-senegal', label: 'Scanner intra-oral Sénégal' },
]

const relatedBySlug = {
  'maintenance-fauteuil-dentaire-10-pannes-frequentes-eviter-2026': [
    { to: '/service-technique', label: 'Mettre en place une maintenance préventive' },
    { to: '/fauteuil-dentaire-senegal', label: 'Choisir un fauteuil fiable et maintenable' },
    { to: '/contact', label: 'Demander un audit technique fauteuil' },
  ],
  'autoclave-dentaire-18l-23l-capacite-guide-flux-patient-2026': [
    { to: '/autoclave-dentaire-classe-b-senegal', label: 'Comparer les autoclaves Classe B' },
    { to: '/materiel-dentaire-senegal', label: 'Voir les équipements de stérilisation' },
    { to: '/contact', label: 'Demander un devis autoclave adapté' },
  ],
  'choisir-fauteuil-dentaire-senegal-2026': [
    { to: '/fauteuil-dentaire-senegal', label: 'Comparer les fauteuils dentaires' },
    { to: '/service-technique', label: 'Découvrir le service technique' },
    { to: '/contact', label: 'Demander un devis fauteuil' },
  ],
  'autoclave-classe-b-guide-cabinet-dakar': [
    { to: '/autoclave-dentaire-classe-b-senegal', label: 'Autoclave Classe B au Sénégal' },
    { to: '/service-technique', label: 'Maintenance et SAV local' },
    { to: '/contact', label: 'Demander un devis autoclave' },
  ],
  'scanner-intra-oral-roi-senegal': [
    { to: '/scanner-intra-oral-senegal', label: 'Scanner intra-oral Sénégal' },
    { to: '/solutions-cabinets', label: 'Solutions pour cabinets' },
    { to: '/contact', label: 'Planifier une démo' },
  ],
  'ouvrir-cabinet-dentaire-materiel-indispensable': [
    { to: '/materiel-dentaire-senegal', label: 'Pack matériel cabinet dentaire' },
    { to: '/modeles-achat', label: 'Modèles d’achat par étape' },
    { to: '/contact', label: 'Construire un devis projet' },
  ],
  'maintenance-preventive-equipements-dentaires': [
    { to: '/service-technique', label: 'Plan de maintenance AfriSmile' },
    { to: '/produits', label: 'Voir le catalogue équipements' },
    { to: '/contact', label: 'Ouvrir un dossier SAV' },
  ],
  'prix-fauteuil-dentaire-senegal-budget-reel-2026': [
    { to: '/fauteuil-dentaire-senegal', label: 'Fauteuil dentaire Sénégal' },
    { to: '/modeles-achat', label: 'Optimiser le budget d’achat' },
    { to: '/contact', label: 'Demander une estimation chiffrée' },
  ],
  'sterilisation-cabinet-dentaire-protocole-autoclave-classe-b': [
    { to: '/autoclave-dentaire-classe-b-senegal', label: 'Autoclave Classe B Sénégal' },
    { to: '/service-technique', label: 'Maintenance et suivi technique' },
    { to: '/contact', label: 'Demander un devis autoclave' },
  ],
  'scanner-intra-oral-vs-empreinte-classique-couts-delais-qualite': [
    { to: '/scanner-intra-oral-senegal', label: 'Scanner intra-oral Sénégal' },
    { to: '/solutions-cabinets', label: 'Moderniser le workflow cabinet' },
    { to: '/contact', label: 'Demander une démo scanner' },
  ],
  'ouvrir-cabinet-dentaire-dakar-checklist-materiel-demarrage': [
    { to: '/materiel-dentaire-senegal', label: 'Matériel dentaire pour ouverture cabinet' },
    { to: '/modeles-achat', label: 'Plan d’achat progressif' },
    { to: '/contact', label: 'Lancer votre devis d’ouverture' },
  ],
  'materiel-dentaire-senegal-checklist-ouverture-cabinet-2026': [
    { to: '/materiel-dentaire-senegal', label: 'Checklist matériel cabinet' },
    { to: '/solutions-cabinets', label: 'Solutions cabinets dentaires' },
    { to: '/contact', label: 'Demander un devis d’ouverture' },
  ],
  'service-technique-dentaire-senegal-sla-maintenance-sav-2026': [
    { to: '/service-technique', label: 'Service technique AfriSmile' },
    { to: '/produits', label: 'Catalogue équipements' },
    { to: '/contact', label: 'Ouvrir un dossier SAV' },
  ],
  'prix-autoclave-dentaire-classe-b-senegal-guide-achat-2026': [
    { to: '/autoclave-dentaire-classe-b-senegal', label: 'Autoclave Classe B Sénégal' },
    { to: '/service-technique', label: 'Maintenance autoclave' },
    { to: '/contact', label: 'Demander un devis autoclave' },
  ],
  'scanner-intra-oral-prix-senegal-comment-rentabiliser-2026': [
    { to: '/scanner-intra-oral-senegal', label: 'Scanner intra-oral Sénégal' },
    { to: '/solutions-cabinets', label: 'Optimiser le workflow cabinet' },
    { to: '/contact', label: 'Planifier une démonstration' },
  ],
  'consommables-dentaires-senegal-optimiser-stock-marge-2026': [
    { to: '/materiel-dentaire-senegal', label: 'Consommables et matériel dentaire' },
    { to: '/modeles-achat', label: 'Optimiser vos achats' },
    { to: '/contact', label: 'Parler à un conseiller AfriSmile' },
  ],
  'fournisseur-materiel-dentaire-senegal-checklist-pro-2026': [
    { to: '/materiel-dentaire-senegal', label: 'Trouver votre matériel dentaire' },
    { to: '/service-technique', label: 'Vérifier le niveau de SAV local' },
    { to: '/contact', label: 'Demander un devis fournisseur sécurisé' },
  ],
  'roi-materiel-dentaire-calcul-simple-investissement-cabinet': [
    { to: '/modeles-achat', label: 'Comparer vos modèles d’achat' },
    { to: '/materiel-dentaire-senegal', label: 'Équipements dentaires à fort impact' },
    { to: '/contact', label: 'Construire votre business case avec AfriSmile' },
  ],
  'equipement-dentaire-dakar-guide-achat-clinique-2026': [
    { to: '/equipement-dentaire-dakar', label: 'Équipement dentaire à Dakar' },
    { to: '/materiel-dentaire-senegal', label: 'Matériel dentaire Sénégal' },
    { to: '/contact', label: 'Demander un devis équipement' },
  ],
  'fournisseur-materiel-dentaire-afrique-ouest-criteres-fiabilite-2026': [
    { to: '/materiel-dentaire-senegal', label: 'Fournisseur matériel dentaire' },
    { to: '/service-technique', label: 'Évaluer le SAV local' },
    { to: '/contact', label: 'Parler à AfriSmile' },
  ],
  'imagerie-dentaire-senegal-rvg-panoramique-scanner-choisir-2026': [
    { to: '/scanner-intra-oral-senegal', label: 'Scanner intra-oral Sénégal' },
    { to: '/produits', label: 'Voir les solutions d’imagerie' },
    { to: '/contact', label: 'Demander une recommandation' },
  ],
  'compresseur-aspiration-dentaire-senegal-dimensionnement-maintenance-2026': [
    { to: '/materiel-dentaire-senegal', label: 'Équipements techniques cabinet' },
    { to: '/service-technique', label: 'Maintenance et SAV' },
    { to: '/contact', label: 'Dimensionner votre installation' },
  ],
  'cabinet-dentaire-senegal-business-plan-equipement-rentabilite-2026': [
    { to: '/modeles-achat', label: 'Planifier vos achats' },
    { to: '/materiel-dentaire-senegal', label: 'Construire votre panier matériel' },
    { to: '/contact', label: 'Chiffrer votre projet' },
  ],
}

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
  const relatedMoneyPages = relatedBySlug[post.slug] || defaultRelatedMoneyPages

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    author: { '@type': 'Organization', name: 'AfriSmile' },
    publisher: {
      '@type': 'Organization',
      name: 'AfriSmile',
      logo: { '@type': 'ImageObject', url: `${origin}/assets/logo-afrismile.png` },
    },
    mainEntityOfPage: articleUrl,
    image: `${origin}/assets/page-blog.jpg`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: 'fr-SN',
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
        <p className="mb-4 text-xs font-medium uppercase tracking-wide text-slate-500">
          Publié le {post.datePublished} • Mis à jour le {post.dateModified || post.datePublished}
        </p>
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
