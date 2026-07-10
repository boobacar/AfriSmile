import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'Intervenez-vous uniquement à Dakar ?', a: 'Nous intervenons à Dakar et dans les régions selon le projet, avec organisation logistique adaptée.' },
  { q: 'Quels services sont inclus ?', a: 'Conseil, livraison, installation, paramétrage, formation initiale et support après-vente.' },
  { q: 'Quelle page consulter si mon projet est plus large que Dakar ?', a: 'La page matériel dentaire Sénégal et la page devis sont les meilleures portes d’entrée pour un projet multi-sites ou une ouverture plus globale.' },
]

const routeCards = [
  { title: 'Projet global Sénégal', desc: 'Pour cadrer un achat plus large qu’un simple besoin local à Dakar.', to: '/materiel-dentaire-senegal' },
  { title: 'Demande de devis', desc: 'Pour recevoir un chiffrage détaillé et prioriser les achats.', to: '/devis-materiel-dentaire' },
  { title: 'Solutions cabinets', desc: 'Pour ouvrir, structurer ou moderniser un cabinet étape par étape.', to: '/solutions-cabinets' },
]

export default function EquipementDentaireDakarPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Équipement dentaire Dakar' }]} />

      <PageHero
        eyebrow="Dakar"
        title="Équipement dentaire à Dakar : vente, livraison, installation et maintenance"
        subtitle="Nous accompagnons les cabinets dentaires de Dakar dans la sélection des équipements, la mise en service et le suivi technique après installation."
        image="/assets/illustration-clinic.jpg"
        chips={['Dakar & régions', 'Intervention terrain', 'Support réactif']}
      >
        <Link to="/contact" className="btn-primary">Obtenir un devis rapide</Link>
        <Link to="/service-technique" className="btn-secondary">Service technique</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Pourquoi AfriSmile à Dakar</h2>
        <p className="section-subtitle">Un interlocuteur unique pour accélérer vos décisions d’investissement et sécuriser votre exploitation quotidienne.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="card-muted text-sm text-slate-700"><strong>Audit du besoin</strong><br/>Nous cadrons votre spécialité, le volume patient, le budget et les priorités d’ouverture.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Installation locale</strong><br/>Préparation du local, livraison, raccordements, tests et mise en service des équipements.</div>
          <div className="card-muted text-sm text-slate-700"><strong>SAV à Dakar</strong><br/>Maintenance préventive, diagnostic rapide, pièces selon disponibilité et suivi après installation.</div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Équipements les plus demandés à Dakar</h2>
        <p className="section-subtitle">
          Les projets d’ouverture et de modernisation commencent souvent par un socle fiable: fauteuil dentaire,
          autoclave Classe B, compresseur, aspiration, instrumentation et imagerie. AfriSmile aide à prioriser
          les achats pour éviter les surcoûts et les retards de démarrage.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/fauteuil-dentaire-senegal" className="btn-secondary">Fauteuil dentaire</Link>
          <Link to="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Autoclave Classe B</Link>
          <Link to="/scanner-intra-oral-senegal" className="btn-secondary">Scanner intra-oral</Link>
          <Link to="/contact" className="btn-primary">Recevoir un devis Dakar</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Si votre besoin dépasse Dakar</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {routeCards.map((item) => (
            <Link key={item.to} to={item.to} className="card p-5 transition hover:border-brand-cyan">
              <h3 className="font-semibold text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <span className="mt-3 block text-sm text-brand-blue">Ouvrir →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ équipement dentaire Dakar</h2>
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
