import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function ScannerIntraOralSenegalPage() {
  return (
    <main className="container-page page-wrap space-y-10">
      <PageHero
        eyebrow="Dentisterie numérique"
        title="Scanner intra-oral au Sénégal : gagnez en précision et en productivité"
        subtitle="Digitalisez vos empreintes, accélérez votre flux clinique et améliorez l’expérience patient avec un scanner intra-oral adapté."
        image="/assets/page-solutions.jpg"
        chips={['Workflow numérique', 'Formation', 'Support local']}
      >
        <Link to="/contact" className="btn-primary">Recevoir une proposition</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Bénéfices pour votre cabinet</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Empreintes plus rapides et confort patient amélioré</li>
          <li className="card-muted">Meilleure communication praticien-laboratoire</li>
          <li className="card-muted">Réduction des reprises et gain de temps clinique</li>
          <li className="card-muted">Traçabilité numérique des cas</li>
        </ul>
      </section>
    </main>
  )
}
