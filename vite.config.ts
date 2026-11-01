import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const SITE_URL = 'https://www.sehgaltravels.com'

// Keep in sync with the static routes in src/App.tsx.
const STATIC_PATHS = [
  '/',
  '/blog',
  '/tourist-visa',
  '/contact',
  '/blog/taxi-service-amritsar-guide',
  '/blog/amritsar-to-chandigarh-taxi',
  '/blog/golden-temple-tour-guide',
  '/blog/innova-crysta-rent-punjab',
]

// Emits dist/sitemap.xml on build; destination blog slugs are read from source
// so new posts are picked up automatically.
function sitemap(): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const source = readFileSync(
        new URL('./src/pages/blogs/DestinationTravelBlogs.tsx', import.meta.url),
        'utf8',
      )
      const blogPaths = [...source.matchAll(/slug: '([^']+)'/g)].map((m) => `/blog/${m[1]}`)
      const urls = [...STATIC_PATHS, ...blogPaths]
        .map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
        .join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), sitemap()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
