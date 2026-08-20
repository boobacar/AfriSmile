// geoData.js — Usine à pages géographiques AfriSmile
// 17 pays × 26 compétences + 12 filières + 17 hubs pays + 1 index pays ≈ 660 URLs dérivées.
// Les pages sont COMPUTÉES à la volée (jamais stockées en fichiers) : un composant lazy + 4 routes dynamiques.
// IMPORTANT: ce module ne doit être importé que par les outils node (sitemap/prerender) et le composant lazy
// GeoLandingPage — jamais par seoData.js (il gonflerait le bundle principal).

export const GEO_COUNTRIES = [
  { slug: 'senegal', iso: 'SN', name: 'Sénégal', prep: 'au', gen: 'du', capital: 'Dakar', cities: ['Dakar', 'Thiès', 'Saint-Louis'], flag: '/assets/flag-senegal.svg', currency: 'FCFA', note: 'Dakar concentre la majorité des cabinets, cliniques et facultés d’odontologie du pays, avec une demande forte en équipements fiables et en service après-vente réactif.' },
  { slug: 'cote-divoire', iso: 'CI', name: 'Côte d’Ivoire', prep: 'en', gen: 'de', capital: 'Abidjan', cities: ['Abidjan', 'Bouaké', 'Yamoussoukro'], flag: '/assets/flag-cote-divoire.svg', currency: 'FCFA', note: 'Abidjan est le pôle économique de la sous-région et compte un grand nombre de cliniques dentaires privées en croissance, notamment dans les quartiers d’affaires.' },
  { slug: 'mali', iso: 'ML', name: 'Mali', prep: 'au', gen: 'du', capital: 'Bamako', cities: ['Bamako', 'Ségou', 'Sikasso'], flag: '/assets/flag-mali.svg', currency: 'FCFA', note: 'La demande d’équipements dentaires à Bamako et dans les capitales régionales progresse, avec un besoin fort de matériel robuste adapté au climat sec et chaud.' },
  { slug: 'burkina-faso', iso: 'BF', name: 'Burkina Faso', prep: 'au', gen: 'du', capital: 'Ouagadougou', cities: ['Ouagadougou', 'Bobo-Dioulasso'], flag: '/assets/flag-burkina-faso.svg', currency: 'FCFA', note: 'Ouagadougou et Bobo-Dioulasso concentrent l’essentiel des cabinets et centres de formation, avec une exigence croissante sur la stérilisation et la maintenance.' },
  { slug: 'niger', iso: 'NE', name: 'Niger', prep: 'au', gen: 'du', capital: 'Niamey', cities: ['Niamey', 'Zinder', 'Maradi'], flag: '/assets/flag-niger.svg', currency: 'FCFA', note: 'À Niamey et dans les grandes villes, les praticiens recherchent des équipements durables, simples à entretenir et adaptés aux conditions climatiques.' },
  { slug: 'guinee', iso: 'GN', name: 'Guinée', prep: 'en', gen: 'de', capital: 'Conakry', cities: ['Conakry', 'Kankan', 'Kindia'], flag: '/assets/flag-guinee.svg', currency: 'GNF', note: 'Conakry voit s’ouvrir de nouveaux cabinets modernes, avec une demande en fauteuils, radiologie numérique et consommables de qualité.' },
  { slug: 'guinee-bissau', iso: 'GW', name: 'Guinée-Bissau', prep: 'en', gen: 'de', capital: 'Bissau', cities: ['Bissau'], flag: '/assets/flag-guinee-bissau.svg', currency: 'FCFA', note: 'Le marché de l’équipement dentaire reste émergent à Bissau : les praticiens cherchent des fournisseurs fiables capables de livrer et d’installer dans toute la sous-région.' },
  { slug: 'gambie', iso: 'GM', name: 'Gambie', prep: 'en', gen: 'de', capital: 'Banjul', cities: ['Banjul', 'Serrekunda'], flag: '/assets/flag-gambie.svg', currency: 'GMD', note: 'Les cabinets de Banjul et Serrekunda s’équipent progressivement et privilégient des fournisseurs capables de livrer rapidement depuis la sous-région.' },
  { slug: 'mauritanie', iso: 'MR', name: 'Mauritanie', prep: 'en', gen: 'de', capital: 'Nouakchott', cities: ['Nouakchott', 'Nouadhibou'], flag: '/assets/flag-mauritanie.svg', currency: 'MRU', note: 'Nouakchott concentre l’essentiel de l’activité dentaire du pays, avec un besoin marqué en équipements de stérilisation et en maintenance préventive.' },
  { slug: 'cap-vert', iso: 'CV', name: 'Cap-Vert', prep: 'au', gen: 'du', capital: 'Praia', cities: ['Praia', 'Mindelo'], flag: '/assets/flag-cap-vert.svg', currency: 'CVE', note: 'Sur l’archipel, Praia et Mindelo accueillent les principaux cabinets, souvent équipés via des fournisseurs continentaux capables de gérer la logistique insulaire.' },
  { slug: 'benin', iso: 'BJ', name: 'Bénin', prep: 'au', gen: 'du', capital: 'Cotonou', cities: ['Cotonou', 'Porto-Novo', 'Parakou'], flag: '/assets/flag-benin.svg', currency: 'FCFA', note: 'Cotonou, capitale économique, porte la demande d’équipement dentaire, portée par l’ouverture de cabinets et la modernisation des centres existants.' },
  { slug: 'togo', iso: 'TG', name: 'Togo', prep: 'au', gen: 'du', capital: 'Lomé', cities: ['Lomé', 'Kara'], flag: '/assets/flag-togo.svg', currency: 'FCFA', note: 'Lomé voit se développer de nouvelles cliniques dentaires, avec une attention particulière portée à la radiologie et à la stérilisation.' },
  { slug: 'ghana', iso: 'GH', name: 'Ghana', prep: 'au', gen: 'du', capital: 'Accra', cities: ['Accra', 'Kumasi', 'Takoradi'], flag: '/assets/flag-ghana.svg', currency: 'GHS', note: 'Accra et Kumasi comptent un tissu dense de cliniques privées et d’écoles dentaires, avec une forte demande en équipements numériques.' },
  { slug: 'nigeria', iso: 'NG', name: 'Nigeria', prep: 'au', gen: 'du', capital: 'Lagos', cities: ['Lagos', 'Abuja', 'Port Harcourt'], flag: '/assets/flag-nigeria.svg', currency: 'NGN', note: 'Avec Lagos et Abuja, le Nigeria est le plus grand marché de la sous-région : cliniques, hôpitaux et écoles s’équipent à grande échelle.' },
  { slug: 'liberia', iso: 'LR', name: 'Libéria', prep: 'au', gen: 'du', capital: 'Monrovia', cities: ['Monrovia'], flag: '/assets/flag-liberia.svg', currency: 'LRD', note: 'À Monrovia, la reconstruction du système de santé ouvre des besoins en équipement dentaire de base, stérilisation et consommables.' },
  { slug: 'sierra-leone', iso: 'SL', name: 'Sierra Leone', prep: 'en', gen: 'de', capital: 'Freetown', cities: ['Freetown', 'Bo'], flag: '/assets/flag-sierra-leone.svg', currency: 'SLL', note: 'Freetown concentre les cabinets dentaires du pays, avec un besoin prioritaire en équipements durables et en pièces de rechange disponibles.' },
  { slug: 'cameroun', iso: 'CM', name: 'Cameroun', prep: 'au', gen: 'du', capital: 'Douala', cities: ['Douala', 'Yaoundé'], flag: '/assets/flag-cameroun.svg', currency: 'FCFA', note: 'Douala et Yaoundé abritent de nombreux cabinets et cliniques, avec une demande soutenue en équipements complets et en service technique.' },
]

// Compétences dont le Sénégal dispose déjà d'une page statique riche (pas de doublon généré)
const SENEGAL_OVERRIDES = {
  'fauteuil-dentaire': { path: '/fauteuil-dentaire-senegal', label: 'Fauteuil dentaire Sénégal' },
  'autoclave-classe-b': { path: '/autoclave-dentaire-classe-b-senegal', label: 'Autoclave Classe B Sénégal' },
  'scanner-intra-oral': { path: '/scanner-intra-oral-senegal', label: 'Scanner intra-oral Sénégal' },
}

const DEFAULT_ARTICLES = [
  { slug: 'ouvrir-cabinet-dentaire-materiel-indispensable', label: 'Le matériel indispensable pour ouvrir un cabinet' },
  { slug: 'devis-materiel-dentaire-senegal-comment-comparer-2026', label: 'Comment comparer un devis matériel dentaire' },
  { slug: 'fournisseur-materiel-dentaire-afrique-ouest-criteres-fiabilite-2026', label: 'Fournisseur en Afrique de l’Ouest : les critères de fiabilité' },
]

