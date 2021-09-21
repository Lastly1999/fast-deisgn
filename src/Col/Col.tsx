import { defineComponent, inject } from "vue"

import './col.less'

const FColProps = {
  span: {
    type: Number,
    default: () => 0
  }
}

export default defineComponent({
  name: "FCol",
  props: FColProps,
  setup() {
    // 获取注入
    const gutter = inject<number[]>("gutter")

    // 计算col属性
    const computedColWidth: Function = (span: number): number => {
      return (100 / 24) * span
    }
    // 计算gutter padding值
    const computedColGutter: Function = (gutter: number[]) => {
      const gutterLen = gutter.length
      if (gutterLen === 1) {
        return {
          paddingLeft: (gutter[0] / 2) + 'px',
          paddingRight: (gutter[0] / 2) + 'px'
        }
      } else if (gutterLen === 2) {
        return {
          paddingTop: (gutter[1] / 2) + 'px',
          paddingRight: (gutter[0] / 2) + 'px',
          paddingBottom: (gutter[1] / 2) + 'px',
          paddingLeft: (gutter[0] / 2) + 'px',
        }
      }
    }
    return {
      computedColWidth,
      gutter,
      computedColGutter
    }
  },
  render() {
    const { $slots, span, computedColWidth, computedColGutter, gutter } = this
    console.log(computedColGutter(gutter))
    return (
      <div class={['f-col']} style={{ width: `${computedColWidth(span)}%`, ...computedColGutter(gutter) }}>
        {$slots.default && $slots.default()}
      </div>
    )
  }
})