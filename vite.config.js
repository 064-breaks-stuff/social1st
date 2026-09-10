import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function manualChunks(id) {
  if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) {
    return 'react-vendor'
  }

  if (
    id.includes('/node_modules/three/') ||
    id.includes('/node_modules/@react-three/fiber/') ||
    id.includes('/node_modules/@react-three/drei/')
  ) {
    return 'three-vendor'
  }

  if (
    id.includes('/node_modules/framer-motion/') ||
    id.includes('/node_modules/gsap/')
  ) {
    return 'motion-vendor'
  }

  if (id.includes('/node_modules/')) {
    return 'vendor'
  }
}

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rolldownOptions: {
      output: {
        manualChunks
      }
    }
  }
})