# Oh, Vue Icons!

A [Vue](https://vuejs.org/) component for including inline SVG icons from different icon packs in easily. Now the following icon packs are supported:

- `fa` - [Font Awesome](https://fontawesome.com)
- `ri` - [Remix Icon](https://github.com/Remix-Design/RemixIcon)
- `ai` - [academicons](https://github.com/jpswalsh/academicons)
- `si` - [Simple Icons](https://simpleicons.org)
- `wi` - [Weather Icons](https://erikflowers.github.io/weather-icons/)
- `gi` - [gameicons](https://game-icons.net)


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

Import `oh-vue-icons` and install it into Vue in `main.js`. You can choose to only import the icons you use to reduce bundle size, for example:

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

Or you can also import a whole icon pack if you don't care about bundle size, for example:

```js
// main.js
// import Font Awesome and Remix Icon
import { Fa, Ri } from 'oh-vue-icons/icons'

OhVueIcon.add(Fa)
OhVueIcon.add(Ri)
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

```html
<template>
  <div>
    <v-icon name="fa-flag" />
    <v-icon name="ri-zhihu-fill" />
  </div>
</template>
```

The icons are organized as follows:

- The prefixes of the name prop values of icons from Font Awesome, Remix Icon, academicons and gameicons are `fa`, `ri`, `ai`, `si`, `wi` and `gi`.

- For Font Awesome icons, icons from `regular` pack have name prop values like `fa-regular-flag`. Icons from `solid` and `brands` pack have name prop values like `fa-beer` and `fa-github`.

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

This project is inspired by and based on [Justineo/vue-awesome](https://github.com/Justineo/vue-awesome).


&nbsp;

## License

[MIT](LICENSE)