import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude, 
        '**/{next,}.config.*',
        '**/app/layout.tsx'
      ],
      provider: 'v8',
      thresholds: {
        lines: 90,
        functions: 90,
        // branches: 90,
        // statements: 90,
      },
    },
    setupFiles: ['./vitest.setup.mts'],
  },
})