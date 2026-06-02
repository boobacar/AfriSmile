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
    title: 'Catalogue matériel dentaire Sénégal: prix & devis | AfriSmile',
    description:
      'Catalogue AfriSmile pour cabinets au Sénégal: fauteuils, autoclaves, imagerie et consommables. Recevez un devis rapide avec installation et SAV local.',
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
      'Service technique AfriSmile: installation, maintenance préventive, diagnostic, pièces et SAV local pour éviter les arrêts de cabinet.',
    imagePath: '/assets/page-service.jpg',
  },
  '/modeles-achat': {
    title: 'Modèles d’achat matériel dentaire au Sénégal | AfriSmile',
    description:
      'Comparez les modèles d’achat AfriSmile pour équiper votre cabinet dentaire au Sénégal: devis sur mesure, planification et accompagnement technique.',
    imagePath: '/assets/page-products.jpg',
  },
  '/marques': {
    title: 'Marques dentaires au Sénégal : KaVo, Stern Weber, NSK | AfriSmile',
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
    title: 'Équipement dentaire Dakar: devis, installation, SAV | AfriSmile',
    description:
      'Équipement dentaire à Dakar pour cabinets et cliniques: conseil achat, livraison, installation et maintenance technique locale AfriSmile.',
    imagePath: '/assets/illustration-clinic.jpg',
  },
  '/materiel-dentaire-senegal': {
    title: 'Matériel Dentaire Sénégal: Devis, Prix & Installation | AfriSmile',
    description:
      'Matériel dentaire au Sénégal : devis rapide, prix transparents et installation clé en main. Fauteuils, stérilisation, imagerie et SAV local AfriSmile.',
    imagePath: '/assets/illustration-equipment.jpg',
  },
  '/fauteuil-dentaire-senegal': {
    title: 'Fauteuil Dentaire Sénégal : Prix et Devis 2026 | AfriSmile',
    description:
      'Comparatif fauteuils dentaires 2026 au Sénégal : prix, ergonomie, installation et SAV local. Devis gratuit adapté à votre cabinet.',
    imagePath: '/assets/page-products.jpg',
  },
  '/autoclave-dentaire-classe-b-senegal': {
    title: 'Autoclave Classe B Sénégal : Prix, Devis et SAV | AfriSmile',
    description:
      'Autoclave Classe B au Sénégal : prix, conformité, installation et SAV local. Stérilisation fiable pour cabinets et cliniques. Devis gratuit en 24h.',
    imagePath: '/assets/illustration-instruments.jpg',
  },
  '/scanner-intra-oral-senegal': {
    title: 'Scanner Intra-Oral Sénégal : Prix, Devis et Démo | AfriSmile',
    description:
      'Scanner intra-oral au Sénégal : devis, installation et retour sur investissement. Optimisez votre flux numérique et la satisfaction patient. Devis 24h.',
    imagePath: '/assets/page-solutions.jpg',
  },
  '/blog': {
    title: 'Blog matériel dentaire Sénégal: guides achat | AfriSmile',
    description:
      'Guides pratiques AfriSmile pour cabinets en Afrique: fauteuils, stérilisation, scanner intra-oral, budget et décisions d’achat.',
    imagePath: '/assets/page-blog.jpg',
  },
  '/contact': {
    title: 'Devis Gratuit Matériel Dentaire Sénégal | Réponse 24h | AfriSmile',
    description:
      'Devis gratuit matériel dentaire Sénégal : réponse en 24h. Comparez prix, installation, SAV local et coût total. AfriSmile accompagne votre cabinet.',
    imagePath: '/assets/page-contact.jpg',
  },
  '/conditions-generales': {
    title: 'Conditions générales AfriSmile Sénégal | AfriSmile',
    description:
      'Conditions générales AfriSmile pour la vente, livraison, installation et maintenance de matériel dentaire au Sénégal et en Afrique de l’Ouest.',
    imagePath: '/assets/page-legal.jpg',
  },
  '/politique-confidentialite': {
    title: 'Politique confidentialité AfriSmile Sénégal | AfriSmile',
    description:
      'Politique de confidentialité AfriSmile: traitement des demandes de devis, contact, données personnelles et sécurité des informations clients.',
    imagePath: '/assets/page-legal.jpg',
  },
  '/mentions-legales': {
    title: 'Mentions légales AfriSmile Sénégal | AfriSmile',
    description:
      'Mentions légales du site AfriSmile: éditeur, coordonnées, hébergement et informations de contact pour le Sénégal et l’Afrique de l’Ouest.',
    imagePath: '/assets/page-legal.jpg',
  },
  '/materiel-dentaire-cote-divoire': {
    title: 'Matériel Dentaire Côte d\'Ivoire & Abidjan | AfriSmile',
    description: 'Fournisseur de matériel dentaire en Côte d\'Ivoire. Équipez votre cabinet à Abidjan avec nos fauteuils, autoclaves, et scanners intra-oraux.',
    imagePath: '/assets/illustration-clinic.jpg',
  },
  '/materiel-dentaire-mali': {
    title: 'Matériel dentaire Mali: fournisseur à Bamako | AfriSmile',
    description: 'Équipement dentaire professionnel au Mali: livraison et installation à Bamako pour fauteuils, stérilisation et imagerie.',
    imagePath: '/assets/illustration-instruments.jpg',
  },
  '/materiel-dentaire-cameroun': {
    title: 'Matériel Dentaire Cameroun (Douala, Yaoundé) | AfriSmile',
    description: 'Fournisseur de matériel dentaire au Cameroun: fauteuils, autoclaves Classe B, imagerie, installation et support technique pour cliniques à Douala et Yaoundé.',
    imagePath: '/assets/illustration-equipment.jpg',
  },
  '/materiel-dentaire-ghana': {
    title: 'Matériel Dentaire Ghana (Accra, Kumasi) | AfriSmile',
    description: 'Équipement dentaire professionnel au Ghana: conseil achat, livraison, installation et maintenance pour cabinets à Accra, Kumasi et au-delà.',
    imagePath: '/assets/illustration-clinic.jpg',
  },
  '/materiel-dentaire-nigeria': {
    title: 'Matériel Dentaire Nigeria (Lagos, Abuja) | AfriSmile',
    description: 'AfriSmile accompagne les cabinets au Nigeria avec du matériel dentaire fiable, de la stérilisation à l’imagerie, et un support orienté continuité clinique.',
    imagePath: '/assets/illustration-instruments.jpg',
  },
  '/materiel-dentaire-mauritanie': {
    title: 'Matériel Dentaire Mauritanie (Nouakchott) | AfriSmile',
    description: 'Équipez votre cabinet en Mauritanie avec AfriSmile: fauteuils, autoclaves Classe B, imagerie, installation et accompagnement technique.',
    imagePath: '/assets/illustration-clinic.jpg',
  },
  '/materiel-dentaire-niger': {
    title: 'Matériel dentaire Niger: fournisseur à Niamey | AfriSmile',
    description: 'Solutions de matériel dentaire au Niger: conseil achat, installation, maintenance et suivi pour cliniques et cabinets à Niamey.',
    imagePath: '/assets/illustration-equipment.jpg',
  },
  '/materiel-dentaire-guinee-bissau': {
    title: 'Matériel dentaire Guinée-Bissau: devis pro | AfriSmile',
    description: 'AfriSmile accompagne les cabinets en Guinée-Bissau avec des équipements dentaires fiables, un déploiement structuré et un support technique.',
    imagePath: '/assets/illustration-instruments.jpg',
  },
  '/materiel-dentaire-burkina-faso': {
    title: 'Matériel Dentaire Burkina Faso : Devis, Prix et SAV | AfriSmile',
    description: 'Matériel dentaire au Burkina Faso : fauteuils, autoclaves Classe B, imagerie. Devis gratuit, installation et SAV local à Ouagadougou et Bobo-Dioulasso.',
    imagePath: '/assets/illustration-equipment.jpg',
  },
  '/404': {
    title: 'Page introuvable AfriSmile Sénégal | AfriSmile',
    description:
      'La page demandée est introuvable. Découvrez les solutions AfriSmile au Sénégal: catalogue, conseils d’achat, devis et accompagnement technique.',
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
