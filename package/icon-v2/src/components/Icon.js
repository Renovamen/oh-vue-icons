import { assign, warn, escapeHTML, getId } from "../../../utils";

let icons = {};

export default {
  name: "OhVueIcon",

  props: {
    name: {
      type: String,
      validator(val) {
        // console.log(icons)
        if (val && !(val in icons)) {
          warn(
            `Invalid prop: prop "name" is referring to an unregistered icon "${val}".\n` +
              `Please make sure you have imported this icon before using it.`,
            this
          );
          return false;
        }
        return true;
      }
    },
    title: String,
    fill: String,
    scale: [Number, String],
    animation: {
      validator(val) {
        return (
          val === "spin" ||
          val === "spin-pulse" ||
          val === "wrench" ||
          val === "ring" ||
          val === "pulse" ||
          val === "flash" ||
          val === "float"
        );
      }
    },
    hover: Boolean,
    flip: {
      validator(val) {
        return val === "horizontal" || val === "vertical" || val === "both";
      }
    },
    speed: {
      validator(val) {
        return val === "fast" || val === "slow";
      }
    },
    label: String,
    inverse: Boolean
  },

  data() {
    return {
      x: false,
      y: false,
      childrenWidth: 0,
      childrenHeight: 0,
      outerScale: 1.2
    };
  },

  computed: {
    normalizedScale() {
      let scale = this.scale;
      scale = typeof scale === "undefined" ? 1 : Number(scale);
      if (isNaN(scale) || scale <= 0) {
        warn(`Invalid prop: prop "scale" should be a number over 0.`, this);
        return this.outerScale;
      }
      return scale * this.outerScale;
    },
    klass() {
      const classes = {
        "ov-icon": true,
        "ov-inverse": this.inverse,
        "ov-flip-horizontal": this.flip === "horizontal",
        "ov-flip-vertical": this.flip === "vertical",
        "ov-flip-both": this.flip === "both",
        "ov-spin": this.animation === "spin",
        "ov-spin-pulse": this.animation === "spin-pulse",
        "ov-wrench": this.animation === "wrench",
        "ov-ring": this.animation === "ring",
        "ov-pulse": this.animation === "pulse",
        "ov-flash": this.animation === "flash",
        "ov-float": this.animation === "float",
        "ov-hover": this.hover,
        "ov-fast": this.speed === "fast",
        "ov-slow": this.speed === "slow"
      };
      return classes;
    },
    icon() {
      if (this.name) return icons[this.name];
      return null;
    },
    box() {
      if (this.icon) {
        return `${this.icon.minX} ${this.icon.minY} ${this.icon.width} ${this.icon.height}`;
      }
      return `0 0 ${this.width} ${this.height}`;
    },
    ratio() {
      if (!this.icon) return 1;

      let { width, height } = this.icon;
      return Math.max(width, height) / 16;
    },
    width() {
      return (
        this.childrenWidth ||
        (this.icon && (this.icon.width / this.ratio) * this.normalizedScale) ||
        0
      );
    },
    height() {
      return (
        this.childrenHeight ||
        (this.icon && (this.icon.height / this.ratio) * this.normalizedScale) ||
        0
      );
    },
    style() {
      if (this.normalizedScale === 1) return false;
      return {
        fontSize: this.normalizedScale + "em"
      };
    },
    raw() {
      // generate unique id for each icon's SVG element with ID
      if (!this.icon || !this.icon.raw) return null;
      let raw = this.icon.raw;
      let ids = {};
      raw = raw.replace(
        /\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,
        (match, quote, id) => {
          let uniqueId = getId("vat-");
          ids[id] = uniqueId;
          return ` id="${uniqueId}"`;
        }
      );
      raw = raw.replace(
        /#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
        (match, rawId, _, pointerId) => {
          let id = rawId || pointerId;
          if (!id || !ids[id]) return match;
          return `#${ids[id]}`;
        }
      );
      return raw;
    },
    attribs() {
      if (!this.icon || !this.icon.attr) return {};
      return this.icon.attr;
    }
  },

  mounted() {
    this.updateStack();
  },

  updated() {
    this.updateStack();
  },

  methods: {
    updateStack() {
      if (!this.name && this.name !== null && this.$children.length === 0) {
        warn(`Invalid prop: prop "name" is required.`, this);
        return;
      }

      if (this.icon) return;

      let width = 0;
      let height = 0;
      this.$children.forEach(child => {
        child.outerScale = this.normalizedScale;
        width = Math.max(width, child.width);
        height = Math.max(height, child.height);
      });
      this.childrenWidth = width;
      this.childrenHeight = height;
      this.$children.forEach(child => {
        child.x = (width - child.width) / 2;
        child.y = (height - child.height) / 2;
      });
    }
  },

  render(h) {
    if (this.name === null) return h();

    let attrs = Object.assign(
      {
        role: this.$attrs.role || (this.label || this.title ? "img" : null),
        "aria-label": this.label || null,
        "aria-hidden": !(this.label || this.title),
        width: this.width,
        height: this.height,
        viewBox: this.box
      },
      this.attribs
    );

    if (this.attribs.stroke)
      attrs.stroke = this.fill ? this.fill : "currentColor";
    else attrs.fill = this.fill ? this.fill : "currentColor";

    if (this.x) attrs.x = this.x;
    if (this.y) attrs.y = this.y;

    let options = {
      class: this.klass,
      style: this.style,
      attrs: attrs
    };

    if (this.raw) {
      const html = this.title
        ? `<title>${escapeHTML(this.title)}</title>${this.raw}`
        : this.raw;
      options.domProps = { innerHTML: html };
    }

    let content = this.title ? [h("title", this.title)] : [];

    return h(
      "svg",
      options,
      this.raw
        ? null
        : content.concat([
            this.$slots.default ||
              (this.icon
                ? [
                    ...this.icon.paths.map((path, i) =>
                      h("path", {
                        attrs: path,
                        key: `path-${i}`
                      })
                    ),
                    ...this.icon.polygons.map((polygon, i) =>
                      h("polygon", {
                        attrs: polygon,
                        key: `polygon-${i}`
                      })
                    )
                  ]
                : [])
          ])
    );
  },

  register(data) {
    let { name, paths = [], d, polygons = [], points } = data;

    if (d) paths.push({ d });
    if (points) polygons.push({ points });

    icons[name] = assign({}, data, {
      paths,
      polygons
    });

    if (!icons[name].minX) icons[name].minX = 0;
    if (!icons[name].minY) icons[name].minY = 0;
  },

  add(data) {
    if (Array.isArray(data)) {
      for (let icon of data) this.register(icon);
    } else this.register(data);
  },

  icons
};
