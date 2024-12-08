import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()];

  if (mode === 'lib') {
    return {
      plugins,
      build: {
        lib: {
          entry: './src/index.ts',
          name: 'AriaReadyComponents',
          fileName: (format) => `aria-ready-components.${format}.js`,
          formats: ['es', 'cjs'],
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    }
  }

  return { plugins }
})
