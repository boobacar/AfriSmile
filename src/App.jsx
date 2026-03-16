import { Route, Routes, useLocation } from 'react-router-dom'
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
import { blogPosts } from './data/siteData'

const seoPages = {
  '/': {
    title: 'Matériel dentaire au Sénégal | Vente, installation & SAV | AfriSmile',
    description:
      'AfriSmile fournit du matériel médical dentaire au Sénégal: fauteuils, stérilisation, imagerie, installation, SAV et accompagnement cabinet.',
  },
  '/produits': {
    title: 'Catalogue matériel dentaire Sénégal | Prix & devis | AfriSmile',
    description:
      'Catalogue de matériel dentaire professionnel: fauteuils, compresseurs, autoclaves, imagerie et consommables. Devis rapide à Dakar.',
  },
  '/equipement-dentaire-dakar': {
    title: 'Équipement dentaire à Dakar | Livraison, installation, maintenance',
    description:
      'Équipement dentaire à Dakar pour cabinets et cliniques: conseil achat, livraison, installation et maintenance technique locale AfriSmile.',
  },
  '/materiel-dentaire-senegal': {
    title: 'Fournisseur matériel dentaire Sénégal | AfriSmile',
    description:
      'Fournisseur de matériel dentaire au Sénégal pour cabinets privés et centres médicaux: offre complète, mise en service et support terrain.',
  },
  '/fauteuil-dentaire-senegal': {
    title: 'Fauteuil dentaire Sénégal | Comparatif, prix, installation | AfriSmile',
    description:
      'Choisissez un fauteuil dentaire adapté à votre cabinet au Sénégal: options, budget, ergonomie, installation et maintenance.',
  },
  '/autoclave-dentaire-classe-b-senegal': {
    title: 'Autoclave dentaire Classe B Sénégal | Vente & mise en service',
    description:
      'Autoclaves dentaires Classe B au Sénégal: conformité, cycles de stérilisation, installation et suivi technique AfriSmile.',
  },
  '/scanner-intra-oral-senegal': {
    title: 'Scanner intra-oral Sénégal | Devis & accompagnement | AfriSmile',
    description:
      'Scanner intra-oral au Sénégal pour dentistes: productivité, précision clinique, formation et intégration au flux numérique.',
  },
  '/blog': {
    title: 'Blog matériel dentaire Sénégal | Guides achat & conseils | AfriSmile',
    description:
      'Guides pratiques AfriSmile: fauteuils, stérilisation, scanner intra-oral et bonnes pratiques pour cabinets dentaires au Sénégal.',
  },
  '/contact': {
    title: 'Demande de devis matériel dentaire | Réponse rapide | AfriSmile',
    description:
      'Contactez AfriSmile pour un devis de matériel dentaire au Sénégal. Réponse rapide, conseil personnalisé et accompagnement de bout en bout.',
  },
}

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

function makeBlogSeo(pathname) {
  if (!pathname.startsWith('/blog/')) return null
  const slug = pathname.split('/')[2]
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return null

  return {
    title: `${post.title} | Blog AfriSmile`,
    description: post.excerpt,
  }
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
    const dynamicBlogSeo = makeBlogSeo(location.pathname)
    const current = dynamicBlogSeo || seoPages[location.pathname] || seoPages['/']
    const origin = window.location.origin
    const canonicalUrl = `${origin}${location.pathname}`

    document.title = current.title

    ensureMeta('description').setAttribute('content', current.description)
    ensureMeta('robots').setAttribute('content', 'index, follow, max-image-preview:large')
    ensureMeta('og:title', 'property').setAttribute('content', current.title)
    ensureMeta('og:description', 'property').setAttribute('content', current.description)
    ensureMeta('og:type', 'property').setAttribute('content', 'website')
    ensureMeta('og:url', 'property').setAttribute('content', canonicalUrl)
    ensureMeta('twitter:card').setAttribute('content', 'summary_large_image')
    ensureMeta('twitter:title').setAttribute('content', current.title)
    ensureMeta('twitter:description').setAttribute('content', current.description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    const oldOrg = document.getElementById('jsonld-organization')
    if (oldOrg) oldOrg.remove()
    const oldBreadcrumb = document.getElementById('jsonld-breadcrumb')
    if (oldBreadcrumb) oldBreadcrumb.remove()

    const organizationJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'AfriSmile',
      url: origin,
      logo: `${origin}/assets/logo-afrismile.png`,
      image: `${origin}/assets/page-home.jpg`,
      email: 'contact@afrismile.net',
      telephone: '+221770946397',
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
        telephone: '+221770946397',
        contactType: 'customer service',
        areaServed: 'SN',
        availableLanguage: ['fr'],
      },
    }

    const orgScript = document.createElement('script')
    orgScript.id = 'jsonld-organization'
    orgScript.type = 'application/ld+json'
    orgScript.textContent = JSON.stringify(organizationJsonLd)
    document.head.appendChild(orgScript)

    const breadcrumbJsonLd = makeBreadcrumbJsonLd(origin, location.pathname)
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
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
