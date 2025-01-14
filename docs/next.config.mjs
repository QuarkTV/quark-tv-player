import nextra from 'nextra'

const withNextra = nextra({
  // ...nextraOpts
})

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
}) 