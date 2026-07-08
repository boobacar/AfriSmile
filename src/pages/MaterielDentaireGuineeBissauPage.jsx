import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'AfriSmile peut-il accompagner un cabinet en Guinée-Bissau ?',
    a: 'Oui, nous accompagnons les projets d’équipement dentaire en Guinée-Bissau avec une approche orientée fiabilité, budget maîtrisé et continuité clinique.',
  },
  {
    q: 'Quels équipements choisir en premier ?',
    a: 'Le socle recommandé reste : fauteuil, autoclave Classe B, compresseur, aspiration, instrumentation essentielle et consommables de départ.',
  },
  {
    q: 'Comment lancer mon projet ?',
    a: 'Contactez AfriSmile pour une proposition structurée selon votre plan clinique, le niveau d’urgence et le type de cabinet à ouvrir ou moderniser.',
  },
]

const focusAreas = [
  'Matériel robuste pour démarrage ou modernisation de cabinet',
  'Stérilisation, ergonomie opératoire et continuité clinique',
  'Devis lisibles avec services, délais et support inclus',
  'Accompagnement sur les arbitrages entre budget court terme et croissance future',
]

export default function MaterielDentaireGuineeBissauPage() {
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
    name: 'Matériel dentaire professionnel Guinée-Bissau',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['GW'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XOF',
      price: '0',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' },
      url: 'https://afrismile.net/contact',
      description: 'Tarification sur devis pour cabinets dentaires en Guinée-Bissau.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Guinée-Bissau' }]} />

      <PageHero
        eyebrow="Accompagnement cabinets Guinée-Bissau"
        title="Matériel dentaire en Guinée-Bissau"
        subtitle="AfriSmile soutient les cliniques en Guinée-Bissau avec des équipements dentaires fiables, des devis plus clairs et un accompagnement concret."
        image="/assets/flag-guinee-bissau.svg"
        chips={['Devis rapide', 'Équipement fiable', 'Accompagnement technique']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Explorer les produits</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Ce qu’AfriSmile aide à cadrer</h2>
        <p className="section-subtitle">
          Pour un cabinet à Bissau ou dans une autre zone du pays, l’enjeu n’est pas seulement le prix d’achat, mais la fiabilité de l’équipement après l’ouverture.
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {focusAreas.map((item) => (
            <li key={item} className="card-muted">{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Approche recommandée pour le devis</h2>
        <p className="section-subtitle">
          Nous recommandons de séparer matériel principal, accessoires, installation, garantie, consommables initiaux et assistance, afin d’obtenir une base de comparaison plus fiable entre plusieurs offres.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/modeles-achat" className="btn-secondary">Structurer le budget</Link>
          <Link to="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Prioriser la stérilisation</Link>
          <Link to="/contact" className="btn-primary">Recevoir un devis Guinée-Bissau</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Guinée-Bissau</h2>
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
