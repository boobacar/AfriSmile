// geoPrix.js — Usine à pages « prix des soins » + « villes » pour AfriSmile
//
// Deux familles :
//   1. /prix/<soin>-<pays>  : pages intention « combien coûte <soin> <pays> » (recherche patient).
//      Le trafic réel du site (GSC 90 j) est dominé par « appareil dentaire prix en FCFA <pays> »,
//      « implant dentaire prix <ville> », « prothèse dentaire prix <ville> », confirmés en
//      autocomplétion Google pour sn/ci/ml/bf/tg/cm/gn/ne. Chaque page répond à la question
//      (facteurs de prix, contenu d'un devis, points à vérifier) puis oriente vers l'équipement
//      de cabinet — AfriSmile n'est pas un cabinet et ne soigne pas les patients.
//   2. /villes/<ville>      : pages locales B2B « matériel dentaire à <ville> » (fournisseur, devis,
//      installation, SAV), pour capter les requêtes ville par ville sans dupliquer les hubs pays.
//
// Les pages sont COMPUTÉES (jamais de fichiers) : un composant lazy + 2 routes dynamiques.
// Ce module ne doit être importé que par les outils node (sitemap/prerender) et le composant lazy.

import { GEO_COUNTRIES } from './geoData.js'

// --- Soins (intention patient « prix ») ---

