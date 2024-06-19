import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://github.com/vitejs/vite-plugin-basic-ssl
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: '.cache/vite',
  server: {
    open: true,
    port: 5173
  }
})
