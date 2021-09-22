# Input 输入框

```vue
import example from "../example"
```

```html
  <app-type>用手输入的框，这都不懂我没办法了</app-type>
  <f-input placeholder="请输入内容" />
  <app-type>不同尺寸</app-type>
  <f-input class="demo-input" size="big" placeholder="请输入内容" />
  <f-input class="demo-input" size="default" placeholder="请输入内容" />
  <f-input class="demo-input" size="mini" placeholder="请输入内容" />
  <app-type>禁用状态</app-type>
  <f-input class="demo-input" size="default" placeholder="请输入内容" disabled />
  <app-type>双向绑定</app-type>
  <f-input class="demo-input" size="default" placeholder="请输入内容" v-model:value="value" />
  <app-type>双向绑定的值变化</app-type>
  <f-input class="demo-input" size="default" placeholder="请输入内容" disabled v-model:value="value"/>
  <app-type>输入框图标（后置）</app-type>
  <f-input class="demo-input" size="big" placeholder="请输入内容" suffix-icon="search" @suffix-click="suffixClick" />
  <app-type>输入框图标（前置）</app-type>
  <f-input class="demo-input" size="big" placeholder="请输入内容" prefix-icon="user-circle-o" @prefix-click="prefixClick" />
```

## Input API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `value/v-model` | 绑定值，V-model为双向绑定 | _string_	 | `` |
| `placeholder` | 输入时的提示 | _string_ | `` |
| `size` | flex排列方式 | _mini/default/small/big_	 | `start` |
| `suffixIcon` | input右侧图标,详细图标见font-awsome库 | _string_	 | `` |
| `prefixIcon` | input左侧图标,详细图标见font-awsome库 | _string_	 | `` |


### Methods 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `blur` | 使 input 失去焦点	 | `event: Event` |
| `change` | 仅在输入框失去焦点或用户按下回车时触发		 | `event: Event` |
| `blur` | 使 input 失去焦点	 | `event: Event` |
| `input` | 在 Input 值改变时触发	 | `event: Event` |
| `suffix-click` | 点击input右侧图标触发	 | `event: Event` |
| `prefix-click` | 点击input左侧图标触发	 | `event: Event` |