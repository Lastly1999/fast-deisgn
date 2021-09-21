import { defineComponent, PropType } from "vue"

import "./container.less"

export type DirectionOptions = "horizontal" | "vertical"

const containerProps = {
  mode: {
    type: String as PropType<DirectionOptions>,
    default: () => "vertical"
  }
}

export default defineComponent({
  name: "FContainer",
  props: containerProps,
  setup() { },
  render() {
    const { $slots, mode } = this
    return (
      <section class={['f-container', mode === 'vertical' && 'is-vertical']}>
        {$slots.default && $slots.default()}
      </section>
    )
  }
})