import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8888/.netlify/functions',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      external: [
        'velocityjs',
        'dustjs-linkedin',
        'atpl',
        'liquor',
        'twig',
        'ejs',
        'eco',
        'jazz',
        'jqtpl',
        'hamljs',
        'hamlet',
        'whiskers',
        'haml-coffee',
        'hogan.js',
        'templayed',
        'handlebars',
        'underscore',
        'lodash',
        'walrus',
        'mustache',
        'just',
        'ect',
        'dot',
        'ractive',
        'mote',
        'swig',
        'razor',
        'react-dom/server',
        'arc-templates',
        'then-jade',
        'then-pug',
        'htmling',
        'pug',
        'marko',
        'teacup/lib/express',
        'slm',
        'squirrelly',
        'bracket-template',
        'nunjucks',
        'twing'
      ]
    }
  }
})
