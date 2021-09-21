<template>
  <app-type></app-type>
  <f-aside />
</template>

<script>
import Aside from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'AsideExample',
  components: {
    [Aside.name]: Aside,
    AppType
  },
  setup() {


    return {
    }
  }
}
</script>
