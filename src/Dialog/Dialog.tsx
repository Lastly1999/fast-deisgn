import { defineComponent } from "vue"
import "./dialog.less"

const dialogProps = {
  visible: {
    type: Boolean,
    default: () => false
  }
}

const Dialog = defineComponent({
  name: "FDialog",
  props: dialogProps,
  setup(props, { emit }) {
    return {
      props
    }
  },
  render() {
    const { visible } = this.props
    return (
      <div class={["f-dialog-container", visible ? "f-dialog-hidden" : '']}>
        ts
      </div>
    )
  }
})

export default Dialog