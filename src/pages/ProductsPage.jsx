import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'
import { categories } from '../data/siteData'

const socialProof = [
  'Assistance locale rapide',
  'Installation et mise en service',
  'Aide au choix du matériel',
  'Réponse rapide sur WhatsApp',
]
const westAfricaLinks = [
  { href: '/materiel-dentaire-cote-divoire', label: 'Côte d’Ivoire', flag: '/assets/flag-cote-divoire.svg' },
  { href: '/materiel-dentaire-mali', label: 'Mali', flag: '/assets/flag-mali.svg' },
  { href: '/materiel-dentaire-burkina-faso', label: 'Burkina Faso', flag: '/assets/flag-burkina-faso.svg' },
  { href: '/materiel-dentaire-cameroun', label: 'Cameroun', flag: '/assets/flag-cameroun.svg' },
  { href: '/materiel-dentaire-ghana', label: 'Ghana', flag: '/assets/flag-ghana.svg' },
  { href: '/materiel-dentaire-nigeria', label: 'Nigeria', flag: '/assets/flag-nigeria.svg' },
  { href: '/materiel-dentaire-mauritanie', label: 'Mauritanie', flag: '/assets/flag-mauritanie.svg' },
  { href: '/materiel-dentaire-niger', label: 'Niger', flag: '/assets/flag-niger.svg' },
  { href: '/materiel-dentaire-guinee-bissau', label: 'Guinée-Bissau', flag: '/assets/flag-guinee-bissau.svg' },
]

const miniFaqByCategory = {
  fauteuils: [
    {
      q: 'Quel fauteuil choisir pour démarrer un cabinet ?',
      a: 'Nous recommandons un modèle ergonomique, évolutif et compatible avec votre volume d’actes.',
    },
    {
      q: 'Avez-vous une assistance après installation au Sénégal ?',
      a: 'Oui, AfriSmile assure l’entretien, le dépannage et le suivi avec une équipe locale.',
    },
  ],
  sterilisation: [
    {
      q: 'Autoclave Classe B ou autre technologie ?',
      a: 'La Classe B est généralement recommandée pour une stérilisation complète des instruments.',
    },
    {
      q: 'Proposez-vous la mise en service ?',
      a: 'Oui, installation, paramétrage et prise en main sont inclus selon le projet.',
    },
  ],
}

function makeWhatsappLink(productName) {
  const text = encodeURIComponent(`Bonjour AfriSmile, je souhaite un devis pour ${productName}.`)
  return `https://wa.me/221784389393?text=${text}`
}

const productImages = {
  f1: '/assets/product-kavo-dental.webp',
  f2: '/assets/product-stern-weber.jpg',
  c1: '/assets/product-gants-nitrile.jpg',
  c2: '/assets/product-aiguilles-anesthesie.jpg',
  c3: '/assets/product-bavettes-premium.webp',
  i1: '/assets/product-nsk-turbine.jpg',
  i2: '/assets/product-mani-kit.jpg',
  i3: '/assets/product-dentsply-sondes.jpg',
  s1: '/assets/product-autoclave-classe-b.jpg',
  s2: '/assets/product-sachets-sterilisation.webp',
  s3: '/assets/product-bacs-ultrasons.jpg',
  r1: '/assets/product-capteur-rvg.jpg',
  r2: '/assets/product-generateur-rx.jpg',
  r3: '/assets/product-tablier-plombe.jpg',
}

