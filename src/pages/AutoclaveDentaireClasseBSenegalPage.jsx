import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function AutoclaveDentaireClasseBSenegalPage() {
  return (
    <main className="container-page page-wrap space-y-10">
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
    </main>
  )
}
