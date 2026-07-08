import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'Quel matériel dentaire proposez-vous en Côte d\'Ivoire ?',
    a: 'Nous proposons une gamme complète : fauteuils dentaires de grandes marques, autoclaves Classe B, imagerie 3D, compresseurs tropicaux, instruments et consommables.',
  },
  {
    q: 'Proposez-vous l’installation et la mise en service à Abidjan ?',
    a: 'Oui, AfriSmile assure la livraison, l’installation complète, les tests techniques et la formation de vos équipes directement dans votre clinique.',
  },
  {
    q: 'Comment obtenir un devis pour ma clinique en Côte d\'Ivoire ?',
    a: 'Contactez-nous via notre page contact ou WhatsApp pour recevoir un devis détaillé, adapté à votre spécialité et à votre budget.',
  },
]

export default function MaterielDentaireCoteDIvoirePage() {
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
    name: 'Matériel dentaire professionnel Côte d\'Ivoire',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['CI'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XOF',
      price: '0',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' },
      url: 'https://afrismile.net/contact',
      description: 'Tarification sur devis selon configuration cabinet à Abidjan et partout en Côte d\'Ivoire.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Côte d\'Ivoire' }]} />

      <PageHero
        eyebrow="Fournisseur B2B Côte d'Ivoire"
        title="Matériel dentaire en Côte d'Ivoire (Abidjan) pour cliniques et cabinets"
        subtitle="AfriSmile vous accompagne pour équiper votre cabinet dentaire en Côte d'Ivoire. Fauteuils, stérilisation, imagerie : du conseil à l'installation avec SAV."
        image="/assets/flag-cote-divoire.svg"
        chips={['Livraison Abidjan', 'Installation sur site', 'Garantie locale']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Voir le catalogue</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Équiper votre clinique en Côte d'Ivoire</h2>
        <p className="section-subtitle">Nous fournissons l'essentiel pour créer ou moderniser votre structure dentaire.</p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Fauteuils dentaires ergonomiques et fiables</li>
          <li className="card-muted">Autoclaves Classe B et chaîne de stérilisation</li>
          <li className="card-muted">Imagerie : Scanner intra-oral et radiologie 3D</li>
          <li className="card-muted">Compresseurs et aspirations adaptés au climat</li>
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens rapides</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/solutions-cabinets" className="btn-secondary">Solutions aménagement</Link>
          <Link to="/produits" className="btn-secondary">Notre catalogue</Link>
          <Link to="/blog/comment-ouvrir-une-clinique-dentaire-en-cote-divoire-2026" className="btn-secondary">Guide d'ouverture CI</Link>
          <Link to="/contact" className="btn-primary">Contactez-nous</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Équipement Dentaire Côte d'Ivoire</h2>
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
