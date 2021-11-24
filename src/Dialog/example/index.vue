<template>
  <app-type></app-type>
  <f-button type="primary" @click="showDialog">打开弹窗</f-button>
  <f-dialog v-model:visible="visible" @close="dialogClose" />
</template>

<script>
import { ref } from "vue"
import FDialog from '../Dialog.tsx'
import FButton from "../../button/Button.tsx"
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'DialogExample',
  components: {
    [FDialog.name]: FDialog,
    [FButton.name]: FButton,
    AppType
  },
  setup() {

    const visible = ref(false)

    const showDialog = () => {
      visible.value = true
    }

    const dialogClose = () => {
      console.log('close')
    }

    return {
      visible,
      dialogClose,
      showDialog,
    }
  }
}
</script>
