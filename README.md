# Oh, Vue Icons!

[![npm](https://img.shields.io/npm/v/oh-vue-icons.svg?style=flat-square)](https://www.npmjs.com/package/oh-vue-icons) ![downloads](https://img.shields.io/npm/dt/oh-vue-icons.svg?style=flat-square) [![license](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A [Vue](https://vuejs.org/) component for including inline SVG icons from different popular iconpacks easily. It is tree-shakable and allows only importing the used icons.

Now the following icon packs are supported:

| Icon Pack                                                     | Prefix | License                                                       | Icon Numer |
| ------------------------------------------------------------- | ------ | ------------------------------------------------------------- | ---------- |
| [academicons](https://github.com/jpswalsh/academicons)        | `ai`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                     | 145        |
| [Bootstrap Icons](https://icons.getbootstrap.com/)            | `bi`   | [MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)     | 1265       |
| [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (Colorful) | `ci`   | [CC0 1.0 Universal](https://github.com/spothq/cryptocurrency-icons/blob/master/LICENSE.md) | 892        |
| [Font Awesome 5](https://fontawesome.com/) (Free)             | `fa`   | [CC BY 4.0](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt) | 1609       |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons) (Colorful) | `fc`   | [MIT / Good Boy](https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md) | 329        |
| [Flag Icon](https://flagicons.lipis.dev/) (Colorful)          | `fi`   | [MIT](https://github.com/lipis/flag-icon-css/blob/master/LICENSE) | 516        |
| [gameicons](https://game-icons.net/)                          | `gi`   | [CC BY 3.0](https://github.com/game-icons/icons/blob/master/license.txt) | 3927       |
| [Line Awesome](https://icons8.com/line-awesome)               | `la`   | [MIT / Good Boy](https://github.com/icons8/line-awesome/blob/master/LICENSE.md) | 1544      |
| [Octicons](https://primer.style/octicons/)                    | `oi`   | [MIT](https://github.com/primer/octicons/blob/master/LICENSE) | 209        |
| [Pokemon Icons](https://theartificial.github.io/pokemon-icons/) (Colorful)| `pi`   | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 1453      |
| [Pixel Icons](https://pixelarticons.com/)                     | `px`   | [MIT](https://github.com/halfmage/pixelarticons/blob/master/LICENSE) | 451       |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)       | `ri`   | [Apache 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License) | 2271       |
| [Simple Icons](https://simpleicons.org/)                      | `si`   | [CC0 1.0 Universal](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md) | 1750       |
| [VSCode Icons](https://github.com/vscode-icons/vscode-icons)  | `vi`   | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 1061       |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | `wi`   | [SIL OFL 1.1](http://scripts.sil.org/OFL)                     | 219        |


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

For [Font Awesome 5](https://fontawesome.com/) icons, icons from `regular` pack have name prop values like `fa-regular-flag`. Icons from `solid` and `brands` pack have name prop values like `fa-beer` and `fa-github`.

See the [documentation](https://oh-vue-icons.vercel.app/docs#basic-usage) for more about the usage.


&nbsp;

## Props

| Name        | Description                              | Type      | Accepted Values                                               | Default value  |
| ----------- | ---------------------------------------- | --------- | ------------------------------------------------------------- | -------------- |
| `scale`     | Icon size                                | `number`  | /                                                             | `1`            |
| `animation` | Type of animation                        | `string`  | `wrench` / `ring` / `pulse` / `spin` / `spin-pulse` / `flash` | /              |
| `speed`     | Animation speed                          | `string`  | `slow` / `fast`                                               | /              |
| `hover`     | Enable animation only when being hovered | `boolean` | `true` / `false`                                              | `false`        |
| `flip`      | Used to flip icon                        | `string`  | `vertical` / `horizontal` / `both`                            | /              |
| `fill`      | Fill color of icon                       | `string`  | HEX color code or color name                                  | `currentColor` |
| `label`     | Icon lable                               | `string`  | /                                                             | /              |
| `title`     | Icon title                               | `string`  | /                                                             | /              |
| `inverse`   | Make icon color white?                   | `boolean` | `true` / `false`                                              | `false`        |

Some examples could be found in the [documentation](https://oh-vue-icons.vercel.app/docs#examples).


&nbsp;

## Contributing

Contributions are welcomed, learn how to contribute [here](CONTRIBUTING.md).


&nbsp;

## Acknowledgements

This project is inspired by and based on [Justineo/vue-awesome](https://github.com/Justineo/vue-awesome) and [react-icons](https://github.com/react-icons/react-icons).


&nbsp;

## License

This project is [MIT](LICENSE) licensed. Icons are taken from [other projects](#readme), so check the license of each accordingly.
