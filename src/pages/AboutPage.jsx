import { Eye, Globe2, Target, Wrench } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function AboutPage() {
  const pillars = [
    {
      title: 'Mission',
      text: 'Fournir des équipements et consommables dentaires certifiés avec un accompagnement technique complet.',
      icon: Target,
    },
    {
      title: 'Vision',
      text: 'Devenir la référence de confiance pour l’équipement des cabinets dentaires en Afrique de l’Ouest.',
      icon: Eye,
    },
    {
      title: 'Présence régionale',
      text: 'Interventions au Sénégal et en Afrique de l’Ouest (Mauritanie, Côte d’Ivoire, Bénin, Burkina Faso, Cameroun, Cap-Vert, Gambie, Ghana, Guinée, Guinée-Bissau, Niger, Nigeria, Togo).',
      icon: Globe2,
    },
    {
      title: 'Expertise métier',
      text: 'Connaissance terrain des besoins cliniques, de la maintenance et des contraintes d’exploitation.',
      icon: Wrench,
    },
  ]

  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Notre histoire"
        title="À propos d’AfriSmile"
        subtitle="AfriSmile est spécialisée dans l’équipement dentaire en Afrique de l’Ouest avec une promesse simple : fiabilité, clarté et accompagnement durable."
        image="/assets/logo-afrismile.png"
        chips={['Approche terrain', 'Partenaires certifiés', 'Support local']}
      />

      <section className="section-shell">
        <h2 className="section-title">Nos engagements</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article key={pillar.title} className="card">
                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-brand-cyan" />
                  <h2 className="font-semibold text-brand-dark">{pillar.title}</h2>
                </div>
                <p className="mt-2 text-sm text-slate-600">{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
