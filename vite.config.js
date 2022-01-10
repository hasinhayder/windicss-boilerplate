const { resolve } = require('path')
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [WindiCSS()],
  server: {
    open: '/index.html',
    // port: 3116
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // another: resolve(__dirname, 'another.html')
      }
    }
  }
}
