const path = require("path");

module.exports = {
  icons: [
    {
      id: "ai",
      name: "academicons",
      downloadFileName: "academicons",
      downloadURL: "https://github.com/jpswalsh/academicons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "academicons/svg/*.svg"),
          formatter: (name) => `Ai${name}`,
          prefix: (name) => `ai-${name}`,
          scale: 1.17
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
      downloadFileName: "bootstrap-icons",
      downloadURL: "https://github.com/twbs/icons/archive/refs/heads/main.zip",
      contents: [
        {
          files: path.resolve(__dirname, "bootstrap-icons/icons/*.svg"),
          formatter: (name) => `Bi${name}`,
          prefix: (name) => `bi-${name}`,
          scale: 1.2
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
      downloadFileName: "cryptocurrency-icons",
      downloadURL: "https://github.com/spothq/cryptocurrency-icons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "cryptocurrency-icons/svg/black/*.svg"),
          formatter: (name) => `Ci${name}`,
          prefix: (name) => `ci-${name}`,
          scale: 1.2
        },
        {
          files: path.resolve(__dirname, "cryptocurrency-icons/svg/color/*.svg"),
          formatter: (name) => `CiColor${name}`,
          prefix: (name) => `ci-color-${name}`,
          scale: 1.2
        }
      ],
      multiColor: true,
      projectUrl: "https://github.com/spothq/cryptocurrency-icons",
      website: "http://cryptoicons.co/",
      license: "CC0 1.0 Universal",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    {
      id: "co",
      name: "CoreUI Icons",
      downloadFileName: "coreui-icons",
      downloadURL: "https://github.com/coreui/coreui-icons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "coreui-icons/svg/*/*.svg"),
          formatter: (name) => `Co${name}`,
          prefix: (name) => `co-${name}`,
          raw: (name) => name.substr(4),
          scale: 1.2
        }
      ],
      multiColor: true,
      projectUrl: "https://github.com/coreui/coreui-icons",
      website: "https://icons.coreui.io/icons/",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
      id: "fa",
      name: "Font Awesome",
      downloadFileName: "fontawesome",
      downloadURL: "https://github.com/FortAwesome/Font-Awesome/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "fontawesome/svgs/+(brands|solid)/*.svg"
          ),
          formatter: (name) => `Fa${name}`,
          prefix: (name) => `fa-${name}`,
          scale: 1.17
        },
        {
          files: path.resolve(__dirname, "fontawesome/svgs/regular/*.svg"),
          formatter: (name) => `FaRegular${name}`,
          prefix: (name) => `fa-regular-${name}`,
          scale: 1.17
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
      downloadFileName: "flat-color-icons",
      downloadURL: "https://github.com/icons8/flat-color-icons/archive/refs/heads/master.zip",
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
      license: "MIT / Good Boy",
      licenseUrl: "https://github.com/icons8/flat-color-icons/blob/master/LICENSE.md"
    },
    {
      id: "fi",
      name: "Flag Icon",
      downloadFileName: "flag-icon",
      downloadURL: "https://github.com/lipis/flag-icons/archive/refs/heads/main.zip",
      contents: [
        {
          files: path.resolve(__dirname, "flag-icon/flags/4x3/*.svg"),
          formatter: (name) => `Fi${name}`,
          prefix: (name) => `fi-${name}`
        },
        {
          files: path.resolve(__dirname, "flag-icon/flags/1x1/*.svg"),
          formatter: (name) => `FiSquare${name}`,
          prefix: (name) => `fi-square-${name}`,
          scale: 1.33
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
      downloadFileName: "gameicons",
      downloadURL: "https://game-icons.net/archives/svg/zip/000000/transparent/game-icons.net.svg.zip",
      contents: [
        {
          files: path.resolve(__dirname, "gameicons/000000/transparent/1x1/*/*.svg"),
          formatter: (name) => `Gi${name}`,
          prefix: (name) => `gi-${name}`,
          scale: 1.14
        },
      ],
      projectUrl: "https://github.com/game-icons/icons",
      website: "https://game-icons.net/",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/"
    },
    {
      id: "hi",
      name: "Heroicons",
      downloadFileName: "heroicons",
      downloadURL: "https://github.com/tailwindlabs/heroicons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "heroicons/optimized/outline/*.svg"),
          formatter: (name) => `Hi${name}`,
          prefix: (name) => `hi-${name}`
        },
        {
          files: path.resolve(__dirname, "heroicons/optimized/solid/*.svg"),
          formatter: (name) => `HiSolid${name}`,
          prefix: (name) => `hi-solid-${name}`
        }
      ],
      projectUrl: "https://github.com/tailwindlabs/heroicons",
      website: "https://heroicons.com/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "io",
      name: "Ionicons",
      downloadFileName: "ionicons",
      downloadURL: "https://github.com/ionic-team/ionicons/archive/refs/heads/main.zip",
      contents: [
        {
          files: path.resolve(__dirname, "ionicons/src/svg/*.svg"),
          formatter: (name) => `Io${name}`,
          prefix: (name) => `io-${name}`
        },
      ],
      projectUrl: "https://github.com/ionic-team/ionicons",
      website: "https://ionicons.com/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "la",
      name: "Line Awesome",
      downloadFileName: "line-awesome",
      downloadURL: "https://github.com/icons8/line-awesome/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "line-awesome/svg/*.svg"),
          formatter: (name) => `La${name}`,
          prefix: (name) => `la-${name}`
        },
      ],
      projectUrl: "https://github.com/icons8/line-awesome",
      website: "https://icons8.com/line-awesome",
      license: "MIT / Good Boy",
      licenseUrl: "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
    },
    {
      id: "md",
      name: "Material Design icons",
      downloadFileName: "material-design-icons",
      downloadURL: "https://github.com/google/material-design-icons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "material-design-icons/src/*/*/*/24px.svg"),
          formatter: (name) => `Md${name}`,
          nameFromPath: (file) => {
            const match = file.match(/material-design-icons\/src\/(.*?)\/(.*?)\/(.*?)\/24px.svg/);
            let name = match[2].replace(/_/g, "");
            const style = match[3].replace(/materialicons/g, "");
            if (style !== "") name = `${name}-${style}`;
            return name;
          },
          prefix: (name) => `md-${name}`,
          scale: 0.96
        },
      ],
      projectUrl: "https://github.com/google/material-design-icons",
      website: "http://google.github.io/material-design-icons/",
      license: "Apache License Version 2.0",
      licenseUrl: "http://www.apache.org/licenses/"
    },
    {
      id: "oi",
      name: "Octicons",
      downloadFileName: "octicons",
      downloadURL: "https://github.com/primer/octicons/archive/refs/heads/main.zip",
      contents: [
        {
          files: path.resolve(__dirname, "octicons/icons/*-16.svg"),
          formatter: (name) => `Oi${name}`,
          prefix: (name) => `oi-${name}`,
          raw: (name) => name.slice(0, -3),
          scale: 1.2
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
      downloadFileName: "pokemon-icons",
      downloadURL: "https://github.com/TheArtificial/pokemon-icons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "pokemon-icons/_icons/SVG/*.svg"),
          formatter: (name) => `Pi${name}`,
          prefix: (name) => `pi-${name}`,
          raw: (name) => name.substr(4),
          scale: 1.17
        }
      ],
      multiColor: true,
      projectUrl: "https://github.com/TheArtificial/pokemon-icons",
      website: "https://theartificial.github.io/pokemon-icons/",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
    {
      id: "pr",
      name: "PrimeIcons",
      downloadFileName: "primeicons",
      downloadURL: "https://github.com/primefaces/primeicons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "primeicons/raw-svg/*.svg"),
          formatter: (name) => `Pr${name}`,
          prefix: (name) => `pr-${name}`,
          scale: 0.9
        }
      ],
      projectUrl: "https://github.com/primefaces/primeicons",
      website: "https://www.primefaces.org/primeng/showcase/#/icons",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "px",
      name: "Pixelarticons",
      downloadFileName: "pixelarticons",
      downloadURL: "https://github.com/halfmage/pixelarticons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "pixelarticons/svg/*.svg"),
          formatter: (name) => `Px${name}`,
          prefix: (name) => `px-${name}`,
          scale: 1.15
        }
      ],
      projectUrl: "https://github.com/halfmage/pixelarticons",
      website: "https://pixelarticons.com/",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      id: "ri",
      name: "Remix Icon",
      downloadFileName: "remixicon",
      downloadURL: "https://github.com/Remix-Design/RemixIcon/archive/refs/heads/master.zip",
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
      downloadFileName: "simple-icons",
      downloadURL: "https://github.com/simple-icons/simple-icons/archive/refs/heads/develop.zip",
      contents: [
        {
          files: path.resolve(__dirname, "simple-icons/icons/*.svg"),
          formatter: (name) => `Si${name}`,
          prefix: (name) => `si-${name}`,
          scale: 1.25
        },
      ],
      projectUrl: "https://github.com/simple-icons/simple-icons",
      website: "https://simpleicons.org/",
      license: "CC0 1.0 Universal",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    {
      id: "vi",
      name: "VSCode Icons",
      downloadFileName: "vscode-icons",
      downloadURL: "https://github.com/vscode-icons/vscode-icons/archive/refs/heads/master.zip",
      contents: [
        {
          files: path.resolve(__dirname, "vscode-icons/icons/*.svg"),
          formatter: (name) => `Vi${name}`,
          prefix: (name) => `vi-${name}`,
          scale: 1.04
        },
      ],
      multiColor: true,
      projectUrl: "https://github.com/vscode-icons/vscode-icons",
      website: "https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    {
      id: "wi",
      name: "Weather Icons",
      downloadFileName: "weather-icons",
      downloadURL: "https://github.com/erikflowers/weather-icons/archive/refs/heads/master.zip",
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
