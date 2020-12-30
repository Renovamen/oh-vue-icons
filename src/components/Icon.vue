<script>
let icons = {}

function warn (msg, vm) {
  if (!vm) {
    /* eslint-disable no-console */
    console.error(msg)
    /* eslint-enable no-console */
    return
  }
  vm.constructor.super.util.warn(msg, vm)
}

export default {
  name: 'v-icon',
  props: {
    name: {
      type: String,
      validator (val) {
        // console.log(icons)
        if (val && !(val in icons)) {
          warn(
            `Invalid prop: prop "name" is referring to an unregistered icon "${val}".\n` +
              `Please make sure you have imported this icon before using it.`,
            this
          )
          return false
        }
        return true
      }
    },
    title: String,
    scale: [Number, String],
    spin: Boolean,
    spulse: Boolean,
    inverse: Boolean,
    wrench: Boolean,
    ring: Boolean,
    pulse: Boolean,
    hover: Boolean,
    flip: {
      validator (val) {
        return val === 'normal' || val === 'horizontal' || val === 'vertical' || val === 'both'
      }
    },
    label: String,
    tabindex: [Number, String]
  },
  data() {
    return {
      x: false,
      y: false,
      childrenWidth: 0,
      childrenHeight: 0,
      outerScale: 1.2
    }
  },
  computed: {
    normalizedScale() {
      let scale = this.scale
      scale = typeof scale === 'undefined' ? 1 : Number(scale)
      if (isNaN(scale) || scale <= 0) {
        warn(`Invalid prop: prop "scale" should be a number over 0.`, this)
        return this.outerScale
      }
      return scale * this.outerScale
    },
    klass() {
      let classes = {
        'v-icon': true,
        'v-flip-horizontal': this.flip === 'horizontal',
        'v-flip-vertical': this.flip === 'vertical',
        'v-flip-both': this.flip === 'both',
        'v-spin': this.spin,
        'v-spin-pulse': this.spulse,
        'v-inverse': this.inverse,
        'v-wrench': this.wrench,
        'v-ring': this.ring,
        'v-pulse': this.pulse,
        'v-hover': this.hover
      }

      if (this.classes) {
        Object.keys(this.classes).forEach(c => {
          if (this.classes[c]) classes[c] = true
        })
      }

      return classes
    },
    icon() {
      if (this.name) return icons[this.name]
      return null
    },
    box() {
      if (this.icon) {
        return `0 0 ${this.icon.width} ${this.icon.height}`
      }
      return `0 0 ${this.width} ${this.height}`
    },
    ratio() {
      if (!this.icon) return 1

      let { width, height } = this.icon
      return Math.max(width, height) / 16
    },
    width() {
      return (
        this.childrenWidth ||
        (this.icon && (this.icon.width / this.ratio) * this.normalizedScale) ||
        0
      )
    },
    height() {
      return (
        this.childrenHeight ||
        (this.icon && (this.icon.height / this.ratio) * this.normalizedScale) ||
        0
      )
    },
    style() {
      if (this.normalizedScale === 1) return false
      return {
        fontSize: this.normalizedScale + 'em'
      }
    },
    raw() {
      // generate unique id for each icon's SVG element with ID
      if (!this.icon || !this.icon.raw) return null
      let raw = this.icon.raw
      let ids = {}
      raw = raw.replace(
        /\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,
        (match, quote, id) => {
          let uniqueId = getId('vat-')
          ids[id] = uniqueId
          return ` id="${uniqueId}"`
        }
      )
      raw = raw.replace(
        /#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
        (match, rawId, _, pointerId) => {
          let id = rawId || pointerId
          if (!id || !ids[id]) return match
          return `#${ids[id]}`
        }
      )

      return raw
    },
    focusable() {
      let { tabindex } = this
      if (tabindex == null) return 'false'

      let index = typeof tabindex === 'string' ? parseInt(tabindex, 10) : tabindex
      if (index >= 0) return null

      return 'false'
    }
  },
  mounted() {
    this.updateStack()
  },
  updated() {
    this.updateStack()
  },
  methods: {
    updateStack() {
      if (!this.name && this.name !== null && this.$children.length === 0) {
        warn(`Invalid prop: prop "name" is required.`, this)
        return
      }

      if (this.icon) return

      let width = 0
      let height = 0
      this.$children.forEach(child => {
        child.outerScale = this.normalizedScale

        width = Math.max(width, child.width)
        height = Math.max(height, child.height)
      })
      this.childrenWidth = width
      this.childrenHeight = height
      this.$children.forEach(child => {
        child.x = (width - child.width) / 2
        child.y = (height - child.height) / 2
      })
    }
  },
  render (h) {
    if (this.name === null) return h()

    let options = {
      class: this.klass,
      style: this.style,
      attrs: {
        role: this.$attrs.role || (this.label || this.title ? 'img' : null),
        'aria-label': this.label || null,
        'aria-hidden': !(this.label || this.title),
        tabindex: this.tabindex,
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        viewBox: this.box,
        focusable: this.focusable
      },
      on: this.$listeners
    }

    if (this.raw) {
      let html = `<g>${this.raw}</g>`
      if (this.title) html = `<title>${escapeHTML(this.title)}</title>${html}`

      options.domProps = { innerHTML: html }
    }

    let content = this.title ? [h('title', this.title)] : []

    return h(
      'svg',
      options,
      this.raw
        ? null
        : content.concat([
          h(
            'g',
            this.$slots.default ||
                (this.icon
                  ? [
                    ...this.icon.paths.map((path, i) =>
                      h('path', {
                        attrs: path,
                        key: `path-${i}`
                      })
                    ),
                    ...this.icon.polygons.map((polygon, i) =>
                      h('polygon', {
                        attrs: polygon,
                        key: `polygon-${i}`
                      })
                    )
                  ]
                  : [])
          )
        ])
    )
  },
  register (data) {
    let { name, paths = [], d, polygons = [], points } = data

    if (d) paths.push({ d })
    if (points) polygons.push({ points })

    icons[name] = assign({}, data, {
      paths,
      polygons
    })
  },
  add (data) {
    if (Array.isArray(data)) {
      for (let icon of data) this.register(icon)
    }
    else this.register(data)
  },
  icons
}

