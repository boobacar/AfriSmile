import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'AfriSmile livre-t-il du matériel dentaire en Mauritanie ?',
    a: 'Oui, nous accompagnons les cabinets dentaires en Mauritanie, notamment à Nouakchott, avec une offre complète et un support projet.',
  },
  {
    q: 'Quels équipements recommandez-vous en priorité ?',
    a: 'Fauteuil dentaire, autoclave Classe B, compresseur sans huile avec sécheur, aspiration, instrumentation de base et organisation de la stérilisation.',
  },
  {
    q: 'Comment obtenir un devis rapide ?',
    a: 'Passez par la page contact pour recevoir un devis structuré selon votre activité, votre budget, votre calendrier et le niveau de cabinet visé.',
  },
]

const keyPoints = [
  'Poste de soins dimensionné selon l’activité réelle du cabinet',
  'Chaîne de stérilisation sécurisée avec autoclave Classe B',
  'Imagerie et instrumentation adaptées au plan de croissance',
  'Support technique et visibilité sur les pièces critiques',
]

const valueBlocks = [
  'Lecture du coût total plutôt que du simple prix catalogue',
  'Priorisation claire entre indispensable, utile et extension future',
  'Préparation installation, mise en service et prise en main équipe',
  'Devis plus lisibles pour arbitrage rapide côté direction',
]

export default function MaterielDentaireMauritaniePage() {
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
    name: 'Matériel dentaire professionnel Mauritanie',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['MR'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'MRU',
      url: 'https://www.afrismile.net/contact',
      description: 'Tarification sur devis pour cabinets dentaires en Mauritanie.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Mauritanie' }]} />

      <PageHero
        eyebrow="Accompagnement cabinets Mauritanie"
        title="Matériel dentaire en Mauritanie (Nouakchott)"
        subtitle="AfriSmile accompagne les cliniques mauritaniennes avec des équipements dentaires fiables, des devis plus lisibles et un cadre de déploiement clair."
        image="/assets/flag-mauritanie.svg"
        chips={['Nouakchott', 'Devis sur mesure', 'Support technique']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Voir le catalogue</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Les priorités d’un projet d’équipement en Mauritanie</h2>
        <p className="section-subtitle">
          Le bon achat ne consiste pas à accumuler des équipements, mais à choisir un ensemble cohérent avec votre activité, votre budget et l’entretien à prévoir.
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {keyPoints.map((item) => (
            <li key={item} className="card-muted">{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Pourquoi un devis structuré change la décision</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {valueBlocks.map((item) => (
            <article key={item} className="card-muted text-sm text-slate-700">{item}</article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens rapides pour préparer votre projet</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/materiel-dentaire-senegal" className="btn-secondary">Voir aussi la page Sénégal</Link>
          <Link to="/modeles-achat" className="btn-secondary">Structurer le budget</Link>
          <Link to="/service-technique" className="btn-secondary">Support & maintenance</Link>
          <Link to="/contact" className="btn-primary">Recevoir un devis Mauritanie</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Mauritanie</h2>
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
