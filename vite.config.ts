import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://github.com/vitejs/vite-plugin-basic-ssl
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   open: true,
  //   port: 5173
  // }
})
