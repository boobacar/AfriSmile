import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'Proposez-vous des équipements dentaires pour le Nigeria ?',
    a: 'Oui, AfriSmile accompagne les cliniques au Nigeria, notamment à Lagos et Abuja, avec une approche orientée performance et continuité clinique.',
  },
  {
    q: 'Quels sont les critères clés pour choisir un fournisseur au Nigeria ?',
    a: 'Priorisez la fiabilité du matériel, la disponibilité des pièces, la capacité d’installation et la rapidité d’assistance après achat.',
  },
  {
    q: 'AfriSmile peut-il structurer un projet d’ouverture de cabinet ?',
    a: 'Oui. Nous aidons à prioriser les achats, établir le budget, planifier l’installation et prévoir l’assistance après déploiement.',
  },
]

export default function MaterielDentaireNigeriaPage() {
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
    name: 'Matériel dentaire professionnel Nigeria',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['NG'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'NGN',
      url: 'https://www.afrismile.net/contact',
      description: 'Tarification sur devis pour cabinets et centres dentaires à Lagos, Abuja et au Nigeria.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Nigeria' }]} />

      <PageHero
        eyebrow="Accompagnement cabinets Nigeria"
        title="Matériel dentaire au Nigeria (Lagos, Abuja)"
        subtitle="AfriSmile aide les cabinets nigérians à mieux s’équiper avec du matériel fiable et un accompagnement concret avant, pendant et après l’installation."
        image="/assets/flag-nigeria.svg"
        chips={['Lagos & Abuja', 'ROI équipement', 'Accompagnement complet']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Consulter le catalogue</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Solutions d’équipement dentaire pour le Nigeria</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Fauteuils dentaires pour omnipratique et chirurgie</li>
          <li className="card-muted">Autoclaves Classe B et protocoles de stérilisation</li>
          <li className="card-muted">Imagerie numérique et scanner intra-oral</li>
          <li className="card-muted">Support technique et plan de maintenance</li>
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens rapides</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/modeles-achat" className="btn-secondary">Modèles d’achat</Link>
          <Link to="/service-technique" className="btn-secondary">Entretien et assistance</Link>
          <Link to="/contact" className="btn-primary">Parler à AfriSmile</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Nigeria</h2>
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
