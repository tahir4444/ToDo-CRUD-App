// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true,
//   },
//   build: {
//     outDir: 'dist',
//     sourcemap: true,
//   },
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "@/styles/variables.scss";`,
//       },
//     },
//   },
//   optimizeDeps: {
//     include: ['react', 'react-dom'],
//   },
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/setupTests.js',
//     coverage: {
//       reporter: ['text', 'json', 'html'],
//       reportsDirectory: 'coverage',
//       exclude: ['**/*.test.js', '**/*.spec.js'],
//     },
//   },
// });
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
// import { createHtmlPlugin } from 'vite-plugin-html';
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// import { createStyleImportPlugin } from 'vite-plugin-style-import';
// import { createVitePlugins } from './build/vite/plugin';
// import { wrapperEnv } from './build/utils';
// import { loadEnv } from 'vite';
// import { createProxy } from './build/vite/proxy';
