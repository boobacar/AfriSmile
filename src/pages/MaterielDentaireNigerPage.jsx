import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'Fournissez-vous du matériel dentaire au Niger ?',
    a: 'Oui, AfriSmile accompagne les cabinets au Niger, notamment à Niamey, avec des solutions d’équipement, de chiffrage et d’installation.',
  },
  {
    q: 'Comment choisir un pack de démarrage ?',
    a: 'Commencez par le socle clinique : fauteuil, stérilisation, compresseur, aspiration et consommables critiques, puis ajoutez les options selon le niveau d’activité.',
  },
  {
    q: 'Le SAV est-il prévu dans le projet ?',
    a: 'Oui, nous orientons la sélection selon la maintenabilité, la disponibilité des pièces et la stabilité d’exploitation après mise en service.',
  },
]

const starterPack = [
  'Fauteuil dentaire et instrumentation de base',
  'Autoclave Classe B et organisation du flux sale-propre-stérile',
  'Compresseur sans huile, aspiration et accessoires techniques',
  'Consommables initiaux et cadrage des besoins de réassort',
]

const decisionRules = [
  'Commencer par ce qui sécurise les actes quotidiens',
  'Séparer clairement indispensable, utile et extension future',
  'Comparer les devis avec installation, garantie et délais inclus',
  'Prévoir le support avant de signer, pas après la panne',
]

export default function MaterielDentaireNigerPage() {
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
    name: 'Matériel dentaire professionnel Niger',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['NE'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XOF',
      price: '0',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' },
      url: 'https://afrismile.net/contact',
      description: 'Tarification sur devis pour cabinets dentaires au Niger.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Niger' }]} />

      <PageHero
        eyebrow="Fournisseur B2B Niger"
        title="Matériel dentaire au Niger (Niamey)"
        subtitle="AfriSmile aide les dentistes au Niger à choisir des équipements durables, à cadrer leur devis et à lancer leur cabinet sur une base technique solide."
        image="/assets/flag-niger.svg"
        chips={['Niamey', 'Installation cadrée', 'Maintenance préventive']}
      >
        <Link to="/contact" className="btn-primary">Obtenir un devis</Link>
        <Link to="/solutions-cabinets" className="btn-secondary">Voir les solutions</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Le pack de départ à sécuriser en priorité</h2>
        <p className="section-subtitle">
          À Niamey, le meilleur arbitrage consiste à solidifier d’abord le cœur clinique avant les modules plus avancés.
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {starterPack.map((item) => (
            <li key={item} className="card-muted">{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Règles simples pour mieux comparer les devis</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {decisionRules.map((item) => (
            <article key={item} className="card-muted text-sm text-slate-700">{item}</article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens utiles pour un projet de cabinet au Niger</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/devis-materiel-dentaire" className="btn-secondary">Comprendre le devis</Link>
          <Link to="/materiel-dentaire-senegal" className="btn-secondary">Comparer les catégories</Link>
          <Link to="/service-technique" className="btn-secondary">Prévoir le support</Link>
          <Link to="/contact" className="btn-primary">Demander un devis Niger</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Niger</h2>
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
