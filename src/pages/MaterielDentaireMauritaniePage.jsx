import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'AfriSmile livre-t-il du matériel dentaire en Mauritanie ?', a: 'Oui, nous accompagnons les cabinets dentaires en Mauritanie, notamment à Nouakchott, avec une offre complète et un support projet.' },
  { q: 'Quels équipements recommandez-vous en priorité ?', a: 'Fauteuil dentaire, autoclave Classe B, compresseur sans huile avec sécheur, aspiration et instrumentation de base.' },
  { q: 'Comment obtenir un devis rapide ?', a: 'Passez par la page contact pour recevoir un devis structuré selon votre activité et votre budget.' },
]

export default function MaterielDentaireMauritaniePage() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }
  const productJsonLd = {
    '@context': 'https://schema.org', '@type': 'Product', name: 'Matériel dentaire professionnel Mauritanie', category: 'Équipements médicaux dentaires', brand: { '@type': 'Brand', name: 'AfriSmile' }, areaServed: ['MR'],
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'MRU', price: '0', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'MRU', price: '0' }, url: 'https://afrismile.net/contact', description: 'Tarification sur devis pour cabinets dentaires en Mauritanie.' },
  }
  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Mauritanie' }]} />
      <PageHero eyebrow="Fournisseur B2B Mauritanie" title="Matériel dentaire en Mauritanie (Nouakchott)" subtitle="AfriSmile accompagne les cliniques mauritaniennes avec des équipements dentaires fiables et un cadre de déploiement clair." image="/assets/flag-mauritanie.svg" chips={['Nouakchott', 'Devis sur mesure', 'Support technique']}>
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Voir le catalogue</Link>
      </PageHero>
    </main>
  )
}
