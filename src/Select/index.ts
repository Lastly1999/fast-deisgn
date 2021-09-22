import Select from './Select'
import type { App } from 'vue'

Select.install = function(app: App) {
  app.component(Select.name, Select)
}

export const _SelectComponent = Select

export default Select
