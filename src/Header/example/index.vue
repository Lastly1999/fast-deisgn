<template>
  <app-type></app-type>
  <f-Header/>
</template>

<script>
import Header from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'HeaderExample',
  components: {
    [Header.name]: Header,
    AppType
  },
  setup() {
  }
}
</script>
