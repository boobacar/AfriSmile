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

const seoPages = {
  '/': {
    title: 'Matériel dentaire au Sénégal | AfriSmile Dakar',
    description:
      'AfriSmile fournit du matériel médical dentaire au Sénégal: fauteuils, stérilisation, imagerie, installation, SAV et formation équipe.',
  },
  '/produits': {
    title: 'Vente matériel dentaire | Catalogue AfriSmile Sénégal',
    description:
      'Catalogue de matériel dentaire professionnel: fauteuils, compresseurs, autoclaves, imagerie et consommables. Devis rapide à Dakar.',
  },
  '/equipement-dentaire-dakar': {
    title: 'Équipement dentaire à Dakar | Vente, installation et SAV',
    description:
      'Équipement dentaire à Dakar pour cabinets et cliniques: conseil, livraison, installation et maintenance technique locale avec AfriSmile.',
  },
  '/materiel-dentaire-senegal': {
    title: 'Matériel dentaire Sénégal | Fournisseur AfriSmile',
    description:
      'Fournisseur de matériel dentaire au Sénégal pour cabinets privés, centres médicaux et projets dentaire: offre complète et accompagnement pro.',
  },
  '/fauteuil-dentaire-senegal': {
    title: 'Fauteuil dentaire Sénégal | Prix, installation, SAV',
    description:
      'Choisissez un fauteuil dentaire adapté à votre cabinet au Sénégal: options, budget, ergonomie, installation et maintenance.',
  },
  '/autoclave-dentaire-classe-b-senegal': {
    title: 'Autoclave dentaire Classe B Sénégal | Vente & support',
    description:
      'Autoclaves dentaires Classe B au Sénégal: conformité, cycles de stérilisation, mise en service et suivi technique AfriSmile.',
  },
  '/scanner-intra-oral-senegal': {
    title: 'Scanner intra-oral Sénégal | Solutions numériques dentaires',
    description:
      'Scanner intra-oral au Sénégal pour dentistes: productivité, précision clinique, formation et intégration au flux numérique.',
  },
  '/contact': {
    title: 'Demande de devis matériel dentaire | AfriSmile',
    description:
      'Contactez AfriSmile pour un devis de matériel dentaire au Sénégal. Réponse rapide, conseil personnalisé et accompagnement de bout en bout.',
  },
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

function SeoHandler() {
  const location = useLocation()

  useEffect(() => {
    const current = seoPages[location.pathname] || seoPages['/']
    const origin = window.location.origin
    const canonicalUrl = `${origin}${location.pathname}`

    document.title = current.title

    ensureMeta('description').setAttribute('content', current.description)
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

    const existing = document.getElementById('jsonld-organization')
    if (existing) existing.remove()

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AfriSmile',
      url: origin,
      logo: `${origin}/assets/logo-afrismile.png`,
      email: 'contact@afrismile.com',
      telephone: '+221770000000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dakar',
        addressCountry: 'SN',
      },
      areaServed: ['Sénégal', 'Afrique de l’Ouest'],
    }

    const script = document.createElement('script')
    script.id = 'jsonld-organization'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
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
