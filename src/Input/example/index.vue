<template>
  <app-type>用手输入的框，这都不懂我没办法了</app-type>
  <f-input placeholder="请输入内容" />
  <app-type>不同尺寸</app-type>
  <f-input class="demo-input" size="big" placeholder="请输入内容" />
  <f-input class="demo-input" size="default" placeholder="请输入内容" />
  <f-input class="demo-input" size="mini" placeholder="请输入内容" />
  <app-type>禁用状态</app-type>
  <f-input class="demo-input" size="default" placeholder="请输入内容" disabled />
  <app-type>双向绑定</app-type>
  <f-input class="demo-input" size="default" placeholder="请输入内容" v-model:value="value" />
  <app-type>双向绑定的值变化</app-type>
  <f-input class="demo-input" size="default" placeholder="请输入内容" disabled v-model:value="value" suffix-icon="address-book" />
  <app-type>输入框图标（后置）</app-type>
  <f-input class="demo-input" size="big" placeholder="请输入内容" suffix-icon="search" @suffix-click="suffixClick" />
  <app-type>输入框图标（前置）</app-type>
  <f-input class="demo-input" size="big" placeholder="请输入内容" prefix-icon="user-circle-o" @prefix-click="prefixClick" />
</template>

<script>
import { ref } from "vue"
import Input from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'InputExample',
  components: {
    [Input.name]: Input,
    AppType
  },
  setup() {
    const value = ref('测试内容')
    const suffixClick = () => {
      console.log('suffix-click')
    }
    const prefixClick = () => {
      console.log('prefix-click')
    }
    return {
      value,
      suffixClick,
      prefixClick
    }
  }
}
</script>
<style>
.demo-input {
  margin-right: 5px;
}
</style>