# Oh, Vue Icons!

A [Vue](https://vuejs.org/) component for including inline SVG icons from different icon packs in easily. It is highly inspired by and based on [Justineo/vue-awesome](https://github.com/Justineo/vue-awesome). Now the following icon packs are supported:

- `fa` - [Font Awesome](https://fontawesome.com)
- `ri` - [Remix Icon](https://github.com/Remix-Design/RemixIcon)
- `ai` - [academicons](https://github.com/jpswalsh/academicons)
- `si` - [Simple Icons](https://simpleicons.org)
- `game` - [gameicons](https://game-icons.net)

Some of the icons are resized for better and more consistent user experience.

View the full list of icons and the demo [here](https://oh-vue-icons.vercel.app).


&nbsp;

## Installation

```bash
yarn add oh-vue-icons
# or
npm install oh-vue-icons
```

&nbsp;

## Usage

### Import

Import `oh-vue-icons` in your Vue project:

```js
import Vue from 'vue'
import OhVueIcon from 'oh-vue-icons/components/Icon'

/* Import icons */

// Only import the icons you use to reduce bundle size:
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'
OhVueIcon.add([FaFlag, RiZhihuFill])

// Or import a certain icon pack if you don't care about bundle size, 
// for example, Font Awesome:
import { Fa } from 'oh-vue-icons/icons'
OhVueIcon.add(Fa)

/* Register component */

// globally (in your main.js file)
Vue.component('v-icon', OhVueIcon)

// or locally (in your component file)
export default {
  components: {
    'v-icon': OhVueIcon
  }
}
```

&nbsp;

### Use

Then you can display icons on your page:

```html
<!-- basic -->
<v-icon name="fa-beer" />

<!-- with options -->
<v-icon name="fa-sync" scale="2" spin />
<v-icon name="ri-playstation-fill" flip="horizontal" />
<v-icon name="ai-google-scholar" label="Google Scholar" />

<!-- stacked icons -->
<v-icon label="No Photos">
  <v-icon name="fa-camera" />
  <v-icon name="fa-ban" scale="2" class="alert" />
</v-icon>
```

The icons are organized as follows:

- The prefixes of the name prop values of icons from Font Awesome, Remix Icon, academicons and gameicons are `fa`, `ri`, `ai`, `si` and `game`.

- For Font Awesome icons, icons from `regular` pack have name prop values like `fa-regular-flag`. Icons from `solid` and `brands` pack have name prop values like `fa/beer` and `fa/github`.

For more information about the usage, see [here](https://oh-vue-icons.vercel.app).

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

## License

[MIT](LICENSE)