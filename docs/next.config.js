import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs'
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