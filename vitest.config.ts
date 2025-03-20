import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setupTest.ts'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  }
})