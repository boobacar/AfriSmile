import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'Quel matériel dentaire proposez-vous au Sénégal ?',
    a: 'Nous proposons fauteuils dentaires, stérilisation, imagerie, instruments, consommables et solutions de maintenance pour cabinets et cliniques.',
  },
  {
    q: 'Proposez-vous l’installation et la mise en service ?',
    a: 'Oui, AfriSmile assure la livraison, l’installation, les tests et la prise en main de vos équipes.',
  },
  {
    q: 'Comment obtenir un devis ?',
    a: 'Via la page contact ou WhatsApp, avec une réponse rapide selon votre spécialité, budget et planning.',
  },
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
    name: 'Matériel dentaire professionnel AfriSmile',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: 'SN',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XOF',
      price: '0',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XOF', price: '0' },
      url: 'https://afrismile.net/contact',
      description: 'Tarification sur devis selon configuration cabinet.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Sénégal' }]} />

      <PageHero
        eyebrow="Fournisseur B2B"
        title="Matériel dentaire au Sénégal pour cabinets, cliniques et centres médicaux"
        subtitle="AfriSmile vous aide à choisir, financer et déployer votre équipement dentaire avec une approche orientée performance clinique et fiabilité opérationnelle."
        image="/assets/illustration-equipment.jpg"
        chips={['Conseil achat', 'Installation', 'SAV local']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Voir les produits</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Ce que nous fournissons</h2>
        <p className="section-subtitle">Une offre complète en matériel médical dentaire pour création, modernisation ou extension de cabinet.</p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Fauteuils dentaires complets et ergonomiques</li>
          <li className="card-muted">Systèmes de stérilisation et autoclaves Classe B</li>
          <li className="card-muted">Imagerie et scanner intra-oral</li>
          <li className="card-muted">Consommables, pièces et accessoires</li>
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens utiles pour décider vite</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/produits" className="btn-secondary">Voir le catalogue</Link>
          <Link to="/fauteuil-dentaire-senegal" className="btn-secondary">Comparer les fauteuils</Link>
          <Link to="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Autoclaves Classe B</Link>
          <Link to="/contact" className="btn-primary">Demander un devis</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ matériel dentaire Sénégal</h2>
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
