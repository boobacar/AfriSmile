import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import QuoteForm from '../components/QuoteForm'
import Breadcrumbs from '../components/Breadcrumbs'

const avantages = [
  { title: 'Réponse en 24h', desc: 'Un conseiller technique analyse votre projet et vous envoie un devis détaillé sous 24h ouvrées.' },
  { title: "Pas d'engagement", desc: 'Le devis est gratuit et sans obligation. Comparez, posez vos questions, ajustez votre budget.' },
  { title: 'Installation incluse', desc: "Chaque devis intègre l'installation, la mise en service et la formation de votre équipe." },
  { title: 'Assistance locale', desc: 'Entretien, diagnostic et pièces disponibles au Sénégal et en Afrique de l’Ouest.' },
]

const faqs = [
  {
    q: 'Que contient un devis AfriSmile ?',
    a: "Un devis détaillé avec le prix unitaire de chaque équipement, le coût d'installation, les délais de livraison et les conditions d'assistance après achat. Tout est transparent, sans frais cachés.",
  },
  {
    q: 'Combien de temps pour recevoir un devis ?',
    a: 'Nous répondons en moins de 24h ouvrées. Pour les projets complexes (ouverture de cabinet complet), nous planifions un appel technique sous 48h.',
  },
  {
    q: 'Pouvez-vous adapter le devis à mon budget ?',
    a: 'Oui, nous proposons plusieurs configurations (entrée de gamme, milieu de gamme, premium) pour chaque type de cabinet. Vous choisissez selon vos priorités cliniques et financières.',
  },
  {
    q: 'Intervenez-vous en dehors de Dakar ?',
    a: 'Oui, nous couvrons tout le Sénégal et 13 pays d’Afrique de l’Ouest : Mauritanie, Côte d’Ivoire, Bénin, Burkina Faso, Cameroun, Ghana, Guinée, Guinée-Bissau, Mali, Niger, Nigeria, Togo.',
  },
]

const checklist = [
  'Le type de cabinet : ouverture, extension, remplacement ou montée en gamme',
  'Les équipements prioritaires : fauteuil, autoclave, imagerie, scanner, instruments',
  'La ville d’installation, la date souhaitée et les contraintes du local',
  'Le niveau d’accompagnement attendu : livraison, mise en service, formation, suivi',
]

const pageLinks = [
  { name: 'Matériel dentaire Sénégal', link: '/materiel-dentaire-senegal' },
  { name: 'Équipement dentaire Dakar', link: '/equipement-dentaire-dakar' },
  { name: 'Fauteuil dentaire Sénégal', link: '/fauteuil-dentaire-senegal' },
  { name: 'Autoclave Classe B Sénégal', link: '/autoclave-dentaire-classe-b-senegal' },
  { name: 'Scanner intra-oral Sénégal', link: '/scanner-intra-oral-senegal' },
  { name: 'Solutions cabinets', link: '/solutions-cabinets' },
]

export default function DevisMaterielDentairePage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Devis matériel dentaire' }]} />

      <PageHero
        eyebrow="Devis gratuit et sans engagement"
        title="Devis matériel dentaire au Sénégal et en Afrique de l'Ouest"
        subtitle="Remplissez le formulaire ci-dessous et recevez en 24h un devis détaillé adapté à votre projet : ouverture, modernisation ou extension de cabinet."
        showImage={false}
        chips={['Réponse 24h', 'Installation incluse', 'Assistance locale']}
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="min-w-0">
          <QuoteForm />
        </div>

        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold text-brand-dark">Pourquoi demander un devis AfriSmile ?</h2>
          <div className="grid gap-3">
            {avantages.map((item) => (
              <div key={item.title} className="card-muted">
                <h3 className="font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Nos catégories d'équipement</h2>
        <p className="section-subtitle">Un devis peut couvrir une ou plusieurs catégories selon l'ampleur de votre projet.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Fauteuils dentaires', link: '/fauteuil-dentaire-senegal', icon: '🪑' },
            { name: 'Stérilisation & autoclaves', link: '/autoclave-dentaire-classe-b-senegal', icon: '🧪' },
            { name: 'Scanner intra-oral', link: '/scanner-intra-oral-senegal', icon: '📐' },
            { name: 'Imagerie (RVG, panoramique)', link: '/produits', icon: '🩻' },
            { name: 'Consommables & instruments', link: '/produits', icon: '💉' },
            { name: 'Installation & service technique', link: '/service-technique', icon: '🔧' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="card p-4 transition hover:border-brand-cyan">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="mt-2 font-semibold text-brand-dark">{cat.name}</h3>
              <span className="mt-1 text-sm text-brand-blue">Voir →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Ce qu’il faut préparer pour obtenir un devis vraiment utile</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {checklist.map((item) => (
            <article key={item} className="card-muted text-sm text-slate-700">{item}</article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Pages utiles avant d’envoyer votre demande</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {pageLinks.map((item) => (
            <Link key={item.link} to={item.link} className="card p-4 transition hover:border-brand-cyan">
              <h3 className="font-semibold text-brand-dark">{item.name}</h3>
              <span className="mt-1 block text-sm text-brand-blue">Ouvrir la page →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Questions fréquentes sur les devis</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item) => (
            <article key={item.q} className="card-muted">
              <h3 className="font-semibold text-brand-dark">{item.q}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand-dark p-8 text-center text-white">
        <h2 className="font-heading text-2xl font-bold">Prêt à équiper votre cabinet ?</h2>
        <p className="mt-3 text-slate-300">Un conseiller AfriSmile vous recontacte pour affiner votre devis, classer les achats prioritaires et planifier l'installation.</p>
        <a href="https://wa.me/221784389393?text=Bonjour%20AfriSmile%2C%20je%20souhaite%20un%20devis." target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full bg-brand-cyan px-8 py-3 font-semibold text-brand-dark transition hover:bg-white">
          WhatsApp direct
        </a>
      </section>
    </main>
  )
}
