import Footer from './Footer'
import type { App } from 'vue'

Footer.install = function(app: App) {
  app.component(Footer.name, Footer)
}

export const _FooterComponent = Footer

export default Footer
