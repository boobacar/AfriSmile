import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import QuickAnswer from '../components/QuickAnswer'
import Breadcrumbs from '../components/Breadcrumbs'

const briques = [
  {
    nom: 'Capteur RVG intra-oral',
    role: 'Radiographie rétro-alvéolaire et bite-wing',
    detail:
      'Le capteur remplace le film : l’image apparaît en quelques secondes à l’écran, avec une exposition réduite et aucun développement chimique. C’est la brique la plus rentable pour un cabinet de soins courants (caries, endodontie, contrôles).',
  },
  {
    nom: 'Appareil panoramique (orthopantomogramme)',
    role: 'Vue d’ensemble des deux arcades',
    detail:
      'Le panoramique donne en une acquisition la vue des deux maxillaires, des dents de sagesse, des sinus et des articulations. Indispensable dès que le cabinet réalise de l’orthodontie, de la chirurgie ou des extractions complexes.',
  },
  {
    nom: 'Générateur RX mural ou unité péri-apicale',
    role: 'Source de rayons sans fil ou fixe',
    detail:
      'Le générateur mural ou mobile constitue la source du système intra-oral. Son temps de pose court et sa stabilité conditionnent la qualité de l’image et la dose délivrée au patient.',
  },
]

const profils = [
  {
    profil: 'Cabinet généraliste qui démarre',
    recommande: 'Capteur RVG + générateur mural',
    pourquoi: 'Couvre la majorité des actes de routine et remplace progressivement les films. Investissement le plus contenu, mise en service rapide.',
  },
  {
    profil: 'Cabinet avec orthodontie ou chirurgie',
    recommande: 'RVG + panoramique 2D',
    pourquoi: 'Le panoramique sert au bilan orthodontique, au suivi de croissance et aux extractions, sans passer au 3D.',
  },
  {
    profil: 'Clinique multi-postes',
    recommande: 'Panoramique 2D + postes RVG partagés',
    pourquoi: 'L’enjeu devient la circulation : plusieurs salles, un poste d’acquisition commun, un archivage centralisé et un accès au dossier patient depuis chaque poste.',
  },
  {
    profil: 'Clinique implantologie ou chirurgie avancée',
    recommande: 'Panoramique 2D + cone beam 3D',
    pourquoi: 'La planification implantaire demande un volume 3D. Le 2D reste utile au quotidien et en pré-diagnostic.',
  },
]

const budget = [
  'Le type de capteur intra-oral : taille, résolution, filaire ou sans fil',
  'Le générateur : fixe, mural ou sans fil, et sa puissance',
  'Le panoramique : 2D seul ou combiné avec un module 3D (cone beam)',
  'Le logiciel et le poste d’imagerie, l’écran de diagnostic et l’archivage',
  'Les travaux d’installation : blindage, support, alimentation électrique dédiée',
  'La formation de l’équipe au protocole de prise de vue et la maintenance',
]

const installation = [
  'Local et protection : les parois et le positionnement de l’appareil doivent respecter les règles de radioprotection applicables localement',
  'Alimentation électrique : stabilité et ligne dédiée, surtout pour le panoramique et le générateur',
  'Poste de travail : machine, logiciel de traitement, écran de diagnostic et sauvegarde des images',
  'Protocole de prise de vue : constant, écrit, avec réglages enregistrés par type d’examen',
  'Formation de l’équipe : acquisition, retouche, export et archivage dans le dossier patient',
  'Maintenance : calibration, contrôle du capteur, des câbles et des accessoires de positionnement',
]

