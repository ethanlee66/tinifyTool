import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync } from 'fs';
import { builtinModules } from 'node:module'

export default defineConfig({
    resolve: {
        alias: {
          '@': resolve(__dirname), 
        },
      },
      optimizeDeps: {
        include: ['tinify'], 
      },
  build: {
    lib: {
      entry: resolve(__dirname, 'bin/index.ts'), 
      formats: ['cjs'],
      name: 'tinifyTool', 
      fileName: (format) => `bin/tinify-tool.${format}.js`,
    },
    rollupOptions: {
        plugins: [
            {
              name: 'copy-package-json',
              writeBundle() {
                copyFileSync('package.json', 'dist/package.json');
              },
            },
        ],
        external: [
            ...builtinModules,
            ...builtinModules.map(module => `node:${module}`),
        ],
    }
  }
});