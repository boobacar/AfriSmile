import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import SolutionsPage from './pages/SolutionsPage'
import BrandsPage from './pages/BrandsPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServiceTechniquePage from './pages/ServiceTechniquePage'
import ModelesAchatPage from './pages/ModelesAchatPage'
import ConditionsPage from './pages/ConditionsPage'
import PrivacyPage from './pages/PrivacyPage'
import MentionsPage from './pages/MentionsPage'
import MaterielDentaireSenegalPage from './pages/MaterielDentaireSenegalPage'
import EquipementDentaireDakarPage from './pages/EquipementDentaireDakarPage'
import FauteuilDentaireSenegalPage from './pages/FauteuilDentaireSenegalPage'
import AutoclaveDentaireClasseBSenegalPage from './pages/AutoclaveDentaireClasseBSenegalPage'
import ScannerIntraOralSenegalPage from './pages/ScannerIntraOralSenegalPage'
import NotFoundPage from './pages/NotFoundPage'
import { blogPosts } from './data/siteData'
import { SITE_ORIGIN, getSeoForPath } from './data/seoData'

const pathLabels = {
  produits: 'Produits',
  'solutions-cabinets': 'Solutions cabinets',
  'service-technique': 'Service technique',
  'modeles-achat': 'Modèles d’achat',
  marques: 'Marques',
  blog: 'Blog',
  'a-propos': 'À propos',
  contact: 'Contact',
  'conditions-generales': 'Conditions générales',
  'politique-confidentialite': 'Politique de confidentialité',
  'mentions-legales': 'Mentions légales',
  'materiel-dentaire-senegal': 'Matériel dentaire Sénégal',
  'equipement-dentaire-dakar': 'Équipement dentaire Dakar',
  'fauteuil-dentaire-senegal': 'Fauteuil dentaire Sénégal',
  'autoclave-dentaire-classe-b-senegal': 'Autoclave dentaire Classe B',
  'scanner-intra-oral-senegal': 'Scanner intra-oral Sénégal',
  '404': 'Page introuvable',
}

