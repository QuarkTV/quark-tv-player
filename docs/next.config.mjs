import nextra from 'nextra';

const withNextra = nextra('nextra-theme-docs', './theme.config.jsx');

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
