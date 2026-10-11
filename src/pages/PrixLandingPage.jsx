import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import QuickAnswer from '../components/QuickAnswer'
import Breadcrumbs from '../components/Breadcrumbs'
import { getPrixPageByPath } from '../data/geoPrix'

function FlagGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="card-muted flex items-center gap-2 p-3 transition hover:border-brand"
        >
          <img src={item.flag} alt={`Drapeau ${item.name}`} className="h-4 w-6 shrink-0 rounded-sm object-cover" loading="lazy" />
          <span className="text-sm font-medium text-slate-800">{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

function LinkChips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Link key={item.path} to={item.path} className="btn-secondary">
          {item.label}
        </Link>
      ))}
    </div>
  )
}

function CheckList({ title, subtitle, items }) {
  return (
    <section className="section-shell">
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="card-muted">{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default function PrixLandingPage() {
  const { pathname } = useLocation()
  const page = getPrixPageByPath(pathname)

  if (!page) {
    return (
      <main className="container-page page-wrap py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-dark">Page introuvable</h1>
        <p className="mt-3 text-slate-600">Cette page n’existe pas ou a été déplacée.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">Retour à l’accueil</Link>
      </main>
    )
  }

  const isVille = page.family === 'ville'
  const isPrixIndex = page.family === 'prix-index'
  const isVilleIndex = page.family === 'ville-index'
  const isIndex = isPrixIndex || isVilleIndex

  const faqJsonLd = page.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Fourniture, installation et maintenance de matériel dentaire',
    provider: { '@type': 'LocalBusiness', '@id': 'https://www.afrismile.net#organization' },
    areaServed: [page.iso],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.afrismile.net/devis-materiel-dentaire',
      availableLanguage: ['fr'],
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: page.breadcrumbName }]} />

      <PageHero
        eyebrow={
          isVilleIndex
            ? 'Villes desservies'
            : isPrixIndex
              ? 'Repères de prix'
              : isVille
                ? 'Matériel dentaire professionnel'
                : 'Repères de prix et choix du praticien'
        }
        title={page.h1}
        subtitle={page.lead}
        image={page.flag}
        chips={page.chips}
      >
        <Link to="/devis-materiel-dentaire" className="btn-primary">Obtenir un devis</Link>
        <Link to="/produits" className="btn-secondary">Parcourir le catalogue</Link>
      </PageHero>

      <QuickAnswer text={page.quickAnswer} />

      {isPrixIndex && (
        <section className="section-shell space-y-6">
          <div>
            <h2 className="section-title">Choisissez un soin, puis votre pays</h2>
            <p className="section-subtitle">Chaque page détaille ce qui fait varier le tarif et ce qu’un devis doit contenir.</p>
          </div>
          {page.soinGroups.map((group) => (
            <div key={group.name} className="card-muted">
              <h3 className="font-semibold text-brand-dark">Prix {group.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.links.map((link) => (
                  <Link key={link.path} to={link.path} className="btn-secondary">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {isVilleIndex && (
        <section className="section-shell space-y-6">
          <div>
            <h2 className="section-title">Choisissez votre ville</h2>
            <p className="section-subtitle">Livraison, installation et service après-vente ville par ville.</p>
          </div>
          {page.villeGroups.map((group) => (
            <div key={group.name} className="card-muted">
              <h3 className="font-semibold text-brand-dark flex items-center gap-2">
                <img src={group.flag} alt={`Drapeau ${group.name}`} className="h-4 w-6 rounded-sm object-cover" loading="lazy" />
                {group.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.links.map((link) => (
                  <Link key={link.path} to={link.path} className="btn-secondary">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {!isVille && !isIndex && (
        <>
          <CheckList
            title="Ce qui fait varier le prix"
            subtitle="Les mêmes soins peuvent afficher des écarts importants : voici les éléments qui expliquent réellement la différence."
            items={page.priceFactors}
          />
          <CheckList
            title="Ce qui est inclus dans un devis"
            subtitle="Un devis comparable détaille chaque étape. Voici ce qu’il doit contenir."
            items={page.features}
          />
          <CheckList
            title="Points à vérifier avant de vous engager"
            subtitle="Ces quatre questions évitent la plupart des mauvaises surprises après le devis."
            items={page.verify}
          />
          <section className="section-shell border-l-4 border-l-brand-cyan">
            <h2 className="section-title">À savoir sur AfriSmile</h2>
            <p className="mt-2 text-sm text-slate-700">
              AfriSmile n’est pas un cabinet dentaire et ne réalise pas de soins : pour un traitement, adressez-vous à un
              chirurgien-dentiste. Nous équipons les cabinets et cliniques de la sous-région en fauteuils, stérilisation,
              imagerie, instruments et consommables, avec installation et service après-vente.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/produits" className="btn-secondary">Voir les équipements</Link>
              <Link to="/devis-materiel-dentaire" className="btn-secondary">Demander un devis d’équipement</Link>
            </div>
          </section>
        </>
      )}

      {isVille && (
        <CheckList
          title="Ce que nous livrons et installons"
          subtitle="Un projet d’équipement complet, du choix du matériel à la mise en service."
          items={page.features}
        />
      )}

      {!isVille && page.relatedCountries.length > 0 && (
        <section className="section-shell">
          <h2 className="section-title">Le même sujet dans les autres pays</h2>
          <p className="section-subtitle">Repères de prix et conseils, pays par pays.</p>
          <div className="mt-4">
            <FlagGrid items={page.relatedCountries} />
          </div>
        </section>
      )}

      {isVille && page.relatedCountries.length > 0 && (
        <section className="section-shell">
          <h2 className="section-title">Autres pays desservis</h2>
          <div className="mt-4">
            <FlagGrid items={page.relatedCountries} />
          </div>
        </section>
      )}

      <section className="section-shell">
        <h2 className="section-title">Pour aller plus loin</h2>
        <div className="mt-4">
          <LinkChips items={page.relatedPages} />
        </div>
      </section>

      {(page.relatedVilles || []).length > 0 && (
        <section className="section-shell">
          <h2 className="section-title">{isVille ? 'Autres villes desservies' : 'Villes desservies dans ce pays'}</h2>
          <div className="mt-4">
            <LinkChips items={page.relatedVilles} />
          </div>
        </section>
      )}

      {page.articles.length > 0 && (
        <section className="section-shell">
          <h2 className="section-title">Guides et conseils</h2>
          <div className="mt-4">
            <LinkChips items={page.articles} />
          </div>
        </section>
      )}

      {page.faq && (
        <section className="section-shell">
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="mt-4 grid gap-3">
            {page.faq.map((item) => (
              <article key={item.q} className="card-muted">
                <h3 className="font-semibold text-brand-dark">{item.q}</h3>
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section-shell text-center">
        <h2 className="section-title">Un projet d’équipement ? Parlons-en.</h2>
        <p className="section-subtitle">Devis détaillé sous 24 h, installation clé en main et SAV local.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/devis-materiel-dentaire" className="btn-primary">Demander un devis</Link>
          <Link to="/contact" className="btn-secondary">Nous contacter</Link>
        </div>
      </section>
    </main>
  )
}
