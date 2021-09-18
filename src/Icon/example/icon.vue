<template>
  <f-icon class='pad-mar' size='35' name='id-card' />
  <f-icon class='pad-mar' size='35' name='chevron-left'></f-icon>
  <f-icon class='pad-mar' size='35' name='cog'></f-icon>
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
  margin-right: 7px;
}
</style>