export const PRIX_SOINS = [
  {
    slug: 'appareil-dentaire',
    name: 'appareil dentaire',
    titleName: 'appareil dentaire',
    article: 'un',
    h1Tpl: 'Prix d’un appareil dentaire {prep} {pays} : ce qui fait varier le tarif à {capital}',
    titleTpl: 'Prix appareil dentaire {prep} {pays} : tarifs {currency} à {capital} | AfriSmile',
    descTpl: 'Combien coûte un appareil dentaire {prep} {pays} ? Comprenez les tarifs {currency} pratiqués à {capital}, ce qui est inclus dans un devis et les points à vérifier.',
    leadTpl: 'Les recherches « appareil dentaire prix {prep} {pays} » ou « appareil dentaire prix {capital} » mélangent en réalité plusieurs traitements : orthodontie fixe, orthodontie amovible, gouttières transparentes, voire prothèse. {note} Avant de comparer des montants, il faut donc préciser le type d’appareil, le nombre de contrôles et ce que le forfait couvre réellement.',
    qaTpl: 'Le prix d’un appareil dentaire {prep} {pays} dépend du type d’appareil (bagues métalliques, céramiques ou aligneurs), du bilan et de l’imagerie, du nombre de contrôles prévus et de la contention finale. Demandez toujours un devis écrit détaillant ces étapes. AfriSmile n’est pas un cabinet dentaire : nous équipons les cabinets {prep} {pays}.',
    priceFactors: [
      'Le type d’appareil : bagues métalliques, céramiques, lingual ou gouttières transparentes',
      'Le bilan initial : consultation, radiographies, photos et empreinte ou scan',
      'La durée du traitement et le nombre de contrôles programmés',
      'Les matériaux, les attaches et le travail du laboratoire',
      'La contention finale et le suivi après la dépose de l’appareil',
    ],
    includes: [
      'Le bilan orthodontique et les examens d’imagerie nécessaires',
      'La pose de l’appareil et les réglages de mise en route',
      'Les contrôles périodiques prévus au protocole',
      'Les réparations liées à une casse ou à un décrochage d’attache, si elles sont incluses',
      'La contention et la surveillance après le traitement actif',
    ],
    verify: [
      'Le nombre de contrôles inclus, et le prix d’un contrôle hors forfait',
      'Le prix de la contention finale, souvent facturée séparément',
      'Ce qui se passe en cas de casse : pièce remplacée ou refacturée',
      'La durée prévisionnelle et le délai d’obtention du premier rendez-vous',
    ],
    faq: [
      { q: 'Combien coûte un appareil dentaire {prep} {pays} ?', a: 'Le montant dépend du type d’appareil, du bilan, du nombre de contrôles et de la contention finale. Les écarts entre deux devis {prep} {pays} viennent presque toujours de ce qui est inclus ou non, et non du seul matériau.' },
      { q: 'Pourquoi les prix varient-ils autant à {capital} ?', a: 'Parce que les forfaits ne couvrent pas les mêmes étapes : certains incluent l’imagerie et les contrôles, d’autres les facturent à l’acte. Demandez le détail étape par étape avant de comparer.' },
      { q: 'Un appareil dentaire est-il pris en charge ?', a: 'Les dispositifs d’orthodontie relèvent le plus souvent d’un paiement direct du patient ; le remboursement éventuel dépend de votre couverture et de votre organisme. Renseignez-vous auprès de votre assurance avant de commencer.' },
      { q: 'AfriSmile soigne-t-il les patients {prep} {pays} ?', a: 'Non. AfriSmile est un fournisseur de matériel dentaire : nous équipons les cabinets {prep} {pays} en fauteuils, imagerie, stérilisation et consommables, et nous assurons l’installation et le service après-vente.' },
      { q: 'Comment obtenir un devis d’équipement pour un cabinet à {capital} ?', a: 'Envoyez votre liste de besoins depuis la page devis : nous répondons sous 24 h avec un chiffrage détaillé, les délais de livraison et les options d’installation.' },
    ],
    blogSlugs: ['appareil-dentaire-prix-dakar-senegal-2026', 'appareil-dentaire-prix-cote-ivoire-abidjan-fcfa-2026', 'appareil-dentaire-prix-togo-lome-fcfa-2026'],
  },
  {
    slug: 'aligneurs-dentaires',
    name: 'aligneurs dentaires',
    titleName: 'aligneurs dentaires',
    article: 'des',
    h1Tpl: 'Prix des aligneurs dentaires {prep} {pays} : gouttières transparentes à {capital}',
    titleTpl: 'Prix aligneurs dentaires {prep} {pays} : gouttières {currency} | AfriSmile',
    descTpl: 'Combien coûtent des aligneurs dentaires {prep} {pays} ? Comprenez les tarifs {currency} à {capital}, ce qui est inclus dans un devis et les points à vérifier.',
    leadTpl: 'Les gouttières transparentes (aligneurs) remplacent l’appareil fixe dans de nombreux cas légers à modérés. {note} Le prix {prep} {pays} ne dépend pas du seul nombre de gouttières : la qualité du plan de traitement numérique, le suivi et la contention pèsent autant dans le résultat.',
    qaTpl: 'Le prix des aligneurs dentaires {prep} {pays} dépend de la complexité du cas, du nombre de gouttières, de la prise d’empreinte (scan numérique ou empreinte classique), de la durée du traitement et de la contention. Un devis sérieux détaille ces quatre points. AfriSmile n’est pas un cabinet : nous équipons les cabinets {prep} {pays} en imagerie et matériel de prise d’empreinte.',
    priceFactors: [
      'Le nombre de gouttières et la complexité du cas traité',
      'La méthode de prise d’empreinte : scan intra-oral ou empreinte classique au laboratoire',
      'La planification numérique du traitement et sa validation',
      'La durée du port et le nombre de contrôles intermédiaires',
      'La contention finale et les retouches éventuelles',
    ],
    includes: [
      'Le bilan et la prise d’empreinte (scan ou empreinte physique)',
      'Le plan de traitement numérique et la simulation du résultat',
      'La série complète de gouttières prévue au protocole',
      'Les contrôles de suivi pendant le traitement',
      'La contention à la fin du traitement actif',
    ],
    verify: [
      'Nombre exact de gouttières incluses, et prix des gouttières supplémentaires',
      'Si un nouveau scan est refacturé en cas de reprise',
      'Le forfait contention et le suivi après traitement',
      'La durée annoncée et les conditions d’arrêt ou de modification',
    ],
    faq: [
      { q: 'Combien coûtent des aligneurs dentaires {prep} {pays} ?', a: 'Le tarif dépend du nombre de gouttières, de la complexité du cas et du suivi. Les cas simples demandent moins de gouttières que les cas complexes, et l’écart se retrouve directement dans le devis.' },
      { q: 'Un scan intra-oral change-t-il le prix ?', a: 'La prise d’empreinte numérique est plus rapide et plus confortable pour le patient, et elle améliore la précision du plan de traitement. Elle peut être facturée comme un acte distinct : demandez-le explicitement.' },
      { q: 'Quelle différence entre aligneurs et appareil fixe ?', a: 'Les aligneurs sont amovibles et discrets, adaptés à de nombreux cas légers à modérés ; l’appareil fixe reste indiqué dans les cas complexes. Le choix se fait sur le diagnostic, pas sur le seul budget.' },
      { q: 'AfriSmile propose-t-il des aligneurs aux patients {prep} {pays} ?', a: 'Non. AfriSmile équipe les cabinets dentaires : matériel, imagerie, empreinte numérique, stérilisation et consommables, avec installation et service après-vente.' },
    ],
    blogSlugs: ['aligneurs-dentaires-invisalign-prix-dakar-senegal-2026', 'transition-empreinte-numerique-scanner-3d-afrique-ouest'],
  },
  {
    slug: 'implant-dentaire',
    name: 'implant dentaire',
    titleName: 'implant dentaire',
    article: 'un',
    h1Tpl: 'Prix d’un implant dentaire {prep} {pays} : étapes et budget à {capital}',
    titleTpl: 'Prix implant dentaire {prep} {pays} : tarifs {currency} à {capital} | AfriSmile',
    descTpl: 'Combien coûte un implant dentaire {prep} {pays} ? Comprenez les tarifs {currency} à {capital}, le contenu d’un devis et les points à vérifier.',
    leadTpl: 'Un implant dentaire remplace une dent absente sans toucher aux dents voisines. {note} Le devis {prep} {pays} doit distinguer clairement l’implant, le pilier et la couronne : c’est la principale source d’écart entre deux offres.',
    qaTpl: 'Le prix d’un implant dentaire {prep} {pays} dépend de la marque d’implant, du nombre d’implants, de l’imagerie pré-chirurgicale (panoramique, voire cone beam), d’une éventuelle greffe osseuse, du pilier et de la couronne. AfriSmile n’est pas un cabinet dentaire : nous équipons les cabinets {prep} {pays} en fauteuils, imagerie et matériel d’implantologie.',
    priceFactors: [
      'La marque et le diamètre de l’implant posé',
      'Le nombre d’implants à poser et le nombre de dents à remplacer',
      'L’imagerie pré-chirurgicale : panoramique, cone beam 3D, guide chirurgical',
      'Une éventuelle greffe osseuse ou un comblement avant la pose',
      'Le pilier prothétique et la couronne qui viennent ensuite',
    ],
    includes: [
      'Le bilan pré-implantaire et l’imagerie nécessaire',
      'La pose de l’implant et les contrôles de cicatrisation',
      'Le pilier prothétique et la couronne, lorsque le forfait les couvre',
      'Les séances de contrôle après la mise en charge',
      'Les radiographies de vérification prévues au protocole',
    ],
    verify: [
      'La marque exacte de l’implant et l’origine des pièces',
      'Si le pilier et la couronne sont inclus ou facturés après la chirurgie',
      'La garantie de l’implant et les conditions de suivi',
      'La nécessité d’une greffe osseuse, chiffrée dès le départ',
    ],
    faq: [
      { q: 'Combien coûte un implant dentaire {prep} {pays} ?', a: 'Le budget dépend de la marque d’implant, de l’imagerie, d’une éventuelle greffe osseuse et de la prothèse posée sur l’implant. Un devis complet détaille chaque étape ; un devis qui annonce un seul montant global est difficile à comparer.' },
      { q: 'Pourquoi demander une imagerie 3D avant la pose ?', a: 'Le cone beam 3D permet de vérifier le volume osseux et la position des structures anatomiques. Il réduit le risque chirurgical et permet de planifier un guide quand c’est nécessaire.' },
      { q: 'Quelles sont les étapes d’un implant à {capital} ?', a: 'Bilan et imagerie, pose de l’implant, temps de cicatrisation, puis mise en place du pilier et de la couronne, avec des contrôles intermédiaires. Le devis doit préciser ce qui est inclus à chaque étape.' },
      { q: 'AfriSmile pose-t-il des implants aux patients {prep} {pays} ?', a: 'Non : AfriSmile est un fournisseur. Nous équipons les cabinets et cliniques {prep} {pays} en fauteuils, imagerie, matériel d’implantologie et consommables, avec installation et service après-vente.' },
    ],
    blogSlugs: ['implant-dentaire-prix-dakar-senegal-2026', 'appareil-panoramique-dentaire-cone-beam-3d-prix-senegal-2026', 'radiologie-panoramique-vs-cone-beam-cbct-lequel-choisir'],
  },
  {
    slug: 'prothese-dentaire',
    name: 'prothèse dentaire',
    titleName: 'prothèse dentaire',
    article: 'une',
    h1Tpl: 'Prix d’une prothèse dentaire {prep} {pays} : couronne, bridge et tarifs à {capital}',
    titleTpl: 'Prix prothèse dentaire {prep} {pays} : couronne & bridge | AfriSmile',
    descTpl: 'Combien coûte une prothèse dentaire {prep} {pays} ? Comprenez les tarifs {currency} à {capital}, le contenu d’un devis et les points à vérifier.',
    leadTpl: 'Le mot « prothèse » regroupe des dispositifs très différents : couronne, bridge, prothèse sur implant ou appareil amovible. {note} Le premier réflexe {prep} {pays} est donc de préciser le type de prothèse et le nombre de dents concernées, car un prix n’a aucun sens sans cette distinction.',
    qaTpl: 'Le prix d’une prothèse dentaire {prep} {pays} dépend du type de prothèse (couronne, bridge, sur implant), du matériau (céramo-métallique, céramique, zircone), du nombre d’éléments, du laboratoire et du nombre d’essayages. AfriSmile n’est pas un laboratoire de prothèse : nous équipons les cabinets {prep} {pays} en empreinte numérique, laboratoire partenaire et matériel.',
    priceFactors: [
      'Le type de prothèse : couronne unitaire, bridge, prothèse sur implant',
      'Le matériau : céramo-métallique, céramique, zircone ou composite',
      'Le nombre d’éléments prothétiques fabriqués',
      'Le laboratoire retenu et sa méthode de fabrication (traditionnelle ou numérique)',
      'Le nombre d’essayages et de retouches inclus',
    ],
    includes: [
      'La préparation des dents et la prise d’empreinte (ou le scan)',
      'La fabrication au laboratoire et les essayages successifs',
      'La pose définitive et les réglages d’occlusion',
      'Les retouches prévues après la pose',
      'La garantie sur la prothèse, selon les conditions du praticien',
    ],
    verify: [
      'Le matériau exact utilisé, écrit sur le devis',
      'Le nombre d’essayages inclus et le coût d’un essayage supplémentaire',
      'La durée de garantie et ce qu’elle couvre réellement',
      'Si l’empreinte est prise au scan intra-oral ou au laboratoire',
    ],
    faq: [
      { q: 'Combien coûte une prothèse dentaire {prep} {pays} ?', a: 'Le prix dépend du type de prothèse, du matériau, du nombre de dents et du laboratoire. Une couronne unitaire et un bridge de trois éléments n’ont ni le même coût de fabrication, ni le même nombre d’étapes au fauteuil.' },
      { q: 'Pourquoi les prix varient-ils entre deux cabinets à {capital} ?', a: 'Les matériaux, le laboratoire, le nombre d’essayages et la garantie ne sont pas identiques. Les devis qui détaillent ces éléments sont les seuls comparables.' },
      { q: 'L’empreinte numérique change-t-elle le résultat ?', a: 'Le scan intra-oral évite l’empreinte à l’alginate, améliore le confort du patient et sécurise la transmission au laboratoire. Il réduit aussi les reprises liées à une empreinte imprécise.' },
      { q: 'AfriSmile fabrique-t-il des prothèses {prep} {pays} ?', a: 'Non. AfriSmile équipe les cabinets et laboratoires {prep} {pays} : empreinte numérique, matériel, consommables et service technique, avec installation et service après-vente.' },
    ],
    blogSlugs: ['prothese-dentaire-prix-dakar-senegal-2026', 'transition-empreinte-numerique-scanner-3d-afrique-ouest'],
  },
  {
    slug: 'prothese-amovible-dentier',
    name: 'dentier',
    titleName: 'prothèse amovible',
    article: 'un',
    h1Tpl: 'Prix d’un dentier {prep} {pays} : prothèse amovible à {capital}',
    titleTpl: 'Prix dentier {prep} {pays} : prothèse amovible {currency} | AfriSmile',
    descTpl: 'Combien coûte un dentier {prep} {pays} ? Comprenez les tarifs {currency} à {capital}, le contenu d’un devis et les points à vérifier.',
    leadTpl: 'Le dentier — ou prothèse amovible — reste la solution la plus accessible pour remplacer plusieurs dents. {note} Le prix {prep} {pays} dépend surtout du nombre de dents remplacées, du matériau de base, du nombre d’essayages et des retouches nécessaires après la livraison.',
    qaTpl: 'Le prix d’un dentier {prep} {pays} dépend de la prothèse (complète ou partielle), de sa base (résine dure, résine souple, châssis métallique), du nombre de dents remplacées, du nombre d’essayages et des retouches après livraison. AfriSmile n’est pas un cabinet dentaire : nous équipons les cabinets {prep} {pays}.',
    priceFactors: [
      'Prothèse complète ou partielle, et nombre de dents remplacées',
      'Le matériau : résine dure, résine souple, base métallique ou combinaison',
      'Le nombre d’empreintes et d’essayages nécessaires',
      'Les retouches après la livraison (points d’appui, ajustements)',
      'L’entretien et le renouvellement à prévoir dans le temps',
    ],
    includes: [
      'Les empreintes initiales et leur correction',
      'La fabrication au laboratoire et les essayages progressifs',
      'La livraison, la pose et les conseils d’entretien',
      'Les retouches d’adaptation après la mise en bouche',
      'Le suivi pendant la période d’adaptation',
    ],
    verify: [
      'Le matériau de la base et la durée de garantie',
      'Le nombre de retouches incluses après la livraison',
      'Le nombre d’essayages prévus avant la livraison définitive',
      'Les conditions de réparation en cas de fracture',
    ],
    faq: [
      { q: 'Combien coûte un dentier {prep} {pays} ?', a: 'Le tarif dépend du nombre de dents remplacées, du matériau de base et du nombre d’essayages. Une prothèse partielle et une prothèse complète n’impliquent ni le même travail de laboratoire, ni le même nombre de séances.' },
      { q: 'Combien de temps pour obtenir un dentier à {capital} ?', a: 'Le délai dépend du laboratoire et du nombre d’essayages. Demandez le calendrier écrit sur le devis : empreintes, essayage esthétique, essayage fonctionnel puis livraison.' },
      { q: 'Un dentier demande-t-il des retouches ?', a: 'Oui, c’est fréquent après la mise en bouche : les points d’appui évoluent. Vérifiez combien de retouches sont incluses dans le devis, et le prix d’une retouche supplémentaire.' },
      { q: 'AfriSmile fournit-il des dentiers aux patients {prep} {pays} ?', a: 'Non. AfriSmile est un fournisseur de matériel et de consommables pour les cabinets et laboratoires {prep} {pays}, avec installation, formation et service après-vente.' },
    ],
    blogSlugs: ['prothese-dentaire-prix-dakar-senegal-2026'],
  },
  {
    slug: 'couronne-dentaire',
    name: 'couronne dentaire',
    titleName: 'couronne dentaire',
    article: 'une',
    h1Tpl: 'Prix d’une couronne dentaire {prep} {pays} : céramique, zircone et tarifs à {capital}',
    titleTpl: 'Prix couronne dentaire {prep} {pays} : tarifs {currency} | AfriSmile',
    descTpl: 'Combien coûte une couronne dentaire {prep} {pays} ? Comprenez les tarifs {currency}, le contenu d’un devis et les points à vérifier.',
    leadTpl: 'La couronne est la prothèse fixe la plus posée au fauteuil : elle recouvre une dent trop abîmée pour être simplement obturée. {note} Le prix {prep} {pays} dépend du matériau, du laboratoire et du nombre d’essayages — bien plus que du nombre de séances.',
    qaTpl: 'Le prix d’une couronne dentaire {prep} {pays} dépend du matériau (céramo-métallique, céramique ou zircone), du laboratoire, du nombre d’éléments et des essayages. Le devis doit préciser le matériau exact et la garantie. AfriSmile n’est pas un laboratoire de prothèse : nous équipons les cabinets {prep} {pays}.',
    priceFactors: [
      'Le matériau : céramo-métallique, céramique frittée, zircone ou composite',
      'Le laboratoire retenu et sa méthode de fabrication, classique ou numérique',
      'Le nombre d’éléments : une couronne seule ou un bridge de plusieurs éléments',
      'La préparation de la dent et la reconstitution du noyau',
      'Le nombre d’essayages et les retouches après la pose',
    ],
    includes: [
      'La préparation de la dent et la prise d’empreinte, ou le scan intra-oral',
      'La prothèse provisoire, lorsqu’elle est prévue au protocole',
      'La fabrication au laboratoire et l’essayage',
      'La pose définitive et le réglage de l’occlusion',
      'Les retouches et le contrôle après la pose',
    ],
    verify: [
      'Le matériau exact, écrit sur le devis',
      'Le nombre d’essayages inclus et le prix d’un essayage supplémentaire',
      'La durée de garantie et ce qu’elle couvre réellement',
      'Le prix d’une reprise en cas de fracture ou de descellement',
    ],
    faq: [
      { q: 'Combien coûte une couronne dentaire {prep} {pays} ?', a: 'Le prix dépend du matériau, du laboratoire et du nombre d’éléments. Une couronne en zircone, plus esthétique et plus résistante, se situe au-dessus d’une céramo-métallique : demandez le matériau écrit sur le devis.' },
      { q: 'Quelle différence entre une couronne et un bridge ?', a: 'La couronne recouvre une seule dent préparée ; le bridge remplace une dent absente en prenant appui sur les dents voisines. Le nombre d’éléments fabriqués — et donc le prix — change complètement.' },
      { q: 'Combien de séances faut-il à {capital} ?', a: 'Le plus souvent deux à trois séances : préparation et empreinte, essayage, puis pose définitive. Le délai entre l’empreinte et la pose dépend du laboratoire.' },
      { q: 'AfriSmile fabrique-t-il des couronnes {prep} {pays} ?', a: 'Non. AfriSmile équipe les cabinets {prep} {pays} : empreinte numérique, matériel de laboratoire, consommables et service technique, avec installation et service après-vente.' },
    ],
    blogSlugs: ['prothese-dentaire-prix-dakar-senegal-2026'],
  },
  {
    slug: 'blanchiment-dentaire',
    name: 'blanchiment dentaire',
    titleName: 'blanchiment dentaire',
    article: 'un',
    h1Tpl: 'Prix d’un blanchiment dentaire {prep} {pays} : séances et tarifs à {capital}',
    titleTpl: 'Prix blanchiment dentaire {prep} {pays} : tarifs {currency} | AfriSmile',
    descTpl: 'Combien coûte un blanchiment dentaire {prep} {pays} ? Comprenez les tarifs {currency} à {capital}, le contenu d’un devis et les points à vérifier.',
    leadTpl: 'Le blanchiment dentaire est un acte esthétique très demandé, mais son prix varie fortement selon la technique et le nombre de séances. {note} Le tarif {prep} {pays} doit toujours être précédé d’un contrôle : blanchir une dent non soignée ou un détartrage non fait donne un résultat inégal.',
    qaTpl: 'Le prix d’un blanchiment dentaire {prep} {pays} dépend de la technique (au fauteuil, par gouttières à domicile ou combinaison), du produit utilisé, du nombre de séances, du contrôle préalable (détartrage, caries) et de la prise en charge de la sensibilité. AfriSmile n’est pas un cabinet : nous équipons les cabinets {prep} {pays}.',
    priceFactors: [
      'La technique : blanchiment au fauteuil, gouttières à domicile ou protocole combiné',
      'Le produit utilisé et sa concentration',
      'Le nombre de séances nécessaires pour obtenir le résultat',
      'Le contrôle préalable : détartrage, traitement des caries, état gingival',
      'La gestion de la sensibilité et le suivi après la séance',
    ],
    includes: [
      'Le bilan préalable et le contrôle de l’état dentaire et gingival',
      'Le détartrage, lorsqu’il est nécessaire avant le blanchiment',
      'La ou les séances de blanchiment prévues au protocole',
      'Les gouttières et le produit, si le protocole à domicile est retenu',
      'Le contrôle du résultat après la séance',
    ],
    verify: [
      'Le produit et la concentration utilisés',
      'Le nombre de séances incluses, et le prix d’une séance supplémentaire',
      'Si le détartrage préalable est facturé à part',
      'Le protocole prévu en cas de sensibilité pendant le traitement',
    ],
    faq: [
      { q: 'Combien coûte un blanchiment dentaire {prep} {pays} ?', a: 'Le tarif dépend de la technique, du produit, du nombre de séances et des soins préalables. Les protocoles combinés (fauteuil puis gouttières) se situent au-dessus d’un blanchiment au fauteuil seul : demandez ce qui est inclus.' },
      { q: 'Le blanchiment abîme-t-il les dents ?', a: 'Réalisé par un chirurgien-dentiste, après un contrôle et un détartrage, le blanchiment ne détruit pas l’émail. Une sensibilité temporaire est fréquente ; elle doit être anticipée dans le protocole.' },
      { q: 'Combien de temps dure le résultat à {capital} ?', a: 'La durabilité dépend des habitudes (tabac, café, thé) et de l’hygiène. Un entretien périodique et des gouttières de rappel prolongent le résultat.' },
      { q: 'AfriSmile réalise-t-il des blanchiments {prep} {pays} ?', a: 'Non. AfriSmile fournit le matériel et les consommables des cabinets {prep} {pays} : fauteuils, stérilisation, lampes et produits professionnels, avec installation et service après-vente.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'facettes-dentaires',
    name: 'facettes dentaires',
    titleName: 'facettes dentaires',
    article: 'des',
    h1Tpl: 'Prix des facettes dentaires {prep} {pays} : céramique et composite à {capital}',
    titleTpl: 'Prix facettes dentaires {prep} {pays} : tarifs {currency} | AfriSmile',
    descTpl: 'Combien coûtent des facettes dentaires {prep} {pays} ? Comprenez les tarifs {currency} à {capital}, le contenu d’un devis et les points à vérifier.',
    leadTpl: 'Les facettes modifient la forme, la teinte et l’alignement visuel des dents de devant. {note} Le prix {prep} {pays} est fortement lié au matériau, au nombre de dents traitées et au travail de laboratoire, mais aussi à la préparation des dents — un point à évaluer avant de s’engager.',
    qaTpl: 'Le prix des facettes dentaires {prep} {pays} dépend du matériau (céramique ou composite), du nombre de dents traitées, de la préparation nécessaire, du laboratoire et des essayages esthétiques. AfriSmile n’est pas un cabinet dentaire : nous équipons les cabinets {prep} {pays} en imagerie, empreinte numérique et matériel.',
    priceFactors: [
      'Le matériau : céramique (frittée, zircone) ou composite',
      'Le nombre de dents à recouvrir',
      'La préparation ou non de l’émail avant la pose',
      'Le laboratoire et le nombre d’essayages esthétiques',
      'Le projet esthétique numérique préalable (photos, simulation)',
    ],
    includes: [
      'Le projet esthétique et la simulation du résultat',
      'La préparation des dents et l’empreinte (ou le scan)',
      'La fabrication au laboratoire et l’essayage',
      'La pose définitive et les réglages',
      'Le contrôle et les retouches après la pose',
    ],
    verify: [
      'Le matériau exact et son origine de fabrication',
      'Si l’émail est préparé, et de combien',
      'Le nombre d’essayages inclus avant la pose définitive',
      'La garantie et les conditions de remplacement d’une facette',
    ],
    faq: [
      { q: 'Combien coûtent des facettes dentaires {prep} {pays} ?', a: 'Le prix se calcule en grande partie par dent traitée, auquel s’ajoutent le projet esthétique et le laboratoire. Un devis doit indiquer le matériau, le nombre de dents et le nombre d’essayages.' },
      { q: 'Facettes en céramique ou en composite ?', a: 'La céramique offre une meilleure stabilité de teinte et une finition plus naturelle ; le composite est plus économique et réparable, mais se colore davantage dans le temps. Le choix dépend du résultat recherché et du budget.' },
      { q: 'Faut-il préparer les dents à {capital} ?', a: 'La préparation dépend de l’épaisseur des facettes et de la position des dents. Certaines techniques peu invasives limitent la préparation : demandez ce point précis avant de valider le devis.' },
      { q: 'AfriSmile pose-t-il des facettes {prep} {pays} ?', a: 'Non. AfriSmile équipe les cabinets dentaires {prep} {pays} : imagerie, empreinte numérique, matériel et consommables, avec installation et service après-vente.' },
    ],
    blogSlugs: [],
  },
  {
    slug: 'soins-dentaires-courants',
    name: 'soins dentaires courants',
    titleName: 'soins courants',
    article: 'des',
    h1Tpl: 'Prix des soins dentaires courants {prep} {pays} : détartrage, carie, extraction',
    titleTpl: 'Prix soins dentaires {prep} {pays} : détartrage & carie | AfriSmile',
    descTpl: 'Combien coûtent les soins dentaires courants {prep} {pays} ? Comprenez les tarifs {currency} à {capital} : détartrage, carie, extraction et points à vérifier.',
    leadTpl: 'Détartrage, traitement de carie, extraction, contrôle annuel : ces actes forment la base d’un cabinet. {note} Leur prix {prep} {pays} dépend de la complexité du soin, de la nécessité d’une radiographie et du nombre de séances, beaucoup plus que du temps passé au fauteuil.',
    qaTpl: 'Le prix des soins dentaires courants {prep} {pays} dépend du type de soin (détartrage, carie, extraction, contrôle), de la complexité, des radiographies nécessaires et du nombre de séances. Le tarif de la première consultation, souvent distinct, doit être demandé. AfriSmile n’est pas un cabinet : nous équipons les cabinets {prep} {pays}.',
    priceFactors: [
      'Le type de soin : détartrage, traitement de carie, extraction, contrôle',
      'La complexité du cas et le nombre de séances nécessaires',
      'Les radiographies ou l’imagerie demandées avant le soin',
      'Le tarif de la consultation, souvent facturé séparément du soin',
      'Les matériaux de restauration utilisés (composite, amalgame)',
    ],
    includes: [
      'La consultation et l’examen clinique',
      'Les radiographies nécessaires au diagnostic',
      'La réalisation du soin avec anesthésie si besoin',
      'Les conseils d’hygiène et de prévention après le soin',
      'Le contrôle de cicatrisation ou de résultat selon l’acte',
    ],
    verify: [
      'Le tarif de la consultation, distinct de celui du soin',
      'Les radiographies incluses ou facturées à l’unité',
      'Le nombre de séances prévues pour le même acte',
      'Les conditions de reprise en cas de douleur après le soin',
    ],
    faq: [
      { q: 'Combien coûte un détartrage {prep} {pays} ?', a: 'Le détartrage est l’un des actes les moins coûteux du cabinet, mais son tarif dépend de l’état gingival et du nombre de séances nécessaires. Il est souvent la première étape avant un blanchiment ou un traitement parodontal.' },
      { q: 'Pourquoi le tarif de la consultation est-il séparé ?', a: 'La consultation comprend l’examen et le diagnostic ; le soin est ensuite facturé selon l’acte réalisé. Un devis clair distingue les deux lignes.' },
      { q: 'Les soins sont-ils pris en charge {prep} {pays} ?', a: 'La prise en charge dépend de votre couverture et de votre organisme : elle est très variable. Renseignez-vous avant le soin pour connaître le montant qui restera à votre charge.' },
      { q: 'AfriSmile soigne-t-il des patients {prep} {pays} ?', a: 'Non. AfriSmile fournit les cabinets dentaires {prep} {pays} en équipements, instruments et consommables, avec installation, formation et service après-vente.' },
    ],
    blogSlugs: ['fournisseur-materiel-dentaire-senegal-checklist-pro-2026'],
  },
]

// Soins déjà traités par un article éditorial dédié, par pays : on ne génère pas
// de page /prix concurrence (cannibalisation) — le hub pays et les autres pages
// /prix du même pays renvoient vers l'article.
const SOIN_ARTICLES = {
  senegal: {
    'appareil-dentaire': 'appareil-dentaire-prix-dakar-senegal-2026',
    'implant-dentaire': 'implant-dentaire-prix-dakar-senegal-2026',
    'prothese-dentaire': 'prothese-dentaire-prix-dakar-senegal-2026',
    'couronne-dentaire': 'prothese-dentaire-prix-dakar-senegal-2026',
    'aligneurs-dentaires': 'aligneurs-dentaires-invisalign-prix-dakar-senegal-2026',
  },
  'cote-divoire': {
    'appareil-dentaire': 'appareil-dentaire-prix-cote-ivoire-abidjan-fcfa-2026',
  },
  togo: {
    'appareil-dentaire': 'appareil-dentaire-prix-togo-lome-fcfa-2026',
  },
}

// Villes ciblées pour les pages « prix {soin} à {ville} » (autocomplétion Google sn/ci/ml/bf/tg/cm/gn/ne :
// « appareil dentaire prix en fcfa abidjan », « prothèse dentaire prix yaoundé », « couronne dentaire prix dakar »,
// « blanchiment dentaire douala prix », « détartrage prix abidjan »…).
// Une paire (ville, soin) n'est générée que si le pays n'a pas déjà un article éditorial sur ce soin.
export const PRIX_CITIES = [
  { ville: 'abidjan', soins: ['couronne-dentaire', 'prothese-dentaire', 'implant-dentaire', 'blanchiment-dentaire', 'soins-dentaires-courants'] },
  { ville: 'bamako', soins: ['appareil-dentaire', 'prothese-dentaire', 'couronne-dentaire', 'implant-dentaire', 'blanchiment-dentaire'] },
  { ville: 'ouagadougou', soins: ['appareil-dentaire', 'prothese-dentaire', 'couronne-dentaire', 'implant-dentaire', 'blanchiment-dentaire', 'soins-dentaires-courants'] },
  { ville: 'yaounde', soins: ['appareil-dentaire', 'prothese-dentaire', 'couronne-dentaire', 'implant-dentaire', 'blanchiment-dentaire'] },
  { ville: 'douala', soins: ['appareil-dentaire', 'prothese-dentaire', 'couronne-dentaire', 'blanchiment-dentaire', 'soins-dentaires-courants'] },
  { ville: 'cotonou', soins: ['appareil-dentaire', 'prothese-dentaire', 'couronne-dentaire', 'implant-dentaire'] },
  { ville: 'lome', soins: ['prothese-dentaire', 'couronne-dentaire', 'implant-dentaire', 'blanchiment-dentaire', 'soins-dentaires-courants'] },
  { ville: 'niamey', soins: ['appareil-dentaire', 'prothese-dentaire', 'implant-dentaire'] },
  { ville: 'conakry', soins: ['appareil-dentaire', 'prothese-dentaire', 'couronne-dentaire'] },
  { ville: 'nouakchott', soins: ['appareil-dentaire', 'prothese-dentaire'] },
  { ville: 'dakar', soins: ['couronne-dentaire', 'blanchiment-dentaire', 'soins-dentaires-courants'] },
]

// --- Villes (intention B2B « matériel dentaire à <ville> ») ---

export const VILLES = [
  { slug: 'dakar', name: 'Dakar', country: 'senegal', skipVillePage: true, note: 'Dakar concentre la majorité des cabinets, cliniques et facultés d’odontologie du pays ; la capitale dispose par ailleurs de sa page dédiée « équipement dentaire Dakar ».' },
  { slug: 'thies', name: 'Thiès', country: 'senegal', note: 'Thiès est reliée à Dakar par l’autoroute et le TER : les livraisons et les interventions techniques s’y organisent rapidement.' },
  { slug: 'touba', name: 'Touba', country: 'senegal', note: 'Touba, grande ville de l’intérieur, est desservie par la route depuis Dakar : la livraison et la mise en service s’y planifient à la journée.' },
  { slug: 'saint-louis', name: 'Saint-Louis', country: 'senegal', note: 'Saint-Louis se trouve à l’embouchure du fleuve Sénégal, à quelques heures de route de Dakar : la logistique se cale dès le devis.' },
  { slug: 'mbour', name: 'Mbour', country: 'senegal', note: 'Mbour et la Petite Côte connaissent une activité saisonnière : l’installation peut être programmée hors des périodes de forte affluence.' },
  { slug: 'ziguinchor', name: 'Ziguinchor', country: 'senegal', note: 'Ziguinchor, en Casamance, demande un acheminement plus long : les délais et le transport sont précisés dans le devis.' },
  { slug: 'kaolack', name: 'Kaolack', country: 'senegal', note: 'Kaolack est un carrefour routier vers le sud du pays et vers la Gambie, ce qui en fait un point de passage pratique pour le matériel.' },
  { slug: 'abidjan', name: 'Abidjan', country: 'cote-divoire', note: 'Abidjan concentre l’essentiel des cabinets et cliniques du pays et dispose du principal port de la sous-région, ce qui facilite l’importation du matériel.' },
  { slug: 'bouake', name: 'Bouaké', country: 'cote-divoire', note: 'Bouaké, deuxième ville du pays, est reliée par la route depuis Abidjan : la livraison et l’installation se planifient sur cet axe.' },
  { slug: 'yamoussoukro', name: 'Yamoussoukro', country: 'cote-divoire', note: 'Yamoussoukro se situe au centre du pays, sur l’axe Abidjan–Bouaké, à mi-parcours des livraisons vers le nord.' },
  { slug: 'san-pedro', name: 'San-Pédro', country: 'cote-divoire', note: 'San-Pédro, ville portuaire du sud-ouest, offre une porte d’entrée maritime utile pour les gros équipements.' },
  { slug: 'daloa', name: 'Daloa', country: 'cote-divoire', note: 'Daloa, au centre-ouest, dessert une large zone de cabinets : l’acheminement se fait depuis Abidjan par la route.' },
  { slug: 'korhogo', name: 'Korhogo', country: 'cote-divoire', note: 'Korhogo, au nord du pays, est la dernière grande étape avant le Mali et le Burkina : les délais de livraison y sont à préciser.' },
  { slug: 'bamako', name: 'Bamako', country: 'mali', note: 'Bamako concentre l’essentiel des cabinets, cliniques et structures de formation du pays, et se trouve sur le corridor routier Dakar–Bamako.' },
  { slug: 'segou', name: 'Ségou', country: 'mali', note: 'Ségou se trouve sur le fleuve Niger, à quelques heures de Bamako : la livraison y est organisée depuis la capitale.' },
  { slug: 'sikasso', name: 'Sikasso', country: 'mali', note: 'Sikasso, au sud, est proche des frontières ivoirienne et burkinabè, ce qui ouvre plusieurs itinéraires d’approvisionnement.' },
  { slug: 'mopti', name: 'Mopti', country: 'mali', note: 'Mopti, au centre du pays, demande une logistique anticipée : les délais de livraison sont confirmés sur le devis.' },
  { slug: 'kayes', name: 'Kayes', country: 'mali', note: 'Kayes, à l’ouest, se situe sur le corridor Dakar–Bamako, un axe pratique pour les projets de l’ouest malien.' },
  { slug: 'ouagadougou', name: 'Ouagadougou', country: 'burkina-faso', note: 'Ouagadougou concentre les cabinets et cliniques du pays ; le matériel y est acheminé depuis les ports d’Abidjan ou de Lomé.' },
  { slug: 'bobo-dioulasso', name: 'Bobo-Dioulasso', country: 'burkina-faso', note: 'Bobo-Dioulasso, capitale économique de l’ouest, est reliée à Abidjan par la voie ferrée et par la route.' },
  { slug: 'koudougou', name: 'Koudougou', country: 'burkina-faso', note: 'Koudougou se situe sur l’axe Ouagadougou–Bobo-Dioulasso : la livraison s’organise sur cet itinéraire.' },
  { slug: 'banfora', name: 'Banfora', country: 'burkina-faso', note: 'Banfora, proche de la frontière ivoirienne, se trouve sur l’axe ferroviaire Abidjan–Ouagadougou.' },
  { slug: 'niamey', name: 'Niamey', country: 'niger', note: 'Niamey concentre l’activité dentaire du pays ; l’acheminement se fait via les corridors routiers de la sous-région.' },
  { slug: 'zinder', name: 'Zinder', country: 'niger', note: 'Zinder, à l’est, est éloignée de la capitale : les délais de livraison sont à cadrer dès la commande.' },
  { slug: 'maradi', name: 'Maradi', country: 'niger', note: 'Maradi, au sud, est proche de la frontière nigériane : les livraisons s’organisent en tenant compte du trajet depuis Niamey.' },
  { slug: 'agadez', name: 'Agadez', country: 'niger', note: 'Agadez, au nord, demande une logistique spécifique : le transport et les délais sont précisés sur le devis.' },
  { slug: 'conakry', name: 'Conakry', country: 'guinee', note: 'Conakry concentre les cabinets du pays et son port facilite l’arrivée du matériel volumineux.' },
  { slug: 'kankan', name: 'Kankan', country: 'guinee', note: 'Kankan, dans la Haute-Guinée, est reliée par la route depuis Conakry : les délais s’allongent sur ce trajet.' },
  { slug: 'kindia', name: 'Kindia', country: 'guinee', note: 'Kindia se situe sur l’axe Conakry–Kankan, à faible distance de la capitale, ce qui simplifie les interventions.' },
  { slug: 'labe', name: 'Labé', country: 'guinee', note: 'Labé, dans le Fouta-Djalon, demande une livraison anticipée compte tenu du relief.' },
  { slug: 'nzerekore', name: 'Nzérékoré', country: 'guinee', note: 'Nzérékoré, au sud-est du pays, est la ville la plus éloignée de la capitale sur cet axe : à planifier avec du temps.' },
  { slug: 'bissau', name: 'Bissau', country: 'guinee-bissau', note: 'Bissau, capitale et port principal, est la porte d’entrée du matériel destiné au pays.' },
  { slug: 'bafata', name: 'Bafatá', country: 'guinee-bissau', note: 'Bafatá, à l’intérieur du pays, est reliée à Bissau par la route.' },
  { slug: 'banjul', name: 'Banjul', country: 'gambie', note: 'Banjul, à l’embouchure du fleuve Gambie, est accessible par la route depuis le Sénégal : le pays est facilement desservi depuis Dakar.' },
  { slug: 'serrekunda', name: 'Serrekunda', country: 'gambie', note: 'Serrekunda, en zone urbaine dense proche de la côte, se trouve à courte distance de Banjul.' },
  { slug: 'nouakchott', name: 'Nouakchott', country: 'mauritanie', note: 'Nouakchott concentre l’activité dentaire du pays ; la livraison se fait par la route depuis le nord du Sénégal.' },
  { slug: 'nouadhibou', name: 'Nouadhibou', country: 'mauritanie', note: 'Nouadhibou, au nord, est éloignée de la capitale : les délais de livraison sont à confirmer sur le devis.' },
  { slug: 'roso', name: 'Roso', country: 'mauritanie', note: 'Roso, sur le fleuve, fait face à Saint-Louis : un point de passage utile pour les livraisons vers le sud du pays.' },
  { slug: 'praia', name: 'Praia', country: 'cap-vert', note: 'Praia, sur l’île de Santiago, impose un acheminement maritime ou aérien : le transport et les délais figurent sur le devis.' },
  { slug: 'mindelo', name: 'Mindelo', country: 'cap-vert', note: 'Mindelo, sur l’île de São Vicente, se rejoint par voie aérienne ou maritime depuis le continent.' },
  { slug: 'cotonou', name: 'Cotonou', country: 'benin', note: 'Cotonou, avec son port, est la porte d’entrée du matériel destiné au pays et à ses voisins du Sahel.' },
  { slug: 'porto-novo', name: 'Porto-Novo', country: 'benin', note: 'Porto-Novo, capitale administrative, se situe à courte distance de Cotonou.' },
  { slug: 'parakou', name: 'Parakou', country: 'benin', note: 'Parakou, dans le centre-nord, se trouve sur l’axe vers le Niger : un point de passage pour le fret régional.' },
  { slug: 'abomey-calavi', name: 'Abomey-Calavi', country: 'benin', note: 'Abomey-Calavi appartient à la même aire urbaine que Cotonou, ce qui simplifie la livraison et l’installation.' },
  { slug: 'lome', name: 'Lomé', country: 'togo', note: 'Lomé, avec son port en eau profonde, est l’un des principaux points d’entrée du matériel dans la sous-région.' },
  { slug: 'kara', name: 'Kara', country: 'togo', note: 'Kara, dans le centre-nord, se situe sur l’axe Lomé–Ouagadougou.' },
  { slug: 'sokode', name: 'Sokodé', country: 'togo', note: 'Sokodé se trouve sur le même corridor routier vers le Sahel, ce qui facilite les livraisons groupées.' },
  { slug: 'accra', name: 'Accra', country: 'ghana', note: 'Accra, capitale et pôle économique, dispose d’un port et d’un aéroport qui facilitent l’importation du matériel.' },
  { slug: 'kumasi', name: 'Kumasi', country: 'ghana', note: 'Kumasi, deuxième ville du Ghana, se situe au centre du pays, sur l’axe Accra–Tamale.' },
  { slug: 'takoradi', name: 'Takoradi', country: 'ghana', note: 'Takoradi dispose d’un port qui peut servir de point d’entrée pour les gros équipements.' },
  { slug: 'tamale', name: 'Tamale', country: 'ghana', note: 'Tamale, au nord, est éloignée d’Accra : les délais de livraison y sont plus longs.' },
  { slug: 'lagos', name: 'Lagos', country: 'nigeria', note: 'Lagos, avec ses ports et son aéroport, est la principale porte d’entrée du matériel au Nigeria.' },
  { slug: 'abuja', name: 'Abuja', country: 'nigeria', note: 'Abuja, capitale fédérale, se situe au centre du pays, à distance de la côte.' },
  { slug: 'port-harcourt', name: 'Port Harcourt', country: 'nigeria', note: 'Port Harcourt, dans le delta du Niger, dispose d’un port utile pour les livraisons maritimes.' },
  { slug: 'kano', name: 'Kano', country: 'nigeria', note: 'Kano, au nord, est un carrefour commercial historique sur les routes du Sahel.' },
  { slug: 'ibadan', name: 'Ibadan', country: 'nigeria', note: 'Ibadan, à courte distance de Lagos, se trouve sur l’axe vers le nord du pays.' },
  { slug: 'monrovia', name: 'Monrovia', country: 'liberia', note: 'Monrovia, capitale et port principal, est la porte d’entrée du matériel destiné au pays.' },
  { slug: 'freetown', name: 'Freetown', country: 'sierra-leone', note: 'Freetown, capitale et port, constitue le point d’entrée du matériel destiné au pays.' },
  { slug: 'bo', name: 'Bo', country: 'sierra-leone', note: 'Bo, deuxième ville du pays, est reliée à Freetown par la route.' },
  { slug: 'douala', name: 'Douala', country: 'cameroun', note: 'Douala, capitale économique et port majeur d’Afrique centrale, est le point d’entrée naturel du matériel destiné à la région.' },
  { slug: 'yaounde', name: 'Yaoundé', country: 'cameroun', note: 'Yaoundé, capitale politique, est reliée à Douala par la route et le rail.' },
  { slug: 'bafoussam', name: 'Bafoussam', country: 'cameroun', note: 'Bafoussam, sur les hauts plateaux de l’ouest, est desservie depuis Douala par la route.' },
  { slug: 'garoua', name: 'Garoua', country: 'cameroun', note: 'Garoua, dans le nord du pays, est éloignée du littoral : les délais de livraison sont à confirmer.' },
  { slug: 'bamenda', name: 'Bamenda', country: 'cameroun', note: 'Bamenda, dans le nord-ouest, se rejoint depuis Douala par la route des hauts plateaux.' },
]

// --- Helpers ---

const elide = (preposition, word) => {
  if (preposition.endsWith('e') && /^[aeiouyh]/i.test(word)) return `${preposition.slice(0, -1)}’${word}`
  return `${preposition} ${word}`
}

function tpl(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, key) => (key in vars ? vars[key] : `{${key}}`))
}

