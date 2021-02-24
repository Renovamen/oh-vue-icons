# Contributing

## Development

Install dependencies:

```bash
yarn install
```

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

Re-generate files under `src/icons` automatically:

```bash
yarn build
```

&nbsp;

## Demo

To run demo:

```bash
yarn demo
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
