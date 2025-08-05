import {defineConfig} from 'vite';

export default defineConfig({
  server: {
    hmr: {
      timeout: 120000, // Set timeout to 120 seconds (2 minutes)
    },
  },
});
