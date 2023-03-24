import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        home: './src/home.html',
      },
    },
    outDir: '../dist',
  },
  base: './',
});
