import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function ModelesAchatPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Parcours d’acquisition"
        title="Modèles d’achat flexibles selon vos objectifs de cabinet"
        subtitle="AfriSmile propose des parcours adaptés à votre phase de développement : ouverture, croissance ou modernisation technique."
        image="/assets/illustration-instruments.jpg"
        chips={['Devis personnalisés', 'Conseil budgétaire', 'Planification des échéances']}
      >
        <Link to="/contact" className="btn-primary">Obtenir une recommandation</Link>
      </PageHero>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="card">
          <p className="chip inline-block">Modèle recommandé</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-brand-dark">Catalogue + devis personnalisé</h2>
          <p className="mt-2 text-slate-600">Vous consultez les gammes, nous structurons une proposition adaptée incluant installation, SAV et planning.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Comparatif clair des options techniques</li>
            <li>• Ajustement en fonction de votre budget FCFA</li>
            <li>• Validation finale avec planning de déploiement</li>
          </ul>
        </section>

        <section className="card">
          <p className="chip inline-block">Option roadmap e-commerce</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-brand-dark">Paiement en ligne (optionnel)</h2>
          <p className="mt-2 text-slate-600">Activation progressive d’un tunnel d’achat pour produits éligibles, avec paiement sécurisé et suivi de commande.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Catalogue structuré par disponibilité</li>
            <li>• Paiement sécurisé et confirmation automatisée</li>
            <li>• Support humain pour les dossiers complexes</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
