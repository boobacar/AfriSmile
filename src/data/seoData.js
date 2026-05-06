import { blogPosts } from './siteData.js'

export const SITE_ORIGIN = 'https://afrismile.net'

export const seoPages = {
  '/': {
    title: 'Matériel dentaire Sénégal & Afrique de l’Ouest | AfriSmile',
    description:
      'AfriSmile fournit du matériel dentaire au Sénégal et en Afrique de l’Ouest: fauteuils, stérilisation, imagerie, installation, SAV et accompagnement cabinet.',
    imagePath: '/assets/page-home.jpg',
  },
  '/produits': {
    title: 'Catalogue matériel dentaire Sénégal | Prix & devis | AfriSmile',
    description:
      'Catalogue de matériel dentaire professionnel: fauteuils, compresseurs, autoclaves, imagerie et consommables. Devis rapide à Dakar.',
    imagePath: '/assets/page-products.jpg',
  },
  '/solutions-cabinets': {
    title: 'Solutions cabinet dentaire Sénégal | Ouverture & modernisation',
    description:
      'Solutions AfriSmile pour ouvrir, équiper ou moderniser un cabinet dentaire au Sénégal: conseil, matériel, installation, formation et support terrain.',
    imagePath: '/assets/page-solutions.jpg',
  },
  '/service-technique': {
    title: 'SAV matériel dentaire Sénégal | Maintenance & installation',
    description:
      'Service technique AfriSmile pour équipements dentaires au Sénégal: installation, maintenance préventive, diagnostic, pièces et support SAV local.',
    imagePath: '/assets/page-service.jpg',
  },
  '/modeles-achat': {
    title: 'Modèles d’achat matériel dentaire au Sénégal | AfriSmile',
    description:
      'Comparez les modèles d’achat AfriSmile pour équiper votre cabinet dentaire au Sénégal: devis sur mesure, planification et accompagnement technique.',
    imagePath: '/assets/page-products.jpg',
  },
  '/marques': {
    title: 'Marques matériel dentaire | KaVo, Stern Weber, NSK | AfriSmile',
    description:
      'Découvrez les marques dentaires distribuées par AfriSmile au Sénégal: fauteuils, instruments, stérilisation, imagerie et pièces disponibles.',
    imagePath: '/assets/page-brands.jpg',
  },
  '/a-propos': {
    title: 'AfriSmile | Fournisseur dentaire Sénégal & Afrique de l’Ouest',
    description:
      'AfriSmile accompagne les cabinets dentaires au Sénégal et en Afrique de l’Ouest avec une offre de matériel, installation, maintenance et conseil.',
    imagePath: '/assets/page-about.jpg',
  },
  '/equipement-dentaire-dakar': {
    title: 'Équipement dentaire à Dakar | Livraison, installation, maintenance',
    description:
      'Équipement dentaire à Dakar pour cabinets et cliniques: conseil achat, livraison, installation et maintenance technique locale AfriSmile.',
    imagePath: '/assets/illustration-clinic.jpg',
  },
  '/materiel-dentaire-senegal': {
    title: 'Fournisseur matériel dentaire Sénégal & Afrique de l’Ouest | AfriSmile',
    description:
      'Fournisseur de matériel dentaire au Sénégal et en Afrique de l’Ouest pour cabinets privés et centres médicaux: offre complète, mise en service et support terrain.',
    imagePath: '/assets/illustration-equipment.jpg',
  },
  '/fauteuil-dentaire-senegal': {
    title: 'Fauteuil dentaire Sénégal | Comparatif, prix, installation | AfriSmile',
    description:
      'Choisissez un fauteuil dentaire adapté à votre cabinet au Sénégal: options, budget, ergonomie, installation et maintenance.',
    imagePath: '/assets/page-products.jpg',
  },
  '/autoclave-dentaire-classe-b-senegal': {
    title: 'Autoclave dentaire Classe B Sénégal | Vente & mise en service',
    description:
      'Autoclaves dentaires Classe B au Sénégal: conformité, cycles de stérilisation, installation et suivi technique AfriSmile.',
    imagePath: '/assets/illustration-instruments.jpg',
  },
  '/scanner-intra-oral-senegal': {
    title: 'Scanner intra-oral Sénégal | Devis & accompagnement | AfriSmile',
    description:
      'Scanner intra-oral au Sénégal pour dentistes: productivité, précision clinique, formation et intégration au flux numérique.',
    imagePath: '/assets/page-solutions.jpg',
  },
  '/blog': {
    title: 'Blog matériel dentaire Sénégal | Guides achat & conseils | AfriSmile',
    description:
      'Guides pratiques AfriSmile: fauteuils, stérilisation, scanner intra-oral et bonnes pratiques pour cabinets dentaires au Sénégal.',
    imagePath: '/assets/page-blog.jpg',
  },
  '/contact': {
    title: 'Devis matériel dentaire Sénégal & Afrique de l’Ouest | AfriSmile',
    description:
      'Contactez AfriSmile pour un devis rapide en matériel dentaire au Sénégal et en Afrique de l’Ouest : conseil, livraison, installation et SAV.',
    imagePath: '/assets/page-contact.jpg',
  },
  '/conditions-generales': {
    title: 'Conditions générales de vente | AfriSmile',
    description:
      'Conditions générales AfriSmile pour la vente, livraison, installation et maintenance de matériel dentaire au Sénégal et en Afrique de l’Ouest.',
    imagePath: '/assets/page-legal.jpg',
  },
  '/politique-confidentialite': {
    title: 'Politique de confidentialité | AfriSmile',
    description:
      'Politique de confidentialité AfriSmile: traitement des demandes de devis, contact, données personnelles et sécurité des informations clients.',
    imagePath: '/assets/page-legal.jpg',
  },
  '/mentions-legales': {
    title: 'Mentions légales | AfriSmile',
    description:
      'Mentions légales du site AfriSmile: éditeur, coordonnées, hébergement et informations de contact pour le Sénégal et l’Afrique de l’Ouest.',
    imagePath: '/assets/page-legal.jpg',
  },
  '/404': {
    title: 'Page introuvable | AfriSmile',
    description:
      'La page demandée est introuvable. Consultez nos solutions et notre catalogue de matériel dentaire au Sénégal.',
    robots: 'noindex, follow',
  },
}

export function makeBlogSeo(pathname) {
  if (!pathname.startsWith('/blog/')) return null
  const slug = pathname.split('/')[2]
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return null

  return {
    title: post.metaTitle || `${post.title} | Blog AfriSmile`,
    description: post.metaDescription || post.excerpt,
    imagePath: '/assets/page-blog.jpg',
    type: 'article',
  }
}

export function getSeoForPath(pathname) {
  const dynamicBlogSeo = makeBlogSeo(pathname)
  const current = dynamicBlogSeo || seoPages[pathname] || seoPages['/404']
  const canonicalPath = dynamicBlogSeo || seoPages[pathname] ? pathname : '/404'

  return {
    ...current,
    canonicalPath,
    canonicalUrl: `${SITE_ORIGIN}${canonicalPath}`,
    socialImageUrl: `${SITE_ORIGIN}${current.imagePath || '/assets/page-home.jpg'}`,
    robots: current.robots || 'index, follow, max-image-preview:large',
  }
}
