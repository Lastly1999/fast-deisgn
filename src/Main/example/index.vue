<template>
  <app-type></app-type>
  <f-Main/>
</template>

<script>
import Main from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'MainExample',
  components: {
    [Main.name]: Main,
    AppType
  },
  setup() {
  }
}
</script>
