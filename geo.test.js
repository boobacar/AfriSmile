import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getAllGeoPages, getGeoPageByPath, GEO_COUNTRIES, GEO_COMPETENCES, GEO_SECTEURS } from './src/data/geoData.js'

const pages = getAllGeoPages()

const byFamily = (family) => pages.filter((p) => p.family === family)
const competencePages = byFamily('competence')
const secteurPages = byFamily('secteur')
const hubPages = byFamily('pays')
const indexPages = byFamily('pays-index')

test('geo factory: counts attendus (26 comp × 17 pays - 3 overrides SN + 12 sect × 17 + 17 hubs + 1 index)', () => {
  const expectedCompetences = GEO_COMPETENCES.length * GEO_COUNTRIES.length - 3
  assert.equal(competencePages.length, expectedCompetences)
  assert.equal(secteurPages.length, GEO_SECTEURS.length * GEO_COUNTRIES.length)
  assert.equal(hubPages.length, GEO_COUNTRIES.length)
  assert.equal(indexPages.length, 1)
  assert.equal(pages.length, expectedCompetences + secteurPages.length + hubPages.length + 1)
})

test('geo factory: chemins uniques', () => {
  const paths = pages.map((p) => p.path)
  assert.equal(new Set(paths).size, paths.length)
  assert.ok(paths.every((p) => p.startsWith('/')))
})

test('geo factory: aucun placeholder restant', () => {
  for (const page of pages) {
    const text = JSON.stringify(page)
    assert.ok(!/\{\w+\}/.test(text), `placeholder restant sur ${page.path}`)
  }
})

test('geo factory: aucun doublon avec le Sénégal statique', () => {
  assert.ok(!getGeoPageByPath('/equipements/fauteuil-dentaire-senegal'))
  assert.ok(!getGeoPageByPath('/equipements/autoclave-classe-b-senegal'))
  assert.ok(!getGeoPageByPath('/equipements/scanner-intra-oral-senegal'))
  assert.equal(getGeoPageByPath('/equipements/fauteuil-dentaire-mali').family, 'competence')
})

test('geo factory: grammaire française — prépositions pays', () => {
  const badPatterns = [
    /en Sénégal/, /en Mali/, /en Burkina Faso/, /en Niger/, /en Togo/, /en Bénin/,
    /en Cameroun/, /en Cap-Vert/, /en Ghana/, /en Nigeria/, /en Libéria/,
    /du Côte d’Ivoire/, /du Guinée/, /du Gambie/, /du Mauritanie/, /du Sierra Leone/, /du Guinée-Bissau/,
    /au Côte d’Ivoire/, /au Guinée/, /au Gambie/, /au Mauritanie/, /au Sierra Leone/, /au Guinée-Bissau/,
    /de la Sénégal/, /de la Mali/, /de la Burkina Faso/, /de la Niger/,
    /pour au /, /pour en /,
  ]
  for (const page of pages) {
    const text = `${page.title}\n${page.description}\n${page.lead}\n${page.quickAnswer}\n${page.h1}\n${page.faq.map((f) => `${f.q} ${f.a}`).join('\n')}`
    for (const pattern of badPatterns) {
      assert.ok(!pattern.test(text), `grammaire: "${pattern}" trouvé sur ${page.path}`)
    }
  }
})

test('geo factory: élision des capitales à voyelle (d’Abidjan, d’Accra…)', () => {
  const vowelCapitals = GEO_COUNTRIES.filter((c) => /^[aeiouyh]/i.test(c.capital)).map((c) => c.capital)
  for (const page of pages) {
    const text = JSON.stringify(page)
    for (const capital of vowelCapitals) {
      assert.ok(!text.includes(`de ${capital}`), `"de ${capital}" non élidé sur ${page.path}`)
    }
  }
})

test('geo factory: longueurs title ≤ 85 et description ≤ 165', () => {
  for (const page of pages) {
    assert.ok(page.title.length <= 85, `title trop long (${page.title.length}) sur ${page.path}: ${page.title}`)
    assert.ok(page.description.length <= 165, `description trop longue (${page.description.length}) sur ${page.path}`)
    assert.ok(page.description.length >= 100, `description trop courte (${page.description.length}) sur ${page.path}`)
  }
})

test('geo factory: contenu complet sur chaque page', () => {
  for (const page of pages) {
    assert.ok(page.h1 && page.lead && page.quickAnswer, `contenu manquant sur ${page.path}`)
    assert.ok(page.features.length >= 4, `features < 4 sur ${page.path}`)
    assert.ok(page.faq.length >= 3, `faq < 3 sur ${page.path}`)
    assert.ok(
      page.relatedCountries.length === GEO_COUNTRIES.length - 1 ||
        (page.family === 'pays-index' && page.relatedCountries.length === GEO_COUNTRIES.length),
      `relatedCountries incorrect sur ${page.path}`,
    )
  }
})

test('geo factory: tous les liens internes résolvent vers une vraie page', () => {
  const knownPaths = new Set(pages.map((p) => p.path))
  const staticPaths = [
    '/', '/produits', '/solutions-cabinets', '/service-technique', '/modeles-achat', '/marques',
    '/blog', '/a-propos', '/contact', '/devis-materiel-dentaire',
    '/materiel-dentaire-senegal', '/equipement-dentaire-dakar', '/fauteuil-dentaire-senegal',
    '/autoclave-dentaire-classe-b-senegal', '/scanner-intra-oral-senegal',
    '/materiel-dentaire-cote-divoire', '/materiel-dentaire-mali', '/materiel-dentaire-cameroun',
    '/materiel-dentaire-ghana', '/materiel-dentaire-nigeria', '/materiel-dentaire-mauritanie',
    '/materiel-dentaire-niger', '/materiel-dentaire-guinee-bissau', '/materiel-dentaire-burkina-faso',
  ]
  for (const page of pages) {
    const linkTargets = [
      ...page.relatedCountries.map((c) => c.path),
      ...(page.relatedPages || []).map((l) => l.path),
      ...(page.relatedSecteurs || []).map((l) => l.path),
      ...(page.staticPages || []).map((l) => l.path),
      ...page.articles.map((a) => a.path),
    ]
    for (const target of linkTargets) {
      assert.ok(
        knownPaths.has(target) || staticPaths.includes(target) || /^\/blog\//.test(target),
        `lien cassé "${target}" sur ${page.path}`,
      )
    }
  }
})

test('geo factory: SEO canonique et priorité', async () => {
  const { geoSeoForPath } = await import('./src/data/geoData.js')
  const seo = geoSeoForPath('/pays/mali')
  assert.equal(seo.canonicalPath, '/pays/mali')
  assert.equal(seo.priority, '0.80')
  const seoService = geoSeoForPath('/equipements/fauteuil-dentaire-mali')
  assert.equal(seoService.priority, '0.70')
  assert.equal(seoService.title.includes('Mali'), true)
  assert.equal(geoSeoForPath('/pays/inconnu'), null)
})
