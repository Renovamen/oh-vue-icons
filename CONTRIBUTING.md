# Contribution Guides

## Development

### Install Dependencies

Clone the repo and install dependencies:

```bash
yarn
```

### Icon Packs

Fetch icon sources:

```bash
yarn download -f
```

This script would download icon packs as zip files from their Github repositories. Although it could be achieved more easily via "git submodule", too many submodules brings git too much loads and reduces its speed.


### Dev

Start watching source files:

```bash
yarn dev
```

Open another terminal, and start developing the demo site:

```bash
yarn demo
```


### Build

Re-generate files under `package/icons` automatically:

```bash
yarn icons
```

Build the component:

```bash
yarn build
```


&nbsp;

## Website

The source code of the website is under folder [`docs`](docs), built with [Nuxt 2](https://nuxtjs.org) and [Tailwind CSS](https://tailwindcss.com).

To start the site, you should first [build the component](#build) and remove `node_modules` in the root folder. This is because the component is developed using Vue 3 (although it supports both Vue 2 & 3) while the website is powered by Nuxt 2 which is based on Vue 2. Thus there could be some conflicts among dependencies.

Then install dependencies:

```bash
cd docs
yarn
```

Start developing:

```bash
yarn dev
```

Generate static files:

```bash
yarn generate
```


&nbsp;

## License

By contributing to `oh-vue-icons`, you agree that your contributions will be licensed under its MIT license.