const faqs = [
  {
    q: 'Qu’est-ce qu’un système de radiologie dentaire 2D ?',
    a: 'Un ensemble d’équipements qui produisent des images radiologiques planes : un capteur RVG intra-oral pour les radiographies rétro-alvéolaires, un générateur RX comme source, et un appareil panoramique pour la vue d’ensemble des arcades. Le 2D s’oppose au cone beam 3D, qui reconstruit un volume en trois dimensions.',
  },
  {
    q: 'Faut-il commencer par le capteur RVG ou par le panoramique ?',
    a: 'Le capteur RVG d’abord : il couvre la majorité des actes courants et remplace les films avec un investissement plus contenu. Le panoramique devient prioritaire quand le cabinet fait de l’orthodontie, de la chirurgie ou des extractions complexes.',
  },
  {
    q: 'Quel est le prix d’un appareil panoramique dentaire ?',
    a: 'Le montant dépend de la configuration : panoramique 2D simple, panoramique avec céphalométrie, ou appareil combiné 2D/3D. S’y ajoutent le logiciel, le poste d’imagerie, les travaux d’installation et la formation. Un devis détaillé ligne par ligne est le seul comparable : nous le remettons sous 24 h.',
  },
  {
    q: '2D ou cone beam 3D : que choisir ?',
    a: 'Le 2D suffit au diagnostic courant, aux caries, à l’endodontie et aux bilans orthodontiques simples. Le cone beam 3D s’impose pour l’implantologie, la chirurgie et l’endodontie complexe, quand il faut mesurer un volume osseux ou situer une structure anatomique en trois dimensions.',
  },
  {
    q: 'La radiologie numérique réduit-elle vraiment la dose ?',
    a: 'Oui : un capteur numérique demande une exposition plus faible qu’un film pour un résultat diagnostique équivalent, et l’image s’obtient sans développement chimique. La dose dépend surtout du protocole et du réglage du générateur.',
  },
  {
    q: 'Installez-vous les systèmes d’imagerie en Afrique de l’Ouest ?',
    a: 'Oui. AfriSmile livre, installe et met en service les systèmes de radiologie dentaire au Sénégal et dans la sous-région, avec formation de l’équipe, contrôle des réglages et service après-vente.',
  },
]

const relatedLinks = [
  { label: 'Devis imagerie dentaire', to: '/devis-materiel-dentaire' },
  { label: 'Radiologie dentaire au Sénégal', to: '/equipements/radiologie-dentaire-senegal' },
  { label: 'Cone Beam (CBCT) au Sénégal', to: '/equipements/cone-beam-senegal' },
  { label: 'Toutes les pages pays', to: '/pays' },
]

const guides = [
  { label: 'Imagerie dentaire 2D : panoramique, RVG et rétro-alvéolaire', to: '/blog/imagerie-dentaire-2d-panoramique-senegal-prix-guide-2026' },
  { label: 'Panoramique 2D ou cone beam 3D : lequel choisir ?', to: '/blog/radiologie-panoramique-vs-cone-beam-cbct-lequel-choisir' },
  { label: 'Appareil panoramique et cone beam 3D : prix et choix', to: '/blog/appareil-panoramique-dentaire-cone-beam-3d-prix-senegal-2026' },
]

