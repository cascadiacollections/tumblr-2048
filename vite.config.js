import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import pugPlugin from 'vite-plugin-pug';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    pugPlugin({
      pretty: true,
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'meta/apple-touch-icon.png', 'style/*.css'],
      manifest: {
        name: '2048 Cat GIFs',
        short_name: '2048 Cats',
        description: '2048 game with cat GIFs from Tumblr',
        theme_color: '#3498db',
        background_color: '#faf8ef',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'meta/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        shortcuts: [
          {
            name: 'New Game',
            url: '/',
            description: 'Start a new game',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  preview: {
    port: 8080,
  },
});