export const GEO_COMPETENCES = [
  {
    slug: 'fauteuil-dentaire', name: 'Fauteuil dentaire', plural: 'fauteuils dentaires',
    h1Tpl: '{name} {prep} {pays} : devis, installation et SAV',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis rapide à {capital}, installation clé en main et SAV local. Marques professionnelles avec AfriSmile.',
    leadTpl: 'Équipez votre cabinet avec un fauteuil dentaire adapté à votre activité {prep} {pays}. AfriSmile fournit, installe et entretient des fauteuils de marques internationales, avec un devis détaillé et un accompagnement technique à {capital}.',
    qaTpl: 'AfriSmile fournit et installe des fauteuils dentaires {prep} {pays}, notamment à {capital} : unités complètes avec lampe LED, moteur électrique et aspiration, marques KaVo et Stern Weber, devis sous 24 h, installation et SAV local.',
    features: [
      'Unités complètes : fauteuil, crachoir, lampe LED et table support instruments',
      'Moteurs électriques silencieux avec positions mémoire',
      'Marques internationales (KaVo, Stern Weber) avec pièces disponibles',
      'Installation, réglages et mise en service par nos techniciens',
      'Options : pièces à main, syringues, aspiration et basses vitesses intégrées',
    ],
    faq: [
      { q: 'Quel est le prix d’un fauteuil dentaire {prep} {pays} ?', a: 'Le prix dépend de la marque, de la configuration (moteur, lampe, aspiration) et des options. Nous établissons un devis détaillé sous 24 h pour votre cabinet à {capital}.' },
      { q: 'L’installation du fauteuil est-elle incluse ?', a: 'Oui. Nos techniciens assurent la livraison, l’installation et la mise en service du fauteuil à {capital}, avec formation de votre équipe aux réglages.' },
      { q: 'Quelle marque de fauteuil recommandez-vous ?', a: 'Tout dépend de votre budget et de votre volume d’activité. Nous conseillons KaVo pour le haut de gamme et Stern Weber pour un excellent rapport qualité-prix, avec SAV local.' },
    ],
    blogSlugs: ['prix-fauteuil-dentaire-dakar-ce-qui-fait-varier-devis-2026', 'choisir-fauteuil-dentaire-senegal-2026', 'maintenance-fauteuil-dentaire-10-pannes-frequentes-eviter-2026'],
  },
  {
    slug: 'unite-dentaire', name: 'Unité dentaire', plural: 'unités dentaires',
    h1Tpl: '{name} {prep} {pays} : devis, installation et SAV',
    titleTpl: '{name} {prep} {pays} : prix, devis & installation | AfriSmile',
    descTpl: '{plural} complètes {prep} {pays} : devis sous 24 h à {capital}, installation clé en main et SAV local. Fauteuil, crachoir, lampe et aspiration inclus.',
    leadTpl: 'Une unité dentaire regroupe fauteuil, crachoir, lampe, table support et gestion d’aspiration. AfriSmile livre et installe des unités complètes {prep} {pays}, adaptées à l’espace et au budget de votre cabinet à {capital}.',
    qaTpl: 'Les unités dentaires AfriSmile {prep} {pays} comprennent fauteuil, crachoir, lampe LED, table support et aspiration intégrée. Devis sous 24 h à {capital}, installation par nos techniciens et SAV local.',
    features: [
      'Fauteuil, crachoir, lampe et table support en une unité compacte',
      'Moteurs à variation électronique et positions mémoire',
      'Gestion intégrée de l’aspiration et de l’eau',
      'Coloris et options selon l’aménagement de votre cabinet',
      'Maintenance préventive et pièces disponibles',
    ],
    faq: [
      { q: 'Quelle différence entre un fauteuil et une unité dentaire ?', a: 'L’unité regroupe fauteuil, crachoir, lampe, table support et aspiration dans un ensemble coordonné, prêt à brancher. Le fauteuil seul s’intègre dans un ensemble existant.' },
      { q: 'Quel est le prix d’une unité dentaire {prep} {pays} ?', a: 'Il varie selon la marque, le moteur et les options. Nous chiffrons chaque projet sur devis sous 24 h, avec installation incluse à {capital}.' },
      { q: 'Pouvez-vous installer l’unité dans mon local ?', a: 'Oui, notre équipe technique vérifie l’arrivée d’eau, l’électricité et l’aspiration avant installation, et forme votre équipe à la prise en main.' },
    ],
    blogSlugs: ['materiel-cabinet-dentaire-complet-prix-senegal-2026', 'equipement-cabinet-dentaire-lome-togo-devis-prix-2026', 'pack-ouverture-cabinet-dentaire-senegal-budget-priorites-2026'],
  },
  {
    slug: 'autoclave-classe-b', name: 'Autoclave Classe B', plural: 'autoclaves Classe B',
    h1Tpl: '{name} {prep} {pays} : prix, installation et SAV',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, installation et SAV local. Stérilisation fiable pour cabinets et cliniques avec AfriSmile.',
    leadTpl: 'La stérilisation est la base de la sécurité en cabinet. AfriSmile fournit et installe des autoclaves Classe B {prep} {pays}, avec cycles validés, formation de votre équipe et maintenance préventive à {capital}.',
    qaTpl: 'AfriSmile équipe les cabinets {prep} {pays} en autoclaves Classe B : stérilisation des instruments pleins et creux, cycles rapides, installation et formation incluses, SAV local et maintenance préventive à {capital}.',
    features: [
      'Cycles Classe B validés pour instruments pleins, creux et textils',
      'Capacités 18 L, 23 L et plus selon votre flux de patients',
      'Test Helix et suivi des cycles conformes aux normes',
      'Installation, formation du personnel et contrôle de démarrage',
      'Maintenance préventive et pièces disponibles',
    ],
    faq: [
      { q: 'Pourquoi choisir un autoclave Classe B {prep} {pays} ?', a: 'La classe B permet de stériliser tous les types de charge, y compris les instruments creux et les textils, ce qui est indispensable dans un cabinet qui fait de l’implantologie ou de la chirurgie.' },
      { q: 'Quel autoclave choisir pour mon cabinet ?', a: 'Tout dépend du nombre de patients et de la rotation des instruments. Nous recommandons 18 L pour un cabinet individuel et 23 L ou plus pour les cliniques et les activités chirurgicales.' },
      { q: 'La maintenance est-elle assurée à {capital} ?', a: 'Oui. Nous proposons des contrats de maintenance préventive avec contrôle des cycles, remplacement des joints et vérification annuelle.' },
    ],
    blogSlugs: ['autoclave-classe-b-senegal-erreurs-installation-performance-2026', 'prix-autoclave-dentaire-classe-b-senegal-guide-achat-2026', 'autoclave-dentaire-18l-23l-capacite-guide-flux-patient-2026'],
  },
  {
    slug: 'sterilisation-dentaire', name: 'Stérilisation dentaire', plural: 'solutions de stérilisation',
    h1Tpl: '{name} {prep} {pays} : équipements et protocoles',
    titleTpl: '{name} {prep} {pays} : matériel, prix & devis | AfriSmile',
    descTpl: 'Stérilisation dentaire {prep} {pays} : autoclaves Classe B, ultrasons et thermo-soudeuses. Devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Une salle de stérilisation bien pensée protège vos patients et votre activité. AfriSmile vous accompagne {prep} {pays} pour choisir, installer et organiser votre chaîne de stérilisation, de la décontamination au stockage, à {capital}.',
    qaTpl: 'AfriSmile équipe les cabinets {prep} {pays} en solutions de stérilisation complètes : autoclave Classe B, bac à ultrasons, thermo-soudeuse et consommables, avec formation aux protocoles et SAV local à {capital}.',
    features: [
      'Chaîne complète : décontamination, nettoyage, conditionnement, stérilisation',
      'Autoclaves Classe B adaptés à votre volume d’activité',
      'Bacs à ultrasons et thermo-soudeuses professionnelles',
      'Formation de l’équipe aux protocoles de stérilisation',
      'Consommables : sachets, tests, indicateurs chimiques',
    ],
    faq: [
      { q: 'Comment organiser la stérilisation dans mon cabinet {prep} {pays} ?', a: 'La chaîne recommandée : décontamination, nettoyage par ultrasons, rinçage-séchage, conditionnement en sachets, stérilisation en autoclave Classe B et stockage à l’abri de l’humidité.' },
      { q: 'Quel matériel est indispensable ?', a: 'Un autoclave Classe B, un bac à ultrasons, une thermo-soudeuse et des sachets de stérilisation conformes. Nous chiffrons l’ensemble sur devis sous 24 h.' },
      { q: 'Proposez-vous la formation du personnel à {capital} ?', a: 'Oui, la formation aux protocoles et au contrôle des cycles fait partie de notre accompagnement à l’installation.' },
    ],
    blogSlugs: ['amenagement-salle-sterilisation-cabinet-dentaire-senegal-normes-flux-2026', 'sterilisation-cabinet-dentaire-protocole-autoclave-classe-b', 'maintenance-preventive-autoclaves-guide-complet'],
  },
  {
    slug: 'scanner-intra-oral', name: 'Scanner intra-oral', plural: 'scanners intra-oraux',
    h1Tpl: '{name} {prep} {pays} : devis, démo et installation',
    titleTpl: '{name} {prep} {pays} : prix, devis & démo | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis en 24 h à {capital}, démonstration et installation. Passez à l’empreinte numérique et gagnez du temps avec AfriSmile.',
    leadTpl: 'L’empreinte numérique remplace les pâtes à empreinte et fluidifie votre collaboration avec le laboratoire. AfriSmile vous accompagne {prep} {pays} : choix du scanner, démonstration à {capital}, installation et prise en main.',
    qaTpl: 'AfriSmile équipe les cabinets {prep} {pays} en scanners intra-oraux : empreinte numérique rapide, fichiers envoyés directement au laboratoire, gain de temps et confort patient. Démo et installation à {capital}, devis sous 24 h.',
    features: [
      'Empreintes numériques en quelques minutes, sans pâte ni inconfort',
      'Transfert direct des fichiers au laboratoire de prothèse',
      'Réduction des retouches et des reprises de couronnes',
      'Démonstration et formation de l’équipe incluses',
      'Compatibilité avec les principaux logiciels de CFAO',
    ],
    faq: [
      { q: 'Combien coûte un scanner intra-oral {prep} {pays} ?', a: 'Le prix dépend du modèle et des licences logicielles. Nous organisons une démonstration à {capital} et remettons un devis détaillé sous 24 h.' },
      { q: 'Le scanner remplace-t-il les empreintes classiques ?', a: 'Oui pour la majorité des couronnes, bridges, inlays et aligneurs. Le flux numérique améliore la précision et réduit les allers-retours avec le laboratoire.' },
      { q: 'Comment se passe la formation ?', a: 'Notre équipe forme vos praticiens et assistantes à la prise d’empreinte, à l’envoi des fichiers et au dépannage de base.' },
    ],
    blogSlugs: ['scanner-intra-oral-afrique-comparatif-modeles-2026', 'scanner-intra-oral-senegal-questions-demo-avant-devis-2026', 'scanner-intra-oral-roi-senegal'],
  },
  {
    slug: 'radiologie-dentaire', name: 'Radiologie dentaire', plural: 'solutions de radiologie',
    h1Tpl: '{name} {prep} {pays} : capteurs, RX et panoramique',
    titleTpl: '{name} {prep} {pays} : prix, devis & installation | AfriSmile',
    descTpl: 'Radiologie dentaire {prep} {pays} : capteurs RVG, générateurs RX et panoramiques. Devis sous 24 h à {capital}, installation et SAV local AfriSmile.',
    leadTpl: 'Diagnostiquer plus vite et plus précisément : AfriSmile fournit et installe les solutions de radiologie numérique {prep} {pays} — capteurs RVG, générateurs RX et panoramiques — avec formation et SAV à {capital}.',
    qaTpl: 'AfriSmile équipe les cabinets {prep} {pays} en radiologie numérique : capteurs RVG haute définition, générateurs RX muraux et appareils panoramiques, installation et formation incluses, SAV local à {capital}.',
    features: [
      'Capteurs RVG haute définition pour un diagnostic immédiat',
      'Générateurs RX muraux et bras de fixation selon votre salle',
      'Appareils panoramiques pour la vision d’ensemble',
      'Réduction de l’exposition aux rayons X',
      'Installation, paramétrage et formation de l’équipe',
    ],
    faq: [
      { q: 'Quel équipement de radiologie choisir pour mon cabinet {prep} {pays} ?', a: 'Un capteur RVG suffit pour la plupart des actes de routine. Ajoutez un panoramique si vous réalisez des évaluations d’ensemble ou des projets implanto-portés.' },
      { q: 'La radiologie numérique est-elle rentable ?', a: 'Oui : image immédiate, exposition réduite, archivage numérique et économies sur les films et le développement.' },
      { q: 'Gérez-vous l’installation à {capital} ?', a: 'Oui, nos techniciens installent, paramètrent et forment votre équipe, avec vérification de la conformité électrique du local.' },
    ],
    blogSlugs: ['imagerie-dentaire-2d-panoramique-senegal-prix-guide-2026', 'imagerie-dentaire-senegal-rvg-panoramique-scanner-choisir-2026', 'radiologie-panoramique-vs-cone-beam-cbct-lequel-choisir'],
  },
  {
    slug: 'cone-beam', name: 'Cone Beam (CBCT)', plural: 'appareils Cone Beam',
    h1Tpl: '{name} {prep} {pays} : prix, installation et formation',
    titleTpl: '{name} {prep} {pays} : prix, devis & installation | AfriSmile',
    descTpl: 'Imagerie 3D Cone Beam {prep} {pays} : devis sous 24 h à {capital}, installation, formation et SAV. Précision pour implants et endodontie avec AfriSmile.',
    leadTpl: 'Le Cone Beam apporte une vision 3D indispensable à l’implantologie, la chirurgie et l’endodontie. AfriSmile accompagne les cliniques {prep} {pays} dans le choix, l’installation et la formation à {capital}.',
    qaTpl: 'AfriSmile installe des appareils Cone Beam (CBCT) {prep} {pays} : imagerie 3D pour l’implantologie et la chirurgie, exposition réduite, installation, formation des équipes et SAV local à {capital}.',
    features: [
      'Imagerie 3D haute résolution pour implants et chirurgie',
      'Champs de vue adaptés aux volumes de l’arcade ou du bloc maxillo-facial',
      'Exposition réduite par rapport à un scanner médical',
      'Logiciel de planification implantaire inclus',
      'Installation, formation et maintenance préventive',
    ],
    faq: [
      { q: 'Quand un Cone Beam est-il indispensable {prep} {pays} ?', a: 'Dès que vous planifiez des implants, des extractions chirurgicales ou des traitements endodontiques complexes : la vision 3D sécurise la planification et limite les surprises.' },
      { q: 'Quel est le prix d’un appareil Cone Beam {prep} {pays} ?', a: 'Il varie selon le champ de vue, la marque et les options. Nous remettons un devis détaillé sous 24 h avec installation et formation à {capital}.' },
      { q: 'Proposez-vous la formation des équipes ?', a: 'Oui : acquisition, reconstruction, lecture des volumes et utilisation du logiciel de planification sont couverts par notre formation à l’installation.' },
    ],
    blogSlugs: ['appareil-panoramique-dentaire-cone-beam-3d-prix-senegal-2026', 'radiologie-panoramique-vs-cone-beam-cbct-lequel-choisir', 'imagerie-dentaire-2d-panoramique-senegal-prix-guide-2026'],
  },
  {
    slug: 'compresseur-dentaire', name: 'Compresseur dentaire', plural: 'compresseurs dentaires',
    h1Tpl: '{name} {prep} {pays} : dimensionnement et installation',
    titleTpl: '{name} {prep} {pays} : prix, devis & installation | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, installation et SAV. Modèles tropicaux sans huile avec sécheur.',
    leadTpl: 'Un air propre et sec protège vos instruments rotatifs et votre réseau d’aspiration. AfriSmile fournit et installe des compresseurs dentaires {prep} {pays}, adaptés au climat et au nombre de fauteuils de votre cabinet à {capital}.',
    qaTpl: 'AfriSmile installe des compresseurs dentaires {prep} {pays} : modèles sans huile avec sécheur adaptés aux climats chauds, dimensionnement selon le nombre de postes, installation et maintenance préventive à {capital}.',
    features: [
      'Compresseurs sans huile avec sécheur d’air intégré',
      'Modèles tropicaux conçus pour les climats chauds et secs',
      'Dimensionnement selon le nombre de fauteuils et d’instruments',
      'Installation, raccordement et réglage de la pression',
      'Maintenance préventive : filtres, sécheur, contrôle des cycles',
    ],
    faq: [
      { q: 'Quel compresseur pour mon cabinet {prep} {pays} ?', a: 'Le débit dépend du nombre de postes et des instruments utilisés. Nous dimensionnons le compresseur selon votre activité réelle à {capital} et installons un sécheur pour protéger vos instruments.' },
      { q: 'Pourquoi un compresseur sans huile ?', a: 'Il garantit un air médical plus propre, moins de maintenance et une meilleure longévité des turbines et contre-angles.' },
      { q: 'La maintenance est-elle assurée ?', a: 'Oui, nous proposons un plan préventif : remplacement des filtres, contrôle du sécheur et vérification de la pression.' },
    ],
    blogSlugs: ['comparatif-meilleurs-compresseurs-dentaires-afrique', 'compresseur-aspiration-dentaire-senegal-dimensionnement-maintenance-2026'],
  },
  {
    slug: 'turbine-dentaire', name: 'Turbine dentaire', plural: 'turbines dentaires',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} haute vitesse {prep} {pays} : devis sous 24 h à {capital}, pièces disponibles et SAV local. Marques NSK et KaVo avec AfriSmile.',
    leadTpl: 'La turbine est l’instrument le plus sollicité du cabinet. AfriSmile approvisionne les praticiens {prep} {pays} en turbines haute vitesse de marques fiables, avec pièces de rechange et maintenance à {capital}.',
    qaTpl: 'AfriSmile fournit des turbines dentaires haute vitesse {prep} {pays} : marques NSK et KaVo, couple et refroidissement optimisés, pièces de rechange disponibles et maintenance SAV à {capital}.',
    features: [
      'Turbines haute vitesse avec refroidissement à air et à eau',
      'Marques reconnues : NSK, KaVo',
      'Roulements et pièces de rechange disponibles',
      'Conseil sur les raccords (ISO, Midwest, propriétaires)',
      'Maintenance et remplacement des roulements',
    ],
    faq: [
      { q: 'Quelle turbine choisir pour mon cabinet {prep} {pays} ?', a: 'La compatibilité avec votre unité (raccord, pression d’air) prime. Nous vous conseillons selon votre équipement existant et votre budget à {capital}.' },
      { q: 'Les pièces de rechange sont-elles disponibles ?', a: 'Oui, nous tenons des roulements, corps et cartouches pour les modèles NSK et KaVo, avec un service de maintenance.' },
      { q: 'Comment prolonger la durée de vie d’une turbine ?', a: 'Graissage régulier, respect de la pression d’air, nettoyage après chaque patient et contrôle préventif annuel.' },
    ],
    blogSlugs: ['comment-choisir-instruments-rotatifs-dentaires'],
  },
  {
    slug: 'contre-angle-dentaire', name: 'Contre-angle dentaire', plural: 'contre-angles dentaires',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} de précision {prep} {pays} : devis sous 24 h à {capital}, pièces disponibles et SAV. Marques NSK et KaVo avec AfriSmile.',
    leadTpl: 'Fraisage, polissage, évasement : le contre-angle travaille à basse vitesse avec une précision constante. AfriSmile fournit les praticiens {prep} {pays} en contre-angles fiables, avec pièces et maintenance à {capital}.',
    qaTpl: 'AfriSmile fournit des contre-angles dentaires {prep} {pays} : instruments rotatifs basse vitesse NSK et KaVo pour fraisage et polissage, réducteurs et pièces disponibles, SAV local à {capital}.',
    features: [
      'Contre-angles avec ou sans réduction (1:1, 1:5) selon les actes',
      'Tête porte-insert standard ou auto-locking',
      'Marques reconnues : NSK, KaVo',
      'Graissage et maintenance proposés',
      'Pièces de rechange disponibles',
    ],
    faq: [
      { q: 'Quel contre-angle choisir {prep} {pays} ?', a: 'Pour le fraisage quotidien, un modèle 1:1 robuste suffit. La réduction 1:5 apporte le couple nécessaire aux actes plus longs.' },
      { q: 'Les têtes sont-elles compatibles entre marques ?', a: 'La plupart des têtes porte-insert standard sont interchangeables, mais nous recommandons d’utiliser les têtes d’origine pour préserver la durée de vie.' },
      { q: 'Proposez-vous un service de maintenance ?', a: 'Oui : graissage, remplacement des têtes et contrôle annuel pour garder des instruments performants.' },
    ],
    blogSlugs: ['comment-choisir-instruments-rotatifs-dentaires'],
  },
  {
    slug: 'micromoteur-dentaire', name: 'Micromoteur dentaire', plural: 'micromoteurs dentaires',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} de précision {prep} {pays} : devis sous 24 h à {capital}, pièces disponibles et SAV. Marques NSK et KaVo avec AfriSmile.',
    leadTpl: 'Chirurgie, prothèse, implantologie : le micromoteur offre un couple constant à basse vitesse. AfriSmile équipe les praticiens {prep} {pays} avec des micromoteurs fiables et un service pièces à {capital}.',
    qaTpl: 'AfriSmile fournit des micromoteurs dentaires {prep} {pays} : couple élevé à basse vitesse pour la chirurgie et l’implantologie, marques NSK et KaVo, pièces et maintenance SAV à {capital}.',
    features: [
      'Micromoteurs électriques avec couple élevé et basses vitesses',
      'Idéaux pour la chirurgie, la prothèse et l’implantologie',
      'Marques reconnues : NSK, KaVo',
      'Commandes au pied ou sur unité',
      'Pièces de rechange et maintenance disponibles',
    ],
    faq: [
      { q: 'Quand utiliser un micromoteur plutôt qu’une turbine ?', a: 'Pour tous les actes à basse vitesse exigeant du couple : chirurgie, fraisage prothétique, polissage et pose d’implants.' },
      { q: 'Quel micromoteur choisir {prep} {pays} ?', a: 'La puissance, le couple et le type de commande dépendent de vos actes. Nous vous conseillons selon votre pratique à {capital}.' },
      { q: 'Le micromoteur est-il compatible avec mon unité ?', a: 'La plupart des modèles fonctionnent en autonome avec une commande dédiée. Nous vérifions la compatibilité avant de vous orienter.' },
    ],
    blogSlugs: ['comment-choisir-instruments-rotatifs-dentaires'],
  },
  {
    slug: 'detartreur-ultrasons', name: 'Détartreur ultrason', plural: 'détartreurs ultrasons',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, inserts disponibles et SAV. Détartrage efficace et confort patient avec AfriSmile.',
    leadTpl: 'Le détartrage ultrason assure un nettoyage rapide et confortable tout en préservant l’émail. AfriSmile fournit les cabinets {prep} {pays} en détartreurs de qualité, avec inserts et maintenance à {capital}.',
    qaTpl: 'AfriSmile fournit des détartreurs ultrasons {prep} {pays} : puissance réglable, inserts adaptés à chaque acte, irrigation intégrée, pièces disponibles et SAV local à {capital}.',
    features: [
      'Puissance réglable et irrigation intégrée',
      'Inserts universels et spécifiques (parodontie, implants)',
      'Confort patient et efficacité sur le tartre tenace',
      'Marques reconnues avec pièces disponibles',
      'Maintenance et remplacement des inserts',
    ],
    faq: [
      { q: 'Quel détartreur choisir {prep} {pays} ?', a: 'Un modèle à puissance réglable avec inserts standards couvre la majorité des besoins. Pour la parodontie, prévoyez des inserts fins et un contrôle du flux d’irrigation.' },
      { q: 'Les inserts sont-ils disponibles ?', a: 'Oui, nous tenons un stock d’inserts pour les modèles que nous distribuons, avec conseil selon vos actes.' },
      { q: 'Le détartreur peut-il servir aux implants ?', a: 'Oui, avec des inserts spécifiques compatibles implant et une puissance réduite pour préserver la surface de l’implant.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'aspirateur-chirurgical', name: 'Aspirateur chirurgical', plural: 'aspirateurs chirurgicaux',
    h1Tpl: '{name} {prep} {pays} : choix et installation',
    titleTpl: '{name} {prep} {pays} : prix, devis & installation | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, installation et SAV. Aspiration puissante pour la chirurgie et l’implantologie.',
    leadTpl: 'Une aspiration chirurgicale puissante garantit un champ opératoire propre et la sécurité de votre équipe. AfriSmile installe des aspirateurs chirurgicaux {prep} {pays}, dimensionnés à votre activité à {capital}.',
    qaTpl: 'AfriSmile fournit et installe des aspirateurs chirurgicaux {prep} {pays} : débit élevé pour la chirurgie et l’implantologie, canules et pièces disponibles, installation et SAV local à {capital}.',
    features: [
      'Débit d’aspiration élevé pour la chirurgie',
      'Canules chirurgicales et filtres disponibles',
      'Séparation liquide/gaz intégrée sur les modèles récents',
      'Installation raccordée à votre réseau',
      'Maintenance et remplacement des filtres',
    ],
    faq: [
      { q: 'Quelle différence entre aspiration médicale et chirurgicale ?', a: 'L’aspiration chirurgicale offre un débit plus élevé, nécessaire pendant les actes chirurgicaux et implantaire pour maintenir un champ propre.' },
      { q: 'Quel modèle choisir pour ma clinique {prep} {pays} ?', a: 'Cela dépend du nombre de postes et du type d’actes. Nous dimensionnons l’installation selon votre activité à {capital}.' },
      { q: 'La maintenance est-elle incluse ?', a: 'Nous proposons un plan préventif : contrôle du débit, remplacement des filtres et vérification des canalisations.' },
    ],
    blogSlugs: ['compresseur-aspiration-dentaire-senegal-dimensionnement-maintenance-2026'],
  },
  {
    slug: 'lampe-photopolymerisation', name: 'Lampe à photopolymériser', plural: 'lampes à photopolymériser',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, pièces disponibles et SAV. Polymérisation efficace des composites avec AfriSmile.',
    leadTpl: 'Une polymérisation complète conditionne la tenue et l’esthétique de vos restaurations. AfriSmile fournit les cabinets {prep} {pays} en lampes LED fiables, avec contrôle et pièces à {capital}.',
    qaTpl: 'AfriSmile fournit des lampes à photopolymériser {prep} {pays} : LED haute intensité, contrôle de la puissance, embouts et pièces disponibles, SAV local à {capital}.',
    features: [
      'LED haute intensité avec spectre adapté aux composites',
      'Contrôle de la puissance et minuteries intégrées',
      'Embouts de diamètres différents selon les zones',
      'Batteries longue durée et chargeurs fournis',
      'Contrôle annuel de la puissance conseillé',
    ],
    faq: [
      { q: 'Quelle puissance de polymérisation choisir {prep} {pays} ?', a: 'Privilégiez une lampe dont la puissance mesurée dépasse 1 000 mW/cm² et vérifiez régulièrement la puissance avec un radiomètre.' },
      { q: 'Combien de temps polymériser un composite ?', a: 'Le temps dépend du matériau et de l’épaisseur : en règle générale, 10 à 20 secondes par incrément selon les recommandations du fabricant.' },
      { q: 'Les embouts de rechange sont-ils disponibles ?', a: 'Oui, nous tenons les embouts et batteries des modèles que nous distribuons.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'camera-intra-orale', name: 'Caméra intra-orale', plural: 'caméras intra-orales',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, installation et SAV. Montrez, expliquez, faites adhérer avec AfriSmile.',
    leadTpl: 'La caméra intra-orale transforme la consultation : le patient voit son état buccal et comprend le traitement proposé. AfriSmile équipe les cabinets {prep} {pays} avec des caméras performantes à {capital}.',
    qaTpl: 'AfriSmile fournit des caméras intra-orales {prep} {pays} : images haute définition sur écran, photos et vidéos archivées, outil d’explication des traitements, installation et SAV à {capital}.',
    features: [
      'Images et vidéos haute définition en direct',
      'Visualisation patient immédiate : meilleure adhésion au traitement',
      'Archivage des photos dans le dossier patient',
      'Connexion simple à votre poste ou votre logiciel',
      'Installation et formation de l’équipe',
    ],
    faq: [
      { q: 'À quoi sert une caméra intra-orale {prep} {pays} ?', a: 'Elle montre au patient l’état de sa bouche en temps réel, facilite l’explication des actes et documente les dossiers.' },
      { q: 'La caméra s’intègre-t-elle à mon logiciel ?', a: 'La plupart des caméras exportent photos et vidéos vers votre dossier patient. Nous vérifions la compatibilité avec votre configuration à {capital}.' },
      { q: 'L’installation est-elle comprise ?', a: 'Oui : installation, configuration et formation de l’équipe sont incluses dans notre accompagnement.' },
    ],
    blogSlugs: ['transition-empreinte-numerique-scanner-3d-afrique-ouest'],
  },
  {
    slug: 'moteur-endodontie', name: 'Moteur d’endodontie', plural: 'moteurs d’endodontie',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, limes et pièces disponibles. Canaux instrumentés en toute sécurité avec AfriSmile.',
    leadTpl: 'La mécanisation du traitement canalaire réduit les fractures d’instruments et le temps de travail. AfriSmile fournit les praticiens {prep} {pays} en moteurs d’endodontie, avec limes et SAV à {capital}.',
    qaTpl: 'AfriSmile fournit des moteurs d’endodontie {prep} {pays} : rotation et réciprocité, contrôle du couple, limes compatibles et pièces disponibles, formation à la prise en main et SAV local à {capital}.',
    features: [
      'Moteurs avec rotation et réciprocité',
      'Contrôle du couple et de la vitesse en continu',
      'Compatible avec les principales marques de limes',
      'Aides à la détection de la longueur de travail',
      'Formation et maintenance proposées',
    ],
    faq: [
      { q: 'Quel moteur d’endodontie choisir {prep} {pays} ?', a: 'Un modèle avec modes rotation et réciprocité, un contrôle précis du couple et une détection apex couvre la pratique moderne du traitement canalaire.' },
      { q: 'Les limes sont-elles disponibles ?', a: 'Oui, nous approvisionnons les limes compatibles avec les moteurs que nous distribuons.' },
      { q: 'Le moteur est-il facile à prendre en main ?', a: 'Oui, la formation à l’utilisation et aux réglages est incluse dans notre accompagnement.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'materiel-implantologie', name: 'Matériel d’implantologie', plural: 'matériels d’implantologie',
    h1Tpl: '{name} {prep} {pays} : équipement complet de la clinique',
    titleTpl: '{name} {prep} {pays} : prix, devis & formation | AfriSmile',
    descTpl: '{name} {prep} {pays} : moteurs, contre-angles, malettes et consommables. Devis sous 24 h à {capital}, formation et SAV AfriSmile.',
    leadTpl: 'L’implantologie exige un plateau technique maîtrisé : moteur de pose, contre-angles réducteurs, mallette chirurgicale et imagerie. AfriSmile accompagne les cliniques {prep} {pays} dans l’équipement complet à {capital}.',
    qaTpl: 'AfriSmile équipe les cliniques {prep} {pays} pour l’implantologie : moteur de pose avec contrôle du couple, contre-angles réducteurs, mallette chirurgicale et imagerie, avec formation et SAV à {capital}.',
    features: [
      'Moteurs de pose avec contrôle précis du couple',
      'Contre-angles réducteurs et pièces à main chirurgicales',
      'Mallette chirurgicale et instruments de base',
      'Imagerie (Cone Beam) pour la planification',
      'Formation à l’utilisation et maintenance',
    ],
    faq: [
      { q: 'Quel équipement faut-il pour démarrer l’implantologie {prep} {pays} ?', a: 'Un moteur de pose avec contrôle du couple, un contre-angle réducteur, une mallette chirurgicale, une bonne imagerie et un protocole de stérilisation maîtrisé.' },
      { q: 'Proposez-vous des formations ?', a: 'Nous formons votre équipe à l’utilisation des équipements et à la maintenance ; la formation clinique relève de vos organismes spécialisés.' },
      { q: 'Le Cone Beam est-il indispensable ?', a: 'Pour une planification implantaire sécurisée, oui : la vision 3D permet d’évaluer l’os, les structures nobles et la prothèse envisagée.' },
    ],
    blogSlugs: ['implant-dentaire-prix-dakar-senegal-2026'],
  },
  {
    slug: 'lampe-blanchiment', name: 'Lampe de blanchiment', plural: 'lampes de blanchiment',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} professionnelles {prep} {pays} : devis sous 24 h à {capital}, gels et accessoires disponibles. Nouvelle source de revenus avec AfriSmile.',
    leadTpl: 'Le blanchiment est l’un des actes esthétiques les plus demandés. AfriSmile fournit les cabinets {prep} {pays} en lampes professionnelles et gels, avec formation et SAV à {capital}.',
    qaTpl: 'AfriSmile fournit des lampes de blanchiment {prep} {pays} : activation efficace des gels, séances courtes et confortables, gels et accessoires disponibles, formation et SAV à {capital}.',
    features: [
      'Lampes LED pour l’activation des gels de blanchiment',
      'Séances courtes et confortables pour le patient',
      'Gels et accessoires disponibles',
      'Acte esthétique très demandé, bonne marge pour le cabinet',
      'Formation à l’utilisation et maintenance',
    ],
    faq: [
      { q: 'Le blanchiment au fauteuil est-il rentable {prep} {pays} ?', a: 'C’est un acte esthétique très demandé, rapide à réaliser et qui génère une bonne marge tout en fidélisant la patientèle.' },
      { q: 'Quel matériel faut-il ?', a: 'Une lampe d’activation, des gels, des écarteurs et une protection des gencives. Nous fournissons l’ensemble sur devis.' },
      { q: 'La formation est-elle incluse ?', a: 'Oui, nous formons votre équipe au protocole de blanchiment au fauteuil et aux consignes de sécurité.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'equipement-laboratoire-dentaire', name: 'Équipement de laboratoire dentaire', plural: 'équipements de laboratoire dentaire',
    h1Tpl: '{name} {prep} {pays} : matériel complet de prothèse',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : micromoteurs, polisseurs, fours et scanners. Devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Un laboratoire de prothèse performant repose sur des équipements fiables : micromoteurs, polisseurs, fours et flux numérique. AfriSmile équipe les laboratoires {prep} {pays}, de l’atelier classique au flux CFAO, à {capital}.',
    qaTpl: 'AfriSmile équipe les laboratoires de prothèse {prep} {pays} : micromoteurs de table, polisseurs, fours de cuisson et scanners de laboratoire, avec installation, formation et SAV à {capital}.',
    features: [
      'Micromoteurs de table et polisseurs professionnels',
      'Fours de cuisson céramique et matériaux',
      'Scanners de laboratoire et flux CFAO',
      'Vibrateurs, plâtres et consommables',
      'Installation, formation et maintenance',
    ],
    faq: [
      { q: 'Quel équipement pour ouvrir un laboratoire de prothèse {prep} {pays} ?', a: 'L’essentiel : micromoteur de table, polisseur, vibrateur, four si vous cuisez la céramique, et un scanner si vous recevez des empreintes numériques.' },
      { q: 'Travaillez-vous avec le flux numérique ?', a: 'Oui, nous fournissons scanners de laboratoire et logiciels pour recevoir les empreintes numériques des cabinets et produire des prothèses plus précises.' },
      { q: 'La formation est-elle incluse ?', a: 'Oui : prise en main des équipements, maintenance de base et organisation de l’atelier font partie de notre accompagnement à {capital}.' },
    ],
    blogSlugs: ['scanner-intra-oral-senegal-integration-laboratoire-workflow-2026', 'transition-empreinte-numerique-scanner-3d-afrique-ouest'],
  },
  {
    slug: 'consommables-dentaires', name: 'Consommables dentaires', plural: 'consommables dentaires',
    h1Tpl: '{name} {prep} {pays} : approvisionnement régulier',
    titleTpl: '{name} {prep} {pays} : prix, devis & livraison | AfriSmile',
    descTpl: '{plural} {prep} {pays} : gants, anesthésiques, composites, bavettes. Devis sous 24 h à {capital} et livraison avec AfriSmile.',
    leadTpl: 'Un cabinet ne peut pas s’arrêter faute de consommables. AfriSmile organise l’approvisionnement régulier des cabinets {prep} {pays} : gants, anesthésiques, composites, bavettes et petits matériels, livrés à {capital}.',
    qaTpl: 'AfriSmile fournit les consommables dentaires {prep} {pays} : gants, anesthésiques, composites, bavettes, sondes et petits matériels, avec livraison à {capital}, tarifs de gros et suivi de stock.',
    features: [
      'Gants, anesthésiques, composites, bavettes, sondes',
      'Petit matériel et instruments de diagnostic',
      'Tarifs de gros pour les achats groupés',
      'Livraison organisée à {capital} et dans la sous-région',
      'Suivi de commandes et réapprovisionnement',
    ],
    faq: [
      { q: 'Quels consommables tenez-vous en stock {prep} {pays} ?', a: 'Gants, anesthésiques, composites, bavettes, matériel de stérilisation, sondes et petits instruments. Contactez-nous pour la liste complète et les tarifs.' },
      { q: 'Puis-je passer des commandes régulières ?', a: 'Oui, nous proposons des contrats d’approvisionnement avec livraison planifiée à {capital} et des tarifs préférentiels sur volume.' },
      { q: 'Quels sont les délais de livraison ?', a: 'Les délais dépendent du stock et de la destination. Nous confirmons le délai exact lors de l’établissement du devis.' },
    ],
    blogSlugs: ['consommables-dentaires-senegal-optimiser-stock-marge-2026', 'gerer-stock-consommables-dentaires-efficacement', 'consommables-dentaires-senegal-politique-achat-kpi-stock-2026'],
  },
  {
    slug: 'gants-medicaux', name: 'Gants médicaux', plural: 'gants médicaux',
    h1Tpl: '{name} {prep} {pays} : fourniture régulière',
    titleTpl: '{name} {prep} {pays} : prix, devis & livraison | AfriSmile',
    descTpl: '{plural} nitrile et latex {prep} {pays} : devis sous 24 h à {capital}, tarifs de gros et livraison. Conformité et confort avec AfriSmile.',
    leadTpl: 'Le gant est le premier rempart de la protection croisée. AfriSmile fournit en continu les cabinets {prep} {pays} en gants nitrile et latex, avec tarifs de gros et livraison à {capital}.',
    qaTpl: 'AfriSmile fournit des gants médicaux {prep} {pays} : nitrile et latex, tailles complètes, normes CE, tarifs de gros et livraison régulière à {capital} pour les cabinets et cliniques.',
    features: [
      'Gants nitrile et latex, toutes tailles',
      'Normes CE et conformité médicale',
      'Tarifs de gros pour les commandes régulières',
      'Livraison organisée à {capital} et dans la sous-région',
      'Conseil selon vos procédures (chirurgie, soins, hygiène)',
    ],
    faq: [
      { q: 'Quels gants choisir pour la chirurgie {prep} {pays} ?', a: 'Des gants stériles en nitrile, avec une bonne sensibilité tactile. Pour les soins courants, des gants non stériles en nitrile ou latex suffisent selon vos protocoles.' },
      { q: 'Proposez-vous des tarifs de gros ?', a: 'Oui, les cabinets et cliniques qui commandent régulièrement bénéficient de tarifs dégressifs et d’une livraison planifiée à {capital}.' },
      { q: 'Quels sont les délais de livraison ?', a: 'Selon le stock et la destination, de quelques jours à deux semaines. Le délai exact est confirmé sur le devis.' },
    ],
    blogSlugs: ['consommables-dentaires-senegal-optimiser-stock-marge-2026'],
  },
  {
    slug: 'materiel-anesthesie-dentaire', name: 'Matériel d’anesthésie dentaire', plural: 'matériels d’anesthésie dentaire',
    h1Tpl: '{name} {prep} {pays} : approvisionnement et choix',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{name} {prep} {pays} : carpules, seringues et aiguilles. Devis sous 24 h à {capital}, stock disponible et livraison avec AfriSmile.',
    leadTpl: 'Une anesthésie fiable et confortable améliore l’expérience patient et la sécurité des soins. AfriSmile approvisionne les cabinets {prep} {pays} en carpules, seringues et aiguilles de qualité à {capital}.',
    qaTpl: 'AfriSmile fournit le matériel d’anesthésie dentaire {prep} {pays} : carpules, seringues aspirantes et aiguilles, stock régulier, livraison à {capital} et conseil selon vos protocoles.',
    features: [
      'Carpules et seringues aspirantes',
      'Aiguilles de différents calibres et longueurs',
      'Stock régulier et livraison planifiée',
      'Tarifs de gros pour les cabinets actifs',
      'Conseil sur les protocoles et la conservation',
    ],
    faq: [
      { q: 'Quelles aiguilles choisir {prep} {pays} ?', a: 'Le calibre dépend de l’acte et de la zone : les aiguilles courtes conviennent aux infiltrations, les longues aux blocs. Nous vous conseillons selon vos protocoles.' },
      { q: 'Les carpules sont-elles stockées au froid ?', a: 'La chaîne du froid est respectée jusqu’à la livraison à {capital}, conformément aux recommandations des fabricants.' },
      { q: 'Puis-je commander en gros ?', a: 'Oui, les commandes groupées bénéficient de tarifs dégressifs et d’une livraison planifiée.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'mobilier-cabinet-dentaire', name: 'Mobilier de cabinet dentaire', plural: 'mobiliers de cabinet dentaire',
    h1Tpl: '{name} {prep} {pays} : aménagement complet',
    titleTpl: '{name} {prep} {pays} : prix, devis & livraison | AfriSmile',
    descTpl: '{name} {prep} {pays} : rangements, sièges praticien et aménagement des salles. Devis sous 24 h à {capital}, livraison et installation.',
    leadTpl: 'Un cabinet bien pensé soigne votre image et l’efficacité de votre équipe. AfriSmile fournit le mobilier {prep} {pays} : rangements, sièges praticien et assistante, aménagement de la salle de soins et du local technique, à {capital}.',
    qaTpl: 'AfriSmile fournit le mobilier de cabinet dentaire {prep} {pays} : meubles de rangement, sièges praticien et assistante, armoires et aménagement des salles, avec livraison et installation à {capital}.',
    features: [
      'Rangements pour instruments, consommables et dossiers',
      'Sièges praticien et assistante ergonomiques',
      'Aménagement de la salle de soins et du local technique',
      'Mobilier conçu pour les flux d’hygiène',
      'Livraison et installation comprises',
    ],
    faq: [
      { q: 'Comment aménager un cabinet dentaire {prep} {pays} ?', a: 'Organisez les flux : zone d’accueil, salle de soins, salle de stérilisation et local technique. Nous conseillons et fournissons le mobilier adapté à chaque zone.' },
      { q: 'Le mobilier est-il livré et monté ?', a: 'Oui, la livraison, le montage et la mise en place sont assurés à {capital}.' },
      { q: 'Pouvez-vous meubler un cabinet complet ?', a: 'Oui, du fauteuil du praticien à l’armoire de stérilisation, nous équipons le cabinet complet sur devis.' },
    ],
    blogSlugs: ['guide-ultime-amenagement-cabinet-dentaire-moderne', 'amenagement-salle-sterilisation-cabinet-dentaire-senegal-normes-flux-2026'],
  },
  {
    slug: 'bac-ultrasons', name: 'Bac à ultrasons', plural: 'bacs à ultrasons',
    h1Tpl: '{name} {prep} {pays} : choix et installation',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} professionnels {prep} {pays} : devis sous 24 h à {capital}, paniers et consommables. Nettoyage efficace des instruments avec AfriSmile.',
    leadTpl: 'Le nettoyage par ultrasons déloge les résidus avant stérilisation et protège vos instruments. AfriSmile fournit les cabinets {prep} {pays} en bacs à ultrasons de qualité, avec consommables et SAV à {capital}.',
    qaTpl: 'AfriSmile fournit des bacs à ultrasons {prep} {pays} : nettoyage efficace des instruments avant stérilisation, capacités adaptées au cabinet, paniers et solutions disponibles, SAV local à {capital}.',
    features: [
      'Nettoyage par cavitation des instruments et pièces à main',
      'Capacités adaptées du cabinet individuel à la clinique',
      'Paniers et supports d’instruments disponibles',
      'Solutions de nettoyage adaptées',
      'Maintenance et pièces disponibles',
    ],
    faq: [
      { q: 'Pourquoi utiliser un bac à ultrasons {prep} {pays} ?', a: 'Il déloge mécaniquement les résidus dans les zones inaccessibles (fraises, canules, instruments creux) avant la stérilisation, ce qui améliore la qualité du cycle.' },
      { q: 'Quelle capacité choisir ?', a: 'Selon votre volume de rotation : 2 à 4 litres pour un cabinet individuel, plus pour une clinique ou un service hospitalier.' },
      { q: 'Quels produits utiliser ?', a: 'Des solutions dédiées à l’instrumentation dentaire, compatibles avec vos matériaux. Nous les fournissons avec le bac.' },
    ],
    blogSlugs: ['sterilisation-cabinet-dentaire-protocole-autoclave-classe-b'],
  },
  {
    slug: 'amalgamateur', name: 'Amalgamateur', plural: 'amalgamateurs',
    h1Tpl: '{name} {prep} {pays} : choix et approvisionnement',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{plural} {prep} {pays} : devis sous 24 h à {capital}, capsules disponibles et SAV. Mélange fiable et rapide avec AfriSmile.',
    leadTpl: 'L’amalgamateur prépare des mélanges homogènes et reproductibles en quelques secondes. AfriSmile fournit les cabinets {prep} {pays} en amalgamateurs robustes, avec capsules et SAV à {capital}.',
    qaTpl: 'AfriSmile fournit des amalgamateurs {prep} {pays} : mélange rapide et homogène des capsules, vitesses et minuteries programmables, capsules disponibles et SAV local à {capital}.',
    features: [
      'Mélange homogène en quelques secondes',
      'Minuteries et vitesses programmables',
      'Compatible avec les capsules standards',
      'Robuste pour un usage quotidien',
      'Pièces et maintenance disponibles',
    ],
    faq: [
      { q: 'Quel amalgamateur choisir {prep} {pays} ?', a: 'Un modèle avec réglage du temps et de la vitesse, compatible avec les capsules standards, suffit pour un usage quotidien régulier.' },
      { q: 'Les capsules sont-elles disponibles ?', a: 'Oui, nous fournissons les capsules des principaux fabricants.' },
      { q: 'La maintenance est-elle assurée ?', a: 'Oui, nous proposons le contrôle et la maintenance des amalgamateurs distribués.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'materiel-orthodontie', name: 'Matériel d’orthodontie', plural: 'matériels d’orthodontie',
    h1Tpl: '{name} {prep} {pays} : approvisionnement du cabinet',
    titleTpl: '{name} {prep} {pays} : prix, devis & SAV | AfriSmile',
    descTpl: '{name} {prep} {pays} : brackets, fils, élastiques et accessoires. Devis sous 24 h à {capital}, stock et livraison avec AfriSmile.',
    leadTpl: 'L’orthodontie connaît une forte demande dans la sous-région. AfriSmile approvisionne les cabinets {prep} {pays} en brackets, fils, élastiques et accessoires, avec un stock régulier et une livraison à {capital}.',
    qaTpl: 'AfriSmile fournit le matériel d’orthodontie {prep} {pays} : brackets, fils, élastiques, boîtes et accessoires, stock régulier, tarifs de gros et livraison à {capital} pour les cabinets.',
    features: [
      'Brackets métalliques et esthétiques',
      'Fils, élastiques et accessoires',
      'Boîtes et rangements de laboratoire',
      'Tarifs de gros pour les cabinets d’orthodontie',
      'Livraison organisée à {capital} et dans la sous-région',
    ],
    faq: [
      { q: 'Quel matériel pour débuter l’orthodontie {prep} {pays} ?', a: 'Brackets, fils de différents diamètres, élastiques, pinces spécifiques et un bon éclairage. Nous conseillons un pack de démarrage adapté à votre pratique.' },
      { q: 'Proposez-vous des tarifs de gros ?', a: 'Oui, les cabinets qui traitent un volume régulier de patients bénéficient de tarifs dégressifs.' },
      { q: 'Quels sont les délais d’approvisionnement ?', a: 'Les articles en stock partent rapidement ; les commandes spéciales sont confirmées avec un délai précis à {capital}.' },
    ],
    blogSlugs: ['appareil-dentaire-prix-dakar-senegal-2026', 'appareil-dentaire-prix-togo-lome-fcfa-2026', 'aligneurs-dentaires-invisalign-prix-dakar-senegal-2026'],
  },
]

export const GEO_SECTEURS = [
  {
    slug: 'cabinet-dentaire', name: 'cabinet dentaire', article: 'un', title: 'Cabinet dentaire',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Ouvrir ou moderniser un cabinet dentaire {prep} {pays} demande un équipement cohérent et un budget maîtrisé. AfriSmile accompagne les praticiens à {capital} du plan d’équipement à la mise en service.',
    qaTpl: 'AfriSmile équipe les cabinets dentaires {prep} {pays} : fauteuils, stérilisation, radiologie, instruments et consommables, avec devis sous 24 h, installation à {capital} et SAV local.',
    features: [
      'Pack d’ouverture : fauteuil, compresseur, stérilisation, imagerie',
      'Budget détaillé et plan de financement possible',
      'Installation et mise en service par nos techniciens',
      'Formation de l’équipe et protocoles d’hygiène',
      'Contrats de maintenance préventive',
    ],
    faq: [
      { q: 'Combien coûte l’équipement d’un cabinet dentaire {prep} {pays} ?', a: 'Le budget dépend du nombre de salles et du niveau d’équipement. Nous établissons un plan d’équipement détaillé avec devis sous 24 h pour votre projet à {capital}.' },
      { q: 'Par où commencer pour équiper mon cabinet ?', a: 'L’essentiel : un fauteuil, un compresseur, un autoclave Classe B, un détartreur et les instruments de base. Le reste s’ajoute selon votre activité.' },
      { q: 'L’installation est-elle comprise ?', a: 'Oui, nos techniciens installent, raccordent et mettent en service les équipements, avec formation de votre équipe.' },
    ],
    blogSlugs: ['ouvrir-cabinet-dentaire-senegal-budget-complet-2026', 'materiel-dentaire-senegal-checklist-ouverture-cabinet-2026', 'cabinet-dentaire-senegal-business-plan-equipement-rentabilite-2026'],
  },
  {
    slug: 'clinique-dentaire', name: 'clinique dentaire', article: 'une', title: 'Clinique dentaire',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Une clinique dentaire exige une organisation d’équipement à l’échelle : plusieurs salles, radiologie, stérilisation centrale et flux patients. AfriSmile conçoit et installe ces plateaux techniques {prep} {pays}, à {capital}.',
    qaTpl: 'AfriSmile équipe les cliniques dentaires {prep} {pays} : fauteuils multi-salles, radiologie numérique, stérilisation centrale et flux patients, avec étude du projet, installation à {capital} et SAV local.',
    features: [
      'Étude du projet : salles, flux, capacité cible',
      'Fauteuils et unités pour plusieurs salles',
      'Radiologie, stérilisation centrale et laboratoire',
      'Planification des travaux et de l’installation',
      'Contrats de maintenance et formation des équipes',
    ],
    faq: [
      { q: 'Comment équiper une clinique dentaire {prep} {pays} ?', a: 'Commencez par l’étude des flux et de la capacité cible, puis dimensionnez les salles de soins, la stérilisation et la radiologie. Nous réalisons cette étude et chiffrons le projet à {capital}.' },
      { q: 'Gérez-vous les projets clé en main ?', a: 'Oui : plan d’équipement, fourniture, installation, mise en service et formation des équipes, avec un interlocuteur unique.' },
      { q: 'Quels sont les délais d’un projet de clinique ?', a: 'Ils dépendent de l’ampleur : quelques semaines pour une clinique de 3 à 5 fauteuils, davantage pour les projets avec travaux. Le calendrier est détaillé dans le devis.' },
    ],
    blogSlugs: ['comment-ouvrir-une-clinique-dentaire-en-cote-divoire-2026', 'equipement-dentaire-douala-priorites-ouverture-clinique-2026', 'materiel-dentaire-nigeria-lagos-abuja-ouvrir-clinique-2026'],
  },
  {
    slug: 'laboratoire-prothese-dentaire', name: 'laboratoire de prothèse dentaire', article: 'un', title: 'Laboratoire de prothèse dentaire',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Le laboratoire de prothèse produit les restaurations qui font la réputation des cabinets. AfriSmile équipe les laboratoires {prep} {pays}, du micromoteur de table au flux numérique, avec formation et SAV à {capital}.',
    qaTpl: 'AfriSmile équipe les laboratoires de prothèse dentaire {prep} {pays} : micromoteurs, polisseurs, fours, plâtres et scanners de laboratoire, avec installation, formation des prothésistes et SAV à {capital}.',
    features: [
      'Micromoteurs de table et polisseurs',
      'Fours de cuisson et matériaux céramiques',
      'Scanners de laboratoire et logiciels CFAO',
      'Plâtres, silicone et consommables',
      'Formation des prothésistes et maintenance',
    ],
    faq: [
      { q: 'Quel équipement pour un laboratoire de prothèse {prep} {pays} ?', a: 'Micromoteur, polisseur, vibrateur, four si nécessaire et scanner pour recevoir les empreintes numériques. Nous chiffrons l’atelier complet sur devis.' },
      { q: 'Le flux numérique est-il accessible aux laboratoires ?', a: 'Oui, un scanner de laboratoire permet de recevoir les empreintes numériques des cabinets et de produire des prothèses plus précises.' },
      { q: 'Formez-vous les prothésistes ?', a: 'Oui, la prise en main des équipements et l’organisation de l’atelier font partie de notre accompagnement à {capital}.' },
    ],
    blogSlugs: ['scanner-intra-oral-senegal-integration-laboratoire-workflow-2026', 'transition-empreinte-numerique-scanner-3d-afrique-ouest'],
  },
  {
    slug: 'cabinet-orthodontie', name: 'cabinet d’orthodontie', article: 'un', title: 'Cabinet d’orthodontie',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'L’orthodontie demande un équipement spécifique : fauteuil confortable, imagerie panoramique, matériel de collage et stock de brackets. AfriSmile accompagne les orthodontistes {prep} {pays} à {capital}.',
    qaTpl: 'AfriSmile équipe les cabinets d’orthodontie {prep} {pays} : fauteuils, radiologie panoramique, lampes de collage, brackets, fils et élastiques, avec installation, formation et SAV à {capital}.',
    features: [
      'Fauteuils et unités adaptés au travail d’orthodontie',
      'Radiologie panoramique pour le bilan initial',
      'Lampes de collage et matériel de contention',
      'Brackets, fils, élastiques et accessoires',
      'Stock régulier et tarifs de gros',
    ],
    faq: [
      { q: 'Quel équipement pour ouvrir un cabinet d’orthodontie {prep} {pays} ?', a: 'Un fauteuil, un panoramique (et idéalement une téléradiographie), une lampe de collage et un stock complet de brackets, fils et élastiques.' },
      { q: 'Proposez-vous des packs pour l’orthodontie ?', a: 'Oui, nous proposons des packs de démarrage et des tarifs de gros sur le matériel consommable.' },
      { q: 'L’imagerie est-elle incluse dans l’équipement ?', a: 'Le panoramique est recommandé pour le diagnostic orthodontique ; nous fournissons et installons l’appareil adapté à votre espace.' },
    ],
    blogSlugs: ['appareil-dentaire-prix-dakar-senegal-2026', 'aligneurs-dentaires-invisalign-prix-dakar-senegal-2026', 'appareil-dentaire-prix-cote-ivoire-abidjan-fcfa-2026'],
  },
  {
    slug: 'clinique-implantologie', name: 'clinique d’implantologie', article: 'une', title: 'Clinique d’implantologie',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'L’implantologie repose sur une imagerie 3D fiable, un moteur de pose précis et une chaîne de stérilisation irréprochable. AfriSmile équipe les cliniques {prep} {pays} avec ces plateaux techniques, à {capital}.',
    qaTpl: 'AfriSmile équipe les cliniques d’implantologie {prep} {pays} : Cone Beam, moteur de pose, mallette chirurgicale et stérilisation Classe B, avec formation des équipes et SAV local à {capital}.',
    features: [
      'Cone Beam pour la planification 3D',
      'Moteur de pose avec contrôle du couple',
      'Mallette chirurgicale et instruments spécifiques',
      'Stérilisation Classe B pour les protocoles chirurgicaux',
      'Formation des équipes et maintenance',
    ],
    faq: [
      { q: 'Quel équipement pour l’implantologie {prep} {pays} ?', a: 'Cone Beam, moteur de pose, contre-angle réducteur, mallette chirurgicale et autoclave Classe B : l’ensemble sécurise la pose et le suivi.' },
      { q: 'Le Cone Beam est-il obligatoire ?', a: 'Pour une planification sécurisée, fortement recommandé : il évalue l’os, les structures nobles et la faisabilité prothétique avant la pose.' },
      { q: 'Proposez-vous la formation ?', a: 'Nous formons à l’utilisation des équipements ; la formation clinique à la pose relève de vos organismes spécialisés.' },
    ],
    blogSlugs: ['implant-dentaire-prix-dakar-senegal-2026'],
  },
  {
    slug: 'service-odontologie-hospitalier', name: 'service d’odontologie hospitalier', article: 'un', title: 'Service d’odontologie hospitalier',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Les services d’odontologie hospitaliers doivent combiner volume de patients, hygiène stricte et équipements durables. AfriSmile accompagne les hôpitaux {prep} {pays} dans l’équipement et la rénovation de leurs plateaux, à {capital}.',
    qaTpl: 'AfriSmile équipe les services d’odontologie {prep} {pays} : fauteuils, stérilisation centrale, radiologie et matériel chirurgical, avec étude du projet, installation à {capital} et contrats de maintenance.',
    features: [
      'Étude du plateau technique et du flux de patients',
      'Fauteuils et unités en nombre adapté',
      'Stérilisation centrale et radiologie',
      'Matériel chirurgical et de réanimation de base',
      'Contrats de maintenance et formation des équipes',
    ],
    faq: [
      { q: 'Comment équiper un service d’odontologie {prep} {pays} ?', a: 'L’étude commence par le nombre de fauteuils, le flux de patients et les contraintes d’hygiène. Nous chiffrons ensuite l’équipement complet, de la stérilisation à la radiologie.' },
      { q: 'Travaillez-vous avec les hôpitaux publics ?', a: 'Oui, nous accompagnons les hôpitaux publics et privés dans leurs marchés d’équipement, avec les documents techniques nécessaires.' },
      { q: 'Proposez-vous la maintenance ?', a: 'Oui, des contrats de maintenance préventive et corrective sont proposés pour garantir la continuité du service.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'centre-de-sante-communautaire', name: 'centre de santé communautaire', article: 'un', title: 'Centre de santé communautaire',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Les centres de santé communautaires amènent les soins dentaires de base au plus près des populations. AfriSmile équipe ces structures {prep} {pays} en unités compactes, stérilisation et instruments, avec installation à {capital}.',
    qaTpl: 'AfriSmile équipe les centres de santé communautaires {prep} {pays} : unités dentaires compactes, stérilisation, instruments et consommables, avec installation, formation des équipes et SAV à {capital}.',
    features: [
      'Unités dentaires compactes adaptées aux petits espaces',
      'Stérilisation de base fiable',
      'Instruments et consommables pour les soins courants',
      'Formation des équipes à l’hygiène',
      'Entretien simple et pièces disponibles',
    ],
    faq: [
      { q: 'Quel équipement pour un centre de santé {prep} {pays} ?', a: 'Une unité dentaire compacte, un autoclave, un détartreur et les instruments de soins courants couvrent l’essentiel des besoins.' },
      { q: 'Les équipements sont-ils simples à entretenir ?', a: 'Oui, nous privilégions des modèles robustes et simples, avec pièces disponibles et formation à la maintenance de base.' },
      { q: 'Pouvez-vous former nos agents ?', a: 'Oui, la formation à l’hygiène et à l’utilisation des équipements est incluse dans l’installation.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'faculte-de-medecine-dentaire', name: 'faculté de médecine dentaire', article: 'une', title: 'Faculté de médecine dentaire',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Former les futurs chirurgiens-dentistes exige des salles de travaux pratiques équipées et des plateaux techniques d’enseignement. AfriSmile accompagne les facultés {prep} {pays} dans l’équipement pédagogique et clinique, à {capital}.',
    qaTpl: 'AfriSmile équipe les facultés de médecine dentaire {prep} {pays} : salles de travaux pratiques avec fantômes, fauteuils pédagogiques, stérilisation et instruments, avec installation, formation et SAV à {capital}.',
    features: [
      'Salles de travaux pratiques équipées de fantômes',
      'Fauteuils et unités pédagogiques',
      'Stérilisation et instruments pour les travaux pratiques',
      'Matériel de simulation et d’enseignement',
      'Installation, formation des moniteurs et maintenance',
    ],
    faq: [
      { q: 'Comment équiper une faculté de médecine dentaire {prep} {pays} ?', a: 'Par étapes : salles de travaux pratiques avec fantômes, puis plateau clinique d’enseignement avec fauteuils, radiologie et stérilisation. Nous étudions le projet avec vos responsables.' },
      { q: 'Fournissez-vous des fantômes et simulateurs ?', a: 'Oui, les têtes de simulation, fantômes et équipements de travaux pratiques font partie de notre catalogue.' },
      { q: 'Proposez-vous la formation des enseignants ?', a: 'Nous formons les moniteurs et techniciens à l’utilisation et à la maintenance des équipements fournis.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'institut-formation-auxiliaires-dentaires', name: 'institut de formation des auxiliaires dentaires', article: 'un', title: 'Institut de formation des auxiliaires dentaires', titleShort: 'Institut de formation dentaire',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Les assistantes dentaires et techniciens se forment sur des équipements réels. AfriSmile équipe les instituts de formation {prep} {pays} en salles pratiques, stérilisation et consommables, avec installation et formation à {capital}.',
    qaTpl: 'AfriSmile équipe les instituts de formation des auxiliaires {prep} {pays} : postes de travaux pratiques, stérilisation, instruments et consommables, avec installation, formation des formateurs et SAV à {capital}.',
    features: [
      'Postes de travaux pratiques pour les apprenants',
      'Stérilisation et instruments de démonstration',
      'Consommables pédagogiques en quantité',
      'Formation des formateurs à l’utilisation',
      'Entretien simple et pièces disponibles',
    ],
    faq: [
      { q: 'Quel équipement pour un institut de formation {prep} {pays} ?', a: 'Des postes de travaux pratiques, un autoclave pour l’enseignement de la stérilisation, des instruments et des consommables en volume suffisant.' },
      { q: 'Formez-vous les formateurs ?', a: 'Oui, nous formons les formateurs à l’utilisation des équipements et aux protocoles d’hygiène enseignés aux apprenants.' },
      { q: 'Les consommables pédagogiques sont-ils fournis ?', a: 'Oui, nous organisons l’approvisionnement régulier des consommables pour les besoins d’enseignement.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'ong-sante-buccodentaire', name: 'ONG de santé bucco-dentaire', article: 'une', title: 'ONG de santé bucco-dentaire',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Les missions de santé bucco-dentaire ont besoin d’équipements transportables, robustes et simples à utiliser. AfriSmile accompagne les ONG intervenant {prep} {pays} dans le choix et l’acheminement de leur matériel, à {capital}.',
    qaTpl: 'AfriSmile équipe les ONG de santé bucco-dentaire {prep} {pays} : unités dentaires mobiles, stérilisation autonome et kits de soins, avec logistique, formation des équipes terrain et SAV.',
    features: [
      'Unités dentaires mobiles et transportables',
      'Stérilisation autonome pour les missions terrain',
      'Kits de soins de base complets',
      'Logistique d’acheminement organisée',
      'Formation des équipes terrain',
    ],
    faq: [
      { q: 'Quel équipement pour une mission dentaire {prep} {pays} ?', a: 'Une unité mobile ou des fauteuils transportables, une stérilisation autonome et des kits de soins complets : nous adaptons le pack à vos missions.' },
      { q: 'Gérez-vous la logistique ?', a: 'Oui, nous organisons l’acheminement du matériel à {capital} et vers vos zones d’intervention.' },
      { q: 'Formez-vous nos équipes terrain ?', a: 'Oui, nous formons les équipes à l’utilisation, l’hygiène et la maintenance de base des équipements.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'distributeur-materiel-medical', name: 'distributeur de matériel médical', article: 'un', title: 'Distributeur de matériel médical',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Les distributeurs locaux relaient l’offre dentaire auprès des cabinets. AfriSmile fournit aux distributeurs {prep} {pays} des gammes complètes, des conditions commerciales adaptées et un support technique à {capital}.',
    qaTpl: 'AfriSmile fournit les distributeurs de matériel médical {prep} {pays} : gammes fauteuils, stérilisation, imagerie et consommables, conditions de gros, support technique et formation à {capital}.',
    features: [
      'Gammes dentaires complètes et cohérentes',
      'Conditions commerciales réservées aux distributeurs',
      'Support technique et documentation produit',
      'Formation des équipes commerciales et SAV',
      'Pièces détachées et logistique',
    ],
    faq: [
      { q: 'Travaillez-vous avec les distributeurs {prep} {pays} ?', a: 'Oui, nous fournissons les distributeurs locaux en gammes complètes avec des conditions adaptées au volume et un support technique.' },
      { q: 'Proposez-vous une formation aux équipes ?', a: 'Oui, nous formons vos équipes commerciales et techniques aux produits et à la maintenance de premier niveau.' },
      { q: 'La documentation produit est-elle disponible ?', a: 'Oui, fiches techniques, notices et certificats sont fournis avec chaque gamme.' },
    ],
    blogSlugs: ['fournisseur-materiel-dentaire-afrique-ouest-criteres-fiabilite-2026', 'fournisseur-materiel-dentaire-senegal-checklist-pro-2026', 'fournisseur-materiel-dentaire-abidjan-cote-divoire-devis-2026'],
  },
  {
    slug: 'reseau-cliniques-dentaires', name: 'réseau de cliniques dentaires', article: 'un', title: 'Réseau de cliniques dentaires',
    h1Tpl: 'Équiper {article} {name} {prep} {pays} : matériel, prix et devis',
    titleTpl: '{titleShort} {prep} {pays} : équipement & devis | AfriSmile',
    descTpl: 'Équipez {article} {name} {prep} {pays} : matériel professionnel, devis sous 24 h à {capital}, installation et SAV AfriSmile.',
    leadTpl: 'Les réseaux de cliniques ont besoin d’équipements homogènes, de contrats cadre et d’un SAV réactif sur plusieurs sites. AfriSmile accompagne les réseaux {prep} {pays} dans le déploiement de leur parc d’équipements, à {capital}.',
    qaTpl: 'AfriSmile équipe les réseaux de cliniques dentaires {prep} {pays} : déploiement multi-sites, équipements homogènes, contrats cadre et SAV national, avec un interlocuteur unique à {capital}.',
    features: [
      'Déploiement d’équipements sur plusieurs sites',
      'Standards d’équipement homogènes',
      'Contrats cadre et tarifs de réseau',
      'SAV national et pièces disponibles',
      'Interlocuteur unique et reporting',
    ],
    faq: [
      { q: 'Gérez-vous le déploiement multi-sites {prep} {pays} ?', a: 'Oui, nous déployons des parcs d’équipements homogènes sur plusieurs villes avec un planning unique, un interlocuteur dédié et des standards identiques.' },
      { q: 'Proposez-vous des contrats cadre ?', a: 'Oui, les réseaux bénéficient de conditions négociées, d’un SAV prioritaire et d’un reporting d’installation.' },
      { q: 'Comment assurer la maintenance sur plusieurs sites ?', a: 'Nous combinons maintenance préventive planifiée, stocks de pièces et interventions réactives, coordonnées depuis {capital}.' },
    ],
    blogSlugs: [],
  },
]

// --- Helpers ---

const elide = (preposition, word) => {
  if (preposition.endsWith('e') && /^[aeiouyh]/i.test(word)) return `${preposition.slice(0, -1)}’${word}`
  return `${preposition} ${word}`
}

function tpl(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, key) => (key in vars ? vars[key] : `{${key}}`))
}

const EXISTING_COUNTRY_PAGES = new Set([
  'senegal', 'cote-divoire', 'mali', 'cameroun', 'ghana', 'nigeria', 'mauritanie', 'niger', 'guinee-bissau', 'burkina-faso',
])

function competencePathFor(countrySlug, competenceSlug) {
  if (countrySlug === 'senegal' && SENEGAL_OVERRIDES[competenceSlug]) return SENEGAL_OVERRIDES[competenceSlug].path
  return `/equipements/${competenceSlug}-${countrySlug}`
}

function competenceLabelFor(countrySlug, competenceSlug) {
  if (countrySlug === 'senegal' && SENEGAL_OVERRIDES[competenceSlug]) return SENEGAL_OVERRIDES[competenceSlug].label
  return null
}

function varsFor(country) {
  return {
    pays: country.name,
    prep: country.prep,
    gen: country.gen,
    capital: country.capital,
    deCap: elide('de', country.capital),
    aCap: `à ${country.capital}`,
  }
}

function articleLinks(slugs) {
  const list = (slugs || []).filter(Boolean)
  if (list.length === 0) return DEFAULT_ARTICLES.map((a) => ({ label: a.label, path: `/blog/${a.slug}` }))
  return list.map((slug) => {
    const def = DEFAULT_ARTICLES.find((a) => a.slug === slug)
    return { label: def ? def.label : slugToLabel(slug), path: `/blog/${slug}` }
  })
}

function slugToLabel(slug) {
  const labels = {
    'prix-fauteuil-dentaire-dakar-ce-qui-fait-varier-devis-2026': 'Prix du fauteuil dentaire : ce qui fait varier un devis',
    'choisir-fauteuil-dentaire-senegal-2026': 'Comment choisir son fauteuil dentaire',
    'maintenance-fauteuil-dentaire-10-pannes-frequentes-eviter-2026': 'Maintenance du fauteuil : 10 pannes à éviter',
    'materiel-cabinet-dentaire-complet-prix-senegal-2026': 'Matériel de cabinet complet : prix et priorités',
    'equipement-cabinet-dentaire-lome-togo-devis-prix-2026': 'Équiper un cabinet à Lomé : devis et prix',
    'pack-ouverture-cabinet-dentaire-senegal-budget-priorites-2026': 'Pack d’ouverture de cabinet : budget et priorités',
    'autoclave-classe-b-senegal-erreurs-installation-performance-2026': 'Autoclave Classe B : erreurs d’installation à éviter',
    'prix-autoclave-dentaire-classe-b-senegal-guide-achat-2026': 'Prix d’un autoclave Classe B : guide d’achat',
    'autoclave-dentaire-18l-23l-capacite-guide-flux-patient-2026': 'Autoclave 18 L ou 23 L : quelle capacité ?',
    'amenagement-salle-sterilisation-cabinet-dentaire-senegal-normes-flux-2026': 'Aménager sa salle de stérilisation',
    'sterilisation-cabinet-dentaire-protocole-autoclave-classe-b': 'Protocole de stérilisation en cabinet',
    'maintenance-preventive-autoclaves-guide-complet': 'Maintenance préventive des autoclaves',
    'scanner-intra-oral-afrique-comparatif-modeles-2026': 'Scanner intra-oral : comparatif des modèles',
    'scanner-intra-oral-senegal-questions-demo-avant-devis-2026': 'Scanner intra-oral : les questions à poser avant le devis',
    'scanner-intra-oral-roi-senegal': 'Scanner intra-oral : retour sur investissement',
    'imagerie-dentaire-2d-panoramique-senegal-prix-guide-2026': 'Imagerie 2D et panoramique : guide des prix',
    'imagerie-dentaire-senegal-rvg-panoramique-scanner-choisir-2026': 'RVG, panoramique ou scanner : que choisir ?',
    'radiologie-panoramique-vs-cone-beam-cbct-lequel-choisir': 'Panoramique ou Cone Beam : lequel choisir ?',
    'appareil-panoramique-dentaire-cone-beam-3d-prix-senegal-2026': 'Prix d’un appareil Cone Beam 3D',
    'comparatif-meilleurs-compresseurs-dentaires-afrique': 'Comparatif des meilleurs compresseurs dentaires',
    'compresseur-aspiration-dentaire-senegal-dimensionnement-maintenance-2026': 'Compresseur et aspiration : dimensionnement et maintenance',
    'comment-choisir-instruments-rotatifs-dentaires': 'Comment choisir ses instruments rotatifs',
    'transition-empreinte-numerique-scanner-3d-afrique-ouest': 'Passer à l’empreinte numérique en Afrique de l’Ouest',
    'consommables-dentaires-senegal-optimiser-stock-marge-2026': 'Optimiser son stock de consommables',
    'gerer-stock-consommables-dentaires-efficacement': 'Gérer son stock de consommables efficacement',
    'consommables-dentaires-senegal-politique-achat-kpi-stock-2026': 'Politique d’achat des consommables et indicateurs de stock',
    'implant-dentaire-prix-dakar-senegal-2026': 'Prix d’un implant dentaire à Dakar',
    'appareil-dentaire-prix-dakar-senegal-2026': 'Prix d’un appareil dentaire à Dakar',
    'appareil-dentaire-prix-togo-lome-fcfa-2026': 'Prix d’un appareil dentaire à Lomé',
    'appareil-dentaire-prix-cote-ivoire-abidjan-fcfa-2026': 'Prix d’un appareil dentaire à Abidjan',
    'aligneurs-dentaires-invisalign-prix-dakar-senegal-2026': 'Aligneurs invisibles : prix à Dakar',
    'guide-ultime-amenagement-cabinet-dentaire-moderne': 'Aménagement d’un cabinet dentaire moderne',
    'ouvrir-cabinet-dentaire-senegal-budget-complet-2026': 'Budget complet pour ouvrir un cabinet au Sénégal',
    'materiel-dentaire-senegal-checklist-ouverture-cabinet-2026': 'Checklist d’ouverture d’un cabinet',
    'cabinet-dentaire-senegal-business-plan-equipement-rentabilite-2026': 'Business plan et rentabilité d’un cabinet',
    'comment-ouvrir-une-clinique-dentaire-en-cote-divoire-2026': 'Ouvrir une clinique dentaire en Côte d’Ivoire',
    'equipement-dentaire-douala-priorites-ouverture-clinique-2026': 'Équiper une clinique à Douala : les priorités',
    'scanner-intra-oral-senegal-integration-laboratoire-workflow-2026': 'Scanner intra-oral et flux laboratoire',
    'fournisseur-materiel-dentaire-afrique-ouest-criteres-fiabilite-2026': 'Choisir un fournisseur fiable en Afrique de l’Ouest',
    'fournisseur-materiel-dentaire-senegal-checklist-pro-2026': 'Checklist pour choisir son fournisseur au Sénégal',
    'fournisseur-materiel-dentaire-abidjan-cote-divoire-devis-2026': 'Fournisseur de matériel dentaire à Abidjan',
    'materiel-dentaire-bamako-mali-prix-installation-cabinet-2026': 'Matériel dentaire à Bamako : prix et installation',
    'autoclave-classe-b-ouagadougou-burkina-faso-guide-achat-2026': 'Autoclave Classe B à Ouagadougou : guide d’achat',
    'materiel-dentaire-ouagadougou-prix-devis-2026': 'Matériel dentaire à Ouagadougou : prix et devis',
    'materiel-dentaire-burkina-faso-ougadougou-prix-devis-2026': 'Matériel dentaire au Burkina Faso : prix et devis',
    'materiel-dentaire-niamey-niger-checklist-devis-2026': 'Matériel dentaire à Niamey : checklist et devis',
    'fauteuil-dentaire-accra-ghana-devis-installation-2026': 'Fauteuil dentaire à Accra : devis et installation',
    'materiel-dentaire-ghana-accra-kumasi-fournisseur-clinique-2026': 'Fournisseur de matériel dentaire au Ghana',
    'scanner-intra-oral-accra-rentabilite-cabinet-2026': 'Scanner intra-oral à Accra : rentabilité',
    'materiel-dentaire-lagos-comment-choisir-fournisseur-fiable-2026': 'Choisir un fournisseur fiable à Lagos',
    'materiel-dentaire-nouakchott-mauritanie-cabinet-prix-2026': 'Matériel dentaire à Nouakchott : prix',
    'materiel-dentaire-cotonou-benin-prix-ouverture-cabinet-2026': 'Matériel dentaire à Cotonou : prix d’ouverture',
    'materiel-dentaire-benin-togo-guide-equipement-cabinet-2026': 'Guide d’équipement Bénin–Togo',
    'materiel-dentaire-guinee-conakry-cabinet-moderne-2026': 'Cabinet moderne à Conakry',
    'equipement-dentaire-dakar-guide-achat-clinique-2026': 'Guide d’achat pour une clinique à Dakar',
    'materiel-dentaire-nigeria-lagos-abuja-ouvrir-clinique-2026': 'Ouvrir une clinique au Nigeria : équipement et budget',
    'devis-cabinet-dentaire-abidjan-checklist-avant-signature-2026': 'Devis cabinet à Abidjan : checklist avant signature',
    'materiel-dentaire-cameroun-douala-yaounde-guide-achat-2026': 'Matériel dentaire au Cameroun : guide d’achat',
  }
  return labels[slug] || 'Conseil d’achat sur notre blog'
}

// --- Builders ---

function buildCompetencePage(competence, country) {
  const vars = { ...varsFor(country), name: competence.name, plural: competence.plural }
  const h1 = tpl(competence.h1Tpl, vars)
  const title = tpl(competence.titleTpl, vars)
  const description = tpl(competence.descTpl, vars)
  const lead = tpl(competence.leadTpl, vars)
  const quickAnswer = tpl(competence.qaTpl, vars)
  const features = competence.features.map((f) => tpl(f, vars))
  const faq = competence.faq.map((item) => ({
    q: tpl(item.q, vars),
    a: tpl(item.a, vars),
  }))

  const relatedCountries = GEO_COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => ({
    name: c.name,
    flag: c.flag,
    path: competencePathFor(c.slug, competence.slug),
  }))

  const siblings = GEO_COMPETENCES.filter((c) => c.slug !== competence.slug).slice(0, 3).map((c) => ({
    label: `${c.name} ${country.prep} ${country.name}`,
    path: competencePathFor(country.slug, c.slug),
  }))

  const relatedPages = [
    { label: `Fournisseur matériel dentaire ${country.prep} ${country.name}`, path: `/pays/${country.slug}` },
    ...siblings,
    { label: 'Devis matériel dentaire', path: '/devis-materiel-dentaire' },
  ]

  return {
    path: competencePathFor(country.slug, competence.slug),
    family: 'competence',
    breadcrumbName: `${competence.name} ${country.prep} ${country.name}`,
    flag: country.flag,
    h1,
    title,
    description,
    lead,
    quickAnswer,
    chips: [`Livraison ${country.prep} ${country.name}`, 'Installation clé en main', 'SAV local'],
    features,
    faq,
    relatedCountries,
    relatedPages,
    articles: articleLinks(competence.blogSlugs),
    iso: country.iso,
  }
}

function buildSecteurPage(secteur, country) {
  const vars = varsFor(country)
  const h1 = tpl(secteur.h1Tpl, { ...vars, article: secteur.article, name: secteur.name })
  const title = tpl(secteur.titleTpl, { ...vars, article: secteur.article, name: secteur.name, titleShort: secteur.titleShort || secteur.title })
  const description = tpl(secteur.descTpl, { ...vars, article: secteur.article, name: secteur.name })
  const lead = tpl(secteur.leadTpl, { ...vars, article: secteur.article, name: secteur.name })
  const quickAnswer = tpl(secteur.qaTpl, { ...vars, article: secteur.article, name: secteur.name })
  const features = secteur.features.map((f) => tpl(f, vars))
  const faq = secteur.faq.map((item) => ({
    q: tpl(item.q, { ...vars, article: secteur.article, name: secteur.name }),
    a: tpl(item.a, { ...vars, article: secteur.article, name: secteur.name }),
  }))

  const relatedCountries = GEO_COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => ({
    name: c.name,
    flag: c.flag,
    path: `/secteurs/${secteur.slug}-${c.slug}`,
  }))

  const siblings = GEO_SECTEURS.filter((s) => s.slug !== secteur.slug).slice(0, 3).map((s) => ({
    label: `Équiper ${s.article} ${s.name} ${country.prep} ${country.name}`,
    path: `/secteurs/${s.slug}-${country.slug}`,
  }))

  const relatedPages = [
    { label: `Fournisseur matériel dentaire ${country.prep} ${country.name}`, path: `/pays/${country.slug}` },
    ...siblings,
    { label: 'Devis matériel dentaire', path: '/devis-materiel-dentaire' },
  ]

  return {
    path: `/secteurs/${secteur.slug}-${country.slug}`,
    family: 'secteur',
    breadcrumbName: `Équiper ${secteur.article} ${secteur.name} ${country.prep} ${country.name}`,
    flag: country.flag,
    h1,
    title,
    description,
    lead,
    quickAnswer,
    chips: [`Livraison ${country.prep} ${country.name}`, 'Devis sous 24 h', 'Installation & SAV'],
    features,
    faq,
    relatedCountries,
    relatedPages,
    articles: articleLinks(secteur.blogSlugs),
    iso: country.iso,
  }
}

function buildCountryHub(country) {
  const hub = {
    path: `/pays/${country.slug}`,
    family: 'pays',
    breadcrumbName: `Matériel dentaire ${country.prep} ${country.name}`,
    flag: country.flag,
    h1: `Fournisseur de matériel dentaire ${country.prep} ${country.name}`,
    title: `Fournisseur matériel dentaire ${country.prep} ${country.name} : devis ${country.capital} | AfriSmile`,
    description: `Fournisseur de matériel dentaire ${country.prep} ${country.name} : fauteuils, autoclaves, imagerie, consommables. Devis sous 24 h à ${country.capital}, installation et SAV.`,
    lead: `${country.note} AfriSmile fournit, installe et entretient les équipements des cabinets et cliniques : fauteuils, stérilisation, radiologie, instruments et consommables, avec un devis sous 24 h et un accompagnement technique depuis ${country.capital}.`,
    quickAnswer: `AfriSmile est le fournisseur de matériel dentaire ${country.prep} ${country.name} : fauteuils, autoclaves Classe B, radiologie numérique, instruments et consommables, avec livraison à ${country.capital}, installation clé en main et SAV local.`,
    chips: [`Devis sous 24 h à ${country.capital}`, 'Installation clé en main', 'SAV local'],
    features: [
      `Catalogue complet livré ${country.prep} ${country.name} (${country.cities.join(', ')})`,
      'Devis détaillé sous 24 h, prix en FCFA ou devise locale',
      'Installation et mise en service par nos techniciens',
      'SAV local, pièces détachées et maintenance préventive',
      'Formation de votre équipe aux équipements fournis',
    ],
    faq: [
      { q: `Livrez-vous du matériel dentaire ${country.prep} ${country.name} ?`, a: `Oui, AfriSmile livre ${country.prep} ${country.name}, notamment à ${country.capital}${country.cities.length > 1 ? ` et dans les principales villes (${country.cities.slice(1).join(', ')})` : ''}. La livraison et l’installation sont organisées avec nos équipes techniques.` },
      { q: `Comment obtenir un devis à ${country.capital} ?`, a: `Envoyez votre liste de besoins via la page devis : nous répondons sous 24 h avec un chiffrage détaillé, les délais et les options d’installation.` },
      { q: `Quels équipements recommandez-vous ${country.prep} ${country.name} ?`, a: `${country.note} Nous sélectionnons des équipements robustes adaptés au climat et aux conditions locales, avec pièces disponibles.` },
      { q: 'Proposez-vous un service après-vente ?', a: 'Oui : installation, maintenance préventive, pièces détachées et assistance technique font partie de notre accompagnement, avec des contrats adaptés aux cabinets et aux cliniques.' },
    ],
    relatedPages: GEO_COMPETENCES.map((c) => ({
      label: competenceLabelFor(country.slug, c.slug) || `${c.name} ${country.prep} ${country.name}`,
      path: competencePathFor(country.slug, c.slug),
    })),
    relatedSecteurs: GEO_SECTEURS.map((s) => ({
      label: `Équiper ${s.article} ${s.name} ${country.prep} ${country.name}`,
      path: `/secteurs/${s.slug}-${country.slug}`,
    })),
    relatedCountries: GEO_COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => ({
      name: c.name,
      flag: c.flag,
      path: `/pays/${c.slug}`,
    })),
    articles: articleLinks(country.articles),
    iso: country.iso,
    staticPages: buildStaticPagesFor(country),
  }
  return hub
}

function buildStaticPagesFor(country) {
  const pages = []
  if (EXISTING_COUNTRY_PAGES.has(country.slug)) {
    pages.push({ label: `Matériel dentaire ${country.prep} ${country.name}`, path: `/materiel-dentaire-${country.slug}` })
  }
  if (country.slug === 'senegal') {
    pages.push(
      { label: 'Équipement dentaire à Dakar', path: '/equipement-dentaire-dakar' },
      { label: 'Fauteuil dentaire au Sénégal', path: '/fauteuil-dentaire-senegal' },
      { label: 'Autoclave Classe B au Sénégal', path: '/autoclave-dentaire-classe-b-senegal' },
      { label: 'Scanner intra-oral au Sénégal', path: '/scanner-intra-oral-senegal' },
    )
  }
  return pages
}

function buildPaysIndex() {
  return {
    path: '/pays',
    family: 'pays-index',
    breadcrumbName: 'Pays desservis',
    flag: '/assets/logo-afrismile.png',
    h1: 'Fournisseur de matériel dentaire en Afrique de l’Ouest',
    title: 'Matériel dentaire en Afrique de l’Ouest : 17 pays desservis | AfriSmile',
    description: 'Matériel dentaire livré et installé dans 17 pays d’Afrique de l’Ouest : Sénégal, Côte d’Ivoire, Mali, Ghana, Nigeria et plus. Devis sous 24 h, installation et SAV.',
    lead: 'Basé à Dakar, AfriSmile équipe les cabinets, cliniques, laboratoires et hôpitaux dans 17 pays de la sous-région : fourniture, installation clé en main, formation et service après-vente.',
    quickAnswer: 'AfriSmile dessert 17 pays d’Afrique de l’Ouest et du Centre : Sénégal, Côte d’Ivoire, Mali, Burkina Faso, Niger, Guinée, Ghana, Nigeria, Bénin, Togo, Cameroun et plus. Devis sous 24 h, livraison, installation et SAV local.',
    chips: ['17 pays desservis', 'Devis sous 24 h', 'Installation clé en main'],
    features: [
      'Fourniture de matériel dentaire professionnel dans 17 pays',
      'Livraison organisée vers chaque capitale et grandes villes',
      'Installation et mise en service par nos techniciens',
      'SAV local, pièces détachées et maintenance préventive',
      'Devis détaillé sous 24 h avec prix et délais',
    ],
    faq: [
      { q: 'Dans quels pays AfriSmile livre-t-il du matériel dentaire ?', a: 'AfriSmile livre dans 17 pays d’Afrique de l’Ouest et du Centre : Sénégal, Mauritanie, Côte d’Ivoire, Mali, Burkina Faso, Niger, Guinée, Guinée-Bissau, Gambie, Cap-Vert, Bénin, Togo, Ghana, Nigeria, Libéria, Sierra Leone et Cameroun.' },
      { q: 'Comment se passe la livraison vers mon pays ?', a: 'Nous organisons la logistique vers chaque capitale et confirmons les délais sur le devis. L’installation des gros équipements peut être assurée par nos équipes techniques.' },
      { q: 'Les prix sont-ils en FCFA ?', a: 'Les devis sont établis en FCFA pour les pays de la zone CFA et convertis dans la devise locale pour les autres pays, avec tous les coûts détaillés.' },
      { q: 'Proposez-vous un SAV dans chaque pays ?', a: 'Nous assurons le SAV, les pièces détachées et la maintenance préventive, en coordination avec nos équipes et nos partenaires locaux.' },
    ],
    relatedCountries: GEO_COUNTRIES.map((c) => ({
      name: c.name,
      flag: c.flag,
      path: `/pays/${c.slug}`,
    })),
    articles: articleLinks(['fournisseur-materiel-dentaire-afrique-ouest-criteres-fiabilite-2026', 'ouvrir-cabinet-dentaire-materiel-indispensable', 'devis-materiel-dentaire-senegal-comment-comparer-2026']),
    iso: 'OA',
  }
}

// Assign country articles (posts spécifiques au pays quand ils existent)
const COUNTRY_ARTICLES = {
  senegal: ['fournisseur-materiel-dentaire-senegal-checklist-pro-2026', 'equipement-dentaire-dakar-guide-achat-clinique-2026', 'ouvrir-cabinet-dentaire-senegal-budget-complet-2026'],
  'cote-divoire': ['fournisseur-materiel-dentaire-abidjan-cote-divoire-devis-2026', 'comment-ouvrir-une-clinique-dentaire-en-cote-divoire-2026', 'devis-cabinet-dentaire-abidjan-checklist-avant-signature-2026'],
  mali: ['materiel-dentaire-bamako-mali-prix-installation-cabinet-2026'],
  'burkina-faso': ['autoclave-classe-b-ouagadougou-burkina-faso-guide-achat-2026', 'materiel-dentaire-burkina-faso-ougadougou-prix-devis-2026', 'materiel-dentaire-ouagadougou-prix-devis-2026'],
  niger: ['materiel-dentaire-niamey-niger-checklist-devis-2026'],
  guinee: ['materiel-dentaire-guinee-conakry-cabinet-moderne-2026'],
  ghana: ['fauteuil-dentaire-accra-ghana-devis-installation-2026', 'materiel-dentaire-ghana-accra-kumasi-fournisseur-clinique-2026', 'scanner-intra-oral-accra-rentabilite-cabinet-2026'],
  nigeria: ['materiel-dentaire-lagos-comment-choisir-fournisseur-fiable-2026', 'materiel-dentaire-nigeria-lagos-abuja-ouvrir-clinique-2026'],
  mauritanie: ['materiel-dentaire-nouakchott-mauritanie-cabinet-prix-2026'],
  benin: ['materiel-dentaire-cotonou-benin-prix-ouverture-cabinet-2026', 'materiel-dentaire-benin-togo-guide-equipement-cabinet-2026'],
  togo: ['equipement-cabinet-dentaire-lome-togo-devis-prix-2026', 'appareil-dentaire-prix-togo-lome-fcfa-2026', 'materiel-dentaire-benin-togo-guide-equipement-cabinet-2026'],
  cameroun: ['equipement-dentaire-douala-priorites-ouverture-clinique-2026', 'materiel-dentaire-cameroun-douala-yaounde-guide-achat-2026'],
}
GEO_COUNTRIES.forEach((c) => {
  c.articles = COUNTRY_ARTICLES[c.slug] || []
})

// --- Export API ---

// Overrides title/description/H1 par chemin exact (boucle GSC hebdo : pages à impressions sans clics).
// Format : { '/equipements/fauteuil-dentaire-mali': { title: '...', description: '...', h1: '...' } }
// Les valeurs manquantes gardent le contenu généré par le template.
export const GEO_TITLE_OVERRIDES = {}

let _allPages = null
let _pageByPath = null

export function getAllGeoPages() {
  if (_allPages) return _allPages
  const pages = []
  GEO_COMPETENCES.forEach((competence) => {
    GEO_COUNTRIES.forEach((country) => {
      if (country.slug === 'senegal' && SENEGAL_OVERRIDES[competence.slug]) return
      pages.push(buildCompetencePage(competence, country))
    })
  })
  GEO_SECTEURS.forEach((secteur) => {
    GEO_COUNTRIES.forEach((country) => {
      pages.push(buildSecteurPage(secteur, country))
    })
  })
  GEO_COUNTRIES.forEach((country) => pages.push(buildCountryHub(country)))
  pages.push(buildPaysIndex())
  pages.forEach((page) => {
    const override = GEO_TITLE_OVERRIDES[page.path]
    if (override) {
      if (override.title) page.title = override.title
      if (override.description) page.description = override.description
      if (override.h1) page.h1 = override.h1
    }
  })
  _allPages = pages
  return pages
}

export function getGeoPageByPath(path) {
  if (!_pageByPath) {
    _pageByPath = new Map(getAllGeoPages().map((p) => [p.path, p]))
  }
  return _pageByPath.get(path) || null
}

export function geoSeoForPath(pathname) {
  const page = getGeoPageByPath(pathname)
  if (!page) return null
  const priority = page.family === 'pays' || page.family === 'pays-index' ? '0.80' : '0.70'
  const changefreq = page.family === 'pays' || page.family === 'pays-index' ? 'weekly' : 'monthly'
  return {
    title: page.title,
    description: page.description,
    canonicalPath: page.path,
    canonicalUrl: `${'https://www.afrismile.net'}${page.path}`,
    socialImageUrl: `${'https://www.afrismile.net'}${page.flag}`,
    robots: 'index, follow, max-image-preview:large',
    type: 'website',
    priority,
    changefreq,
  }
}

export const SITE_ORIGIN_GEO = 'https://www.afrismile.net'
