import createNextra from 'nextra'

const withNextra = createNextra({
  // Nextra configuration
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  // Theme configuration
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
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
  }
}) 