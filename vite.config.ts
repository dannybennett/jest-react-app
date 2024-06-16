// dockerizing additional configuration - https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa

// sudo docker build . -t "sample-project:v1.0"

// docker run -p 8080:8080 sample-project:v1.0

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
