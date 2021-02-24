# Oh, Vue Icons!

[![npm](https://img.shields.io/npm/v/oh-vue-icons.svg?style=flat-square)](https://www.npmjs.com/package/oh-vue-icons) ![downloads](https://img.shields.io/npm/dt/oh-vue-icons.svg?style=flat-square) [![license](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

🇬🇧 [English](README.md) | 🇨🇳 **中文说明**

`oh-vue-icons` 是一个能让你在 [Vue](https://vuejs.org/) 中轻松从多个流行图标库中引入 SVG 图标的组件。它是 tree-shakable 的，因此你能够仅引入你需要的图标从而减小打包体积。

目前支持以下 15 个图标库：

| 图标库                                                         | 前缀    | 协议                                                          | 图标数量     |
| ------------------------------------------------------------- | ------ | ------------------------------------------------------------- | ---------- |
| [academicons](https://github.com/jpswalsh/academicons)        | `ai`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                     | 145        |
| [Bootstrap Icons](https://icons.getbootstrap.com/)            | `bi`   | [MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)     | 1325       |
| [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (Colorful) | `ci`   | [CC0 1.0 Universal](https://github.com/spothq/cryptocurrency-icons/blob/master/LICENSE.md) | 892        |
| [Font Awesome 5 Free](https://fontawesome.com/)               | `fa`   | [CC BY 4.0](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt) | 1609       |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons) (Colorful) | `fc`   | [MIT / Good Boy](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 329        |
| [Flag Icon](https://flagicons.lipis.dev/) (Colorful)          | `fi`   | [MIT](https://github.com/lipis/flag-icon-css/blob/master/LICENSE) | 516        |
| [gameicons](https://game-icons.net/)                          | `gi`   | [CC BY 3.0](https://github.com/game-icons/icons/blob/master/license.txt) | 3927       |
| [Line Awesome](https://icons8.com/line-awesome)               | `la`   | [MIT / Good Boy](https://github.com/icons8/line-awesome/blob/master/LICENSE.md) | 1544      |
| [Octicons](https://primer.style/octicons/)                    | `oi`   | [MIT](https://github.com/primer/octicons/blob/master/LICENSE) | 209        |
| [Pokemon Icons](https://theartificial.github.io/pokemon-icons/) (Colorful)| `pi`   | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 1453      |
| [Pixel Icons](https://pixelarticons.com/)                     | `px`   | [MIT](https://github.com/halfmage/pixelarticons/blob/master/LICENSE) | 451       |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)       | `ri`   | [Apache 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License) | 2271       |
| [Simple Icons](https://simpleicons.org/)                      | `si`   | [CC0 1.0 Universal](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md) | 1799       |
| [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (Colorful) | `vi`   | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 1061       |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | `wi`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                     | 219        |


&nbsp;

## 文档

在[这里](https://oh-vue-icons.vercel.app)查找图标和查看文档。


&nbsp;

## 安装

```bash
yarn add oh-vue-icons
# 或
npm install oh-vue-icons
```

&nbsp;

## 引入

### 全局引入

首先需要在 `main.js` 中引入 `oh-vue-icons`。你可以只引入你需要的图标从而减小打包体积，比如：

```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import OhVueIcon from 'oh-vue-icons/components/Icon'

import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'
OhVueIcon.add([FaFlag, RiZhihuFill])

Vue.component('v-icon', OhVueIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

如果你并不在意打包体积，并希望引入某个图标库的所有图标，你可以：

```js
// main.js
// 引入 Font Awesome
import * as FaIcons from 'oh-vue-icons/icons/fa'

const Fa = Object.values({ ...FaIcons })
OhVueIcon.add(Fa)
```

&nbsp;

### 局部引入

```js
import OhVueIcon from 'oh-vue-icons/components/Icon'

export default {
  components: {
    'v-icon': OhVueIcon
  }
}
```

&nbsp;

## 用法

通过 `name` prop 来指定图标名，`name` prop 值需要使用**短横线隔开式**命名：

```html
<template>
  <div>
    <v-icon name="fa-flag" />
    <v-icon name="ri-zhihu-fill" />
  </div>
</template>
```

对于 [Font Awesome 5](https://fontawesome.com/)，来自 `regular` 包的图标的 `name` prop 值的前缀为 `fa-regular-` 而不是 `fa-`，如 `fa-regular-flag`。而 `solid` 和 `brands` 包的图标前缀均为 `fa-`，如 `fa-beer` 和 `fa-github`。

[文档](https://oh-vue-icons.vercel.app/docs#basic-usage)中有更多的用法。


&nbsp;

## Props

| 名称         | 描述                 | 类型       | 接受值                                                         | 默认值          |
| ----------- | ---------------------| --------- | ------------------------------------------------------------- | -------------- |
| `scale`     | 图标大小               | `number`  | /                                                             | `1`            |
| `animation` | 动画类型               | `string`  | `wrench` / `ring` / `pulse` / `spin` / `spin-pulse` / `flash` | /              |
| `speed`     | 动画速度               | `string`  | `slow` / `fast`                                               | /              |
| `hover`     | 仅在被 hover 时启用动画 | `boolean` | `true` / `false`                                              | `false`        |
| `flip`      | 翻转类型               | `string`  | `vertical` / `horizontal` / `both`                            | /              |
| `fill`      | 图标的填充颜色          | `string`  | 颜色名称或十六进制颜色代码                                        | `currentColor` |
| `label`     | 图标的 lable           | `string`  | /                                                             | /              |
| `title`     | 图标的 title           | `string`  | /                                                             | /              |
| `inverse`   | 把图标变成白色          | `boolean` | `true` / `false`                                              | `false`        |

[文档](https://oh-vue-icons.vercel.app/docs#examples)中有一些示例。


&nbsp;

## Nuxt.js

当使用 Nuxt.js 的服务端渲染时，需要在 `nuxt.config.js` 的 transpile build 项中添加 `oh-vue-icons`：

```js
export default {
  // ...
  build: {
    transpile: ['oh-vue-icons']
  }
}
```

否则 Nuxt 可能就不会把 `oh-vue-icons` 打包进去，[Nuxt 的文档](https://nuxtjs.org/docs/2.x/directory-structure/plugins)中对此有更详细的说明。


&nbsp;

## 贡献

欢迎贡献，这里是[贡献指南](CONTRIBUTING.md)。


&nbsp;

## 致谢

本项目受到了 [vue-awesome](https://github.com/Justineo/vue-awesome) 和 [react-icons](https://github.com/react-icons/react-icons) 的启发并借鉴了它们的部分代码。


&nbsp;

## 开源协议

本项目使用 [MIT](LICENSE) 开源协议。图标来自于[其他项目](#readme)，所以还需要参考这些项目的开源协议。
