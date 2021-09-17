import Button, * as ButtonModule from './button'

import './button/style'


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
