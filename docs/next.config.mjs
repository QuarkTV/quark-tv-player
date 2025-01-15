import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  staticImage: true
})

const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/quark-tv-player' : ''

export default withNextra({
  basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  assetPrefix: isProduction ? '/quark-tv-player/' : '',
  output: 'export',
  trailingSlash: true,
})