<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://github.com/Lastly1999/fast-deisgn/blob/main/public/logo_big.png">
  </a>
</p>

<h1 align="center">Fast Design</h1>

<div align="center">

一套轻量简约的 Vue3 组件库。
</div>

## ✨ 特性

- 🌈 提炼自BootStrap类风格的Vue3组件。
- 📦 开箱即用的高质量 Vue3 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 基于varlet-cli链路开发，组件库一体管理
- 🎨 深入每个细节的主题样式。

## 🖥 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://ant.design/docs/react/getting-started-cn#兼容性)）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

## 📦 安装

```bash
npm install fast-design --save
```

```vue
import { createApp } from 'vue'
import App from './App.vue'

import fastDesign from "fast-design" // fast-design core components
import "fast-design/es/style" // fast-design style files

createApp(App).use(fastDesign).mount('#app')
```
