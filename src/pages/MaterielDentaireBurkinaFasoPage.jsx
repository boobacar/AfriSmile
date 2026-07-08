import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'AfriSmile livre-t-il du matériel dentaire au Burkina Faso ?', a: 'Oui, AfriSmile accompagne les cabinets au Burkina Faso, notamment à Ouagadougou et Bobo-Dioulasso, avec des solutions d’équipement et d’installation.' },
  { q: 'Quel budget pour un cabinet dentaire à Ouagadougou ?', a: 'Le budget dépend de la configuration souhaitée. AfriSmile propose un devis sur mesure selon votre projet et vos priorités cliniques.' },
  { q: 'Le SAV est-il disponible au Burkina Faso ?', a: 'Oui, nous assurons l’installation, la formation et le support technique avec un suivi local.' },
]

export default function MaterielDentaireBurkinaFasoPage() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }
  const productJsonLd = {
    '@context': 'https://schema.org', '@type': 'Product', name: 'Matériel dentaire professionnel Burkina Faso', category: 'Équipements médicaux dentaires', brand: { '@type': 'Brand', name: 'AfriSmile' }, areaServed: ['BF'],
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'XOF', price: '0', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' }, url: 'https://afrismile.net/contact', description: 'Tarification sur devis pour cabinets dentaires au Burkina Faso.' },
  }
  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Burkina Faso' }]} />
      <PageHero eyebrow="Fournisseur B2B Burkina Faso" title="Matériel dentaire au Burkina Faso (Ouagadougou)" subtitle="AfriSmile aide les dentistes au Burkina Faso à choisir des équipements durables, adaptés au flux patient et au budget." image="/assets/flag-burkina-faso.svg" chips={['Ouagadougou', 'Installation cadrée', 'Maintenance préventive']}>
        <Link to="/contact" className="btn-primary">Obtenir un devis</Link>
        <Link to="/solutions-cabinets" className="btn-secondary">Voir les solutions</Link>
      </PageHero>
    </main>
  )
}
