const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true
  },
  typescript: {
    // ⚠️ Permite que la build compile incluso con errores de TypeScript
    ignoreBuildErrors: true
  }
}) 