const countryBySlug = (slug) => GEO_COUNTRIES.find((c) => c.slug === slug)

function varsFor(country, extra = {}) {
  return {
    pays: country.name,
    prep: country.prep,
    gen: country.gen,
    capital: country.capital,
    deCap: elide('de', country.capital),
    currency: country.currency,
    note: country.note,
    ...extra,
  }
}

export function prixPathFor(soinSlug, countrySlug) {
  return `/prix/${soinSlug}-${countrySlug}`
}

export function villesForCountry(countrySlug) {
  return VILLES.filter((v) => v.country === countrySlug && !v.skipVillePage)
}

const villeBySlug = (slug) => VILLES.find((v) => v.slug === slug)

export function prixCityPathFor(soinSlug, villeSlug) {
  return `/prix/${soinSlug}-${villeSlug}`
}

/** Paires (soin, ville) effectivement générées : une paire est écartée quand le pays
 *  possède déjà un article éditorial sur ce soin (anti-cannibalisation). */
export function prixCityPairs() {
  const pairs = []
  PRIX_CITIES.forEach((entry) => {
    const ville = villeBySlug(entry.ville)
    if (!ville) return
    const country = countryBySlug(ville.country)
    if (!country) return
    entry.soins.forEach((soinSlug) => {
      if ((SOIN_ARTICLES[country.slug] || {})[soinSlug]) return
      const soin = PRIX_SOINS.find((s) => s.slug === soinSlug)
      if (!soin) return
      pairs.push({ soin, ville, country })
    })
  })
  return pairs
}

