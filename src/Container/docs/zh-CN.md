# Container 布局容器


### 说明
- 用于布局的容器组件，方便快速搭建页面的基本结构 结构可根据文档自行搭配
```html
- <f-container>：外层容器。当子元素中包含 <f-header> 或 <f-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。

- <f-header>：顶栏容器。

- <f-aside>：侧边栏容器。

- <f-main>：主要区域容器。

- <f-footer>：底栏容器。
```

### 常见页面布局

```vue
import example from "../example"
```

## Container API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `mode` | 子元素的排列方向	 | _horizontal/vertical_ | `horizontal` |

## Aside API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `width` | 侧边栏宽度		| _string_ | `200` |

## Header API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `height` | 顶栏高度		| _string_ | `60` |

## Footer API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `height` | 底栏高度		| _string_ | `50` |