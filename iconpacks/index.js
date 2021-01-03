const path = require("path");

module.exports = {
  icons: [
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
      projectUrl: "https://fontawesome.com/",
      license: "CC BY 4.0 License",
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
      license: "Apache License Version 2.0",
      licenseUrl: "http://www.apache.org/licenses/"
    },
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
      license: "SIL OFL 1.1",
      licenseUrl: "http://scripts.sil.org/OFL"
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
      projectUrl: "https://simpleicons.org/",
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
      projectUrl: "https://erikflowers.github.io/weather-icons/",
      license: "SIL OFL 1.1",
      licenseUrl: "http://scripts.sil.org/OFL"
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
      projectUrl: "https://github.com/icons8/flat-color-icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT",
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
      projectUrl: "https://game-icons.net/",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/"
    }
  ]
}
