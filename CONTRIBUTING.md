# Contribution Guides

## Development

### Install Dependencies

```bash
yarn install
```

### Icon Packs

Fetch icon sources:

```bash
yarn download -f
```

This script would download icon packs as zip files from their Github repositories. Although it could be achieved more easily via "git submodule", too many submodules brings git too much loads and reduces its speed.


### Dev

```bash
cd package
yarn dev
```

### Build

Re-generate files under `package/icons` automatically:

```bash
yarn icons
```

Build the component:

```bash
cd package
yarn build
```


&nbsp;

## Website

The source code of our website is under folder [`docs`](docs), building with [Nuxt.js](https://nuxtjs.org) and [Tailwind CSS](https://tailwindcss.com).

```bash
cd docs
yarn dev  # Development
yarn generate  # Generate static files
```


&nbsp;

## License

By contributing to `oh-vue-icons`, you agree that your contributions will be licensed under its MIT license.
