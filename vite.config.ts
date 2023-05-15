import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import { name } from './package.json'
import externals from 'rollup-plugin-node-externals'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      externals({ deps: true }) as any,
      react(),
      dts({
        insertTypesEntry: true,
      }),
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
        plugins: [externals({ deps: true }) as any],
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
