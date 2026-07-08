import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'Fournissez-vous du matériel dentaire au Mali ?',
    a: 'Oui, AfriSmile dessert le Mali (notamment Bamako) avec des équipements professionnels : fauteuils, stérilisation, imagerie et instruments rotatifs.',
  },
  {
    q: 'Comment s’organise la livraison à Bamako ?',
    a: 'Nous organisons la logistique de livraison vers Bamako. Notre équipe technique peut également se déplacer pour l\'installation de gros équipements.',
  },
  {
    q: 'Quels équipements sont les plus adaptés au climat malien ?',
    a: 'Nous recommandons fortement nos compresseurs tropicaux sans huile avec sécheur, ainsi que des autoclaves Classe B conçus pour résister aux variations thermiques.',
  },
]

export default function MaterielDentaireMaliPage() {
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
    name: 'Matériel dentaire professionnel Mali',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['ML'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XOF',
      price: '0',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' },
      url: 'https://afrismile.net/contact',
      description: 'Tarification sur devis pour fourniture et installation à Bamako et au Mali.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Mali' }]} />

      <PageHero
        eyebrow="Fournisseur B2B Mali"
        title="Matériel dentaire au Mali (Bamako) pour votre cabinet"
        subtitle="Trouvez des équipements dentaires fiables et performants au Mali avec AfriSmile. Du fauteuil à la radiologie, bénéficiez de notre expertise technique."
        image="/assets/flag-mali.svg"
        chips={['Livraison Mali', 'Équipements tropicaux', 'Conseil expert']}
      >
        <Link to="/contact" className="btn-primary">Obtenir un devis</Link>
        <Link to="/produits" className="btn-secondary">Parcourir le catalogue</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">L'équipement essentiel pour votre clinique malienne</h2>
        <p className="section-subtitle">Du matériel robuste conçu pour durer.</p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Fauteuils et units dentaires complets</li>
          <li className="card-muted">Autoclaves de Classe B pour une hygiène parfaite</li>
          <li className="card-muted">Capteurs RVG et imagerie panoramique</li>
          <li className="card-muted">Instruments et consommables cliniques</li>
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens utiles</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/produits" className="btn-secondary">Voir le catalogue matériel</Link>
          <Link to="/blog/comparatif-meilleurs-compresseurs-dentaires-afrique" className="btn-secondary">Choix du compresseur</Link>
          <Link to="/contact" className="btn-primary">Demander un chiffrage projet</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Mali</h2>
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
