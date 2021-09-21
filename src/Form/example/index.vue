<template>
  <app-type></app-type>
  <f-Form/>
</template>

<script>
import Form from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'FormExample',
  components: {
    [Form.name]: Form,
    AppType
  },
  setup() {
  }
}
</script>
