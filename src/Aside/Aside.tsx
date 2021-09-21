import { defineComponent } from "vue"

import "./aside.less"

const asideProps = {
  width: {
    type: [Number, String],
    default: () => '200'
  }
}

export default defineComponent({
  name: 'FAside',
  props: asideProps,
  render() {
    const { $slots, width } = this
    return (
      <aside class={['f-aside']} style={{ width: `${width}px` }}>
        {$slots.default && $slots.default()}
      </aside>
    )
  }
})