# Button 按钮

```vue
import example from '../example'
```

### 基本使用

```html
<f-button type='default'>我真的是个烂大街的按钮</f-button>
```

### 主题色按钮

```html
<f-button type='default'>作者预设的</f-button>
<f-button type='primary'>很普通的type，抄袭的</f-button>
<f-button type='warning'>也是个抄袭api的按钮</f-button>
<f-button type='error'>借鉴(chaoxi)的error</f-button>
<f-button type='success'>这回成功了</f-button>
```

### 灵魂出窍

```html
<f-button ghost type='success'>人没了</f-button>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `type` | 按钮主题类型 | _TypeOptions_ | `default` |
| `size` | 按钮尺寸 | _SizeOptions_ | `default` |
| `ghost` | 是否为幽灵按钮 | _boolean_ | `false` |
| `disabled` | 禁用状态 | _boolean_ | `false` |
| `color` | 按钮颜色 按钮为type为text使用 | _string_ | `default` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |
