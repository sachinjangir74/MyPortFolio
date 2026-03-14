import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['resume.pdf'],
      manifest: {
        name: 'Sachin Jangir | Software Engineer',
        short_name: 'Sachin',
        description: 'Personal portfolio of Sachin Jangir',
        theme_color: '#4f46e5',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/3242/3242120.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://cdn-icons-png.flaticon.com/512/3242/3242120.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
