<template>
  <f-icon class='pad-mar' size='35' name='id-card' color='#1d92e9'/>
  <f-icon class='pad-mar' size='35' name='chevron-left' color='green'></f-icon>
  <f-icon class='pad-mar' size='35' name='arrows-alt' color='gray'></f-icon>
  <f-icon class='pad-mar' size='35' name='file' color='skyblue'></f-icon>
</template>

<script>
import Icon from '../Icon'

export default {
  components: {
    [Icon.name]: Icon
  },
  name: 'icon'
}
</script>
<style>
.pad-mar {
  margin-right: 15px;
}
</style>
