import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'

const faqs = [
  {
    q: 'AfriSmile fournit-il du matériel dentaire au Cameroun ?',
    a: 'Oui, nous accompagnons les cliniques dentaires au Cameroun, notamment à Douala et Yaoundé, avec des équipements, installation et support technique.',
  },
  {
    q: 'Quels équipements recommandez-vous pour un cabinet à Douala ?',
    a: 'Nous recommandons un pack prioritaire : fauteuil dentaire fiable, autoclave Classe B, compresseur sans huile avec sécheur, aspiration et instruments rotatifs.',
  },
  {
    q: 'Comment obtenir un devis adapté au marché camerounais ?',
    a: 'Envoyez votre besoin via la page contact. Nous préparons un devis structuré selon votre spécialité, votre budget et votre calendrier de déploiement.',
  },
]

export default function MaterielDentaireCamerounPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Matériel dentaire professionnel Cameroun',
    category: 'Équipements médicaux dentaires',
    brand: { '@type': 'Brand', name: 'AfriSmile' },
    areaServed: ['CM'],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XAF',
      price: '0',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'XAF', price: '0' },
      url: 'https://afrismile.net/contact',
      description: 'Tarification sur devis pour cabinets dentaires à Douala, Yaoundé et dans tout le Cameroun.',
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Matériel dentaire Cameroun' }]} />

      <PageHero
        eyebrow="Fournisseur B2B Cameroun"
        title="Matériel dentaire au Cameroun (Douala, Yaoundé)"
        subtitle="AfriSmile aide les cabinets et cliniques au Cameroun à sécuriser leurs achats de matériel dentaire avec un accompagnement de bout en bout."
        image="/assets/illustration-equipment.jpg"
        chips={['Douala & Yaoundé', 'Installation sur site', 'SAV professionnel']}
      >
        <Link to="/contact" className="btn-primary">Demander un devis</Link>
        <Link to="/produits" className="btn-secondary">Voir le catalogue</Link>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Équipements clés pour les cabinets dentaires au Cameroun</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li className="card-muted">Fauteuils dentaires ergonomiques et robustes</li>
          <li className="card-muted">Autoclaves Classe B et stérilisation conforme</li>
          <li className="card-muted">Scanner intra-oral et imagerie dentaire</li>
          <li className="card-muted">Compresseurs tropicaux et consommables</li>
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Liens rapides</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <Link to="/materiel-dentaire-senegal" className="btn-secondary">Base logistique Sénégal</Link>
          <Link to="/blog/comparatif-meilleurs-compresseurs-dentaires-afrique" className="btn-secondary">Guide compresseur Afrique</Link>
          <Link to="/contact" className="btn-primary">Parler à un expert</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">FAQ Matériel Dentaire Cameroun</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item) => (
            <article key={item.q} className="card-muted">
              <h3 className="font-semibold text-brand-dark">{item.q}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
