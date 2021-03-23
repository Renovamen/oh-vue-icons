# oh-vue-icons for Vue 2

## Installation

```bash
yarn add oh-vue-icons
# or
npm install oh-vue-icons
```


&nbsp;

## Import

### Global Import

Import `oh-vue-icons` and install it into Vue in `main.js`. You can only import the icons you need to reduce the bundle size.

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import OhVueIcon from "oh-vue-icons";

import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
OhVueIcon.add([FaFlag, RiZhihuFill]);

Vue.component("v-icon", OhVueIcon);

new Vue({
  render: h => h(App)
}).$mount("#app");
```

If you don't care about the bundle size and want to import a whole icon pack, you may should:

```js
// main.js
// import Font Awesome
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
OhVueIcon.add(Fa);
```

&nbsp;

### Local Import

```js
import OhVueIcon from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon
  }
};
```


&nbsp;

## Nuxt.js

When using Nuxt.js for server side rendering (SSR), `oh-vue-icons` should be added to the transpile build option in `nuxt.config.js`:

```js
export default {
  // ...
  build: {
    transpile: ["oh-vue-icons"]
  }
}
```

or it will not be bundled, see [Nuxt's documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins) for details.

Then import the component by:

```js
import OhVueIcon from "oh-vue-icons/dist-css/v2/icon.umd.min";
import 'oh-vue-icons/dist-css/v2/icon.css'
```

or "Document is not defined" error will occured, due to the inline styles in the default imported file.


&nbsp;

## Development

```bash
# install dependencies
yarn install

# compiles and hot-reloads for development
yarn dev

# compiles and minifies for production
yarn build

# lints and fixes files
yarn lint
```
