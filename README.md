<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://github.com/Lastly1999/fast-deisgn/blob/main/public/logo_big.png">
  </a>
</p>

<h1 align="center">Fast Design</h1>

<div align="center">

一套轻量简约的 Vue3 组件库。
</div>

## 文档地址
<a href="https://lastly1999.github.io/fast-deisgn/site/index.html">文档地址</a>

## ✨ 特性

- 🌈 提炼自BootStrap类风格的Vue3组件。
- 📦 开箱即用的高质量 Vue3 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 基于varlet-cli链路开发，组件库一体管理
- 🎨 深入每个细节的主题样式。
- ⌨️ 使用jsx/tsx开发，灵活定制所需组件

## 🖥 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://ant.design/docs/react/getting-started-cn#兼容性)）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 安装

```bash
npm install fast-design --save
```

```jsx
import { createApp } from 'vue'
import App from './App.vue'

import fastDesign from "fast-design" // fast-design core components
import "fast-design/es/style" // fast-design style files

createApp(App).use(fastDesign).mount('#app')
```
