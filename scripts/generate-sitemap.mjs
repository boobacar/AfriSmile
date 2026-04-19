import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { blogPosts } from '../src/data/siteData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const baseUrl = (process.env.SITE_URL || 'https://afrismile.net').replace(/\/+$/, '')

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
]

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
  lastmod: post.dateModified || post.datePublished,
}))

const routes = [...staticRoutes, ...blogRoutes]

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
