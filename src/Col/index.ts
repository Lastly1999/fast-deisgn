import Col from './Col'
import type { App } from 'vue'

Col.install = function(app: App) {
  app.component(Col.name, Col)
}

export const _ColComponent = Col

export default Col
