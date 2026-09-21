import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { blogPosts } from '../src/data/siteData.js'
import { getAllGeoPages, geoSeoForPath } from '../src/data/geoData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const baseUrl = (process.env.SITE_URL || 'https://www.afrismile.net').replace(/\/+$/, '')

/**
 * Date de dernière modification RÉELLE d'une famille de pages : date du dernier
 * commit Git du module source qui porte les titres/descriptions de la famille,
 * avec repli sur le mtime du fichier (clone sans historique Git).
 *
 * Pourquoi : un `<lastmod>` unique égal à la date du build (ou absent) est un
 * signal mort — Google cesse de s'en servir pour prioriser le recrawl et la
 * grappe géo (661 pages) moisit en « découverte ». Ancrer la date sur le
 * contenu donne des valeurs distinctes par famille, qui ne bougent que
 * lorsque la famille est réellement éditée.
 */
const contentDate = (relativePath) => {
  try {
    const committed = execFileSync('git', ['log', '-1', '--format=%cs', '--', relativePath], {
      cwd: projectRoot,
      encoding: 'utf8',
    }).trim()
    if (committed) return committed
  } catch {
    // git absent ou dépôt sans historique : repli ci-dessous
  }
  try {
    return fs.statSync(path.join(projectRoot, relativePath)).mtime.toISOString().slice(0, 10)
  } catch {
    return undefined
  }
}

const staticLastmod = contentDate('src/data/seoData.js')
const geoLastmod = contentDate('src/data/geoData.js')

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/produits', changefreq: 'weekly', priority: '0.9' },
  { path: '/solutions-cabinets', changefreq: 'monthly', priority: '0.8' },
  { path: '/service-technique', changefreq: 'monthly', priority: '0.8' },
  { path: '/modeles-achat', changefreq: 'monthly', priority: '0.7' },
  { path: '/marques', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/a-propos', changefreq: 'yearly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/conditions-generales', changefreq: 'yearly', priority: '0.3' },
  { path: '/politique-confidentialite', changefreq: 'yearly', priority: '0.3' },
  { path: '/mentions-legales', changefreq: 'yearly', priority: '0.3' },
  { path: '/materiel-dentaire-senegal', changefreq: 'weekly', priority: '0.9' },
  { path: '/equipement-dentaire-dakar', changefreq: 'weekly', priority: '0.9' },
  { path: '/fauteuil-dentaire-senegal', changefreq: 'weekly', priority: '0.85' },
  { path: '/autoclave-dentaire-classe-b-senegal', changefreq: 'weekly', priority: '0.85' },
  { path: '/scanner-intra-oral-senegal', changefreq: 'weekly', priority: '0.85' },
  { path: '/materiel-dentaire-cote-divoire', changefreq: 'weekly', priority: '0.9' },
  { path: '/materiel-dentaire-mali', changefreq: 'weekly', priority: '0.9' },
  { path: '/materiel-dentaire-cameroun', changefreq: 'weekly', priority: '0.9' },
  { path: '/materiel-dentaire-ghana', changefreq: 'weekly', priority: '0.9' },
  { path: '/materiel-dentaire-nigeria', changefreq: 'weekly', priority: '0.9' },
  { path: '/materiel-dentaire-mauritanie', changefreq: 'weekly', priority: '0.9' },
  { path: '/materiel-dentaire-niger', changefreq: 'weekly', priority: '0.9' },
  { path: '/materiel-dentaire-guinee-bissau', changefreq: 'weekly', priority: '0.85' },
  { path: '/materiel-dentaire-burkina-faso', changefreq: 'weekly', priority: '0.85' },
  { path: '/devis-materiel-dentaire', changefreq: 'weekly', priority: '0.9' },
]

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
  lastmod: post.dateModified || post.datePublished,
}))

const geoRoutes = getAllGeoPages().map((page) => {
  const seo = geoSeoForPath(page.path)
  return {
    path: page.path,
    changefreq: seo.changefreq,
    priority: seo.priority,
  }
})

const routes = [
  // Familles ancrées sur la date de leur module source (jamais sur la date du build)
  ...staticRoutes.map((route) => ({ ...route, lastmod: staticLastmod })),
  ...blogRoutes.map((route) => ({ ...route, lastmod: route.lastmod || staticLastmod })),
  ...geoRoutes.map((route) => ({ ...route, lastmod: geoLastmod })),
]

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const urlToXml = ({ path: routePath, changefreq, priority, lastmod }) => {
  const loc = `${baseUrl}${routePath}`
  const lastmodTag = lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ''
  return `  <url><loc>${escapeXml(loc)}</loc>${lastmodTag}<changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(urlToXml).join('\n')}
</urlset>
`

const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml')
fs.writeFileSync(sitemapPath, xml, 'utf8')
console.log(`Sitemap généré: ${sitemapPath} (${routes.length} URLs)`)
