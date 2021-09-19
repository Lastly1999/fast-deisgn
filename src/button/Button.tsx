import { defineComponent, PropType } from 'vue'
import { SizeOptions, TypeOptions } from '../../types'

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
    },
    Icon: {
        type: String,
        default: () => ''
    },
    prefixIcon: {
        type: String,
        default: () => ''
    },
    suffixIcon: {
        type: String,
        default: () => ''
    }
}

export default defineComponent({
    name: 'FButton',
    props: BtnProps,
    setup(props) {
        return {
            buttonDefault: props.type === 'text' ? `f-button-text` : `f-button`,
            buttonSize: `f-button-size-${props.size}`,
            buttonRipple: props.type === 'default' ? `f-button-dark-ripple` : `f-button-bg-ripple`,
            buttonGhostRipple: `f-button-bg-${props.type}-ghost-ripple`,
            buttonType: `f-button-bg-${props.type}${props.ghost ? '-ghost' : ''}`,
            buttonBorderType: `f-button-border-${props.radius ? 'radius' : 'default'}`,
            buttonDisabled: props.disabled ? !props.ghost ? `f-button-bg-${props.type}-disabled` : `f-button-bg-${props.type}-disabled-ghost` : '',
            buttonIconColor: props.type === 'default' ? '#333' : '#fff',
            buttonActiveOrHover: !props.disabled && `f-button-bg-${props.type}-active-hover${props.ghost ? '-ghost' : ''}`
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
            buttonRipple,
            ghost,
            buttonGhostRipple,
            prefixIcon,
            suffixIcon,
            disabled,
            buttonActiveOrHover
        } = this
        return (
            <button
                disabled={disabled}
                style={{ color: type === 'text' && color }}
                class={
                    [
                        buttonDefault,
                        ghost ? !disabled && buttonGhostRipple : !disabled && buttonRipple,
                        buttonDisabled,
                        type !== 'text' && buttonSize,
                        type !== 'text' && buttonType,
                        type !== 'text' && buttonBorderType,
                        buttonActiveOrHover,
                    ]
                }>
                {prefixIcon && <i class={[`f-button-icon-${type}`, `fa fa-${prefixIcon}`, 'f-prefixIcon-icon']} aria-hidden='true' />}
                {$slots.default && <span class="f-button-text-slot">{$slots.default()}</span>}
                {suffixIcon && <i class={[`fa fa-${suffixIcon}`, 'f-suffixIcon-icon']} aria-hidden='true' />}
            </button>
        )
    }
})
