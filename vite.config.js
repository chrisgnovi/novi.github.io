import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base = '/novi.github.io/';
  return {
    base,
    plugins: [react()],
  };
})
