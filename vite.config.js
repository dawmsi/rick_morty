import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  build: {
    outDir: path.join(__dirname, 'build')
  },
  plugins: [react(), EnvironmentPlugin('all', { prefix: 'REACT_APP_' })]
})
