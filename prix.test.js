import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  getAllPrixPages,
  getPrixPageByPath,
  prixSeoForPath,
  prixPathFor,
  PRIX_SOINS,
  PRIX_SOIN_ARTICLES,
  VILLES,
  villesForCountry,
} from './src/data/geoPrix.js'
import { GEO_COUNTRIES, getAllGeoPages } from './src/data/geoData.js'

const pages = getAllPrixPages()
const prixPages = pages.filter((p) => p.family === 'prix')
const villePages = pages.filter((p) => p.family === 'ville')
const indexPages = pages.filter((p) => p.family.endsWith('-index'))
const geoPaths = new Set(getAllGeoPages().map((p) => p.path))

const staticPaths = [
  '/', '/produits', '/solutions-cabinets', '/service-technique', '/modeles-achat', '/marques',
  '/blog', '/a-propos', '/contact', '/devis-materiel-dentaire',
  '/materiel-dentaire-senegal', '/equipement-dentaire-dakar', '/fauteuil-dentaire-senegal',
  '/autoclave-dentaire-classe-b-senegal', '/scanner-intra-oral-senegal',
  '/materiel-dentaire-cote-divoire', '/materiel-dentaire-mali', '/materiel-dentaire-cameroun',
  '/materiel-dentaire-ghana', '/materiel-dentaire-nigeria', '/materiel-dentaire-mauritanie',
  '/materiel-dentaire-niger', '/materiel-dentaire-guinee-bissau', '/materiel-dentaire-burkina-faso',
]

test('usine prix : comptes attendus (soins × pays - articles existants + villes + 2 index)', () => {
  const excluded = Object.values(PRIX_SOIN_ARTICLES).reduce((total, bySlug) => total + Object.keys(bySlug).length, 0)
  assert.equal(prixPages.length, PRIX_SOINS.length * GEO_COUNTRIES.length - excluded)
  assert.equal(villePages.length, VILLES.length)
  assert.equal(indexPages.length, 2)
  assert.equal(pages.length, prixPages.length + villePages.length + 2)
  assert.ok(pages.length >= 190, `volume attendu ≥ 190, obtenu ${pages.length}`)
})

test('usine prix : aucune page générée pour un soin déjà couvert par un article', () => {
  for (const [countrySlug, bySlug] of Object.entries(PRIX_SOIN_ARTICLES)) {
    for (const soinSlug of Object.keys(bySlug)) {
      assert.equal(
        getPrixPageByPath(prixPathFor(soinSlug, countrySlug)),
        null,
        `doublon avec un article: ${soinSlug} ${countrySlug}`,
      )
    }
  }
})

test('usine prix : chemins uniques et bien formés', () => {
  const paths = pages.map((p) => p.path)
  assert.equal(new Set(paths).size, paths.length)
  for (const p of prixPages) assert.match(p.path, /^\/prix\/[a-z0-9-]+-[a-z-]+$/)
  for (const p of villePages) assert.match(p.path, /^\/villes\/[a-z0-9-]+$/)
  const villeSlugs = VILLES.map((v) => v.slug)
  assert.equal(new Set(villeSlugs).size, villeSlugs.length)
  for (const v of VILLES) {
    assert.ok(GEO_COUNTRIES.some((c) => c.slug === v.country), `pays inconnu pour la ville ${v.slug}`)
  }
})

test('usine prix : aucun placeholder restant', () => {
  for (const page of pages) {
    assert.ok(!/\{\w+\}/.test(JSON.stringify(page)), `placeholder restant sur ${page.path}`)
  }
})

test('usine prix : grammaire française (prépositions, élision)', () => {
  const badPatterns = [
    /en Sénégal/, /en Mali/, /en Burkina Faso/, /en Niger/, /en Togo/, /en Bénin/,
    /en Cameroun/, /en Cap-Vert/, /en Ghana/, /en Nigeria/, /en Libéria/,
    /du Côte d’Ivoire/, /du Guinée/, /du Gambie/, /du Mauritanie/, /du Sierra Leone/, /du Guinée-Bissau/,
    /au Côte d’Ivoire/, /au Guinée/, /au Gambie/, /au Mauritanie/, /au Sierra Leone/, /au Guinée-Bissau/,
    /de la Sénégal/, /de la Mali/, /de la Burkina Faso/, /de la Niger/,
    /pour au /, /pour en /, /à le /, /de les /,
  ]
  for (const page of pages) {
    const text = JSON.stringify(page)
    for (const pattern of badPatterns) {
      assert.ok(!pattern.test(text), `grammaire: "${pattern}" trouvé sur ${page.path}`)
    }
  }
})

