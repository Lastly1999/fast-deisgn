<template>
  <app-type>一般用于选择数据。</app-type>
  <f-Select />
</template>

<script>
import Select from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'SelectExample',
  components: {
    [Select.name]: Select,
    AppType
  },
  setup() {
  }
}
</script>
