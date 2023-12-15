import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(process.cwd())
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
