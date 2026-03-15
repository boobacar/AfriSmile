export default function ServiceTechniquePage() {
  const services = [
    {
      title: 'Installation',
      text: 'Mise en service complète des équipements, calibration et tests sécurité.',
    },
    {
      title: 'Maintenance',
      text: 'Contrats préventifs et interventions correctives rapides sur site.',
    },
    {
      title: 'Formation',
      text: 'Formation pratique pour dentistes et assistants sur les équipements.',
    },
    {
      title: 'Pièces de rechange',
      text: 'Disponibilité des pièces critiques pour réduire les arrêts de production.',
    },
  ]

  return (
    <main className="container-page page-wrap">
      <h1 className="section-title">Service technique</h1>
      <p className="section-subtitle">Un accompagnement terrain pour garantir la continuité de votre cabinet.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h2 className="font-heading text-xl font-bold text-brand-dark">{service.title}</h2>
            <p className="mt-2 text-slate-600">{service.text}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
