import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({
  base: '/green-frog/',

  root: 'src',

  define: {
    [command === 'serve' ? 'global' : '_global']: {},
  },
   build: {
    sourcemap: false,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    emptyOutDir: true,
  },

  plugins: [
    injectHTML(),
    command === 'serve' && FullReload(['./src/**/*.html']),
    SortCss({ sort: 'mobile-first' }),
  ].filter(Boolean),
}));
