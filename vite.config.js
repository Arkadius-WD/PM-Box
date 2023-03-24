import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  assetsInclude: '**/*.html',
  build: {
    outDir: '../dist',
    transformIndexHtml: {
      attributes: {
        script: 'defer',
      },
    },
  },
  base: './',
});
