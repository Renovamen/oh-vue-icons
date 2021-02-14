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

Download some of the iconspacks ([`gameicons`](https://game-icons.net/archives/svg/zip/000000/transparent/game-icons.net.svg.zip)):

```bash
yarn download
```

Re-generate files under `src/icons` automatically:

```bash
yarn build
```

&nbsp;

## Website

Our website it built with [Nuxt.js](https://nuxtjs.org) and [tailwindcss](https://tailwindcss.com).

```bash
# development
yarn dev

# generate static files
yarn build:docs
```

&nbsp;

## License

By contributing to oh-vue-icons, you agree that your contributions will be licensed under its MIT license.
