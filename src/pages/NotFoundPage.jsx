import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

export default function NotFoundPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Page introuvable' }]} />

      <PageHero
        eyebrow="Erreur 404"
        title="Cette page n’existe pas"
        subtitle="Le lien est peut-être incorrect ou le contenu a été déplacé. Revenez au catalogue ou contactez-nous pour être orienté rapidement."
        showImage={false}
        chips={['Navigation sécurisée', 'Support AfriSmile', 'Site en français']}
      />

      <section className="section-shell">
        <div className="mt-2 flex flex-wrap gap-3">
          <Link to="/" className="btn-secondary">Retour à l’accueil</Link>
          <Link to="/produits" className="btn-secondary">Voir les produits</Link>
          <Link to="/blog" className="btn-secondary">Lire le blog</Link>
          <Link to="/contact" className="btn-primary">Demander un accompagnement</Link>
        </div>
      </section>
    </main>
  )
}
