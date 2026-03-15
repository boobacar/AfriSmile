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
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const pageTitles = {
  '/': 'AfriSmile | Équipement dentaire professionnel',
  '/produits': 'Produits dentaires | AfriSmile',
  '/solutions-cabinets': 'Solutions cabinets dentaires | AfriSmile',
  '/marques': 'Marques partenaires | AfriSmile',
  '/blog': 'Blog dentaire | AfriSmile',
  '/a-propos': 'À propos | AfriSmile',
  '/contact': 'Contact & devis | AfriSmile',
}

function SeoHandler() {
  const location = useLocation()

  useEffect(() => {
    document.title = pageTitles[location.pathname] || pageTitles['/']

    const desc = document.querySelector('meta[name="description"]')
    if (desc) {
      desc.setAttribute('content', 'AfriSmile fournit des équipements dentaires: fauteuils, stérilisation, radiologie et consommables avec installation et maintenance.')
    }
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <SeoHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProductsPage />} />
        <Route path="/solutions-cabinets" element={<SolutionsPage />} />
        <Route path="/marques" element={<BrandsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
