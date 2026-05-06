import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  { q: 'Pourquoi choisir un autoclave Classe B ?', a: 'La Classe B est recommandée pour des cycles complets et une stérilisation fiable des instruments emballés et complexes.' },
  { q: 'Faites-vous la mise en service ?', a: 'Oui, nous assurons installation, paramétrage initial et conseils d’usage pour votre équipe.' },
]

export default function AutoclaveDentaireClasseBSenegalPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Autoclave dentaire Classe B Sénégal' }]} />

      <PageHero
        eyebrow="Stérilisation"
        title="Autoclave dentaire Classe B au Sénégal : sécurité, conformité et fiabilité"
        subtitle="Sélection, mise en service et suivi technique d’autoclaves Classe B pour répondre aux exigences de stérilisation en cabinet."
        image="/assets/illustration-instruments.jpg"
        chips={['Cycles validés', 'Maintenance', 'Accompagnement complet']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis autoclave</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Points de contrôle avant achat</h2>
        <p className="section-subtitle">Capacité utile, durée des cycles, traçabilité, disponibilité des pièces, et plan de maintenance préventive.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="card-muted text-sm text-slate-700"><strong>Dimensionnement</strong><br/>Choisir le volume utile selon le nombre de praticiens, la rotation instrumentale et les pics d’activité.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Mise en service</strong><br/>Contrôle de l’eau, test des cycles, formation équipe et consignes de traçabilité dès l’installation.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Maintenance</strong><br/>Planifier les contrôles, joints, filtres et consommables pour limiter les arrêts de stérilisation.</div>
          <div className="card-muted text-sm text-slate-700"><strong>Devis complet</strong><br/>Comparer prix, capacité, garantie, disponibilité pièces et accompagnement technique au Sénégal.</div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Quand remplacer ou ajouter un autoclave</h2>
        <p className="section-subtitle">
          Un autoclave sous-dimensionné ralentit les soins et augmente le risque d’erreur de protocole.
          En cas d’ouverture de cabinet, de hausse du volume patient ou de spécialités chirurgicales, AfriSmile
          aide à choisir une Classe B adaptée au rythme réel du cabinet.
        </p>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ autoclave dentaire Classe B</h2>
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
