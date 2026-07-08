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
        subtitle="Nous combinons conseil, fourniture, installation et accompagnement sur place pour vous aider à avancer sereinement à chaque étape de votre projet."
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
            <h3 className="font-semibold text-brand-dark">Phase 1 : préparation</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">Nous clarifions vos besoins, les équipements prioritaires et le budget à prévoir.</p>
        </article>
        <article className="card-muted">
          <div className="flex items-center gap-2">
            <PackageCheck size={18} className="text-brand-cyan" />
            <h3 className="font-semibold text-brand-dark">Phase 2 : déploiement</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">Nous organisons la commande, l’installation, les vérifications de base et la prise en main de l’équipe.</p>
        </article>
        <article className="card-muted">
          <div className="flex items-center gap-2">
            <Stethoscope size={18} className="text-brand-cyan" />
            <h3 className="font-semibold text-brand-dark">Phase 3 : suivi</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">Nous restons disponibles pour l’entretien, les ajustements et les futurs besoins de votre cabinet.</p>
        </article>
      </section>
    </main>
  )
}
