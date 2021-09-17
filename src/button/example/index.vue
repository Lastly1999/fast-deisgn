<template>
  <app-type>基本使用</app-type>
  <f-button>烂大街的按钮</f-button>

  <app-type>修改主题色</app-type>
  <div>
    <f-button type='default'>默认主题</f-button>
  </div>
  <div>
    <f-button type='primary'>标准主题</f-button>
  </div>
  <div>
    <f-button type='success'>成功主题</f-button>
  </div>
  <div>
    <f-button type='error'>失败主题</f-button>
  </div>
  <div>
    <f-button type='warning'>警告主题</f-button>
  </div>
</template>

<script>
import Button from '../Button'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  components: {
    [Button.name]: Button,
    AppType
  }
}
</script>
