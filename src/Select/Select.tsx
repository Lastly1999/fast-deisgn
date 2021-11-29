import { defineComponent, PropType, ref } from "vue"

import "./select.less"

export type SelectSizeOptions = "mini" | "default" | "small" | "big"

const selectProps = {
  size: {
    type: String as PropType<SelectSizeOptions>,
    default: () => "default"
  },
  placeholder: {
    type: String,
    default: () => "请选择"
  }
}

export default defineComponent({
  name: "FSelect",
  props: selectProps,
  setup() {

    const show = ref(false)

    const showSelectPicker = (event: MouseEvent) => {
      console.log(event)

    }

    return {
      show,
      showSelectPicker
    }
  },
  render() {
    const { size, placeholder, showSelectPicker, show } = this
    return (
      <>
        <div class={['f-select-content']}>
          <input class={['f-select', `f-select-${size}`]} readonly placeholder={placeholder} onClick={showSelectPicker} />
          <div class={['f-select-list']}>asdasd</div>
        </div>
      </>
    )
  }
})