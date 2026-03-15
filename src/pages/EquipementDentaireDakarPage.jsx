import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function EquipementDentaireDakarPage() {
  return (
    <main className="container-page page-wrap space-y-10">
      <PageHero
        eyebrow="Dakar"
        title="Équipement dentaire à Dakar : vente, livraison, installation et maintenance"
        subtitle="Nous accompagnons les cabinets dentaires de Dakar dans la sélection des équipements, la mise en service et le suivi technique après installation."
        image="/assets/illustration-clinic.jpg"
        chips={['Dakar & régions', 'Intervention terrain', 'Support réactif']}
      >
        <Link to="/contact" className="btn-primary">Obtenir un devis rapide</Link>
        <Link to="/service-technique" className="btn-secondary">Service technique</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Pourquoi AfriSmile à Dakar</h2>
        <p className="section-subtitle">Un interlocuteur unique pour accélérer vos décisions d’investissement et sécuriser votre exploitation quotidienne.</p>
      </section>
    </main>
  )
}