export function prixCityPagesForVille(villeSlug) {
  return prixCityPairs()
    .filter((p) => p.ville.slug === villeSlug)
    .map((p) => ({ label: `Prix ${p.soin.titleName}`, path: prixCityPathFor(p.soin.slug, p.ville.slug) }))
}

/** Villes réellement couvertes par les pages prix, par soin (pour l'index /prix). */
export function prixCitiesBySoin(soinSlug) {
  return prixCityPairs()
    .filter((p) => p.soin.slug === soinSlug)
    .map((p) => ({ label: p.ville.name, path: prixCityPathFor(p.soin.slug, p.ville.slug) }))
}

function villePathFor(villeSlug) {
  return `/villes/${villeSlug}`
}

function articleLinkFor(slug) {
  return { label: 'Guide complet', path: `/blog/${slug}` }
}

// --- Builders ---

function buildPrixPage(soin, country) {
  const vars = varsFor(country, { name: soin.name, article: soin.article, titleName: soin.titleName })
  const siblings = PRIX_SOINS.filter((s) => s.slug !== soin.slug)
  const siblingLinks = siblings
    .filter((s) => !(SOIN_ARTICLES[country.slug] || {})[s.slug])
    .map((s) => ({ label: `Prix ${s.titleName} ${country.prep} ${country.name}`, path: prixPathFor(s.slug, country.slug) }))

  const articleSlug = (SOIN_ARTICLES[country.slug] || {})[soin.slug]
  const relatedPages = [
    { label: `Fournisseur matériel dentaire ${country.prep} ${country.name}`, path: `/pays/${country.slug}` },
    ...siblingLinks,
    { label: 'Devis matériel dentaire', path: '/devis-materiel-dentaire' },
  ]

  return {
    path: prixPathFor(soin.slug, country.slug),
    family: 'prix',
    breadcrumbName: `Prix ${soin.titleName} ${country.prep} ${country.name}`,
    flag: country.flag,
    h1: tpl(soin.h1Tpl, vars),
    title: tpl(soin.titleTpl, vars),
    description: tpl(soin.descTpl, vars),
    lead: tpl(soin.leadTpl, vars),
    quickAnswer: tpl(soin.qaTpl, vars),
    chips: [`Tarifs ${country.currency} à ${country.capital}`, 'Devis écrit détaillé', 'Cabinets équipés par AfriSmile'],
    priceFactors: soin.priceFactors.map((f) => tpl(f, vars)),
    features: soin.includes.map((f) => tpl(f, vars)),
    verify: soin.verify.map((f) => tpl(f, vars)),
    faq: soin.faq.map((item) => ({ q: tpl(item.q, vars), a: tpl(item.a, vars) })),
    relatedCountries: GEO_COUNTRIES.filter((c) => c.slug !== country.slug && !(SOIN_ARTICLES[c.slug] || {})[soin.slug]).map((c) => ({
      name: c.name,
      flag: c.flag,
      path: prixPathFor(soin.slug, c.slug),
    })),
    relatedPages,
    relatedVilles: villesForCountry(country.slug).map((v) => ({ label: `Matériel dentaire à ${v.name}`, path: villePathFor(v.slug) })),
    articles: articleSlug ? [articleLinkFor(articleSlug)] : [],
    iso: country.iso,
  }
}

