import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function MaterielDentaireSenegalPage() {
  return (
    <main className="container-page page-wrap space-y-10">
      <PageHero
        eyebrow="Fournisseur B2B"
        title="Matériel dentaire au Sénégal pour cabinets, cliniques et centres médicaux"
        subtitle="AfriSmile vous aide à choisir, financer et déployer votre équipement dentaire avec une approche orientée performance clinique et fiabilité opérationnelle."
        image="/assets/illustration-equipment.jpg"
        chips={['Conseil achat', 'Installation', 'SAV local']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Voir les produits</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Ce que nous fournissons</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Fauteuils dentaires complets et ergonomiques</li>
          <li className="card-muted">Systèmes de stérilisation et autoclaves Classe B</li>
          <li className="card-muted">Imagerie et scanner intra-oral</li>
          <li className="card-muted">Consommables, pièces et accessoires</li>
        </ul>
      </section>
    </main>
  )
}
