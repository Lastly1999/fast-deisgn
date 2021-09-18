<template>
  <app-type>基本使用</app-type>
  <f-button>烂大街的按钮</f-button>

  <app-type>预设(chaoxi)的主题色</app-type>
  <div>
    <f-button class='pad-mad' type='default'>预设按钮</f-button>
    <f-button class='pad-mad' type='primary'>标准按钮</f-button>
    <f-button class='pad-mad' type='success'>成功按钮</f-button>
    <f-button class='pad-mad' type='error'>失败按钮</f-button>
    <f-button class='pad-mad' type='warning'>警告按钮</f-button>
  </div>
  <app-type>柱状按钮(应该叫椭圆)</app-type>
  <div>
    <f-button class='pad-mad' radius type='default'>预设按钮</f-button>
    <f-button class='pad-mad' radius type='primary'>标准按钮</f-button>
    <f-button class='pad-mad' radius type='success'>成功按钮</f-button>
    <f-button class='pad-mad' radius type='error'>失败按钮</f-button>
    <f-button class='pad-mad' radius type='warning'>警告按钮</f-button>
  </div>
  <app-type>灵魂按钮(中二起来了)</app-type>
  <div>
    <f-button class='pad-mad' type='default'>灵魂按钮</f-button>
    <f-button class='pad-mad' ghost type='primary'>灵魂按钮</f-button>
    <f-button class='pad-mad' ghost type='success'>灵魂按钮</f-button>
    <f-button class='pad-mad' ghost type='error'>灵魂按钮</f-button>
    <f-button class='pad-mad' ghost type='warning'>灵魂按钮</f-button>
  </div>
  <app-type>内嵌图标</app-type>
  <div>
    <f-button class='pad-mad' type='success' suffix-icon='hand-o-right'>
      点赞
    </f-button>
    <f-button class='pad-mad' suffix-icon='terminal'>
      命令行
    </f-button>
    <f-button class='pad-mad' type='primary' prefix-icon='cog'>
      设置
    </f-button>
    <f-button class='pad-mad' type='error' prefix-icon='unlock'>
      解锁
    </f-button>
  </div>
  <app-type>独立的图标按钮</app-type>
  <div>
    <f-button class='pad-mad' type='success' suffix-icon='hand-o-right'>
    </f-button>
    <f-button class='pad-mad' suffix-icon='terminal'>
    </f-button>
    <f-button class='pad-mad' type='primary' prefix-icon='cog'>
    </f-button>
    <f-button class='pad-mad' type='error' prefix-icon='unlock'>
    </f-button>
  </div>
  <app-type>独立的柱状图标按钮</app-type>
  <div>
    <f-button class='pad-mad' radius type='success' suffix-icon='hand-o-right'>
    </f-button>
    <f-button class='pad-mad' radius suffix-icon='terminal'>
    </f-button>
    <f-button class='pad-mad' radius type='primary' prefix-icon='cog'>
    </f-button>
    <f-button class='pad-mad' radius type='error' prefix-icon='unlock'>
    </f-button>
  </div>
  <app-type>禁用按钮</app-type>
  <div>
    <f-button class='pad-mad' disabled radius type='primary'>
      禁用了
    </f-button>
  </div>
</template>

<script>
import Button from '../Button'
import Icon from '../../Icon/Icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    AppType
  }
}
</script>
<style>
.pad-mad {
  margin: 0 7px;
}
</style>