const ARTICLE_CONTRACTE = { un: 'd’un', une: 'd’une', des: 'des' }

function buildPrixCityPage(soin, ville, country) {
  // Les gabarits du soin sont réutilisés en substituant la capitale par la ville :
  // toutes les mentions « à {capital} » deviennent « à Abidjan / Yaoundé… ».
  const vars = varsFor(country, {
    name: soin.name,
    article: soin.article,
    titleName: soin.titleName,
    capital: ville.name,
    aVille: `à ${ville.name}`,
  })
  const faq = soin.faq.map((item) => ({ q: tpl(item.q, vars), a: tpl(item.a, vars) }))

  const relatedPages = [
    { label: `Fournisseur matériel dentaire ${country.prep} ${country.name}`, path: `/pays/${country.slug}` },
  ]
  if (!(SOIN_ARTICLES[country.slug] || {})[soin.slug]) {
    relatedPages.push({
      label: `Prix ${soin.titleName} ${country.prep} ${country.name}`,
      path: prixPathFor(soin.slug, country.slug),
    })
  }
  relatedPages.push({ label: 'Devis matériel dentaire', path: '/devis-materiel-dentaire' })

  return {
    path: prixCityPathFor(soin.slug, ville.slug),
    family: 'prix-ville',
    breadcrumbName: `Prix ${soin.titleName} à ${ville.name}`,
    flag: country.flag,
    h1: `Prix ${ARTICLE_CONTRACTE[soin.article] || soin.article} ${soin.name} à ${ville.name} : ce qui fait varier le tarif`,
    title: `Prix ${soin.titleName} à ${ville.name} : tarifs ${country.currency} et devis | AfriSmile`,
    description: `Combien coûte ${soin.article} ${soin.name} à ${ville.name} (${country.name}) ? Comprenez les tarifs ${country.currency}, le contenu d’un devis et les points à vérifier.`,
    lead: `${ville.note} ${tpl(soin.leadTpl, vars)}`,
    quickAnswer: tpl(soin.qaTpl, vars),
    chips: [`Tarifs ${country.currency} à ${ville.name}`, 'Devis écrit détaillé', 'Cabinets équipés par AfriSmile'],
    priceFactors: soin.priceFactors.map((f) => tpl(f, vars)),
    features: soin.includes.map((f) => tpl(f, vars)),
    verify: soin.verify.map((f) => tpl(f, vars)),
    faq,
    relatedCountries: GEO_COUNTRIES.filter((c) => c.slug !== country.slug && !(SOIN_ARTICLES[c.slug] || {})[soin.slug]).map((c) => ({
      name: c.name,
      flag: c.flag,
      path: prixPathFor(soin.slug, c.slug),
    })),
    relatedPages,
    relatedVilles: [
      { label: `Toutes les villes ${country.prep} ${country.name}`, path: '/villes' },
      ...(ville.skipVillePage
        ? []
        : [{ label: `Matériel dentaire à ${ville.name}`, path: villePathFor(ville.slug) }]),
    ],
    articles: (soin.blogSlugs || []).length > 0 ? [articleLinkFor(soin.blogSlugs[0])] : [],
    iso: country.iso,
  }
}

