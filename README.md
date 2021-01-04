# Oh, Vue Icons!

[![npm](https://img.shields.io/npm/v/oh-vue-icons.svg?style=flat-square)](https://www.npmjs.com/package/oh-vue-icons) ![downloads](https://img.shields.io/npm/dw/oh-vue-icons.svg?style=flat-square) [![license](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A [Vue](https://vuejs.org/) component for including inline SVG icons from different icon packs in easily. Now the following icon packs are supported:

- `ai` - [academicons](https://github.com/jpswalsh/academicons)
- `ci` - [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons)
- `fa` - [Font Awesome 5](https://fontawesome.com/)
- `fc` - [Flat Color Icons](https://github.com/icons8/flat-color-icons)
- `gi` - [gameicons](https://game-icons.net/)
- `ri` - [Remix Icon](https://github.com/Remix-Design/RemixIcon)
- `si` - [Simple Icons](https://simpleicons.org/)
- `wi` - [Weather Icons](https://erikflowers.github.io/weather-icons/)


&nbsp;

## Documentation

Search for icons and view the documentation [here](https://oh-vue-icons.vercel.app).


&nbsp;

## Installation

```bash
yarn add oh-vue-icons
# or
npm install oh-vue-icons
```

&nbsp;

## Import

### Global Import

Import `oh-vue-icons` and install it into Vue in `main.js`. You can only import the icons you need to reduce the bundle size, for example:

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

If you don't care about the bundle size and want to import a whole icon pack, you may should:

```js
// main.js
// import Font Awesome
import * as FaIcons from 'oh-vue-icons/icons/fa'
const Fa = Object.values({ ...FaIcons })
OhVueIcon.add(Fa)
```

&nbsp;

### Local Import

```js
import OhVueIcon from 'oh-vue-icons/components/Icon'

export default {
  components: {
    'v-icon': OhVueIcon
  }
}
```

&nbsp;

## Usage

The icon names should be passed using **kebab-case**.

```html
<template>
  <div>
    <v-icon name="fa-flag" />
    <v-icon name="ri-zhihu-fill" />
  </div>
</template>
```

The icons are organized as follows:

- The prefixes of the name prop values of icons from [academicons](https://github.com/jpswalsh/academicons),  [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons), [Font Awesome 5](https://fontawesome.com/), [Flat Color Icons](https://github.com/icons8/flat-color-icons), [gameicons](https://game-icons.net/), [Remix Icon](https://github.com/Remix-Design/RemixIcon), [Simple Icons](https://simpleicons.org/) and [Weather Icons](https://erikflowers.github.io/weather-icons/) are `ai`, `ci`, `fa`, `fc`, `gi`, `ri`, `si` and `wi`.

- For [Font Awesome 5](https://fontawesome.com/) icons, icons from `regular` pack have name prop values like `fa-regular-flag`. Icons from `solid` and `brands` pack have name prop values like `fa-beer` and `fa-github`.

See the [documentation](https://oh-vue-icons.vercel.app/docs#basic-usage) for more about the usage.


&nbsp;

## Props

| Name        | Description                              | Type      | Accepted Values                                     | Default value  |
| ----------- | ---------------------------------------- | --------- | --------------------------------------------------- | -------------- |
| `scale`     | Icon size                                | `number`  | /                                                   | `1`            |
| `animation` | Type of animation                        | `string`  | `wrench` / `ring` / `pulse` / `spin` / `spin-pulse` | /              |
| `hover`     | Enable animation only when being hovered | `boolean` | `true` / `false`                                    | `false`        |
| `flip`      | Used to flip icon                        | `string`  | `vertical` / `horizontal` / `both`                  | /              |
| `fill`      | Fill color of icon                       | `string`  | HEX color code or color name                        | `currentColor` |
| `label`     | Icon lable                               | `string`  | /                                                   | /              |
| `title`     | Icon title                               | `string`  | /                                                   | /              |
| `inverse`   | Make icon color white?                   | `boolean` | `true` / `false`                                    | `false`        |

Some examples could be found in the [documentation](https://oh-vue-icons.vercel.app/docs#examples).


&nbsp;

## Development

Install dependencies:

```bash
yarn install
```

Fetch icon sources:

```bash
yarn submodule
```

Download some of the icons packs ([`gameicons`](https://game-icons.net/archives/svg/zip/000000/transparent/game-icons.net.svg.zip)):

```bash
yarn download
```

Re-generate files under `src/icons` automatically:

```bash
yarn build
```

Run docs:

```bash
yarn dev
```


&nbsp;

## Acknowledgements

This project is inspired by and based on [Justineo/vue-awesome](https://github.com/Justineo/vue-awesome) and [react-icons](https://github.com/react-icons/react-icons).


&nbsp;

## License

[MIT](LICENSE)