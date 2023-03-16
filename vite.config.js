import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
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
