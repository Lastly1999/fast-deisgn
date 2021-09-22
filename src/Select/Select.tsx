import { defineComponent, PropType } from "vue"

import "./select.less"

export type SelectSizeOptions = "mini" | "default" | "small" | "big"

const selectProps = {
  size: {
    type: String as PropType<SelectSizeOptions>,
    default: () => "default"
  }
}

export default defineComponent({
  name: "FSelect",
  props: selectProps,
  render() {
    const { size } = this
    return (
      <select class={['f-select', `f-select-${size}`]}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    )
  }
})