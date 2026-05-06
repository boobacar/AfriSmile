import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getSeoForPath, SITE_ORIGIN } from '../src/data/seoData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml')
const indexPath = path.join(distDir, 'index.html')

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const writeTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`Balise SEO introuvable dans dist/index.html: ${pattern}`)
  }
  return html.replace(pattern, replacement)
}

const routeOutputPaths = (routePath) => {
  if (routePath === '/') return [indexPath]

  const cleanPath = routePath.replace(/^\/+/, '')
  return [
    path.join(distDir, cleanPath, 'index.html'),
    path.join(distDir, `${cleanPath}.html`),
  ]
}

const applySeoHead = (html, routePath) => {
  const seo = getSeoForPath(routePath)
  const title = escapeHtml(seo.title)
  const description = escapeHtml(seo.description)
  const canonicalUrl = escapeHtml(seo.canonicalUrl)
  const socialImageUrl = escapeHtml(seo.socialImageUrl)
  const robots = escapeHtml(seo.robots)
  const type = escapeHtml(seo.type || 'website')

  let next = html.replace(/<html lang="[^"]*">/, '<html lang="fr-SN">')
  next = writeTag(next, /<title>.*?<\/title>/s, `<title>${title}</title>`)
  next = writeTag(next, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
  next = writeTag(next, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`)
  next = writeTag(next, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
  next = writeTag(next, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
  next = writeTag(next, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
  next = writeTag(next, /<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${type}" />`)
  next = writeTag(next, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
  next = writeTag(next, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${socialImageUrl}" />`)
  next = writeTag(next, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
  next = writeTag(next, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
  next = writeTag(next, /<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${socialImageUrl}" />`)
  return next
}

const sitemapXml = fs.readFileSync(sitemapPath, 'utf8')
const sitemapPaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((routePath) => routePath === '/' || routePath.startsWith('/'))

const routePaths = [...new Set([...sitemapPaths, '/404'])]
const template = fs.readFileSync(indexPath, 'utf8')

routePaths.forEach((routePath) => {
  const html = applySeoHead(template, routePath)
  routeOutputPaths(routePath).forEach((outputPath) => {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, html, 'utf8')
  })
})

console.log(`SEO statique généré pour ${routePaths.length} URLs (${SITE_ORIGIN})`)
