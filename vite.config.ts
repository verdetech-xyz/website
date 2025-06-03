import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// Determine if we're building for SSR or client
const isSSR = process.env.SSR === 'true'

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
      // Properly specify the input based on build target
      input: isSSR ? resolve(__dirname, 'src/main.ts') : undefined
    },
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
      'twing',
      'consolidate',
      'nodemailer',
      'nodemailer-mailgun-transport'
    ],
    noExternal: []
  }
})
