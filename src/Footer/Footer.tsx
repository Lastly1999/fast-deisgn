import { defineComponent } from "vue"

const footerProps = {
  height: {
    type: [String, Number],
    default: () => '50'
  }
}

export default defineComponent({
  name: "FFooter",
  props: footerProps,
  render() {
    const { $slots, height } = this
    return (
      <footer style={{ height: `${height}px` }}>
        {$slots.default && $slots.default()}
      </footer>
    )
  }
})