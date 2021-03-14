---
title: Oh, Vue Icons!
links:
  - name: github
    link: https://github.com/Renovamen/oh-vue-icons
  - name: npm
    link: https://www.npmjs.com/package/oh-vue-icons
---

## 特性

- 它是 tree-shakable 的，因此你能够仅引入你需要的图标从而减小打包体积
- 支持 Vue 2 和 Vue 3
- 支持 [15 个流行的图标库](#支持的图标库)


## 支持的图标库

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
| [Pixelarticons](https://pixelarticons.com/)                   | `px`   | [MIT](https://github.com/halfmage/pixelarticons/blob/master/LICENSE) | 460       |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)       | `ri`   | [Apache 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License) | 2271       |
| [Simple Icons](https://simpleicons.org/)                      | `si`   | [CC0 1.0 Universal](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md) | 1831       |
| [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (Colorful) | `vi`   | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 1061       |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | `wi`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                     | 219        |


## 安装

```bash
yarn add oh-vue-icons
# 或
npm install oh-vue-icons
```


## 引入

### 全局引入

首先需要在 `main.js` 中引入 `oh-vue-icons`。你可以只引入你需要的图标从而减小打包体积。

#### Vue 2

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import OhVueIcon from "oh-vue-icons/components/icon";

import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
OhVueIcon.add([FaFlag, RiZhihuFill]);

Vue.component("v-icon", OhVueIcon);

new Vue({
  render: h => h(App)
}).$mount("#app");
```

如果你并不在意打包体积，并希望引入某个图标库的所有图标，你可以：

```js
// main.js
// 引入 Font Awesome
import * as FaIcons from 'oh-vue-icons/icons/fa'

const Fa = Object.values({ ...FaIcons })
OhVueIcon.add(Fa)
```

#### Vue 3

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import OhVueIcon from "oh-vue-icons/components/icon-v3";

import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
OhVueIcon.add([FaFlag, RiZhihuFill]);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
```

### 局部引入

```js
import OhVueIcon from "oh-vue-icons/components/icon";

export default {
  components: {
    "v-icon": OhVueIcon
  }
};
```


## 基本用法

通过 `name` prop 来指定图标名，`name` prop 值需要使用**短横线隔开式**命名：

<p>
  <v-icon name="bi-music-player"></v-icon>
  <v-icon name="fc-globe"></v-icon>
  <v-icon name="oi-repo-pull"></v-icon>
  <v-icon name="pi-charizard"></v-icon>
</p>

```html
<template>
  <div>
    <v-icon name="bi-music-player" />
    <v-icon name="fc-globe" />
    <v-icon name="oi-repo-pull" />
    <v-icon name="pi-charizard" />
  </div>
</template>
```


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


## 示例

### 图标大小

使用 `scale: number | string` prop 来调整图标大小：

<p>
  <v-icon name="fa-gamepad" scale="1.5"></v-icon>
  <v-icon name="ri-folder-music-fill" scale="2"></v-icon>
  <v-icon name="ai-overleaf" scale="2.5"></v-icon>
  <v-icon name="si-gatsby" scale="3"></v-icon>
  <v-icon name="wi-day-sunny-overcast" scale="3.5"></v-icon>
  <v-icon name="gi-ancient-sword" scale="4"></v-icon>
</p>

```html
<v-icon name="fa-gamepad" scale="1.5"/>
<v-icon name="ri-folder-music-fill" scale="2"/>
<v-icon name="ai-overleaf" scale="2.5"/>
<v-icon name="si-gatsby" scale="3"/>
<v-icon name="wi-day-sunny-overcast" scale="3.5"/>
<v-icon name="gi-ancient-sword" scale="4"/>
```

### 图标动画

使用 `animation: string` 来指定动画类型：

<p>
  <v-icon name="ri-refresh-line" animation="spin"></v-icon>
  <v-icon name="fa-spinner" animation="spin-pulse"></v-icon>
  <v-icon name="la-tools-solid" animation="wrench"></v-icon>
  <v-icon name="fa-regular-bell" animation="ring"></v-icon>
  <v-icon name="ri-heart-pulse-line" animation="pulse"></v-icon>
  <v-icon name="bi-lightning" animation="flash"></v-icon>
</p>

```html
<v-icon name="ri-refresh-line" animation="spin" />
<v-icon name="fa-spinner" animation="spin-pulse" />
<v-icon name="la-tools-solid" animation="wrench" />
<v-icon name="fa-regular-bell" animation="ring" />
<v-icon name="ri-heart-pulse-line" animation="pulse" />
<v-icon name="bi-lightning" animation="flash" />
```

使用 `hover: boolean` 来仅在图标被 hover 时启用动画：

<p><v-icon name="ri-refresh-line" animation="spin" hover></v-icon></p>

```html
<v-icon name="ri-refresh-line" animation="spin" hover />
```

使用 `speed: string` 来控制动画的速度：

<p>
  慢：<v-icon name="ri-refresh-line" animation="spin" speed="slow"></v-icon>,
  正常：<v-icon name="ri-refresh-line" animation="spin"></v-icon>,
  快：<v-icon name="ri-refresh-line" animation="spin" speed="fast"></v-icon>
</p>

```html
<v-icon name="ri-refresh-line" animation="spin" speed="slow" />
<v-icon name="ri-refresh-line" animation="spin" />
<v-icon name="ri-refresh-line" animation="spin" speed="fast" />
```

### 图标翻转

使用 `flip: string` 来翻转图标：

- `vertical`：垂直翻转
- `horizontal`：水平翻转
- `both`：垂直 + 水平翻转

<p>
  <v-icon name="ri-playstation-line" flip="vertical"></v-icon>
  <v-icon name="si-internetexplorer" flip="horizontal"></v-icon>
  <v-icon name="ai-google-scholar" flip="both"></v-icon>
</p>

```html
<v-icon name="ri-playstation-line" flip="vertical" />
<v-icon name="si-internetexplorer" flip="horizontal" />
<v-icon name="ai-google-scholar" flip="both" />
```

### 填充颜色

使用 `fill: string` 来指定图标的填充颜色：

<p>
  <v-icon name="fa-thermometer-empty" fill="green"></v-icon>
  <v-icon name="fa-thermometer-half" fill="orange"></v-icon>
  <v-icon name="fa-thermometer-full" fill="red"></v-icon>
</p>

```html
<v-icon name="fa-thermometer-empty" fill="green" />
<v-icon name="fa-thermometer-half" fill="orange" />
<v-icon name="fa-thermometer-full" fill="red" />
```

### 堆叠图标

类似于 Font Awesome 中的 `fa-stack`，但功能更强大一些：

<p>
  <v-icon label="No Photo">
    <v-icon name="fa-camera"></v-icon>
    <v-icon name="fa-ban" scale="2" fill="#fC644d"></v-icon>
  </v-icon>
</p>

```html
<v-icon label="No Photos">
  <v-icon name="fa-camera" />
  <v-icon name="fa-ban" scale="2" fill="#fC644d" />
</v-icon>
```

堆叠的图标也可以加动画：

<p>
  <v-icon label="No Photo" animation="wrench">
    <v-icon name="fa-camera"></v-icon>
    <v-icon name="fa-ban" scale="2" fill="#fC644d"></v-icon>
  </v-icon>
</p>

```html
<v-icon label="No Photos" animation="wrench">
  <v-icon name="fa-camera" />
  <v-icon name="fa-ban" scale="2" fill="#fC644d" />
</v-icon>
```

### 颜色反转

使用 `inverse: boolean` 来把图标变成白色 （`#fff`），**不适用于彩色图标**：

<p>
  <v-icon label="Wechat Logo">
    <v-icon name="fa-square" scale="1.5" fill="#57C181"></v-icon>
    <v-icon name="si-wechat" inverse></v-icon>
  </v-icon>
</p>

```html
<v-icon label="Wechat Logo">
  <v-icon name="fa-square" scale="1.5" fill="#57C181" />
  <v-icon name="si-wechat" inverse />
</v-icon>
```

### Label

使用 `label: string` 来设置图标的 `aria-label`：

<p><v-icon name="fa-code" label="Source Code"></v-icon></p>

```html
<v-icon name="fa-code" label="Source Code" />
```

### Title

使用 `title: string` 给图标加上 `<title>` 标签：

<p><v-icon name="fa-vuejs" title="Vue.js"></v-icon></p>

```html
<v-icon name="fa-vuejs" title="Vue.js" />
```


## 进阶用法

### 自定义图标

注册自定义的图标：

```js
OhVueIcon.add({
  name: 'baidu',
  width: 23.868,
  height: 26,
  d: 'M3.613 13.701c2.827-.608 2.442-3.986 2.357-4.725-.138-1.139-1.477-3.128-3.296-2.971C.386 6.21.052 9.515.052 9.515c-.309 1.528.74 4.793 3.561 4.186zm3.002 5.875c-.083.238-.268.846-.107 1.375.315 1.187 1.346 1.24 1.346 1.24h1.48v-3.619H7.749c-.713.213-1.057.767-1.134 1.004zM8.86 8.035c1.562 0 2.823-1.797 2.823-4.019C11.683 1.796 10.421 0 8.86 0 7.301 0 6.036 1.796 6.036 4.016c0 2.222 1.265 4.019 2.824 4.019zm6.724.265c2.087.271 3.429-1.956 3.695-3.644.272-1.686-1.074-3.644-2.552-3.98-1.48-.339-3.329 2.032-3.497 3.578-.2 1.89.271 3.778 2.354 4.046zm5.114 9.923s-3.229-2.498-5.113-5.198c-2.555-3.981-6.185-2.361-7.399-.337-1.209 2.024-3.093 3.305-3.36 3.644-.271.334-3.9 2.293-3.095 5.871.806 3.576 3.635 3.508 3.635 3.508s2.085.205 4.504-.336c2.42-.537 4.503.134 4.503.134s5.652 1.893 7.199-1.751c1.545-3.645-.874-5.535-.874-5.535zm-9.671 5.423H7.352c-1.587-.316-2.219-1.4-2.299-1.584-.078-.188-.528-1.059-.29-2.539.686-2.219 2.642-2.379 2.642-2.379h1.956V14.74l1.666.025v8.881zm6.844-.025h-4.229c-1.639-.423-1.716-1.587-1.716-1.587v-4.677l1.716-.027v4.203c.104.447.661.529.661.529h1.742v-4.705h1.825v6.264zm5.986-12.486c0-.808-.671-3.239-3.159-3.239-2.492 0-2.825 2.295-2.825 3.917 0 1.548.131 3.71 3.227 3.641 3.096-.068 2.757-3.507 2.757-4.319z'
})
```

<p><v-icon name="baidu"></v-icon></p>

```html
<v-icon name="baidu" />
```

### 自定义彩色图标

```js
OhVueIcon.register(
  {
    name: 'webpack',
    width: 1200,
    height: 1200,
    paths: [
      {
        fill: '#8ED6FB',
        d: 'M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z'
      },
      {
        fill: '#1C78C0',
        d: 'M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z'
      }
    ]
  },
  {
    name: 'vue',
    width: 256,
    height: 221,
    polygons: [
      {
        fill: '#41B883',
        points: '0,0 128,220.8 256,0 204.8,0 128,132.48 50.56,0 0,0'
      },
      {
        fill: '#35495E',
        points: '50.56,0 128,133.12 204.8,0 157.44,0 128,51.2 97.92,0 50.56,0'
      }
    ]
  },
  {
    name: 'html5-c',
    width: 512,
    height: 512,
    raw: '<path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>'
  }
)
```

<p>
  <v-icon name="webpack"></v-icon>
  <v-icon name="vue"></v-icon>
  <v-icon name="html5-c"></v-icon>
</p>

```html
<v-icon name="webpack" /> <v-icon name="vue" /> <v-icon name="html5-c" />
```


## Nuxt.js

当使用 Nuxt.js 的服务端渲染时，需要在 `nuxt.config.js` 的 `build.transpile` 项中添加 `oh-vue-icons`：

```js
export default {
  // ...
  build: {
    transpile: ['oh-vue-icons']
  }
}
```

否则 Nuxt 可能就不会把 `oh-vue-icons` 打包进去，[Nuxt 的文档](https://nuxtjs.org/docs/2.x/directory-structure/plugins)中对此有更详细的说明。


## 致谢

本项目受到了 [vue-awesome](https://github.com/Justineo/vue-awesome) 和 [react-icons](https://github.com/react-icons/react-icons) 的启发并借鉴了它们的部分代码。


## 开源协议

本项目使用 [MIT](https://github.com/Renovamen/oh-vue-icons/blob/master/LICENSE) 开源协议。图标来自于[其他项目](#支持的图标库)，所以还需要参考这些项目的开源协议。