function buildVillePage(ville, country) {
  const vars = varsFor(country, { ville: ville.name, aVille: `à ${ville.name}`, deVille: elide('de', ville.name), cityNote: ville.note })
  const articleSlug = (SOIN_ARTICLES[country.slug] || {})['appareil-dentaire']

  return {
    path: villePathFor(ville.slug),
    family: 'ville',
    breadcrumbName: `Matériel dentaire à ${ville.name}`,
    flag: country.flag,
    h1: `Matériel dentaire à ${ville.name} : fournisseur, devis et installation`,
    title: `Matériel dentaire ${vars.aVille} : fournisseur & devis ${country.name} | AfriSmile`,
    description: `Équipez votre cabinet dentaire ${vars.aVille} : fauteuil, autoclave Classe B, imagerie et consommables. Devis sous 24 h, installation et SAV ${country.prep} ${country.name}.`,
    lead: `${ville.note} AfriSmile fournit, installe et entretient le matériel des cabinets et cliniques ${vars.aVille} : fauteuils, unités, stérilisation, radiologie, instruments et consommables, avec un devis détaillé sous 24 h et un accompagnement technique sur place.`,
    quickAnswer: `AfriSmile livre et installe du matériel dentaire ${vars.aVille} (${country.name}) : fauteuils, autoclaves Classe B, radiologie numérique, instruments et consommables, avec devis sous 24 h, installation clé en main et assistance technique.`,
    chips: [`Livraison ${vars.aVille}`, 'Devis sous 24 h', 'Installation & SAV'],
    features: [
      `Catalogue complet livré ${vars.aVille} et dans le reste du pays`,
      `Devis détaillé sous 24 h, prix en ${country.currency} ou devise locale`,
      'Installation et mise en service par des techniciens',
      'SAV, pièces détachées et maintenance préventive',
      'Formation de votre équipe à la prise en main des équipements',
    ],
    faq: [
      { q: `Livrez-vous du matériel dentaire ${vars.aVille} ?`, a: `Oui. Nous livrons et installons ${vars.aVille} comme dans le reste du pays : fauteuils, stérilisation, imagerie, instruments et consommables, avec un devis qui précise le transport et les délais depuis ${country.capital}.` },
      { q: `Comment obtenir un devis ${vars.aVille} ?`, a: `Envoyez votre liste de besoins via la page devis : nous répondons sous 24 h avec un chiffrage détaillé, les options d’installation et le calendrier de livraison ${vars.aVille}.` },
      { q: `Assurez-vous l’installation et le SAV ${vars.aVille} ?`, a: `Oui : installation, mise en service, formation de l’équipe et maintenance préventive font partie de notre accompagnement, avec des pièces détachées disponibles.` },
      { q: `Quels équipements équipent le mieux un cabinet ${vars.aVille} ?`, a: `L’essentiel reste un fauteuil fiable, un autoclave Classe B conforme, une aspiration dimensionnée et une imagerie adaptée à votre volume d’activité. Nous ajustons la sélection à votre projet.` },
    ],
    relatedPages: [
      { label: `Fournisseur matériel dentaire ${country.prep} ${country.name}`, path: `/pays/${country.slug}` },
      ...PRIX_SOINS.filter((s) => !(SOIN_ARTICLES[country.slug] || {})[s.slug]).map((s) => ({
        label: `Prix ${s.titleName} ${country.prep} ${country.name}`,
        path: prixPathFor(s.slug, country.slug),
      })),
      { label: 'Devis matériel dentaire', path: '/devis-materiel-dentaire' },
    ],
    relatedVilles: villesForCountry(country.slug)
      .filter((v) => v.slug !== ville.slug)
      .map((v) => ({ label: `Matériel dentaire à ${v.name}`, path: villePathFor(v.slug) })),
    relatedPrix: prixCityPagesForVille(ville.slug),
    relatedCountries: GEO_COUNTRIES.filter((c) => c.slug !== country.slug).map((c) => ({
      name: c.name,
      flag: c.flag,
      path: `/pays/${c.slug}`,
    })),
    articles: articleSlug ? [articleLinkFor(articleSlug)] : [],
    iso: country.iso,
  }
}

