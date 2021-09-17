import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import { defineComponent } from 'vue';

var BtnProps = {
  type: {
    type: String,
    default: () => 'default'
  },
  size: {
    type: String,
    default: () => 'default'
  },
  radius: {
    type: Boolean,
    default: () => false
  },
  color: {
    type: String,
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
};
export default defineComponent({
  name: 'FButton',
  props: BtnProps,

  setup(props) {
    return {
      buttonDefault: props.type === 'text' ? "f-button-text" : "f-button",
      buttonSize: "f-button-size-" + props.size,
      buttonRipple: "f-button-bg-ripple",
      buttonGhostRipple: "f-button-bg-" + props.type + "-ghost-ripple",
      buttonType: "f-button-bg-" + props.type + (props.ghost ? '-ghost' : ''),
      buttonBorderType: "f-button-border-" + (props.radius ? 'radius' : 'default'),
      buttonDisabled: "f-button-disabled"
    };
  },

  render() {
    var {
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
    } = this;
    return _createVNode("div", {
      "style": {
        color: type === 'text' && color
      },
      "class": [buttonDefault, ghost ? buttonGhostRipple : buttonRipple, disabled && buttonDisabled, type !== 'text' && buttonSize, type !== 'text' && buttonType, type !== 'text' && buttonBorderType]
    }, [$slots.default && $slots.default(), _createVNode("span", null, [_createTextVNode(" "), $slots.icon && $slots.icon()])]);
  }

});