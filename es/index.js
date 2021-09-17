import Button, * as ButtonModule from './button'

export const _ButtonComponent = ButtonModule._ButtonComponent || {}


function install(app) {
  Button.install && app.use(Button)
}

export {
  install,
  Button
}

export default {
  install,
  Button
}
