import { defineComponent, PropType } from "vue"

import "./input.less"
import "../Icon/font-awesome-4.7.0/css/font-awesome.css"
export type InputSizeOptions = "mini" | "default" | "small" | "big"

const inputProps = {
  placeholder: {
    type: String,
    default: () => ""
  },
  size: {
    type: String as PropType<InputSizeOptions>,
    default: () => 'default'
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  value: {
    type: [String, Number],
    default: () => ''
  },
  suffixIcon: {
    type: String,
    default: () => ""
  },
  prefixIcon: {
    type: String,
    default: () => ""
  },
}

export default defineComponent({
  name: "FInput",
  props: inputProps,
  setup(props, { emit }) {

    const inputInput = (event: Event) => {
      emit('update:value', (event.target as any).value)
      emit('input')
    }

    const iconClick = (type: string) => {
      emit(`${type}-click`)
    }

    const inputBlur = (event: Event) => {
      emit('blur', event)
    }
    const inputChange = (event: Event) => {
      emit('change', event)
    }

    const inputFocus = (event: Event) => {
      emit('focus', event)
    }

    return {
      inputInput,
      inputBlur,
      inputChange,
      inputFocus,
      iconClick
    }
  },
  render() {
    const { placeholder, size, disabled, value, inputInput, suffixIcon, prefixIcon, iconClick, inputBlur, inputChange, inputFocus } = this
    return (
      <div class={['f-input']}>
        {
          prefixIcon
          &&
          <span class={['f-input-prefix']} onClick={() => iconClick("prefix")}>
            <i class={[`fa fa-${prefixIcon}`, `f-input-prefix-color`, disabled && 'f-input-prefix-disabled']} aria-hidden='true' />
          </span>
        }
        <input
          class={
            ['f-input-context', `f-input-${size}`,
              disabled && 'f-input-disabled',
              suffixIcon && 'f-input-trans-suffix',
              prefixIcon && 'f-input-trans-prefix'
            ]
          }
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onInput={inputInput}
          onBlur={inputBlur}
          onChange={inputChange}
          onFocus={inputFocus}
        />
        {
          suffixIcon
          &&
          <span class={['f-input-suffix']} onClick={() => iconClick("suffix")}>
            <i class={[`fa fa-${suffixIcon}`, `f-input-suffix-color`, disabled && 'f-input-suffix-disabled']} aria-hidden='true' />
          </span>
        }
      </div>
    )
  }
})