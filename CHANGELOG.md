# Change Log

## [0.4.1](https://github.com/Renovamen/oh-vue-icons/compare/v0.3.1...v0.4.1) (2021-03-29)

### BREAKING CHANGES

- expand data argument to remove need of array whem import icons ([8db96f3](https://github.com/Renovamen/oh-vue-icons/commit/8db96f33bd1055e3f899f6ec27b484c3ebdc6375)) ([#10](https://github.com/Renovamen/oh-vue-icons/pull/10))
- use rollup to bundle the component in esm format ([4027627](https://github.com/Renovamen/oh-vue-icons/commit/4027627176c75dc6625b398ca93e3886d9bcbd71)) ([#9](https://github.com/Renovamen/oh-vue-icons/issues/9))
- import paths have changed:

  Icons:

  ```diff
  - OhVueIcon.add([FaFlag, RiZhihuFill]);
  + OhVueIcon.add(FaFlag, RiZhihuFill);
  ```

  Vue 3:

  ```diff
  - import OhVueIcon from "oh-vue-icons/dist/v3/icon.umd.min";
  + import OhVueIcon from "oh-vue-icons/dist/v3/icon.es";
  ```


## [0.3.1](https://github.com/Renovamen/oh-vue-icons/compare/v0.3.0...v0.3.1) (2021-03-26)

### Features

- **iconpack:** upgrade [Bootstrap Icons](https://icons.getbootstrap.com/) (17 updated icons) ([dee4165](https://github.com/Renovamen/oh-vue-icons/commit/dee4165c0f71e7e85e7b8962f1fbd4580a90c3d0))
- **animation:** add `float` animation ([f94d1c3](https://github.com/Renovamen/oh-vue-icons/commit/f94d1c34afc4836be16448f4a9a7b3975b44f803))


## [0.3.0](https://github.com/Renovamen/oh-vue-icons/compare/v0.2.2...v0.3.0) (2021-03-24)

### Features

- add typescript supports ([#6](https://github.com/Renovamen/oh-vue-icons/issues/6)) ([c21b6cd](https://github.com/Renovamen/oh-vue-icons/commit/c21b6cd37d89adeccb3637c8d55baf90f367da70))

### BREAKING CHANGES

- import paths have changed:

  Vue 2:

  ```diff
  - import OhVueIcon from "oh-vue-icons/components/icon";
  + import OhVueIcon from "oh-vue-icons";
  ```

  Vue 2 SSR:

  ```diff
  + import OhVueIcon from "oh-vue-icons/dist-css/v2/icon.umd.min";
  + import 'oh-vue-icons/dist-css/v2/icon.css'
  ```

  Vue 3:

  ```diff
  - import OhVueIcon from "oh-vue-icons/components/icon-v3";
  + import OhVueIcon from "oh-vue-icons/dist/v3/icon.umd.min";
  ```

  Vue 3 SSR:

  ```diff
  + import OhVueIcon from "oh-vue-icons/dist-css/v3/icon.umd.min";
  + import 'oh-vue-icons/dist-css/v3/icon.css'
  ```


## [0.2.2](https://github.com/Renovamen/oh-vue-icons/compare/v0.2.1...v0.2.2) (2021-03-22)

### Features

- **iconpack:** add [CoreUI Icons](https://github.com/coreui/coreui-icons) ([#5](https://github.com/Renovamen/oh-vue-icons/issues/5)) ([5b34c5f](https://github.com/Renovamen/oh-vue-icons/commit/5b34c5fab7d7cf8bb95b49ab6f235fdf68514fd6)), [Ionicons](https://ionicons.com/) ([#7](https://github.com/Renovamen/oh-vue-icons/issues/7)) ([fc00143](https://github.com/Renovamen/oh-vue-icons/commit/fc00143eb782bcef589e8c1533805fde94659e73)), [PrimeIcons](https://github.com/primefaces/primeicons) ([#4](https://github.com/Renovamen/oh-vue-icons/issues/4)) ([cbd1346](https://github.com/Renovamen/oh-vue-icons/commit/cbd1346d86a31c725579a703a09ed6d42a2cf600)) and [Heroicons](https://heroicons.com/) ([90a6024](https://github.com/Renovamen/oh-vue-icons/commit/90a602442328aeb0ee03f5cebeff63f5536b150b))
- **iconpack:** upgrade ([f5c6c51](https://github.com/Renovamen/oh-vue-icons/commit/f5c6c518897ab100cac2be9fe1fda043679a857e)):
  - [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (v11.2.0): 7 more icons, 1 updated icon
  - [Simple Icons](https://simpleicons.org/) (v4.12.0): 41 more icons, 31 updated icons
  - [Font Awesome 5](https://fontawesome.com/) (v5.15.3): 1 updated icon


## [0.2.1](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.11...v0.2.1) (2021-03-14)

### BREAKING CHANGES

- support Vue 3 🎉 ([b7b3eed](https://github.com/Renovamen/oh-vue-icons/commit/b7b3eedf400248aeeb18494ff259faec8bb523ab))
- import path for Vue 2 has changed:

  ```diff
  - import OhVueIcon from "oh-vue-icons/components/Icon";
  + import OhVueIcon from "oh-vue-icons/components/icon";
  ```

### Features

- **iconpack:** upgrade:
  - [Pixelarticons](https://pixelarticons.com/) (v1.4.0): 9 more icons, 1 fixed icon ([36e9465](https://github.com/Renovamen/oh-vue-icons/commit/36e946528fc490b79876567e3631de69e3029c95))
  - [Simple Icons](https://simpleicons.org/) (v4.13.0): 32 more icons, 5 updated icons ([f81ad2c](https://github.com/Renovamen/oh-vue-icons/commit/f81ad2c3ec91d274a3df5897aa254c1f7d8c7343))


## [0.1.11](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.10...v0.1.11) (2021-02-27)

### Bug Fixes

- remove `core-js` from dependencies ([#3](https://github.com/Renovamen/oh-vue-icons/issues/3)) ([53f8b69](https://github.com/Renovamen/oh-vue-icons/commit/53f8b69c4213f27128664eba64be66bd98c3daba))


## [0.1.10](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.9...v0.1.10) (2021-02-25)

### Features

- **iconpack:** upgrade ([dafe9e6](https://github.com/Renovamen/oh-vue-icons/commit/dafe9e6dd21c81b9e204cce76324421e2ceff49c)):
  - [Bootstrap Icons](https://icons.getbootstrap.com/) (v1.4.0): 60 more icons
  - [Simple Icons](https://simpleicons.org/) (v4.12.0): 49 more icons
  - [Weather Icons](https://erikflowers.github.io/weather-icons/) (v2.0.12): fix 1 icon


## [0.1.9](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.8...v0.1.9) (2021-02-13)

### Features

- **iconpack:** add [Line Awesome](https://icons8.com/line-awesome) ([#2](https://github.com/Renovamen/oh-vue-icons/issues/2)) ([ebff0d0](https://github.com/Renovamen/oh-vue-icons/commit/ebff0d0cf4db8d778783709aba65fd86eef16fdd))
- **iconpack:** add [Pixelarticons](https://pixelarticons.com/) ([e648337](https://github.com/Renovamen/oh-vue-icons/commit/e6483375bf5a859e985e9d085fae64adc6483e71))
- **iconpack:** add [VSCode Icons](https://github.com/vscode-icons/vscode-icons) ([1a42006](https://github.com/Renovamen/oh-vue-icons/commit/1a42006dad7776a723e201ca078e19c2eabd053a))
- **iconpack:** upgrade ([5190be4](https://github.com/Renovamen/oh-vue-icons/commit/5190be40fc81ea9a315b8f62da3d9e2441d75d7e)):
  - [Bootstrap Icons](https://icons.getbootstrap.com/) (v1.3.0): 64 more icons
  - [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (v0.17.1): 26 more icons
  - [Octicons](https://primer.style/octicons/) (v12.0.0): 3 more icons
  - [Simple Icons](https://simpleicons.org/) (v4.10.0): 238 more icons


## [0.1.8](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.7...v0.1.8) (2021-02-02)

### Features

- **iconpack**: add [Octicons](https://primer.style/octicons/) ([1111fc5](https://github.com/Renovamen/oh-vue-icons/commit/1111fc5c0a10966b51c49ae466214b50dbf6843f))
- **animation**: support adjusting animation speed, add `flash` animation ([fab2b2b](https://github.com/Renovamen/oh-vue-icons/commit/fab2b2b92e3da703770a88141aabc2fdc90fe5df))


## [0.1.7](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.6...v0.1.7) (2021-01-05)

### Bug Fixes

- fix tree shaking problems (which occured due to the code sructure change in v0.1.5) ([5f3f4b8](https://github.com/Renovamen/oh-vue-icons/commit/5f3f4b8ca91974236db1a243c11c5029252f5f2a))

### Features

- **iconpack**: add [Bootstrap Icons](https://icons.getbootstrap.com/) ([#1](https://github.com/Renovamen/oh-vue-icons/issues/1)) ([990a45b](https://github.com/Renovamen/oh-vue-icons/commit/990a45b7eaf43b127e10bf12f49a64f65eeaa841))
- **iconpack**: add [Flag Icons](https://flagicons.lipis.dev/) ([b664834](https://github.com/Renovamen/oh-vue-icons/commit/b6648345077c6e712ba6a20e26b45546a5d6586a))
- **iconpack**: add [Pokemon Icons](https://theartificial.github.io/pokemon-icons/) ([e471360](https://github.com/Renovamen/oh-vue-icons/commit/e471360b6cd625729a7e651335fe107927fbf5ee))


## [0.1.6](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.5...v0.1.6) (2021-01-03)

### Features

- support colorful icons
- support customizing icon fill color ([4a1cd05](https://github.com/Renovamen/oh-vue-icons/commit/4a1cd05dfc79d30e68acf250578e12e4bc4707ce))
- **iconpack**: add [Flat Color Icons](https://github.com/icons8/flat-color-icons) ([7f79428](https://github.com/Renovamen/oh-vue-icons/commit/7f79428b62bf563169f7441d0626d77fdcf55af9))
- **iconpack**: add [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) ([5c69315](https://github.com/Renovamen/oh-vue-icons/commit/5c69315d52e222b298de124fb025db385af09971))
- **iconpack**: add [Simple Icons](https://simpleicons.org/) ([342b879](https://github.com/Renovamen/oh-vue-icons/commit/342b879b3a861c3a296489ccdfcc99393d69de43))
- **iconpack**: add [Weather Icons](https://erikflowers.github.io/weather-icons/) ([710823b](https://github.com/Renovamen/oh-vue-icons/commit/710823b71616a012e4b924dd502336e316902eda))
- **animation**: add `wrench`, `ring` and `pulse` animations ([7130512](https://github.com/Renovamen/oh-vue-icons/commit/7130512af3e89b042566dcc8ffbad7326ac812af))


## [0.1.5](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.2...v0.1.5) (2020-12-25)

### Features

- **iconpack**: add [gameicons](https://game-icons.net/) ([6a65a46](https://github.com/Renovamen/oh-vue-icons/commit/6a65a4663149b5838166fbdf8a4aa4663cdb4928))

### BREAKING CHANGES

- change the way of importing icons ([537ada3](https://github.com/Renovamen/oh-vue-icons/commit/537ada37d4c9bd4cf0277f45e14f2306c0d6c300))


## [0.1.2](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.1...v0.1.2) (2020-12-06)

### Features

- resize some of the icons for better and more consistent user experience ([97c3120](https://github.com/Renovamen/oh-vue-icons/commit/97c31200aeea28b0fe6a1b8fa72b9c3338a0aafa))


## [0.1.1](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.0...v0.1.1) (2020-12-06)

### Bug Fixes

- upgrade some packages to generate svgs correctly ([c9b8fd7](https://github.com/Renovamen/oh-vue-icons/commit/c9b8fd76d0ad3acf477da00a0a5f273a9c9de3fe))


## [0.1.0](https://github.com/Renovamen/oh-vue-icons/compare/19c8c9d74ebf5a23c5dc34aace3b2807b06c9a9a...v0.1.0) (2020-12-04)

### Features

- **iconpack**: add [Font Awesome 5](https://fontawesome.com/), [Remix Icon](https://github.com/Remix-Design/RemixIcon) and [academicons](https://github.com/jpswalsh/academicons) ([19c8c9d](https://github.com/Renovamen/oh-vue-icons/commit/19c8c9d74ebf5a23c5dc34aace3b2807b06c9a9a))
