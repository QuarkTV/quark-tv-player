import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  target: 'es5',
  external: ['react', 'react-dom'],
  treeshake: true,
  bundle: true,
  platform: 'browser',
  loader: {
    '.css': 'copy'
  },
  noExternal: ['@vidstack/react']
}) 