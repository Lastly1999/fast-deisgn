# 按钮

### 引入

### 基本使用

```html
<f-button type='default'>组件库从我开始</f-button>
```

### 主题色按钮

```html
<f-button type='default'>默认按钮</f-button>
<f-button type='primary'>普通样式</f-button>
<f-button type='warning'>警告按钮</f-button>
<f-button type='error'>错误按钮</f-button>
<f-button type='success'>成功按钮</f-button>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `color` | 按钮颜色 | _string_ | `default` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |
