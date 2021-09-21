import Aside from './Aside'
import type { App } from 'vue'

Aside.install = function(app: App) {
  app.component(Aside.name, Aside)
}

export const _AsideComponent = Aside

export default Aside
