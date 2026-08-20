import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'
import QuickAnswer from '../components/QuickAnswer'
import Breadcrumbs from '../components/Breadcrumbs'
import { getGeoPageByPath } from '../data/geoData'

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

export default function GeoLandingPage() {
  const { pathname } = useLocation()
  const page = getGeoPageByPath(pathname)

  if (!page) {
    return (
      <main className="container-page page-wrap py-20 text-center">
        <h1 className="text-2xl font-bold text-brand-dark">Page introuvable</h1>
        <p className="mt-3 text-slate-600">Cette page n’existe pas ou a été déplacée.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">Retour à l’accueil</Link>
      </main>
    )
  }

  const heroEyebrow =
    page.family === 'competence'
      ? 'Équipement dentaire professionnel'
      : page.family === 'secteur'
        ? 'Accompagnement de projets'
        : page.family === 'pays'
          ? 'Présence locale et livraison'
          : 'Présence sous-régionale'

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const serviceJsonLd =
    page.family !== 'pays-index'
      ? {
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
      : null

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {serviceJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} /> : null}

      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: page.breadcrumbName }]} />

      <PageHero eyebrow={heroEyebrow} title={page.h1} subtitle={page.lead} image={page.flag} chips={page.chips}>
        <Link to="/devis-materiel-dentaire" className="btn-primary">Obtenir un devis</Link>
        <Link to="/produits" className="btn-secondary">Parcourir le catalogue</Link>
      </PageHero>

      <QuickAnswer text={page.quickAnswer} />

      <section className="section-shell">
        <h2 className="section-title">
          {page.family === 'pays-index' ? 'Ce que nous proposons dans la sous-région' : 'Ce qui est inclus dans notre accompagnement'}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {page.features.map((feature) => (
            <li key={feature} className="card-muted">{feature}</li>
          ))}
        </ul>
      </section>

      {(page.family === 'competence' || page.family === 'secteur') && page.relatedCountries.length > 0 && (
        <section className="section-shell">
          <h2 className="section-title">Aussi disponible dans la sous-région</h2>
          <p className="section-subtitle">Le même accompagnement, pays par pays.</p>
          <div className="mt-4">
            <FlagGrid items={page.relatedCountries} />
          </div>
        </section>
      )}

      {page.family === 'pays' && (
        <>
          <section className="section-shell">
            <h2 className="section-title">Tous nos équipements dans ce pays</h2>
            <div className="mt-4">
              <LinkChips items={page.relatedPages} />
            </div>
          </section>
          <section className="section-shell">
            <h2 className="section-title">Projets et structures accompagnés</h2>
            <div className="mt-4">
              <LinkChips items={page.relatedSecteurs} />
            </div>
          </section>
          {page.staticPages.length > 0 && (
            <section className="section-shell">
              <h2 className="section-title">Pages dédiées</h2>
              <div className="mt-4">
                <LinkChips items={page.staticPages} />
              </div>
            </section>
          )}
          <section className="section-shell">
            <h2 className="section-title">Les autres pays desservis</h2>
            <div className="mt-4">
              <FlagGrid items={page.relatedCountries} />
            </div>
          </section>
        </>
      )}

      {page.family === 'pays-index' && (
        <section className="section-shell">
          <h2 className="section-title">17 pays desservis</h2>
          <p className="section-subtitle">Cliquez sur un pays pour découvrir notre offre locale.</p>
          <div className="mt-4">
            <FlagGrid items={page.relatedCountries} />
          </div>
        </section>
      )}

      {(page.family === 'competence' || page.family === 'secteur') && (
        <section className="section-shell">
          <h2 className="section-title">Pour aller plus loin</h2>
          <div className="mt-4">
            <LinkChips items={page.relatedPages} />
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