// --- API ---

function buildPrixIndex() {
  return {
    path: '/prix',
    family: 'prix-index',
    breadcrumbName: 'Prix des soins dentaires',
    flag: '/assets/logo-afrismile.png',
    h1: 'Prix des soins dentaires en Afrique de l’Ouest : repères pays par pays',
    title: 'Prix des soins dentaires en Afrique de l’Ouest : repères | AfriSmile',
    description: 'Appareil dentaire, implant, prothèse, blanchiment, facettes : comprenez ce qui fait varier les prix en Afrique de l’Ouest et ce qu’un devis doit détailler.',
    lead: 'Les montants varient d’un pays et d’un cabinet à l’autre, mais la structure d’un devis reste la même : bilan, matériaux, laboratoire, séances et suivi. Cette page rassemble nos repères pour chaque soin, pays par pays.',
    quickAnswer: 'Le prix d’un soin dentaire dépend du type de traitement, du bilan et de l’imagerie, des matériaux, du laboratoire, du nombre de séances et du suivi. Choisissez votre pays et le soin concerné pour voir ce qui fait varier le tarif et ce qu’un devis doit détailler. AfriSmile n’est pas un cabinet dentaire : nous équipons les cabinets de la sous-région.',
    chips: ['17 pays couverts', '9 familles de soins', 'Cabinets équipés par AfriSmile'],
    soinGroups: PRIX_SOINS.map((soin) => ({
      name: soin.titleName,
      links: GEO_COUNTRIES.map((country) => {
        const articleSlug = (SOIN_ARTICLES[country.slug] || {})[soin.slug]
        return {
          label: articleSlug ? `${country.name} (guide)` : country.name,
          path: articleSlug ? `/blog/${articleSlug}` : prixPathFor(soin.slug, country.slug),
        }
      }),
    })),
    cityGroups: PRIX_SOINS.map((soin) => ({
      name: soin.titleName,
      links: prixCitiesBySoin(soin.slug),
    })).filter((group) => group.links.length > 0),
    relatedCountries: GEO_COUNTRIES.map((c) => ({ name: c.name, flag: c.flag, path: `/pays/${c.slug}` })),
    relatedPages: [
      { label: 'Villes desservies', path: '/villes' },
      { label: 'Pays desservis', path: '/pays' },
      { label: 'Devis matériel dentaire', path: '/devis-materiel-dentaire' },
    ],
    articles: [],
    iso: 'OA',
  }
}

