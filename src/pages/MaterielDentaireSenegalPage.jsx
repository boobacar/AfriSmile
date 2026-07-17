import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'Quel matériel dentaire AfriSmile propose-t-il au Sénégal ?',
    a: 'Fauteuils, autoclaves Classe B, imagerie, scanners intra-oraux, compresseurs, instruments et consommables pour cabinets et cliniques au Sénégal.',
  },
  {
    q: 'Comment obtenir un devis matériel dentaire au Sénégal ?',
    a: 'Nous préparons un devis structuré selon votre spécialité, votre budget, votre ville, votre calendrier d’ouverture et le niveau de service attendu.',
  },
  {
    q: 'AfriSmile intervient-il seulement à Dakar ?',
    a: 'Non. Nous accompagnons les projets à Dakar et dans d’autres zones du Sénégal, avec livraison, installation et aide après mise en service.',
  },
]

const purchaseBlocks = [
  'Fauteuils dentaires et units adaptés à l’omnipratique, chirurgie ou esthétique',
  'Autoclaves Classe B, stérilisation et meilleure organisation des instruments',
  'Imagerie numérique, RVG et scanners intra-oraux pour gagner du temps au cabinet',
  'Compresseurs, aspiration, instrumentation et consommables de démarrage',
]

const decisionPoints = [
  'Clarifier le niveau de cabinet visé : ouverture, modernisation ou montée en gamme',
  'Comparer les devis avec installation, accessoires, garantie et consommables inclus',
  'Prioriser les achats selon les soins réalisés et la trésorerie disponible',
  'Vérifier l’assistance prévue et la disponibilité des pièces avant la signature',
]

const trustPoints = [
  {
    title: 'Projet cadré avant achat',
    desc: 'Nous aidons à classer les priorités entre fauteuil, stérilisation, imagerie, aspiration et instruments pour éviter les achats mal dimensionnés.',
  },
  {
    title: 'Devis lisible et comparable',
    desc: 'Le devis doit faire apparaître l’équipement, l’installation, les accessoires utiles, la garantie et l’accompagnement après mise en service.',
  },
  {
    title: 'Accompagnement jusqu’à l’ouverture',
    desc: 'AfriSmile accompagne aussi les cabinets qui ouvrent ou restructurent leur organisation au Sénégal et dans la sous-région.',
  },
]

const projectRoutes = [
  { label: 'Demander un devis détaillé', to: '/devis-materiel-dentaire' },
  { label: 'Comparer les fauteuils dentaires', to: '/fauteuil-dentaire-senegal' },
  { label: 'Choisir un autoclave Classe B', to: '/autoclave-dentaire-classe-b-senegal' },
  { label: 'Étudier le scanner intra-oral', to: '/scanner-intra-oral-senegal' },
  { label: 'Voir les solutions cabinets', to: '/solutions-cabinets' },
  { label: 'Préparer un projet à Dakar', to: '/equipement-dentaire-dakar' },
]

export default function MaterielDentaireSenegalPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Matériel dentaire professionnel Sénégal',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['SN'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XOF',
      url: 'https://www.afrismile.net/contact',
      description: 'Tarification sur devis pour matériel dentaire au Sénégal avec installation et support AfriSmile.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Sénégal' }]} />

      <PageHero
        eyebrow="Accompagnement cabinets Sénégal"
        title="Matériel dentaire au Sénégal pour cabinets et cliniques"
        subtitle="AfriSmile vous aide à choisir, chiffrer et installer votre équipement dentaire avec des prix plus clairs et un accompagnement fiable au Sénégal et en Afrique de l’Ouest."
        image="/assets/illustration-equipment.jpg"
        chips={['Conseil achat', 'Installation', 'Assistance locale', 'Afrique de l’Ouest']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Voir le catalogue</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Ce que nous fournissons aux cabinets au Sénégal</h2>
        <p className="section-subtitle">
          Nous accompagnons aussi bien les ouvertures de cabinet que les remplacements importants ou les projets de modernisation.
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {purchaseBlocks.map((item) => (
            <li key={item} className="card-muted">{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Comment mieux décider avant de signer</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {decisionPoints.map((item) => (
            <article key={item} className="card-muted text-sm text-slate-700">{item}</article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Pourquoi cette page doit être votre point d’entrée</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {trustPoints.map((item) => (
            <article key={item.title} className="card-muted">
              <h3 className="font-semibold text-brand-dark">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens clés pour préparer votre projet</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/devis-materiel-dentaire" className="btn-secondary">Comprendre le devis</Link>
          <Link to="/fauteuil-dentaire-senegal" className="btn-secondary">Comparer les fauteuils</Link>
          <Link to="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Stérilisation & autoclaves</Link>
          <Link to="/scanner-intra-oral-senegal" className="btn-secondary">Scanner intra-oral</Link>
          <Link to="/contact" className="btn-primary">Parler à AfriSmile</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Parcours recommandé selon votre priorité</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {projectRoutes.map((item) => (
            <Link key={item.to} to={item.to} className="card p-4 transition hover:border-brand-cyan">
              <h3 className="font-semibold text-brand-dark">{item.label}</h3>
              <p className="mt-1 text-sm text-slate-600">Accéder à la page utile →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-brand-dark p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold">Vous voulez aller vite sans rater l’essentiel ?</h2>
          <p className="mt-3 text-slate-300">
            Envoyez votre besoin et AfriSmile vous aide à structurer un achat cohérent : équipements prioritaires,
            budget, installation et accompagnement après démarrage.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/devis-materiel-dentaire" className="btn-primary">Recevoir un devis structuré</Link>
            <Link to="/contact" className="btn-secondary">Parler à un conseiller</Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Sénégal</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item) => (
            <article key={item.q} className="card-muted">
              <h3 className="font-semibold text-brand-dark">{item.q}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
