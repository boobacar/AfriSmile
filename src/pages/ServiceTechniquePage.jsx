import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

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
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Support technique"
        title="Service technique AfriSmile : continuité, sécurité et rapidité"
        subtitle="Notre équipe terrain intervient pour garantir le bon fonctionnement de vos équipements et la continuité de votre activité clinique."
        image="/assets/page-service.jpg"
        chips={['Interventions planifiées', 'SAV réactif', 'Pièces critiques disponibles']}
      >
        <Link to="/contact" className="btn-primary">Ouvrir un dossier SAV</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Couverture technique complète</h2>
        <p className="section-subtitle">De l’installation au suivi préventif, vous bénéficiez d’un accompagnement structuré.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h2 className="font-heading text-xl font-bold text-brand-dark">{service.title}</h2>
              <p className="mt-2 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