function buildVillesIndex() {
  return {
    path: '/villes',
    family: 'ville-index',
    breadcrumbName: 'Villes desservies',
    flag: '/assets/logo-afrismile.png',
    h1: 'Matériel dentaire : les villes desservies par AfriSmile',
    title: 'Matériel dentaire : villes desservies en Afrique de l’Ouest | AfriSmile',
    description: 'Fauteuils, autoclaves, imagerie et consommables livrés et installés dans les principales villes d’Afrique de l’Ouest. Devis sous 24 h, installation et SAV.',
    lead: 'Depuis Dakar, AfriSmile livre, installe et entretient le matériel des cabinets, cliniques et laboratoires dans les principales villes de la sous-région. Choisissez votre ville pour voir ce que nous y livrons et comment se déroule un projet d’équipement.',
    quickAnswer: 'AfriSmile intervient dans plus de soixante villes d’Afrique de l’Ouest et du Centre : fourniture, installation clé en main, formation de l’équipe et service après-vente, avec un devis détaillé sous 24 h.',
    chips: ['Plus de 60 villes', 'Devis sous 24 h', 'Installation & SAV'],
    villeGroups: GEO_COUNTRIES.map((country) => ({
      name: country.name,
      flag: country.flag,
      links: villesForCountry(country.slug).map((v) => ({ label: v.name, path: villePathFor(v.slug) })),
    })).filter((group) => group.links.length > 0),
    relatedPages: [
      { label: 'Prix des soins', path: '/prix' },
      { label: 'Pays desservis', path: '/pays' },
      { label: 'Devis matériel dentaire', path: '/devis-materiel-dentaire' },
    ],
    relatedCountries: GEO_COUNTRIES.map((c) => ({ name: c.name, flag: c.flag, path: `/pays/${c.slug}` })),
    articles: [],
    iso: 'OA',
  }
}

let _allPages = null
let _pageByPath = null

// Boucle GSC hebdomadaire : overrides de title/description par chemin exact (/prix/<soin>-<pays>)
// Les champs absents conservent le template PRIX_SOINS.
export const PRIX_TITLE_OVERRIDES = {
  '/prix/soins-dentaires-courants-cote-divoire': {
    title: 'Prix soins dentaires à Abidjan : détartrage, plombage, extraction — Côte d’Ivoire',
    description:
      'Détartrage, traitement de carie, extraction : à Abidjan, le prix d’un soin dépend de l’acte, des radiographies et du nombre de séances. Ce qu’un devis doit inclure.',
  },
  '/prix/implant-dentaire-cote-divoire': {
    title: 'Prix implant dentaire à Abidjan : ce qui fait varier le devis en Côte d’Ivoire',
    description:
      'Implant, pilier, couronne, imagerie : le prix d’un implant dentaire à Abidjan dépend de plusieurs postes. Ce qu’un devis doit détailler en Côte d’Ivoire.',
  },
}

export function getAllPrixPages() {
  if (_allPages) return _allPages
  const pages = []
  pages.push(buildPrixIndex())
  pages.push(buildVillesIndex())
  PRIX_SOINS.forEach((soin) => {
    GEO_COUNTRIES.forEach((country) => {
      if ((SOIN_ARTICLES[country.slug] || {})[soin.slug]) return
      pages.push(buildPrixPage(soin, country))
    })
  })
  VILLES.forEach((ville) => {
    if (ville.skipVillePage) return
    const country = countryBySlug(ville.country)
    if (country) pages.push(buildVillePage(ville, country))
  })
  prixCityPairs().forEach(({ soin, ville, country }) => {
    pages.push(buildPrixCityPage(soin, ville, country))
  })
  pages.forEach((page) => {
    const override = PRIX_TITLE_OVERRIDES[page.path]
    if (!override) return
    if (override.title) page.title = override.title
    if (override.description) page.description = override.description
    if (override.h1) page.h1 = override.h1
  })
  _allPages = pages
  return pages
}

export function getPrixPageByPath(pathname) {
  if (!_pageByPath) {
    _pageByPath = new Map(getAllPrixPages().map((p) => [p.path, p]))
  }
  return _pageByPath.get(pathname) || null
}

export function prixSeoForPath(pathname) {
  const page = getPrixPageByPath(pathname)
  if (!page) return null
  const isVille = page.family === 'ville'
  const isIndex = page.family.endsWith('-index')
  return {
    title: page.title,
    description: page.description,
    canonicalPath: page.path,
    canonicalUrl: `https://www.afrismile.net${page.path}`,
    socialImageUrl: `https://www.afrismile.net${page.flag}`,
    robots: 'index, follow, max-image-preview:large',
    type: 'website',
    priority: isIndex ? '0.80' : isVille ? '0.75' : '0.72',
    changefreq: isIndex ? 'weekly' : 'monthly',
  }
}

export const PRIX_SOIN_ARTICLES = SOIN_ARTICLES
export const VILLES_BY_COUNTRY = (slug) => villesForCountry(slug)
