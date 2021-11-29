import { defineComponent, PropType, Teleport } from "vue"
import "./dialog.less"

export type DialogAlignOptions = "left" | "center" | "right"

const dialogProps = {
  visible: {
    type: Boolean,
    default: () => false
  },
  width: {
    type: String,
    default: "40%"
  },
  top: {
    type: String,
    default: "130px"
  },
  title: {
    type: String,
    default: "提示"
  },
  footerAlign: {
    type: String as PropType<DialogAlignOptions>,
    default: "center"
  }
}

const emits: string[] = ["update:visible", "close"]

const Dialog = defineComponent({
  name: "FDialog",
  props: dialogProps,
  emits: emits,
  setup(props, { emit, slots }) {

    const close = (event: Event) => {
      // stop 阻止事件穿透
      event.stopPropagation()
      emit('update:visible', false)
      emit('close')
    }

    return {
      close,
      props,
      slots
    }
  },
  render() {
    const { visible, top, width, title, footerAlign } = this.props
    const { slots } = this
    return (
      <Teleport to="body">
        {visible &&
          < >
            <div class={["f-dialog-overlay"]} onClick={event => this.close(event)} />
            <div class={["f-dialog-wrapper"]} style={{ minWidth: width, top: top }}>
              <div class={["f-dialog-header"]}>
                {slots.header ? slots.header() : title}
              </div>
              <div class={["f-dialog-body"]}>
                {slots.body && slots.body()}
              </div>
              <div class={["f-dialog-footer"]} style={{ textAlign: footerAlign }}>
                {slots.footer && slots.footer()}
              </div>
            </div>
          </>
        }
      </Teleport >
    )
  }
})

export default Dialog