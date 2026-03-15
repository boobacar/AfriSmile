import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

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
