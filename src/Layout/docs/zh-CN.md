# Layout 布局


### 基础布局


```vue
import example from "../example"
```

### 代码预览
```html
  <f-row>
    <f-col :span="24" class="grid-content bg-purple-dark"></f-col>
  </f-row>
  <f-row>
    <f-col :span="12" class="grid-content bg-purple"></f-col>
    <f-col :span="12" class="grid-content bg-purple-light"></f-col>
  </f-row>
  <f-row>
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
  </f-row>
  <f-row class="row-bg" :gutter="[10]" justify="space-around">
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
  </f-row>
```

## Row API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `gutter` | 栅格padding间距 | _number[]_ | `[]` |
| `justify` | flex排列方式 | _start/end/center/space-around/space-between_	 | `start` |