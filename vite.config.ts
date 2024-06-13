import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'path'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // root
      '~': path.resolve(__dirname, './'),
    }
  },
  plugins: [UnoCSS(), vue()],
  build: {
    outDir: '50pd',
    rollupOptions: {
      output: {
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name)
          const driveLetter = match ? match[0] : ''
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
          )
        },
      }
    }
  },
  base: './',
})
