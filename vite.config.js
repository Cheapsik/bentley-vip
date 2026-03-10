import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  base: '/bentley-vip/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