export default function ProductsPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Produits' }]} />

      <PageHero
        eyebrow="Catalogue professionnel"
        title="Catalogue de matériel dentaire professionnel au Sénégal"
        subtitle="Fauteuils, autoclaves, imagerie, consommables et instruments avec devis rapides, installation et accompagnement pour le Sénégal et l’Afrique de l’Ouest."
        showImage={false}
        chips={['Prix sur devis', 'Commande simple', 'Sénégal + Afrique de l’Ouest']}
      >
        <a href="/devis-materiel-dentaire" className="btn-primary">Demander un devis global</a>
      </PageHero>

      <section className="section-shell">
        <h2 className="section-title">Pourquoi commander chez AfriSmile</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socialProof.map((item) => (
            <div key={item} className="card-muted text-sm font-semibold text-slate-700">
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      <div className="sticky top-[118px] z-30 overflow-x-auto rounded-xl border border-slate-200 bg-white/90 p-2 backdrop-blur">
        <div className="flex min-w-max items-center gap-2">
          {categories.map((cat) => (
            <a key={cat.key} href={`#${cat.key}`} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand-cyan hover:text-brand-cyan">
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      <section className="section-shell">
        <h2 className="section-title">Guides d’achat par besoin</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <a href="/materiel-dentaire-senegal" className="btn-secondary">Matériel dentaire Sénégal</a>
          <a href="/equipement-dentaire-dakar" className="btn-secondary">Équipement dentaire Dakar</a>
          <a href="/fauteuil-dentaire-senegal" className="btn-secondary">Fauteuil dentaire Sénégal</a>
          <a href="/autoclave-dentaire-classe-b-senegal" className="btn-secondary">Autoclave Classe B</a>
          <a href="/scanner-intra-oral-senegal" className="btn-secondary">Scanner intra-oral</a>
          <a href="/blog/materiel-cabinet-dentaire-complet-prix-senegal-2026" className="btn-secondary">Prix d’un cabinet complet</a>
          <a href="/blog/appareil-dentaire-prix-dakar-senegal-2026" className="btn-secondary">Prix d’un appareil dentaire</a>
          <a href="/devis-materiel-dentaire" className="btn-primary">Devis gratuit →</a>
        </div>
      </section>

      <section className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title">Nos pages par pays en Afrique de l’Ouest</h2>
            <p className="section-subtitle">Accédez rapidement aux pages utiles pour votre pays, avec des conseils sur les équipements, les prix et l’installation.</p>
          </div>
          <a href="/contact" className="btn-secondary">Parler à un conseiller</a>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {westAfricaLinks.map((link) => (
            <a key={link.href} href={link.href} className="card flex items-center gap-3 p-3 transition hover:border-brand-cyan">
              <img src={link.flag} alt="" width="40" height="28" loading="lazy" className="h-7 w-10 rounded object-cover" />
              <span className="font-semibold text-brand-dark">Matériel dentaire {link.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Comment obtenir un prix fiable</h2>
        <p className="section-subtitle">
          Le prix d’un équipement dentaire dépend de votre cabinet, des options choisies,
          de l’installation et de l’aide souhaitée après l’achat. AfriSmile prépare des devis détaillés pour
          vous aider à comparer clairement chaque poste avant de vous décider.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="card-muted text-sm text-slate-700"><strong>1. Votre besoin principal</strong><br/>Fauteuil, stérilisation, imagerie, instruments ou consommables à acheter en priorité.</div>
          <div className="card-muted text-sm text-slate-700"><strong>2. Contraintes du local</strong><br/>Électricité, eau, aspiration, accès technique et planning de mise en service.</div>
          <div className="card-muted text-sm text-slate-700"><strong>3. Aide après achat</strong><br/>Formation, pièces disponibles, entretien et délai d’intervention en cas de besoin.</div>
        </div>
      </section>

      <div className="space-y-8">
        {categories.map((cat) => (
          <section key={cat.key} id={cat.key} className="section-shell scroll-mt-40">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-heading text-2xl font-bold text-brand-dark">{cat.name}</h2>
              <span className="chip">Disponible sur devis</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {cat.products.map((p) => (
                <article key={p.id} className="card bg-white">
                  <img
                    src={productImages[p.id] || '/assets/product-mani-kit.jpg'}
                    alt={`Illustration ${p.name}`}
                    className="mb-4 h-36 w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-slate-800">{p.name}</h3>
                    <span className="rounded-full bg-brand-light px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-cyan">Cabinet</span>
                  </div>

                  <p className="text-sm font-semibold text-brand-blue">{p.price}</p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    <li>• Photos HD disponibles</li>
                    <li>• Fiche technique détaillée</li>
                    <li>• Conseils d’installation et d’usage</li>
                    <li>• Brochure PDF sur demande</li>
                  </ul>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <a href="/contact" className="btn-primary w-full text-center">Demander un devis</a>
                    <a href={makeWhatsappLink(p.name)} target="_blank" rel="noreferrer" className="btn-secondary w-full text-center">WhatsApp</a>
                  </div>
                </article>
              ))}
            </div>

            {miniFaqByCategory[cat.key] && (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-brand-dark">FAQ rapide {cat.name.toLowerCase()}</h3>
                <div className="mt-3 grid gap-3">
                  {miniFaqByCategory[cat.key].map((item) => (
                    <article key={item.q} className="text-sm text-slate-700">
                      <p className="font-semibold">{item.q}</p>
                      <p>{item.a}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}
