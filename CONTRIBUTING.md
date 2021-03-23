# Contribution Guides

## Development

### Install Dependencies

```bash
yarn install
```

### Icon Packs

Fetch icon sources:

```bash
yarn submodule
```

Download some of the iconpacks ([`gameicons`](https://game-icons.net/archives/svg/zip/000000/transparent/game-icons.net.svg.zip)):

```bash
yarn download
```

Upgrade all iconpacks:

```bash
yarn update
```

### Dev

Vue 2:

```bash
cd package/icon-v2
yarn dev
```

Vue 3:

```bash
cd package/icon-v3
yarn dev
```

### Build

Re-generate files under `src/icons` automatically:

```bash
yarn icons
```

Build Vue 2 component:

```bash
cd package/icon-v2
yarn build
```

Build Vue 3 component:

```bash
cd package/icon-v3
yarn build
```


&nbsp;

## Website

The source code of our website is under folder [`docs`](docs), which is built with [Nuxt.js](https://nuxtjs.org) and [tailwindcss](https://tailwindcss.com).

```bash
# development
yarn dev

# generate static files
yarn docs:build
```


&nbsp;

## License

By contributing to oh-vue-icons, you agree that your contributions will be licensed under its MIT license.
