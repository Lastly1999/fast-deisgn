import { defineComponent, PropType } from 'vue'
import { SizeOptions, TypeOptions } from '../../types/button'

import './button.less'


const BtnProps = {
    type: {
        type: String as PropType<TypeOptions>,
        default: () => 'default'
    },
    size: {
        type: String as PropType<SizeOptions>,
        default: () => 'default'
    },
    radius: {
        type: Boolean,
        default: () => false
    },
    color: {
        type: String as any,
        default: () => '#333'
    },
    disabled: {
        type: Boolean,
        default: () => false
    },
    ghost: {
        type: Boolean,
        default: () => false
    }
}

export default defineComponent({
    name: 'FButton',
    props: BtnProps,
    setup(props) {
        return {
            buttonDefault: props.type === 'text' ? `f-button-text` : `f-button`,
            buttonSize: `f-button-size-${props.size}`,
            buttonRipple: `f-button-bg-ripple`,
            buttonGhostRipple: `f-button-bg-${props.type}-ghost-ripple`,
            buttonType: `f-button-bg-${props.type}${props.ghost ? '-ghost' : ''}`,
            buttonBorderType: `f-button-border-${props.radius ? 'radius' : 'default'}`,
            buttonDisabled: `f-button-disabled`
        }
    },
    render() {
        const {
            $slots,
            buttonSize,
            buttonType,
            buttonBorderType,
            buttonDefault,
            buttonDisabled,
            type,
            color,
            disabled,
            buttonRipple,
            ghost,
            buttonGhostRipple
        } = this
        return (
          <div
            style={
                {
                    color: type === 'text' && color
                }
            }
            class={
                [
                    buttonDefault,
                    ghost ? buttonGhostRipple : buttonRipple,
                    disabled && buttonDisabled,
                    type !== 'text' && buttonSize,
                    type !== 'text' && buttonType,
                    type !== 'text' && buttonBorderType
                ]
            }>
              {$slots.default && $slots.default()}
              <span> {$slots.icon && $slots.icon()}</span>
          </div>
        )
    }
})
