<template>
  <app-type>栅格化</app-type>
  <f-Col />
</template>

<script>
import Col from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'ColExample',
  components: {
    [Col.name]: Col,
    AppType
  },
  setup() {
    return {
    }
  }
}
</script>
