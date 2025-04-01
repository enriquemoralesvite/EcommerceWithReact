import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Esta opción puede ser innecesaria en Vite
    // historyApiFallback: true, 
  },
});
