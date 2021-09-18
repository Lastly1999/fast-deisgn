<template>
  <app-type></app-type>
  <div class='icons'>
    <div class='icon-item' v-for='iconItem in icons'>
      <div class='icon-container'>
        <f-icon size='40' :name='iconItem' class='icon-color' />
        <div class='icon-text'>{{ iconItem }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import Icon from '../Icon'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'IconExample',
  components: {
    [Icon.name]: Icon,
    AppType
  },
  setup() {
    const icons = reactive([
      'window-restore',
      'address-book-o',
      'university',
      'ambulance ',
      'id-card',
      'thermometer-quarter',
      'comment',
      'spinner',
      'cog',
      'refresh',
      'wpexplorer',
      'user-o',
      'file',
      'check-square-o',
      'plus-square',
      'pie-chart',
      'bar-chart',
      'arrow-down',
      'chevron-left',
      'arrows-alt',
      'caret-right',
      'long-arrow-right',
      'edge',
      'windows'
    ])
    return { icons }
  }
}
</script>
<style lang='less'>
.icon-color {
  color: #333;
}

.icon-item {
  width: 200px;
  height: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: .5s ease;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #1d92e9;
    color: #fff;

    .icon-color {
      color: #fff !important;
    }

  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
}

.icon-container {
  text-align: center;

  .icon-text {
    margin-top: 8px;
  }
}
</style>
