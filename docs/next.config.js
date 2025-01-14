import nextra from 'nextra'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true
  },
  typescript: {
    // ⚠️ Permite que la build compile incluso con errores de TypeScript
    ignoreBuildErrors: true
  },
  eslint: {
    // ⚠️ Permite que la build compile incluso con errores de ESLint
    ignoreDuringBuilds: true
  }
}) 