export default function RadiologieDentaire2DPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Fourniture, installation et maintenance de systèmes de radiologie dentaire 2D',
    provider: { '@type': 'LocalBusiness', '@id': 'https://www.afrismile.net#organization' },
    areaServed: ['SN', 'CI', 'ML', 'BF', 'NE', 'GN', 'MR', 'BJ', 'TG', 'GH', 'NG', 'CM'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.afrismile.net/devis-materiel-dentaire',
      availableLanguage: ['fr'],
    },
  }

  return (
    <main className="container-page page-wrap space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Radiologie dentaire 2D' }]} />

      <PageHero
        eyebrow="Imagerie dentaire"
        title="Système de radiologie dentaire 2D : panoramique, RVG et rétro-alvéolaire"
        subtitle="Composer une chaîne d’imagerie 2D cohérente pour votre cabinet : capteur intra-oral, générateur RX, appareil panoramique, logiciel et archivage — avec installation et service après-vente en Afrique de l’Ouest."
        image="/assets/illustration-equipment.jpg"
        chips={['Capteur RVG', 'Panoramique 2D', 'Installation & SAV']}
      >
        <Link to="/devis-materiel-dentaire" className="btn-primary">Demander un devis imagerie</Link>
        <Link to="/produits" className="btn-secondary">Voir le catalogue</Link>
      </PageHero>

      <QuickAnswer text="Un système de radiologie dentaire 2D regroupe un capteur RVG intra-oral, un générateur RX et un appareil panoramique. Il couvre le diagnostic courant, l’endodontie et les bilans orthodontiques. AfriSmile fournit, installe et entretient ces systèmes au Sénégal et dans 16 autres pays de la sous-région, avec formation de l’équipe." />

      <section className="section-shell">
        <h2 className="section-title">Les trois briques d’un système de radiologie dentaire 2D</h2>
        <p className="section-subtitle">On parle souvent d’« un appareil », mais un système 2D se compose de trois éléments qui doivent être choisis ensemble.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {briques.map((item) => (
            <article key={item.nom} className="card-muted text-sm text-slate-700">
              <h3 className="font-semibold text-brand-dark">{item.nom}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand-cyan">{item.role}</p>
              <p className="mt-2">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Quelle configuration selon votre activité</h2>
        <p className="section-subtitle">La bonne configuration dépend de vos actes, pas de la fiche technique du moment.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {profils.map((item) => (
            <article key={item.profil} className="card-muted text-sm text-slate-700">
              <h3 className="font-semibold text-brand-dark">{item.profil}</h3>
              <p className="mt-1"><strong>Configuration conseillée :</strong> {item.recommande}</p>
              <p className="mt-2">{item.pourquoi}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Ce qui fait varier le budget d’une chaîne d’imagerie</h2>
        <p className="section-subtitle">Deux devis d’imagerie 2D au même montant apparent ne couvrent presque jamais le même périmètre.</p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {budget.map((item) => (
            <li key={item} className="card-muted">{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Installation, conformité et protocole de prise de vue</h2>
        <p className="section-subtitle">Un équipement d’imagerie mal installé ou mal utilisé produit des images inexploitables — et fait perdre l’investissement.</p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          {installation.map((item) => (
            <li key={item} className="card-muted">{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="section-title">De la prise de vue à l’archivage : la chaîne d’image</h2>
        <p className="text-sm text-slate-700">
          Une image n’a de valeur que si elle est retrouvable. La chaîne se poursuit après le capteur : transfert vers le logiciel de
          traitement, export au format attendu par votre logiciel métier, rattachement au dossier du patient, sauvegarde et
          affichage sur un écran adapté au diagnostic. C’est ce parcours complet qu’il faut valider à l’installation — pas seulement
          la qualité de l’image affichée le premier jour.
        </p>
      </section>

      <section className="section-shell">
        <h2 className="section-title">2D ou 3D : quand ajouter le cone beam</h2>
        <p className="text-sm text-slate-700">
          Le 2D reste la base : rapide, moins coûteux et suffisant pour la majorité des actes. Le cone beam 3D intervient quand il faut
          mesurer un volume osseux, situer un canal, un sinus ou un nerf, ou planifier une chirurgie guidée. Les deux sont
          complémentaires : beaucoup de cabinets commencent en 2D et ajoutent le 3D au moment où l’activité implantaire se développe.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/equipements/cone-beam-senegal" className="btn-secondary">Voir les appareils Cone Beam</Link>
          <Link to="/blog/radiologie-panoramique-vs-cone-beam-cbct-lequel-choisir" className="btn-secondary">Comparer 2D et 3D</Link>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Questions fréquentes</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item) => (
            <article key={item.q} className="card-muted">
              <h3 className="font-semibold text-brand-dark">{item.q}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Guides et conseils</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {guides.map((item) => (
            <Link key={item.to} to={item.to} className="btn-secondary">{item.label}</Link>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Pour aller plus loin</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {relatedLinks.map((item) => (
            <Link key={item.to} to={item.to} className="btn-secondary">{item.label}</Link>
          ))}
        </div>
      </section>

      <section className="section-shell text-center">
        <h2 className="section-title">Un projet d’imagerie ? Parlons-en.</h2>
        <p className="section-subtitle">Devis détaillé sous 24 h, installation, formation de l’équipe et service après-vente.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/devis-materiel-dentaire" className="btn-primary">Demander un devis</Link>
          <Link to="/contact" className="btn-secondary">Nous contacter</Link>
        </div>
      </section>
    </main>
  )
}
