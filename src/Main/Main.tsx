import { defineComponent } from "vue"

import "./main.less"

export default defineComponent({
  name: "FMain",
  render() {
    const { $slots } = this
    return (
      <main class={['f-main']}>
        {$slots.default && $slots.default()}
      </main>
    )
  }
})