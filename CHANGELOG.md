# Change Log

## [0.4.6](https://github.com/Renovamen/oh-vue-icons/compare/v0.4.5...v0.4.6) (2021-07-25)

### Features

- **iconpacks**: upgrade iconpacks ([9235fb9](https://github.com/Renovamen/oh-vue-icons/commit/9235fb97fb198502024bc431ca679866e9f0d6b9)):
  - [Bootstrap Icons](https://icons.getbootstrap.com/) (v1.5.0)
  - [Simple Icons](https://simpleicons.org/) (v5.7.0)
  - [Octicons](https://primer.style/octicons/) (v14.2.2)
  - [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (v0.18.0)


## [0.4.5](https://github.com/Renovamen/oh-vue-icons/compare/v0.4.4...v0.4.5) (2021-07-18)

### Bug Fixes

- fix [#15](https://github.com/Renovamen/oh-vue-icons/issues/15)


## ~~[0.4.4](https://github.com/Renovamen/oh-vue-icons/compare/v0.4.3...v0.4.4) (2021-07-11)~~

**This version has been DEPRECATED (see [#15](https://github.com/Renovamen/oh-vue-icons/issues/15)), use v0.4.5 or above instead.**

### Features

- **iconpack:** upgrade ([d04ddde](https://github.com/Renovamen/oh-vue-icons/commit/d04ddde68bc4fb88fc4c09b6b552ee45a0f930cc)):
  - [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (v0.17.2)
  - [gameicons](https://game-icons.net/)
  - [Heroicons](https://heroicons.com/) (v1.0.2)
  - [Material Design icons](https://github.com/google/material-design-icons) (v4.0.0)
  - [Simple Icons](https://simpleicons.org/) (v5.6.0)
  - [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (v11.5.0)


## [0.4.3](https://github.com/Renovamen/oh-vue-icons/compare/v0.4.2...v0.4.3) (2021-05-08)

### Features

- **iconpack:** upgrade ([7026e84](https://github.com/Renovamen/oh-vue-icons/commit/7026e84c62209ee01a7b64ee1851bb3ea55779ad)):
  - [Heroicons](https://heroicons.com/) (v1.0.1): 8 new icons
  - [Simple Icons](https://simpleicons.org/) (v4.22.0): 31 new icons, 12 updated icons
  - [academicons](https://github.com/jpswalsh/academicons): 2 updated icons


## [0.4.2](https://github.com/Renovamen/oh-vue-icons/compare/v0.4.1...v0.4.2) (2021-04-14)

### Features

- **iconpacks:** add [Material Design Icons](https://github.com/google/material-design-icons) ([#8](https://github.com/Renovamen/oh-vue-icons/issues/8)) ([b46accc](https://github.com/Renovamen/oh-vue-icons/commit/b46accc1f4a46fa804343f984647917355dd2b07))
- **iconpack:** upgrade ([01ed58a](https://github.com/Renovamen/oh-vue-icons/commit/01ed58a2092a5b10a93fb52b1f6c9f1d18d58816)):
  - [academicons](https://github.com/jpswalsh/academicons): 2 updated icons
  - [Heroicons](https://heroicons.com/) (v1.0.0): 2 updated icons
  - [Octicons](https://primer.style/octicons/) (v13.0.0): 10 new icons, 3 fixed icons
  - [Simple Icons](https://simpleicons.org/) (v4.19.0): 7 new icons, 6 updated icons
  - [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (v11.4.0): 4 new icons, 1 updated icon


## [0.4.1](https://github.com/Renovamen/oh-vue-icons/compare/v0.3.1...v0.4.1) (2021-03-29)

### BREAKING CHANGES

- expand data argument to remove need of array whem import icons ([c32a79b](https://github.com/Renovamen/oh-vue-icons/commit/c32a79b3a2d846b5c3aa5b490751d638e2c1db3b)) ([#10](https://github.com/Renovamen/oh-vue-icons/pull/10))
- use rollup to bundle the component in esm format ([4a31c95](https://github.com/Renovamen/oh-vue-icons/commit/4a31c9522854c7306b8f6fdfb3bf3fbdca5b24e9)) ([#9](https://github.com/Renovamen/oh-vue-icons/issues/9))
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

- **iconpack:** upgrade [Bootstrap Icons](https://icons.getbootstrap.com/) (17 updated icons) ([5118f11](https://github.com/Renovamen/oh-vue-icons/commit/5118f1115855a5c1d625a07b4cda51a0ace6875d))
- **animation:** add `float` animation ([6d514cb](https://github.com/Renovamen/oh-vue-icons/commit/6d514cbee5d806002d6c453f5d3d0d6ba1aa598a))


## [0.3.0](https://github.com/Renovamen/oh-vue-icons/compare/v0.2.2...v0.3.0) (2021-03-24)

### Features

- add typescript supports ([#6](https://github.com/Renovamen/oh-vue-icons/issues/6)) ([24b9c3b](https://github.com/Renovamen/oh-vue-icons/commit/24b9c3b70971604bf816739f33f2f129abef82bd))

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

- **iconpack:** add [CoreUI Icons](https://github.com/coreui/coreui-icons) ([#5](https://github.com/Renovamen/oh-vue-icons/issues/5)) ([ad8434d](https://github.com/Renovamen/oh-vue-icons/commit/ad8434d0c26b7ac5bfbbda0f4862082bfc2324ad)), [Ionicons](https://ionicons.com/) ([#7](https://github.com/Renovamen/oh-vue-icons/issues/7)) ([3bce239](https://github.com/Renovamen/oh-vue-icons/commit/3bce239385fae7855817059ab5c6537f91420f99)), [PrimeIcons](https://github.com/primefaces/primeicons) ([#4](https://github.com/Renovamen/oh-vue-icons/issues/4)) ([5733e7c](https://github.com/Renovamen/oh-vue-icons/commit/5733e7cccf9c3e3b86be8f3ae35c200d2b03b518)) and [Heroicons](https://heroicons.com/) ([697c391](https://github.com/Renovamen/oh-vue-icons/commit/697c3916ef7684f0589151d0ae82cc7777ba66b8))
- **iconpack:** upgrade ([91e597b](https://github.com/Renovamen/oh-vue-icons/commit/91e597bbc24774f9eb44c7348b1ed7d44c9ef8eb)):
  - [VSCode Icons](https://github.com/vscode-icons/vscode-icons) (v11.2.0): 7 more icons, 1 updated icon
  - [Simple Icons](https://simpleicons.org/) (v4.12.0): 41 more icons, 31 updated icons
  - [Font Awesome 5](https://fontawesome.com/) (v5.15.3): 1 updated icon


## [0.2.1](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.11...v0.2.1) (2021-03-14)

### BREAKING CHANGES

- support Vue 3 🎉 ([d58e037](https://github.com/Renovamen/oh-vue-icons/commit/d58e037485ad48bd1a245adc0937714d101f2249))
- import path for Vue 2 has changed:

  ```diff
  - import OhVueIcon from "oh-vue-icons/components/Icon";
  + import OhVueIcon from "oh-vue-icons/components/icon";
  ```

### Features

- **iconpack:** upgrade:
  - [Pixelarticons](https://pixelarticons.com/) (v1.4.0): 9 more icons, 1 fixed icon ([4b9de36](https://github.com/Renovamen/oh-vue-icons/commit/4b9de361376158e62a19db60928f27c5946c163a))
  - [Simple Icons](https://simpleicons.org/) (v4.13.0): 32 more icons, 5 updated icons ([5f85208](https://github.com/Renovamen/oh-vue-icons/commit/5f85208cb7057e63f0ac97e481dd330a13facf09))


## [0.1.11](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.10...v0.1.11) (2021-02-27)

### Bug Fixes

- remove `core-js` from dependencies ([#3](https://github.com/Renovamen/oh-vue-icons/issues/3)) ([0213f03](https://github.com/Renovamen/oh-vue-icons/commit/0213f0336cfdd40e3d2d8f9fe1ecd2be8b842308))


## [0.1.10](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.9...v0.1.10) (2021-02-25)

### Features

- **iconpack:** upgrade ([f805e3d](https://github.com/Renovamen/oh-vue-icons/commit/f805e3d5dd53ae72ac29e1e5b06ce7cc9e9d45d6)):
  - [Bootstrap Icons](https://icons.getbootstrap.com/) (v1.4.0): 60 more icons
  - [Simple Icons](https://simpleicons.org/) (v4.12.0): 49 more icons
  - [Weather Icons](https://erikflowers.github.io/weather-icons/) (v2.0.12): fix 1 icon


## [0.1.9](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.8...v0.1.9) (2021-02-13)

### Features

- **iconpack:** add [Line Awesome](https://icons8.com/line-awesome) ([#2](https://github.com/Renovamen/oh-vue-icons/issues/2)) ([d1cb04a](https://github.com/Renovamen/oh-vue-icons/commit/d1cb04ab9ee47d1ba7df649017c4141a8a23f02e)), [Pixelarticons](https://pixelarticons.com/) ([530a591](https://github.com/Renovamen/oh-vue-icons/commit/530a591c28223a9e0e524f09178178dc07599a38)) and [VSCode Icons](https://github.com/vscode-icons/vscode-icons) ([279991a](https://github.com/Renovamen/oh-vue-icons/commit/279991a3ae344252283c80138d2f2f9619564490))
- **iconpack:** upgrade ([eb263a4](https://github.com/Renovamen/oh-vue-icons/commit/eb263a461c3456107995e6576cfc8add28ff9190)):
  - [Bootstrap Icons](https://icons.getbootstrap.com/) (v1.3.0): 64 more icons
  - [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) (v0.17.1): 26 more icons
  - [Octicons](https://primer.style/octicons/) (v12.0.0): 3 more icons
  - [Simple Icons](https://simpleicons.org/) (v4.10.0): 238 more icons


## [0.1.8](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.7...v0.1.8) (2021-02-02)

### Features

- **iconpack**: add [Octicons](https://primer.style/octicons/) ([b381719](https://github.com/Renovamen/oh-vue-icons/commit/b381719cddc9196b2824e3b2a99445115a38bc5c))
- **animation**: support adjusting animation speed, add `flash` animation ([e8ecf8f](https://github.com/Renovamen/oh-vue-icons/commit/e8ecf8fb672bedaf3370758b9833df69b3cca2ee))


## [0.1.7](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.6...v0.1.7) (2021-01-05)

### Bug Fixes

- fix tree shaking problems (which occured due to the code sructure change in v0.1.5) ([3507656](https://github.com/Renovamen/oh-vue-icons/commit/3507656076e533c20da09f01d565b3ac2d95f696))

### Features

- **iconpack**: add [Bootstrap Icons](https://icons.getbootstrap.com/) ([#1](https://github.com/Renovamen/oh-vue-icons/issues/1)) ([3b213fc](https://github.com/Renovamen/oh-vue-icons/commit/3b213fcd7f050b59ec80c63700ab42fbffa6e8b0)), [Flag Icons](https://flagicons.lipis.dev/) ([02cc01a](https://github.com/Renovamen/oh-vue-icons/commit/02cc01a86a8d749540b1c92b16dedda82741a54c)) and [Pokemon Icons](https://theartificial.github.io/pokemon-icons/) ([2473310](https://github.com/Renovamen/oh-vue-icons/commit/2473310b433045ae9894ade447a16de05b9ad9c2))


## [0.1.6](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.5...v0.1.6) (2021-01-03)

### Features

- add support to colorful icons ([7167a45](https://github.com/Renovamen/oh-vue-icons/commit/7167a45db2ce061cf96e83e2648e4200f33eebd8))
- support customizing icon fill color ([a19a142](https://github.com/Renovamen/oh-vue-icons/commit/a19a1425be02a33ed36dcd68cd62dede8cf93803))
- **iconpack**: add [Flat Color Icons](https://github.com/icons8/flat-color-icons) ([7167a45](https://github.com/Renovamen/oh-vue-icons/commit/7167a45db2ce061cf96e83e2648e4200f33eebd8)), [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) ([ff909bf](https://github.com/Renovamen/oh-vue-icons/commit/ff909bf7f370ae38b963b6b82e5d7c8d336037e6)), [Simple Icons](https://simpleicons.org/) ([87e0512](https://github.com/Renovamen/oh-vue-icons/commit/87e0512e2944c640456e16cacd05e759a4132b6f)) and [Weather Icons](https://erikflowers.github.io/weather-icons/) ([4f9e4d1](https://github.com/Renovamen/oh-vue-icons/commit/4f9e4d1b0a13b6ed265366552d57b1d0473f16f5))
- **animation**: add `wrench`, `ring` and `pulse` animations ([2bdb1e6](https://github.com/Renovamen/oh-vue-icons/commit/2bdb1e60d01b92772c011fafcb47b3be32892319))

### Chore

- change the prefix of gameicons to 'gi' ([287852b](https://github.com/Renovamen/oh-vue-icons/commit/287852b605ce76695c761c9215dc7aece4e07812))


## [0.1.5](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.2...v0.1.5) (2020-12-25)

### Features

- **iconpack**: add [gameicons](https://game-icons.net/) ([1fb8dc1](https://github.com/Renovamen/oh-vue-icons/commit/1fb8dc130915f3c982e38fc1657c6332d36e43e2))

### BREAKING CHANGES

- change the way of importing icons ([40d37d2](https://github.com/Renovamen/oh-vue-icons/commit/40d37d2bcaeb71c70bfc416c18425d99a004a59f))


## [0.1.2](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.1...v0.1.2) (2020-12-06)

### Features

- resize some of the icons for better and more consistent user experience ([6caf2e2](https://github.com/Renovamen/oh-vue-icons/commit/6caf2e2091524a39f76ac5ae38ff7f53a165f7fa))


## [0.1.1](https://github.com/Renovamen/oh-vue-icons/compare/v0.1.0...v0.1.1) (2020-12-06)

### Bug Fixes

- upgrade some packages to generate svgs correctly ([0e37e60](https://github.com/Renovamen/oh-vue-icons/commit/0e37e60b509b6744d54839fdc03767b1ed038277))

### Features

- support importing a whole given icon pack ([cb3e137](https://github.com/Renovamen/oh-vue-icons/commit/cb3e1373ab2f76cb7ef95454e205bcb1396ab9dc))


## [0.1.0](https://github.com/Renovamen/oh-vue-icons/compare/19c8c9d74ebf5a23c5dc34aace3b2807b06c9a9a...v0.1.0) (2020-12-04)

### Features

- **iconpack**: add [Font Awesome 5](https://fontawesome.com/), [Remix Icon](https://github.com/Remix-Design/RemixIcon) and [academicons](https://github.com/jpswalsh/academicons) ([fbc2c5b](https://github.com/Renovamen/oh-vue-icons/commit/fbc2c5bcfb4a3c014c949553f279654756f2c862))
