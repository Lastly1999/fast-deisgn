import Container from './Container'
import type { App } from 'vue'

Container.install = function(app: App) {
  app.component(Container.name, Container)
}

export const _ContainerComponent = Container

export default Container
