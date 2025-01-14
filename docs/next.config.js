import nextra from 'nextra'

const withNextra = nextra({
  // ...Other nextra options
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