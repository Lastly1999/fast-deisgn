import Main from './Main'
import type { App } from 'vue'

Main.install = function(app: App) {
  app.component(Main.name, Main)
}

export const _MainComponent = Main

export default Main
