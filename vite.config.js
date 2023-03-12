import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
});
