import type { App } from 'vue'
import Progress from './Progress.vue'

Progress.install = function (app: App) {
  app.component(Progress.name, Progress)
}

export const _ProgressComponent = Progress

export default Progress
