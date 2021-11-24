import { defineComponent } from "vue"
import "./dialog.less"

const dialogProps = {
  visible: {
    type: Boolean,
    default: () => false
  }
}

const emits: string[] = ["update:visible", "close"]

const Dialog = defineComponent({
  name: "FDialog",
  props: dialogProps,
  emits: emits,
  setup(props, { emit }) {

    const close = (event: Event) => {
      // stop 阻止事件穿透
      event.stopPropagation()
      emit('update:visible', false)
      emit('close')
    }

    return {
      close,
      props
    }
  },
  render() {
    const { visible } = this.props
    return (
      <div class={["f-dialog-container", !visible ? "f-dialog-hidden" : '']} onClick={event => this.close(event)}>
        <div class={["f-dialog-content"]}>test</div>
      </div>
    )
  }
})

export default Dialog