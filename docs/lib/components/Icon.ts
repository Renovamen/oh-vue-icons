import {
  defineComponent,
  reactive,
  computed,
  onMounted,
  onUpdated,
  toRefs,
  ref,
  h,
  isVue2
} from "vue-demi";
import { CustomizeIconType, ObjType } from "../../../package/types/icons";
import utils from "../utils";

type IconsType = {
  [key: string]: CustomizeIconType;
};

const icons: IconsType = {};

const register = (data: CustomizeIconType): void => {
  const { name, paths = [], d, polygons = [], points } = data;

  if (d) paths.push({ d });
  if (points) polygons.push({ points });

  icons[name] = utils.assign({}, data, {
    paths,
    polygons
  });

  if (!icons[name].minX) icons[name].minX = 0;
  if (!icons[name].minY) icons[name].minY = 0;
};

const addIcons = (...data: CustomizeIconType[]): void => {
  for (const icon of data) register(icon);
};

const getIcons = (): IconsType => {
  return icons;
};

const OhVueIcon = defineComponent({
  name: "OhVueIcon",

  props: {
    name: {
      type: String,
      validator: (val: string): boolean => {
        if (val && !(val in icons)) {
          utils.warn(
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
    scale: {
      type: [Number, String],
      default: 1
    },
    animation: {
      validator: (val: string): boolean => {
        return [
          "spin",
          "spin-pulse",
          "wrench",
          "ring",
          "pulse",
          "flash",
          "float"
        ].includes(val);
      }
    },
    hover: Boolean,
    flip: {
      validator: (val: string): boolean => {
        return ["horizontal", "vertical", "both"].includes(val);
      }
    },
    speed: {
      validator: (val: string): boolean => {
        return val === "fast" || val === "slow";
      }
    },
    label: String,
    inverse: Boolean
  },

  setup(props) {
    const children = ref([] as any[]);

    const state = reactive({
      outerScale: 1.2,
      x: null as number | null,
      y: null as number | null
    });

    const childrenState = reactive({
      width: 0,
      height: 0
    });

    const normalizedScale = computed(() => {
      const scale = Number(props.scale);
      if (isNaN(scale) || scale <= 0) {
        utils.warn(
          `Invalid prop: prop "scale" should be a number over 0.`,
          this
        );
        return state.outerScale;
      }
      return scale * state.outerScale;
    });

    const klass = computed(() => {
      const classes = {
        "ov-icon": true,
        "ov-inverse": props.inverse,
        "ov-flip-horizontal": props.flip === "horizontal",
        "ov-flip-vertical": props.flip === "vertical",
        "ov-flip-both": props.flip === "both",
        "ov-spin": props.animation === "spin",
        "ov-spin-pulse": props.animation === "spin-pulse",
        "ov-wrench": props.animation === "wrench",
        "ov-ring": props.animation === "ring",
        "ov-pulse": props.animation === "pulse",
        "ov-flash": props.animation === "flash",
        "ov-float": props.animation === "float",
        "ov-hover": props.hover,
        "ov-fast": props.speed === "fast",
        "ov-slow": props.speed === "slow"
      };
      return classes;
    });

    const icon = computed((): CustomizeIconType | null => {
      if (props.name) return icons[props.name];
      return null;
    });

    const box = computed((): string => {
      if (icon.value) {
        return `${icon.value.minX} ${icon.value.minY} ${icon.value.width} ${icon.value.height}`;
      }
      return `0 0 ${width.value} ${height.value}`;
    });

    const ratio = computed((): number => {
      if (!icon.value) return 1;

      const { width, height } = icon.value;
      return Math.max(width, height) / 16;
    });

    const width = computed((): number => {
      return (
        childrenState.width ||
        (icon.value &&
          (icon.value.width / ratio.value) * normalizedScale.value) ||
        0
      );
    });

    const height = computed((): number => {
      return (
        childrenState.height ||
        (icon.value &&
          (icon.value.height / ratio.value) * normalizedScale.value) ||
        0
      );
    });

    const style = computed(() => {
      if (normalizedScale.value === 1) return false;
      return {
        fontSize: normalizedScale.value + "em"
      };
    });

    const raw = computed((): string | null => {
      // Generates unique id for each icon's SVG element with ID
      if (!icon.value || !icon.value.raw) return null;

      const ids: { [key: string]: string } = {};
      let raw = icon.value.raw;

      raw = raw.replace(
        /\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,
        (match: any, quote: string, id: string) => {
          const uniqueId = utils.getID("vat-");
          ids[id] = uniqueId;
          return ` id="${uniqueId}"`;
        }
      );
      raw = raw.replace(
        /#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
        (match: any, rawId: string, _: string, pointerId: string) => {
          const id = rawId || pointerId;
          if (!id || !ids[id]) return match;
          return `#${ids[id]}`;
        }
      );
      return raw;
    });

    const attribs = computed((): any => {
      if (!icon.value || !icon.value.attr) return {};
      return icon.value.attr;
    });

    const updateStack = () => {
      if (!props.name && props.name !== null && children.value.length === 0) {
        utils.warn(`Invalid prop: prop "name" is required.`, this);
        return;
      }

      if (icon.value) return;

      let width = 0,
        height = 0;

      children.value.forEach((child: any) => {
        child.outerScale = normalizedScale.value;

        width = Math.max(width, child.width);
        height = Math.max(height, child.height);
      });

      childrenState.width = width;
      childrenState.height = height;

      children.value.forEach((child: any) => {
        child.x = (width - child.width) / 2;
        child.y = (height - child.height) / 2;
      });
    };

    onMounted(() => {
      updateStack();
    });

    onUpdated(() => {
      updateStack();
    });

    return {
      ...toRefs(state),
      children,
      icon,
      klass,
      style,
      width,
      height,
      box,
      attribs,
      raw
    };
  },

  created() {
    const parent = this.$parent as any;
    if (parent && parent.children) parent.children.push(this);
  },

  render() {
    const attrs = Object.assign(
      {
        role: this.$attrs.role || (this.label || this.title ? "img" : null),
        "aria-label": this.label || null,
        "aria-hidden": !(this.label || this.title),
        width: this.width,
        height: this.height,
        viewBox: this.box
      },
      this.attribs
    ) as any;

    if ((this.attribs as ObjType).stroke)
      attrs.stroke = this.fill ? this.fill : "currentColor";
    else attrs.fill = this.fill ? this.fill : "currentColor";

    if (this.x) attrs.x = (this.x as number).toString();
    if (this.y) attrs.y = (this.y as number).toString();

    let options = {
      class: this.klass,
      style: this.style
    } as any;

    if (isVue2) {
      options.attrs = attrs;
    } else {
      options = Object.assign(options, attrs);
    }

    if (this.raw) {
      const html = this.title
        ? `<title>${utils.escapeHTML(this.title)}</title>${this.raw}`
        : this.raw;

      if (isVue2) {
        options.domProps = { innerHTML: html };
      } else {
        options.innerHTML = html;
      }
    }

    const content = this.title
      ? [h("title", this.title as string)]
      : ([] as any[]);

    const svgAttrs = (name: string, value: ObjType, i: number) => {
      if (isVue2) {
        return h(name, {
          attrs: value,
          key: `${name}-${i}`
        });
      } else {
        return h(name, {
          ...value,
          key: `${name}-${i}`
        });
      }
    };

    return h(
      "svg",
      options,
      this.raw
        ? undefined
        : content.concat([
            this.$slots.default
              ?
                isVue2
                ? this.$slots.default
                // @ts-ignore: this.$slots.default() is only used in Vue3
                : this.$slots.default()
              : this.icon
              ? [
                  ...((this.icon as CustomizeIconType).paths as ObjType[]).map(
                    (path: ObjType, i: number) => svgAttrs("path", path, i)
                  ),
                  ...(
                    (this.icon as CustomizeIconType).polygons as ObjType[]
                  ).map((polygon: ObjType, i: number) =>
                    svgAttrs("polygon", polygon, i)
                  )
                ]
              : []
          ])
    );
  }
});

export { OhVueIcon, addIcons, getIcons };
