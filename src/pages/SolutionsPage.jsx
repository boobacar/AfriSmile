import { Briefcase, ClipboardCheck, PackageCheck, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function SolutionsPage() {
  const items = [
    {
      text: 'Installation de cabinet : fauteuil, compresseur, autoclave, mobilier',
      icon: PackageCheck,
    },
    {
      text: 'Pack ouverture cabinet pour jeunes dentistes',
      icon: Briefcase,
    },
    {
      text: 'Pack cabinet starter : fauteuil dentaire + compresseur + autoclave + turbine',
      icon: Stethoscope,
    },
    {
      text: 'Accompagnement sur le choix du matériel selon budget et volume de patients',
      icon: ClipboardCheck,
    },
  ]

  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Solutions clés en main"
        title="Des solutions sur mesure pour ouvrir, structurer ou moderniser votre cabinet"
        subtitle="Nous combinons conseil, fourniture, installation et accompagnement terrain afin de sécuriser chaque étape de votre projet clinique."
        showImage={false}
        chips={['Étude de besoin', 'Déploiement progressif', 'Suivi opérationnel']}
      >
        <Link to="/contact" className="btn-primary">Planifier un échange</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Nos interventions les plus demandées</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.text} className="card">
                <div className="flex items-start gap-2">
                  <Icon size={18} className="mt-0.5 text-brand-cyan" />
                  <span>{item.text}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="card-muted">
          <div className="flex items-center gap-2">
            <ClipboardCheck size={18} className="text-brand-cyan" />
            <h3 className="font-semibold text-brand-dark">Phase 1 : cadrage</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">Audit des besoins, priorisation des équipements et budget cible en FCFA.</p>
        </article>
        <article className="card-muted">
          <div className="flex items-center gap-2">
            <PackageCheck size={18} className="text-brand-cyan" />
            <h3 className="font-semibold text-brand-dark">Phase 2 : déploiement</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">Commande, installation, tests de conformité et formation rapide des équipes.</p>
        </article>
        <article className="card-muted">
          <div className="flex items-center gap-2">
            <Stethoscope size={18} className="text-brand-cyan" />
            <h3 className="font-semibold text-brand-dark">Phase 3 : optimisation</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">SAV, maintenance préventive, ajustements et extension progressive du plateau technique.</p>
        </article>
      </section>
    </main>
  )
}
