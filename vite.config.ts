import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'absolute-og-image',
      transformIndexHtml(html) {
        if (!productionHost) return html
        return html.replace(
          'content="/og-image.jpg"',
          `content="https://${productionHost}/og-image.jpg"`,
        )
      },
    },
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: { host: '0.0.0.0', port: 5747, strictPort: true },
  preview: { host: '0.0.0.0', port: 5747 },
})