function ensureMeta(propertyOrName, attr = 'name') {
  const selector = `meta[${attr}="${propertyOrName}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, propertyOrName)
    document.head.appendChild(tag)
  }
  return tag
}

function makeBreadcrumbJsonLd(origin, pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const items = [{ name: 'Accueil', item: `${origin}/` }]

  let currentPath = ''
  segments.forEach((segment) => {
    currentPath += `/${segment}`

    let name = pathLabels[segment]
    if (!name && segments[0] === 'blog' && segment !== 'blog') {
      const post = blogPosts.find((item) => item.slug === segment)
      name = post?.title || 'Article'
    }
    if (!name) {
      name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
    }

    items.push({ name, item: `${origin}${currentPath}` })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

function SeoHandler() {
  const location = useLocation()

  useEffect(() => {
    const current = getSeoForPath(location.pathname)
    const origin = SITE_ORIGIN
    const canonicalPath = current.canonicalPath
    const canonicalUrl = current.canonicalUrl
    const socialImageUrl = current.socialImageUrl
    const robotsContent = current.robots

    document.title = current.title

    ensureMeta('description').setAttribute('content', current.description)
    ensureMeta('robots').setAttribute('content', robotsContent)
    ensureMeta('og:title', 'property').setAttribute('content', current.title)
    ensureMeta('og:description', 'property').setAttribute('content', current.description)
    ensureMeta('og:type', 'property').setAttribute('content', current.type || 'website')
    ensureMeta('og:site_name', 'property').setAttribute('content', 'AfriSmile')
    ensureMeta('og:locale', 'property').setAttribute('content', 'fr_SN')
    ensureMeta('og:url', 'property').setAttribute('content', canonicalUrl)
    ensureMeta('og:image', 'property').setAttribute('content', socialImageUrl)
    ensureMeta('twitter:card').setAttribute('content', 'summary_large_image')
    ensureMeta('twitter:title').setAttribute('content', current.title)
    ensureMeta('twitter:description').setAttribute('content', current.description)
    ensureMeta('twitter:image').setAttribute('content', socialImageUrl)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    const oldOrg = document.getElementById('jsonld-organization')
    if (oldOrg) oldOrg.remove()
    const oldService = document.getElementById('jsonld-service')
    if (oldService) oldService.remove()
    const oldBreadcrumb = document.getElementById('jsonld-breadcrumb')
    if (oldBreadcrumb) oldBreadcrumb.remove()

    const organizationJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${origin}#organization`,
      name: 'AfriSmile',
      url: origin,
      logo: `${origin}/assets/logo-afrismile.png`,
      image: `${origin}/assets/page-home.jpg`,
      email: 'contact@afrismile.net',
      telephone: '+221784389393',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Liberté 06 Cité CSE Villa 72',
        addressLocality: 'Dakar',
        addressRegion: 'Dakar',
        addressCountry: 'SN',
      },
      areaServed: [
        'Sénégal',
        'Mauritanie',
        'Côte d’Ivoire',
        'Bénin',
        'Burkina Faso',
        'Cameroun',
        'Cap-Vert',
        'Gambie',
        'Ghana',
        'Guinée',
        'Guinée-Bissau',
        'Niger',
        'Nigeria',
        'Togo',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+221784389393',
        contactType: 'customer service',
        areaServed: ['SN', 'MR', 'CI', 'BJ', 'BF', 'CM', 'CV', 'GM', 'GH', 'GN', 'GW', 'NE', 'NG', 'TG'],
        availableLanguage: ['fr'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Catalogue AfriSmile',
        itemListElement: [
          { '@type': 'OfferCatalog', name: 'Fauteuils dentaires' },
          { '@type': 'OfferCatalog', name: 'Stérilisation & autoclaves Classe B' },
          { '@type': 'OfferCatalog', name: 'Scanner intra-oral & imagerie' },
          { '@type': 'OfferCatalog', name: 'Consommables & instruments' },
          { '@type': 'OfferCatalog', name: 'Installation & service technique' },
        ],
      },
    }

    const orgScript = document.createElement('script')
    orgScript.id = 'jsonld-organization'
    orgScript.type = 'application/ld+json'
    orgScript.textContent = JSON.stringify(organizationJsonLd)
    document.head.appendChild(orgScript)

    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${origin}#service`,
      serviceType: 'Fourniture, installation et maintenance de matériel dentaire',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${origin}#organization`,
      },
      areaServed: ['SN', 'MR', 'CI', 'BJ', 'BF', 'CM', 'CV', 'GM', 'GH', 'GN', 'GW', 'NE', 'NG', 'TG'],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${origin}/contact`,
        availableLanguage: ['fr'],
      },
      offers: {
        '@type': 'Offer',
        url: `${origin}/contact`,
        priceCurrency: 'XOF',
        price: '0',
        description: 'Tarification et déploiement sur devis selon configuration du cabinet et pays d’intervention.',
      },
    }

    const serviceScript = document.createElement('script')
    serviceScript.id = 'jsonld-service'
    serviceScript.type = 'application/ld+json'
    serviceScript.textContent = JSON.stringify(serviceJsonLd)
    document.head.appendChild(serviceScript)

    const breadcrumbJsonLd = makeBreadcrumbJsonLd(origin, canonicalPath)
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.id = 'jsonld-breadcrumb'
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.textContent = JSON.stringify(breadcrumbJsonLd)
    document.head.appendChild(breadcrumbScript)
  }, [location.pathname])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <SeoHandler />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProductsPage />} />
        <Route path="/solutions-cabinets" element={<SolutionsPage />} />
        <Route path="/service-technique" element={<ServiceTechniquePage />} />
        <Route path="/modeles-achat" element={<ModelesAchatPage />} />
        <Route path="/marques" element={<BrandsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/conditions-generales" element={<ConditionsPage />} />
        <Route path="/politique-confidentialite" element={<PrivacyPage />} />
        <Route path="/mentions-legales" element={<MentionsPage />} />
        <Route path="/materiel-dentaire-senegal" element={<MaterielDentaireSenegalPage />} />
        <Route path="/equipement-dentaire-dakar" element={<EquipementDentaireDakarPage />} />
        <Route path="/fauteuil-dentaire-senegal" element={<FauteuilDentaireSenegalPage />} />
        <Route path="/autoclave-dentaire-classe-b-senegal" element={<AutoclaveDentaireClasseBSenegalPage />} />
        <Route path="/scanner-intra-oral-senegal" element={<ScannerIntraOralSenegalPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
