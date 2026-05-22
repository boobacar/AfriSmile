import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'Fournissez-vous du matériel dentaire au Niger ?', a: 'Oui, AfriSmile accompagne les cabinets au Niger, notamment à Niamey, avec des solutions d’équipement et d’installation.' },
  { q: 'Comment choisir un pack de démarrage ?', a: 'Commencez par le socle clinique : fauteuil, stérilisation, compresseur, aspiration et consommables critiques.' },
  { q: 'Le SAV est-il prévu dans le projet ?', a: 'Oui, nous orientons la sélection selon la maintenabilité et la disponibilité des pièces.' },
]

export default function MaterielDentaireNigerPage() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }
  const productJsonLd = {
    '@context': 'https://schema.org', '@type': 'Product', name: 'Matériel dentaire professionnel Niger', category: 'Équipements médicaux dentaires', brand: { '@type': 'Brand', name: 'AfriSmile' }, areaServed: ['NE'],
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'XOF', price: '0', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' }, url: 'https://afrismile.net/contact', description: 'Tarification sur devis pour cabinets dentaires au Niger.' },
  }
  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Niger' }]} />
      <PageHero eyebrow="Fournisseur B2B Niger" title="Matériel dentaire au Niger (Niamey)" subtitle="AfriSmile aide les dentistes au Niger à choisir des équipements durables, adaptés au flux patient et au budget." image="/assets/illustration-equipment.jpg" chips={['Niamey', 'Installation cadrée', 'Maintenance préventive']}>
        <Link to="/contact" className="btn-primary">Obtenir un devis</Link>
        <Link to="/solutions-cabinets" className="btn-secondary">Voir les solutions</Link>
      </PageHero>
    </main>
  )
}
