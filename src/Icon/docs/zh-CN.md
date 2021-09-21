# Icon 图标

### 使用

- 为了保证图标的多样性，以及图标整体的一体性，直接在构建时引入font-awesome作为组件库主要图标库

### font-awsome文档地址
<a href='http://www.fontawesome.com.cn/faicons/'>去看看</a>

### 部分图标预览

```vue
import example from "../example" 
```

### 使用

- 直接在项目中使用 icon组件已经和项目合并在一起，不需要单独引入

```html
<f-icon size='35' name='id-card' />
<f-icon size='35' name='chevron-left'></f-icon>
<f-icon size='35' name='cog'></f-icon>
```

- 预览```vue
  import Icon from "../example/icon.vue"
```

### 自定义颜色
```html
<f-icon size='40' name='id-card' color='red'/>
```

- 预览```vue
  import colorIcon from "../example/colorIcon.vue"
```



## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `name` | 图标类型 | _String_ | `详情见font-awesome文档` |
| `color` | 图标颜色 | _String_ | `#333` |
| `size` | 图标尺寸 | _String_ | `size为文字的px大小值 默认30` |


### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

