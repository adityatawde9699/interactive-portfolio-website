import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Base path for GitHub Pages deployment
    // Uses env variable in CI, defaults to '/' for local dev
    base: process.env.VITE_BASE_URL || '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        minify: 'esbuild',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'gsap-vendor': ['gsap', '@gsap/react'],
                },
            },
        },
    },
})
