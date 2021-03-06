import './styles/main.postcss'
import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./plugins/*.ts')).map(i => i.install?.(ctx))
  },
)
