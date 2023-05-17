import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import { name } from './package.json'

// New
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      peerDepsExternal(),
      react(),
      dts({
        insertTypesEntry: true,
      }),
      terser(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name,
        formats: ['es', 'umd'],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        plugins: [peerDepsExternal(), terser()],
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
// https://vitejs.dev/config/
export default app
