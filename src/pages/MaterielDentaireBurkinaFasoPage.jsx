import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'AfriSmile livre-t-il du matériel dentaire au Burkina Faso ?',
    a: 'Oui, AfriSmile accompagne les cabinets au Burkina Faso, notamment à Ouagadougou et Bobo-Dioulasso, avec des solutions d’équipement, d’installation et de mise en service.',
  },
  {
    q: 'Quel budget pour un cabinet dentaire à Ouagadougou ?',
    a: 'Le budget dépend du nombre de postes, du niveau d’imagerie, de la stérilisation et des besoins d’installation. AfriSmile prépare un devis sur mesure selon votre projet clinique.',
  },
  {
    q: 'Une assistance après installation est-elle disponible au Burkina Faso ?',
    a: 'Oui, nous orientons les choix vers des équipements faciles à entretenir, avec pièces à prévoir et suivi après installation.',
  },
]

const priorities = [
  'Fauteuil dentaire fiable et ergonomique pour omnipratique ou chirurgie',
  'Autoclave Classe B et chaîne de stérilisation adaptée au flux réel',
  'Compresseur sans huile, aspiration et instrumentation de base',
  'Plan d’installation, mise en service et prise en main équipe',
]

const processSteps = [
  'Analyse rapide du besoin clinique, du budget et du calendrier d’ouverture',
  'Sélection des équipements prioritaires selon le flux patient',
  'Devis détaillé avec options, services et logique d’installation',
  'Coordination livraison, déploiement et support après mise en route',
]

export default function MaterielDentaireBurkinaFasoPage() {
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
    name: 'Matériel dentaire professionnel Burkina Faso',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['BF'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XOF',
      url: 'https://www.afrismile.net/contact',
      description: 'Tarification sur devis pour cabinets dentaires au Burkina Faso.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Burkina Faso' }]} />

      <PageHero
        eyebrow="Accompagnement cabinets Burkina Faso"
        title="Matériel dentaire au Burkina Faso (Ouagadougou)"
        subtitle="AfriSmile aide les dentistes au Burkina Faso à choisir des équipements durables, à mieux lire leurs devis et à sécuriser l’installation, la stérilisation et l’accompagnement après achat."
        image="/assets/flag-burkina-faso.svg"
        chips={['Ouagadougou', 'Installation cadrée', 'Maintenance préventive']}
      >
        <Link to="/contact" className="btn-primary">Obtenir un devis</Link>
        <Link to="/solutions-cabinets" className="btn-secondary">Voir les solutions</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Ce qu’un cabinet doit prioriser au Burkina Faso</h2>
        <p className="section-subtitle">
          Pour éviter les achats déséquilibrés, le plus rentable consiste à sécuriser le socle clinique avant les options secondaires.
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {priorities.map((item) => (
            <li key={item} className="card-muted">{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Méthode AfriSmile pour un projet à Ouagadougou</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {processSteps.map((item, index) => (
            <article key={item} className="card-muted">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Étape {index + 1}</p>
              <p className="mt-2 text-sm text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Pourquoi enrichir le devis avant achat</h2>
        <p className="section-subtitle">
          Un devis utile doit distinguer matériel, accessoires, installation, garantie, consommables de départ et logique de maintenance. Cette lecture réduit les surcoûts cachés et accélère la décision.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/modeles-achat" className="btn-secondary">Structurer le budget</Link>
          <Link to="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Comparer la stérilisation</Link>
          <Link to="/contact" className="btn-primary">Demander un devis Burkina Faso</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Burkina Faso</h2>
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
