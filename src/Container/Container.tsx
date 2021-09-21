import { defineComponent, PropType } from "vue"

import "./container.less"

export type DirectionOptions = "horizontal" | "vertical"

const containerProps = {
  direction: {
    type: String as PropType<DirectionOptions>,
    default: () => "vertical"
  }
}

export default defineComponent({
  name: "FContainer",
  props: containerProps,
  setup() { },
  render() {
    const { $slots, direction } = this
    return (
      <section class={['f-container', direction === 'vertical' && 'is-vertical']}>
        {$slots.default && $slots.default()}
      </section>
    )
  }
})