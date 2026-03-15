import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function SolutionsPage() {
  const items = [
    'Installation de cabinet : fauteuil, compresseur, autoclave, mobilier',
    'Pack ouverture cabinet pour jeunes dentistes',
    'Pack cabinet starter : fauteuil dentaire + compresseur + autoclave + turbine',
    'Accompagnement sur le choix du matériel selon budget et volume de patients',
  ]

  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Solutions clés en main"
        title="Des solutions sur mesure pour ouvrir, structurer ou moderniser votre cabinet"
        subtitle="Nous combinons conseil, fourniture, installation et accompagnement terrain afin de sécuriser chaque étape de votre projet clinique."
        image="/assets/illustration-clinic.jpg"
        chips={['Étude de besoin', 'Déploiement progressif', 'Suivi opérationnel']}
      >
        <Link to="/contact" className="btn-primary">Planifier un échange</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Nos interventions les plus demandées</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="card">{item}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card-muted">
          <h3 className="font-semibold text-brand-dark">Phase 1 : cadrage</h3>
          <p className="mt-2 text-sm text-slate-600">Audit des besoins, priorisation des équipements et budget cible en FCFA.</p>
        </article>
        <article className="card-muted">
          <h3 className="font-semibold text-brand-dark">Phase 2 : déploiement</h3>
          <p className="mt-2 text-sm text-slate-600">Commande, installation, tests de conformité et formation rapide des équipes.</p>
        </article>
        <article className="card-muted">
          <h3 className="font-semibold text-brand-dark">Phase 3 : optimisation</h3>
          <p className="mt-2 text-sm text-slate-600">SAV, maintenance préventive, ajustements et extension progressive du plateau technique.</p>
        </article>
      </section>
    </main>
  )
}
