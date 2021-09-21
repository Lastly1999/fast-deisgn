<template>
  <app-type></app-type>
  <f-Row/>
</template>

<script>
import Row from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'RowExample',
  components: {
    [Row.name]: Row,
    AppType
  },
  setup() {

     return {
     }
  }
}
</script>
