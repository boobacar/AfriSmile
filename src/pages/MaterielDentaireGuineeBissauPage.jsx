import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'AfriSmile peut-il accompagner un cabinet en Guinée-Bissau ?', a: 'Oui, nous accompagnons les projets d’équipement dentaire en Guinée-Bissau avec une approche orientée fiabilité et continuité clinique.' },
  { q: 'Quels équipements choisir en premier ?', a: 'Le socle recommandé reste : fauteuil, autoclave Classe B, compresseur/aspiration et instruments essentiels.' },
  { q: 'Comment lancer mon projet ?', a: 'Contactez AfriSmile pour une proposition structurée selon votre plan clinique.' },
]

export default function MaterielDentaireGuineeBissauPage() {
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }
  const productJsonLd = {
    '@context': 'https://schema.org', '@type': 'Product', name: 'Matériel dentaire professionnel Guinée-Bissau', category: 'Équipements médicaux dentaires', brand: { '@type': 'Brand', name: 'AfriSmile' }, areaServed: ['GW'],
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'XOF', price: '0', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' }, url: 'https://afrismile.net/contact', description: 'Tarification sur devis pour cabinets dentaires en Guinée-Bissau.' },
  }
  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Guinée-Bissau' }]} />
      <PageHero eyebrow="Fournisseur B2B Guinée-Bissau" title="Matériel dentaire en Guinée-Bissau" subtitle="AfriSmile soutient les cliniques en Guinée-Bissau avec des équipements dentaires professionnels et un accompagnement opérationnel." image="/assets/illustration-instruments.jpg" chips={['Devis rapide', 'Équipement fiable', 'Accompagnement technique']}>
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Explorer les produits</Link>
      </PageHero>
    </main>
  )
}