test('usine prix : élision des villes et capitales à voyelle', () => {
  const vowelWords = [
    ...VILLES.filter((v) => /^[aeiouyàâéèêîôû]/i.test(v.name)).map((v) => v.name),
    ...GEO_COUNTRIES.filter((c) => /^[aeiouyh]/i.test(c.capital)).map((c) => c.capital),
  ]
  for (const page of pages) {
    const text = JSON.stringify(page)
    for (const word of vowelWords) {
      assert.ok(!text.includes(`de ${word}`), `"de ${word}" non élidé sur ${page.path}`)
    }
  }
})

test('usine prix : longueurs title ≤ 85 et description entre 100 et 165', () => {
  for (const page of pages) {
    assert.ok(page.title.length <= 85, `title trop long (${page.title.length}) sur ${page.path}: ${page.title}`)
    assert.ok(page.description.length >= 100, `description trop courte (${page.description.length}) sur ${page.path}`)
    assert.ok(page.description.length <= 165, `description trop longue (${page.description.length}) sur ${page.path}`)
  }
})

test('usine prix : contenu complet (H1, lead, quickAnswer, listes, FAQ)', () => {
  for (const page of prixPages) {
    assert.ok(page.h1 && page.lead && page.quickAnswer, `contenu manquant sur ${page.path}`)
    assert.ok(page.priceFactors.length >= 4, `priceFactors < 4 sur ${page.path}`)
    assert.ok(page.features.length >= 4, `includes < 4 sur ${page.path}`)
    assert.ok(page.verify.length >= 4, `verify < 4 sur ${page.path}`)
    assert.ok(page.faq.length >= 4, `faq < 4 sur ${page.path}`)
  }
  for (const page of villePages) {
    assert.ok(page.h1 && page.lead && page.quickAnswer, `contenu manquant sur ${page.path}`)
    assert.ok(page.features.length >= 4, `features < 4 sur ${page.path}`)
    assert.ok(page.faq.length >= 4, `faq < 4 sur ${page.path}`)
  }
  for (const page of indexPages) {
    assert.ok(page.h1 && page.lead && page.quickAnswer, `contenu manquant sur ${page.path}`)
  }
})

test('usine prix : tous les liens internes résolvent vers une vraie page', () => {
  const known = new Set([...pages.map((p) => p.path), ...geoPaths])
  for (const page of pages) {
    const targets = [
      ...(page.relatedPages || []),
      ...(page.relatedVilles || []),
      ...(page.articles || []),
      ...(page.relatedCountries || []).map((c) => ({ path: c.path })),
      ...(page.soinGroups || []).flatMap((g) => g.links),
      ...(page.villeGroups || []).flatMap((g) => g.links),
    ].map((l) => l.path)
    for (const target of targets) {
      assert.ok(
        known.has(target) || staticPaths.includes(target) || target.startsWith('/blog/'),
        `lien cassé "${target}" sur ${page.path}`,
      )
    }
  }
})

test('usine prix : SEO canonique, priorités et 404', () => {
  const seo = prixSeoForPath('/prix/appareil-dentaire-mali')
  assert.equal(seo.canonicalPath, '/prix/appareil-dentaire-mali')
  assert.equal(seo.canonicalUrl, 'https://www.afrismile.net/prix/appareil-dentaire-mali')
  assert.equal(seo.priority, '0.72')
  assert.equal(prixSeoForPath('/villes/abidjan').priority, '0.75')
  assert.equal(prixSeoForPath('/prix').priority, '0.80')
  assert.equal(prixSeoForPath('/villes').priority, '0.80')
  assert.equal(prixSeoForPath('/prix/inexistant'), null)
  const social = prixSeoForPath('/villes/thies')
  assert.ok(social.socialImageUrl.startsWith('https://www.afrismile.net/assets/flag-'))
})

test('usine prix : cohérence villes ↔ pays desservis', () => {
  const countriesWithVilles = new Set(VILLES.map((v) => v.country))
  assert.ok(countriesWithVilles.size >= 10, 'trop peu de pays couverts par les pages villes')
  for (const country of GEO_COUNTRIES) {
    if (!countriesWithVilles.has(country.slug)) continue
    assert.ok(villesForCountry(country.slug).length >= 1)
  }
})
