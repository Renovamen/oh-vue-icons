# Oh, Vue icons!

A [Vue](https://vuejs.org/) component for including inline SVG icons from different icon packs in easily. Now the following icon packs are supported:

- `fa` - [Font Awesome](https://fontawesome.com/)
- `ri` - [Remix Icon](https://github.com/Remix-Design/RemixIcon)
- `ai` - [academicons](https://github.com/jpswalsh/academicons)
- `game` - [gameicons](https://game-icons.net)

Some of the icons are resized for better and more consistent user experience.

View the full set of icons and the demo [here](https://oh-vue-icons.vercel.app).

It is based on [Justineo/vue-awesome](https://github.com/Justineo/vue-awesome), so check out that repo for more information.

&nbsp;

## Installation

### `yarn` / `npm`

```bash
yarn add oh-vue-icons
# or
npm install oh-vue-icons
```

&nbsp;

### CDN

Add the following code to your HTML file:

```html
<link href="https://cdn.jsdelivr.net/npm/oh-vue-icons@0.1.2/dist/oh-vue-icons.min.js" rel="stylesheet">
```

&nbsp;

### Download Manually

Download [`dist/oh-vue-icons.min.js`](dist/oh-vue-icons.min.js) and include it in your HTML file.


&nbsp;

## Usage

### Import

Import `oh-vue-icons` in your Vue project:

```js
import Vue from 'vue'

/* Import icons */

// only import the icons you use to reduce bundle size
import 'oh-vue-icons/icons/fa/flag'

// or import a certain icon pack, for example, Font Awesome
import 'oh-vue-icons/icons/fa'

// or import all icons if you don't care about bundle size
import 'oh-vue-icons/icons'

/* Register component */

import VueIcon from 'oh-vue-icons/components/Icon'

// globally (in your main.js file)
Vue.component('v-icon', VueIcon)

// or locally (in your component file)
export default {
  components: {
    'v-icon': VueIcon
  }
}
```

&nbsp;

### Use

Then you can display icons on your page:

```html
<!-- basic -->
<v-icon name="fa/beer" />

<!-- with options -->
<v-icon name="fa/sync" scale="2" spin />
<v-icon name="ri/playstation-fill" flip="horizontal" />
<v-icon name="ai/google-scholar" label="Google Scholar" />

<!-- stacked icons -->
<v-icon label="No Photos">
  <v-icon name="fa/camera" />
  <v-icon name="fa/ban" scale="2" class="alert" />
</v-icon>
```

The icons are organized as follows:

- Icons from Font Awesome, Remix Icon and academicons are located in `icons/fa`, `icons/ri`, `icons/ai` directory and the prefixes of their name prop values are `fa`, `ri` and `ai`.

- For Font Awesome icons, icons from regular and brands are located in `icons/fa/regular` and `icons/fa/brands` directory, which have name prop values like `fa/regular/flag` or `fa/brands/reddit`. Icons from solid pack are located in `icons/fa` directory and have name prop values like `fa/beer`.

&nbsp;

## Development

Install dependencies:

```bash
yarn install
# or
npm install
```

Download some of the icons packs ([`gameicons`](https://game-icons.net/archives/svg/zip/000000/transparent/game-icons.net.svg.zip)):

```bash
yarn download
```

Re-generate SVGs under `assets/svg` and files under `src/icons` automatically:

```bash
yarn icons
```

Run docs:

```bash
yarn dev
```


&nbsp;

## License

[MIT](LICENSE)