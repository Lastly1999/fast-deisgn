import { defineComponent, PropType, provide } from "vue"

import "./row.less"

export type JustifyOptions = "start" | "end" | "center" | "space-around" | "space-between"
export type AlignOptions = "top" | "middle" | "bottom"

const FRowProps = {
  gutter: {
    type: Array as PropType<number[]>,
    default: () => []
  },
  justify: {
    type: String as PropType<JustifyOptions>,
    default: () => "start"
  },
  align: {
    type: String as PropType<AlignOptions>
  }
}

export default defineComponent({
  name: 'FRow',
  props: FRowProps,
  setup(props) {
    // 注入属性至col子元素
    provide('gutter', props.gutter)
  },
  render() {
    const { $slots, justify, align } = this
    return (
      <div class={['f-row']} style={{ justifyContent: justify, alignItems: align }}>
        {$slots.default && $slots.default(true)}
      </div>
    )
  }
})