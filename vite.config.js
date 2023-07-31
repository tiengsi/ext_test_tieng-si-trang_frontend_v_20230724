import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '');
        },
      },
      { find: '@', replacement: path.resolve(path.dirname(''), './src') },
    ],
    preserveSymlinks: true,
  }
})
