import { defineComponent } from 'vue'

import './font-awesome-4.7.0/css/font-awesome.min.css'

const IconProps = {
    name: {
        type: String,
        default: () => ''
    },
    size: {
        type: String,
        default: () => '16'
    },
    color: {
        type: String,
        default: () => '#333'
    }
}

export default defineComponent({
    name: 'FIcon',
    props: IconProps,
    render() {
        const { name, size, color } = this
        return (
          <i class={`fa fa-${name}`} aria-hidden='true' style={{ fontSize: size + 'px', color: color }} />
        )
    }
})
