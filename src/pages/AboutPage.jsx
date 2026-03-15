import PageHero from '../components/PageHero'

export default function AboutPage() {
  const pillars = [
    {
      title: 'Mission',
      text: 'Fournir des équipements et consommables dentaires certifiés avec un accompagnement technique complet.',
    },
    {
      title: 'Vision',
      text: 'Devenir la référence de confiance pour l’équipement des cabinets dentaires en Afrique de l’Ouest.',
    },
    {
      title: 'Présence régionale',
      text: 'Interventions et accompagnement commercial sur plusieurs marchés d’Afrique de l’Ouest.',
    },
    {
      title: 'Expertise métier',
      text: 'Connaissance terrain des besoins cliniques, de la maintenance et des contraintes d’exploitation.',
    },
  ]

  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Notre histoire"
        title="À propos d’AfriSmile"
        subtitle="AfriSmile est spécialisée dans l’équipement dentaire en Afrique de l’Ouest avec une promesse simple : fiabilité, clarté et accompagnement durable."
        image="/assets/illustration-clinic.jpg"
        chips={['Approche terrain', 'Partenaires certifiés', 'Support local']}
      />

      <section className="section-shell">
        <h2 className="section-title">Nos engagements</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card">
              <h2 className="font-semibold text-brand-dark">{pillar.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
