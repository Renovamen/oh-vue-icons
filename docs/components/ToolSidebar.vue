<template>
  <div
    class="
      toolbar
      fixed
      h-full
      w-56
      pt-16
      z-20
      top-0
      right-0
      text-left
      border-l border-solid
      bg-white
      text-gray-600
      border-gray-200
    "
  >
    <div class="section">
      <div class="title">
        {{ $t("toolbar.scale") }}
      </div>
      <div class="flex flex-1">
        <vue-slider
          v-model="size"
          class="flex-1"
          :max="3"
          :min="0.1"
          :interval="0.1"
          tooltip="none"
        />
        <div class="w-10 text-right">
          {{ size }}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="title">
        {{ $t("toolbar.color") }}
      </div>
      <v-swatches v-model="color" show-fallback fallback-input-type="color" />
    </div>

    <div class="section">
      <div class="title">
        {{ $t("toolbar.animation") }}
      </div>
      <div class="grid grid-cols-3 gap-1 text-xs leading-3">
        <button
          :class="{ clicked: animation === 'spin' }"
          @click="setAnimation('spin')"
        >
          Spin
        </button>
        <button
          :class="{ clicked: animation === 'spin-pulse' }"
          @click="setAnimation('spin-pulse')"
        >
          Spin Pulse
        </button>
        <button
          :class="{ clicked: animation === 'wrench' }"
          @click="setAnimation('wrench')"
        >
          Wrench
        </button>
        <button
          :class="{ clicked: animation === 'ring' }"
          @click="setAnimation('ring')"
        >
          Ring
        </button>
        <button
          :class="{ clicked: animation === 'pulse' }"
          @click="setAnimation('pulse')"
        >
          Pulse
        </button>
        <button
          :class="{ clicked: animation === 'flash' }"
          @click="setAnimation('flash')"
        >
          Flash
        </button>
        <button
          :class="{ clicked: animation === 'float' }"
          @click="setAnimation('float')"
        >
          Float
        </button>
      </div>
    </div>

    <div class="section mt-3">
      <div class="title">
        {{ $t("toolbar.animSpeed") }}
      </div>
      <div class="flex flex-1">
        <vue-slider
          v-model="speed"
          class="flex-1"
          :max="3"
          :min="1"
          :interval="1"
          :tooltip-formatter="formatter"
        />
        <div class="w-8 text-right">
          {{ speed }}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="title">
        {{ $t("toolbar.flip") }}
      </div>
      <button class="w-full capitalize" @click="setFlip">
        {{ flip }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs,
  computed,
  watch,
  useStore
} from "@nuxtjs/composition-api";
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";

const speedOptions = ["slow", "normal", "fast"];

export default defineComponent({
  components: {
    VueSlider
  },
  setup() {
    const state = reactive({
      size: 0.1,
      color: "",
      speed: 2,
      isColorFocused: false
    });

    const store = useStore();

    const animation = computed(() => {
      return (store.state as any).icon.animation;
    });

    const flip = computed(() => {
      return (store.state as any).icon.flip;
    });

    const setAnimation = (value: string) => {
      store.commit("icon/setAnimation", value);
    };

    const setFlip = () => {
      store.commit("icon/setFlip");
    };

    watch(
      () => state.size,
      (value: number, preValue: number) => {
        store.commit("icon/setSize", value);
      }
    );

    watch(
      () => state.color,
      (value: string, preValue: string) => {
        store.commit("icon/setColor", value);
      }
    );

    watch(
      () => state.speed,
      (value: number, preValue: number) => {
        const speed = speedOptions[(value - 1) % 3];
        store.commit("icon/setAnimSpeed", speed);
      }
    );

    const formatter = (v: number) => speedOptions[(v - 1) % 3];

    onMounted(() => {
      state.size = (store.state as any).icon.size;
      state.color = (store.state as any).icon.color;
      state.speed =
        (speedOptions.findIndex(
          (n) => n === (store.state as any).icon.animSpeed
        ) +
          1) %
        3;
    });

    return {
      ...toRefs(state),
      animation,
      flip,
      setAnimation,
      setFlip,
      formatter
    };
  }
});
</script>

<style lang="postcss" scoped>
.dark .toolbar {
  @apply bg-gray-800 text-gray-400;
}

.toolbar .section {
  @apply p-2 mx-2;
}

.toolbar .title {
  @apply m-3 ml-0 mr-4 text-left;
}

.toolbar button {
  @apply border border-solid border-gray-500 outline-none rounded h-8;
}
.toolbar button:hover {
  @apply bg-gray-100;
}
.dark .toolbar button:hover {
  @apply bg-gray-700;
}

.toolbar >>> .vue-slider-process {
  @apply bg-blue-500;
}

.toolbar >>> .vue-swatches button {
  @apply text-xs;
}

.toolbar button.clicked {
  @apply bg-gray-200 border-transparent;
}
.dark .toolbar button.clicked {
  @apply bg-gray-600 text-gray-300;
}
</style>
