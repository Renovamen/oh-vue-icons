const path = require("path");

module.exports = {
  icons: [
    {
      id: "ai",
      name: "academicons",
      contents: [
        {
          files: path.resolve(__dirname, "academicons/svg/*.svg"),
          formatter: (name) => `Ai${name}`,
          prefix: (name) => `ai-${name}`
        },
      ],
      projectUrl: "https://github.com/jpswalsh/academicons",
      website: "https://jpswalsh.github.io/academicons/",
      license: "SIL OFL 1.1",
      licenseUrl: "http://scripts.sil.org/OFL"
    },
    {
      id: "bi",
      name: "Bootstrap Icons",
      contents: [
        {
          files: path.resolve(__dirname, "bootstrap-icons/icons/*.svg"),
          formatter: (name) => `Bi${name}`,
          prefix: (name) => `bi-${name}`
        },
      ],
      projectUrl: "https://github.com/twbs/icons",
      website: "https://icons.getbootstrap.com/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "ci",
      name: "Crypto Icons",
      contents: [
        {
          files: path.resolve(__dirname, "cryptocurrency-icons/svg/black/*.svg"),
          formatter: (name) => `Ci${name}`,
          prefix: (name) => `ci-${name}`
        },
        {
          files: path.resolve(__dirname, "cryptocurrency-icons/svg/color/*.svg"),
          formatter: (name) => `CiColor${name}`,
          prefix: (name) => `ci-color-${name}`
        }
      ],
      multiColor: true,
      projectUrl: "https://github.com/spothq/cryptocurrency-icons",
      website: "http://cryptoicons.co/",
      license: "CC0 1.0 Universal",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    {
      id: "fa",
      name: "Font Awesome",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "fontawesome/svgs/+(brands|solid)/*.svg"
          ),
          formatter: (name) => `Fa${name}`,
          prefix: (name) => `fa-${name}`
        },
        {
          files: path.resolve(__dirname, "fontawesome/svgs/regular/*.svg"),
          formatter: (name) => `FaRegular${name}`,
          prefix: (name) => `fa-regular-${name}`
        },
      ],
      projectUrl: "https://github.com/FortAwesome/Font-Awesome",
      website: "https://fontawesome.com/",
      license: "CC BY 4.0 License",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
      id: "fc",
      name: "Flat Color Icons",
      contents: [
        {
          files: path.resolve(__dirname, "flat-color-icons/svg/*.svg"),
          formatter: (name) => `Fc${name}`,
          prefix: (name) => `fc-${name}`
        },
      ],
      multiColor: true,
      projectUrl: "https://github.com/icons8/flat-color-icons",
      website: "https://icons8.com/icons/color",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "fi",
      name: "Flag Icon",
      contents: [
        {
          files: path.resolve(__dirname, "flag-icon/flags/4x3/*.svg"),
          formatter: (name) => `Fi${name}`,
          prefix: (name) => `fi-${name}`
        },
        {
          files: path.resolve(__dirname, "flag-icon/flags/1x1/*.svg"),
          formatter: (name) => `FiSquare${name}`,
          prefix: (name) => `fi-square-${name}`
        }
      ],
      multiColor: true,
      projectUrl: "https://github.com/lipis/flag-icon-css",
      website: "https://flagicons.lipis.dev/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "gi",
      name: "gameicons",
      contents: [
        {
          files: path.resolve(__dirname, "gameicons/*/*.svg"),
          formatter: (name) => `Gi${name}`,
          prefix: (name) => `gi-${name}`
        },
      ],
      projectUrl: "https://github.com/game-icons/icons",
      website: "https://game-icons.net/",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/"
    },
    {
      id: "oi",
      name: "Octicons",
      contents: [
        {
          files: path.resolve(__dirname, "octicons/icons/*-16.svg"),
          formatter: (name) => `Oi${name}`,
          prefix: (name) => `oi-${name}`
        },
      ],
      projectUrl: "https://github.com/primer/octicons",
      website: "https://primer.style/octicons/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "pi",
      name: "Pokemon Icons",
      contents: [
        {
          files: path.resolve(__dirname, "pokemon-icons/_icons/SVG/*.svg"),
          formatter: (name) => `Pi${name}`,
          prefix: (name) => `pi-${name}`
        }
      ],
      multiColor: true,
      projectUrl: "https://github.com/TheArtificial/pokemon-icons",
      website: "https://theartificial.github.io/pokemon-icons/",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
      id: "ri",
      name: "Remix Icon",
      contents: [
        {
          files: path.resolve(__dirname, "remixicon/icons/*/*.svg"),
          formatter: (name) => `Ri${name}`,
          prefix: (name) => `ri-${name}`
        }
      ],
      projectUrl: "https://github.com/Remix-Design/RemixIcon",
      website: "https://remixicon.com/",
      license: "Apache License Version 2.0",
      licenseUrl: "http://www.apache.org/licenses/"
    },
    {
      id: "si",
      name: "Simple Icons",
      contents: [
        {
          files: path.resolve(__dirname, "simple-icons/icons/*.svg"),
          formatter: (name) => `Si${name}`,
          prefix: (name) => `si-${name}`
        },
      ],
      projectUrl: "https://github.com/simple-icons/simple-icons",
      website: "https://simpleicons.org/",
      license: "CC0 1.0 Universal",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    {
      id: "wi",
      name: "Weather Icons",
      contents: [
        {
          files: path.resolve(__dirname, "weather-icons/svg/*.svg")
        },
      ],
      projectUrl: "https://github.com/erikflowers/weather-icons",
      website: "https://erikflowers.github.io/weather-icons/",
      license: "SIL OFL 1.1",
      licenseUrl: "http://scripts.sil.org/OFL"
    }
  ]
}
