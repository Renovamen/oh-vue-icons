---
title: Docs - Oh, Vue Icons!
---

## Features

- Works for both Vue 2 & 3
- Supports tree-shaking: only import the icons you want
- 30000+ icons from 20 popular icon packs, see [here](#supported-icon-packs)


## Supported Icon Packs

Now the following 20 icon packs are supported:

| Icon Pack                                                     | Prefix | License                                                       | Counts     |
| ------------------------------------------------------------- | ------ | ------------------------------------------------------------- | ---------- |
| [academicons](https://github.com/jpswalsh/academicons)        | `ai`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                     | 149        |
| [Bootstrap Icons](https://github.com/twbs/icons)              | `bi`   | [MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)     | 1668       |
| [CoreUI Icons Free](https://github.com/coreui/coreui-icons) (Colorful) | `co`   | [CC BY 4.0 License](https://github.com/coreui/coreui-icons/blob/master/LICENSE) | 1575       |
| [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (Colorful) | `ci`   | [CC0 1.0 Universal](https://github.com/spothq/cryptocurrency-icons/blob/master/LICENSE.md) | 942        |
| [Font Awesome 5 Free](https://github.com/FortAwesome/Font-Awesome) | `fa`   | [CC BY 4.0](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt) | 1610       |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons) (Colorful) | `fc`   | [MIT / Good Boy](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 329        |
| [Flag Icon](https://github.com/lipis/flag-icon-css) (Colorful)| `fi`   | [MIT](https://github.com/lipis/flag-icon-css/blob/master/LICENSE) | 530        |
| [gameicons](https://github.com/game-icons/icons)              | `gi`   | [CC BY 3.0](https://github.com/game-icons/icons/blob/master/license.txt) | 4052       |
| [Heroicons](https://github.com/tailwindlabs/heroicons)        | `hi`   | [MIT](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) | 460       |
| [Ionicons](https://github.com/ionic-team/ionicons)            | `io`   | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE) | 1332      |
| [Line Awesome](https://github.com/icons8/line-awesome)        | `la`   | [MIT / Good Boy](https://github.com/icons8/line-awesome/blob/master/LICENSE.md) | 1544      |
| [Material Design icons](https://github.com/google/material-design-icons) | `md`   | [Apache 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) | 10537      |
| [Octicons](https://github.com/primer/octicons)                | `oi`   | [MIT](https://github.com/primer/octicons/blob/main/LICENSE) | 259        |
| [Pokemon Icons](https://github.com/TheArtificial/pokemon-icons) (Colorful)| `pi`   | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 1453      |
| [PrimeIcons](https://github.com/primefaces/primeicons)        | `pr`   | [MIT](https://github.com/primefaces/primeicons/blob/master/LICENSE) | 238       |
| [Pixelarticons](https://github.com/halfmage/pixelarticons)    | `px`   | [MIT](https://github.com/halfmage/pixelarticons/blob/master/LICENSE) | 460       |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)       | `ri`   | [Apache 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License) | 2271       |
| [Simple Icons](https://github.com/simple-icons/simple-icons)  | `si`   | [CC0 1.0 Universal](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md) | 2233       |
| [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (Colorful) | `vi`   | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 1125       |
| [Weather Icons](https://github.com/erikflowers/weather-icons) | `wi`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                     | 219        |


## Installation

```bash
yarn add oh-vue-icons
# or
npm install oh-vue-icons
```

For Vue 2, you'll also need `@vue/composition-api`:

```bash
yarn add @vue/composition-api -D
```

Or if you are using [Nuxt 2](https://nuxtjs.org/), you'll need `@nuxtjs/composition-api` instead:

```bash
yarn add @nuxtjs/composition-api -D
```

then add `@nuxtjs/composition-api/module` to the `buildModules` option in your `nuxt.config.js`, see [here](https://composition-api.nuxtjs.org/getting-started/setup) for details.


## Import

### Global Import

Import `oh-vue-icons` and install it into Vue in `main.js`. You can choose to only import the icons you use to reduce bundle size.


#### Vue 3

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
```

If you don't care about the bundle size and want to import a whole icon pack, you may should:

```js
// main.js
// import Font Awesome
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
```


#### Vue 2

```js
// main.js
import Vue from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);

Vue.component("v-icon", OhVueIcon);

new Vue({
  render: h => h(App)
}).$mount("#app");
```


### Local Import

```js
import OhVueIcon from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon
  }
};
```


## Basic Usage

The icon names should be passed using **kebab-case**.

<p>
  <v-icon name="bi-music-player"></v-icon>
  <v-icon name="fc-globe"></v-icon>
  <v-icon name="oi-repo-pull"></v-icon>
  <v-icon name="vi-file-type-gridsome"></v-icon>
</p>

```html
<template>
  <div>
    <v-icon name="bi-music-player" />
    <v-icon name="fc-globe" />
    <v-icon name="oi-repo-pull" />
    <v-icon name="vi-file-type-gridsome" />
  </div>
</template>
```


## Props

| Name        | Description                              | Type      | Accepted Values                                               | Default value  |
| ----------- | ---------------------------------------- | --------- | ------------------------------------------------------------- | -------------- |
| `scale`     | Icon size                                | `number`  | /                                                             | `1`            |
| `animation` | Type of animation                        | `string`  | `wrench` / `ring` / `pulse` / `spin` / `spin-pulse` / `flash` / `float` | /              |
| `speed`     | Animation speed                          | `string`  | `slow` / `fast`                                               | /              |
| `hover`     | Enable animation only when being hovered | `boolean` | `true` / `false`                                              | `false`        |
| `flip`      | Used to flip icon                        | `string`  | `vertical` / `horizontal` / `both`                            | /              |
| `fill`      | Fill color of icon                       | `string`  | HEX color code or color name                                  | `currentColor` |
| `label`     | Icon lable                               | `string`  | /                                                             | /              |
| `title`     | Icon title                               | `string`  | /                                                             | /              |
| `inverse`   | Make icon color white?                   | `boolean` | `true` / `false`                                              | `false`        |


## Examples

### Scale

Use prop `scale: number | string` to specify the icon size:

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

### Animations

Use `animation: string` to enablle animations:

<p>
  <v-icon name="ri-refresh-line" animation="spin"></v-icon>
  <v-icon name="fa-spinner" animation="spin-pulse"></v-icon>
  <v-icon name="la-tools-solid" animation="wrench"></v-icon>
  <v-icon name="fa-regular-bell" animation="ring"></v-icon>
  <v-icon name="ri-heart-pulse-line" animation="pulse"></v-icon>
  <v-icon name="bi-lightning" animation="flash"></v-icon>
  <v-icon name="ri-sailboat-line" animation="float"></v-icon>
</p>

```html
<v-icon name="ri-refresh-line" animation="spin" />
<v-icon name="fa-spinner" animation="spin-pulse" />
<v-icon name="la-tools-solid" animation="wrench" />
<v-icon name="fa-regular-bell" animation="ring" />
<v-icon name="ri-heart-pulse-line" animation="pulse" />
<v-icon name="bi-lightning" animation="flash" />
<v-icon name="ri-sailboat-line" animation="float" />
```

Use `hover: boolean` to enable the animation only when the icon is hoverd:

<p><v-icon name="ri-refresh-line" animation="spin" hover></v-icon></p>

```html
<v-icon name="ri-refresh-line" animation="spin" hover />
```

Use `speed: string` to control the animation speed:

<p>
  Slow: <v-icon name="ri-refresh-line" animation="spin" speed="slow"></v-icon>,
  Normal: <v-icon name="ri-refresh-line" animation="spin"></v-icon>,
  Fast: <v-icon name="ri-refresh-line" animation="spin" speed="fast"></v-icon>
</p>

```html
<v-icon name="ri-refresh-line" animation="spin" speed="slow" />
<v-icon name="ri-refresh-line" animation="spin" />
<v-icon name="ri-refresh-line" animation="spin" speed="fast" />
```

### Flip

Use `flip: string` to mirror an icon:

- `vertical`: mirrors an icon vertically
- `horizontal`: mirrors icon horizontally
- `both`: mirrors icon vertically and horizontally

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

### Fill

Set fill color for icons via prop `fill: string`:

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


### Stacked Icons

Stack your icons easily jusy like in Font Awesome, even more powerful.

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

You can also make it animated:

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


### Inverse

Use `inverse: boolean` to make the color of icon white (`#fff`), which is **invalid on multi-color icons**:

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

Specify prop `label: string` to set the `aria-label` for the icon if provided.

<p><v-icon name="fa-code" label="Source Code"></v-icon></p>

```html
<v-icon name="fa-code" label="Source Code" />
```

### Title

Specify prop `title: string` to add a `<title>` tag for the icon.

<p><v-icon name="fa-vuejs" title="Vue.js"></v-icon></p>

```html
<v-icon name="fa-vuejs" title="Vue.js" />
```

## Advanced Usage

### Custom icons

You can register your own icons:

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

### Multi-color icons

Register icons in more advanced ways to unleash the full power of SVG:

```js
OhVueIcon.add(
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


## Nuxt

When using Nuxt, you need to register `oh-vue-icons` as a plugin following [Nuxt's documentation](https://nuxtjs.org/docs/directory-structure/plugins#vue-plugins).

It should be noted that, `oh-vue-icons` should be added to the `build.transpile` option in your `nuxt.config.js` (see [here](https://nuxtjs.org/docs/directory-structure/plugins/#es6-plugins) for details):

```js
// nuxt.config.js

export default {
  // ...
  build: {
    transpile: ["oh-vue-icons"]
  }
}
```

To render the icon component only on client-side, you may need to wrap it in a `<client-only>` tag:

```html
<template>
  <div>
    <client-only>
      <v-icon name="fa-flag" />
      <v-icon name="ri-zhihu-fill" />
    </client-only>
  </div>
</template>
```


## Vite

When using [Vite](https://vitejs.dev/), it is suggested to exclude `oh-vue-icons` from pre-bundling (see [#20](https://github.com/Renovamen/oh-vue-icons/issues/20) for details):

```js
// vite.config.js

export default {
  // ...
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  }
}
```

When using Vite's [Server-Side Rendering (SSR)](https://vitejs.dev/guide/ssr.html) support ([VuePress](https://v2.vuepress.vuejs.org/), [Vite SSG](https://github.com/antfu/vite-ssg), etc.), `oh-vue-icons` should be added to the `ssr.noExternal` option (see [here](https://vitejs.dev/guide/ssr.html#ssr-externals) for details):

```js
// vite.config.js

export default {
  // ...
  ssr: {
    noExternal: ["oh-vue-icons"]
  }
}
```


## Migrate from v0.x to v1.x

From `v1.x`, this library works for both Vue 2 & 3 within a single package.


### Vue 3

```diff
- import OhVueIcon from "oh-vue-icons/dist/v3/icon.es";
+ import { OhVueIcon, addIcons } from "oh-vue-icons";

- OhVueIcon.add(FaFlag)
+ addIcons(FaFlag)
```


### Vue 2

```diff
- import OhVueIcon from "oh-vue-icons";
+ import { OhVueIcon, addIcons } from "oh-vue-icons";

- OhVueIcon.add(FaFlag)
+ addIcons(FaFlag)
```

And you need to have `@vue/composition-api` installed, see [here](#installation).


### Nuxt 2

You need to install and enable `@nuxtjs/composition-api`, see [here](#installation).



## Acknowledgements

- This project is inspired by and based on [vue-awesome](https://github.com/Justineo/vue-awesome) and [react-icons](https://github.com/react-icons/react-icons)

- This website is built with [Vitesse](https://github.com/antfu/vitesse) and hosted on [Netlify](https://www.netlify.com/)


## License

This project is [MIT](https://github.com/Renovamen/oh-vue-icons/blob/master/LICENSE) licensed. Icons are taken from [other projects](#supported-icon-packs), so check the license of each accordingly.
