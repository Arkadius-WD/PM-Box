import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        home: './src/home.html',
        chedule: './src/schedule.html',
        todo: './src/todo.html',
        portfolio: './src/portfolio.html',
        approvals: './src/approvals.html',
        budget: './src/budget.html',
        files: './src/files.html',
        teams: './src/teams.html',
        history: './src/history.html',
        git: './src/git.html',
      },
    },
    outDir: '../dist',
  },
  base: './',
});
