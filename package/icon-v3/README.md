# `oh-vue-icons` for Vue 3

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
import OhVueIcon from "oh-vue-icons/dist/v3/icon.es";

import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
OhVueIcon.add(FaFlag, RiZhihuFill);

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
OhVueIcon.add(...Fa);
```

&nbsp;

### Local Import

```js
import OhVueIcon from "oh-vue-icons/dist/v3/icon.umd.min";

export default {
  components: {
    "v-icon": OhVueIcon
  }
};
```


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