function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function assign (obj, ...sources) {
  sources.forEach(source => {
    for (let key in source) {
      if(key === 'name') continue
      if(hasOwn(source, key)) {
        obj[key] = source[key]
      }
    }
  })
  return obj
}

let count = 0
function getId (prefix = '') {
  return prefix + count++
}

const ESCAPE_MAP = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;'
}

function escapeHTML (html) {
  return html.replace(/[<>"&]/g, c => ESCAPE_MAP[c] || c)
}
</script>

<style>
.v-icon {
  display: inline-block;
  fill: currentColor;
  overflow: visible;
  vertical-align: -0.125em;
}

.v-icon > g {
  transform-origin: 50% 50%;
}

.v-flip-horizontal {
  transform: scale(-1, 1);
}

.v-flip-vertical {
  transform: scale(1, -1);
}

.v-flip-both {
  transform: scale(-1, -1);
}

.v-spin:not(.v-hover) > g,
.v-spin.v-hover:hover {
  animation: v-spin 1s 0s infinite linear;
}

.v-spin-pulse:not(.v-hover) > g,
.v-spin-pulse.v-hover:hover {
  animation: v-spin 1s infinite steps(8);
}

.v-wrench:not(.v-hover) > g,
.v-wrench.v-hover:hover > g {
  animation: v-wrench 2.5s ease infinite;
}

.v-ring:not(.v-hover) > g,
.v-ring.v-hover:hover {
  animation: v-ring 2s ease infinite;
}

.v-pulse:not(.v-hover) > g,
.v-pulse.v-hover:hover {
  animation: v-pulse 2s linear infinite;
}

.v-inverse {
  color: #fff;
}

@keyframes v-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes v-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10% {
    transform: rotate(24deg);
  }

  18% {
    transform: rotate(-24deg);
  }

  20% {
    transform: rotate(-24deg);
  }

  28% {
    transform: rotate(24deg);
  }

  30% {
    transform: rotate(24deg);
  }

  38% {
    transform: rotate(-24deg);
  }

  40% {
    transform: rotate(-24deg);
  }

  48% {
    transform: rotate(24deg);
  }

  50% {
    transform: rotate(24deg);
  }

  58% {
    transform: rotate(-24deg);
  }

  60% {
    transform: rotate(-24deg);
  }

  68% {
    transform: rotate(24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

@keyframes v-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

@keyframes v-pulse {
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
