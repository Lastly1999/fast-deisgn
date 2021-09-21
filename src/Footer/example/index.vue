<template>
  <app-type></app-type>
  <f-Footer />
</template>

<script>
import Footer from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'FooterExample',
  components: {
    [Footer.name]: Footer,
    AppType
  },
  setup() {
  }
}
</script>
