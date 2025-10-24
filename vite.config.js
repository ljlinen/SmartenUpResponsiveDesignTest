import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const production = false;

// https://vite.dev/config/
export default defineConfig({
  base: production ? "/SmartenUpTest/" : '/',
  plugins: [react(), svgr({
    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
    include: "**/*.svg",
  })],
  server: {
    port: 3005,
    open: true,
    host: '0.0.0.0',
  },
})
