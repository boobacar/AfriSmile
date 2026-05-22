import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'AfriSmile intervient-il au Ghana pour les cliniques dentaires ?',
    a: 'Oui. Nous accompagnons les projets d’équipement dentaire au Ghana, notamment à Accra et Kumasi, avec un appui achat et installation.',
  },
  {
    q: 'Quels produits sont les plus demandés au Ghana ?',
    a: 'Les cliniques demandent surtout des fauteuils dentaires, autoclaves Classe B, compresseurs sans huile, RVG et scanners intra-oraux.',
  },
  {
    q: 'Comment fiabiliser le SAV pour un cabinet à Accra ?',
    a: 'Nous structurons un plan de maintenance préventive, les pièces critiques et un canal de support rapide pour réduire les temps d’arrêt.',
  },
]

export default function MaterielDentaireGhanaPage() {
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
    name: 'Matériel dentaire professionnel Ghana',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['GH'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'GHS',
      price: '0',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GHS', price: '0' },
      url: 'https://afrismile.net/contact',
      description: 'Tarification sur devis pour cliniques dentaires à Accra, Kumasi et dans tout le Ghana.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Ghana' }]} />

      <PageHero
        eyebrow="Fournisseur B2B Ghana"
        title="Matériel dentaire au Ghana (Accra, Kumasi)"
        subtitle="AfriSmile accompagne les dentistes au Ghana avec des solutions d’équipement adaptées au flux clinique, au budget et aux exigences d’hygiène."
        image="/assets/illustration-clinic.jpg"
        chips={['Accra & Kumasi', 'Plan d’équipement', 'Support technique']}
      >
        <Link to="/contact" className="btn-primary">Obtenir un devis</Link>
        <Link to="/solutions-cabinets" className="btn-secondary">Voir les solutions</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Ce que nous proposons aux cabinets au Ghana</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Fauteuils dentaires et units cliniques</li>
          <li className="card-muted">Stérilisation complète avec autoclaves Classe B</li>
          <li className="card-muted">Imagerie et flux numérique</li>
          <li className="card-muted">Maintenance préventive et assistance technique</li>
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens utiles</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/materiel-dentaire-senegal" className="btn-secondary">Hub Afrique de l’Ouest</Link>
          <Link to="/service-technique" className="btn-secondary">Service technique</Link>
          <Link to="/contact" className="btn-primary">Demande de chiffrage</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Ghana</h2>
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
