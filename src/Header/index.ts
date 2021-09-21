import Header from './Header'
import type { App } from 'vue'

Header.install = function(app: App) {
  app.component(Header.name, Header)
}

export const _HeaderComponent = Header

export default Header
