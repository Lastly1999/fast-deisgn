import { defineComponent } from "vue"

const headerProps = {
  height: {
    type: [String, Number],
    default: () => '60'
  }
}

export default defineComponent({
  name: "FHeader",
  props: headerProps,
  render() {
    const { $slots, height } = this
    return (
      <header style={{ height: `${height}px` }}>
        {$slots.default && $slots.default()}
      </header>
    )
  }
})