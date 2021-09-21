import Input from './Input'
import type { App } from 'vue'

Input.install = function(app: App) {
  app.component(Input.name, Input)
}

export const _InputComponent = Input

export default Input
