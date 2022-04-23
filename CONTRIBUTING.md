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

```bash
yarn dev
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

The source code of the website is under folder [`docs`](docs), built with [Vitesse](https://github.com/antfu/vitesse).

Start developing:

```bash
yarn docs
```

Generate static files:

```bash
yarn build:docs
```


&nbsp;

## License

By contributing to `oh-vue-icons`, you agree that your contributions will be licensed under its [MIT license](LICENSE).
