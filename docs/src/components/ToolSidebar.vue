<template>
  <div
    class="toolbar fixed h-full w-56 pt-16 z-20 top-0 right-0 text-left border-l border-solid bg-white text-gray-600 border-gray-200 dark:(bg-gray-800 text-gray-400 border-gray-700)"
  >
    <div class="tool-section">
      <div class="tool-title">
        {{ t("toolbar.scale") }}
      </div>
      <div class="flex flex-1">
        <vue-slider
          v-model="state.size"
          class="flex-1"
          :max="3"
          :min="0.1"
          :interval="0.1"
          tooltip="none"
        />
        <div class="w-10 text-right">
          {{ state.size }}
        </div>
      </div>
    </div>

    <div class="tool-section">
      <div class="tool-title">
        {{ t("toolbar.color") }}
      </div>
      <v-swatches
        v-model="state.color"
        show-fallback
        fallback-input-type="color"
      />
    </div>

    <div class="tool-section">
      <div class="tool-title">
        {{ t("toolbar.animation") }}
      </div>
      <div class="grid grid-cols-3 gap-1 text-xs leading-3">
        <button
          class="tool-btn"
          :class="[animation === 'spin' && 'clicked']"
          @click="setAnimation('spin')"
        >
          Spin
        </button>
        <button
          class="tool-btn"
          :class="[animation === 'spin-pulse' && 'clicked']"
          @click="setAnimation('spin-pulse')"
        >
          Spin Pulse
        </button>
        <button
          class="tool-btn"
          :class="[animation === 'wrench' && 'clicked']"
          @click="setAnimation('wrench')"
        >
          Wrench
        </button>
        <button
          class="tool-btn"
          :class="[animation === 'ring' && 'clicked']"
          @click="setAnimation('ring')"
        >
          Ring
        </button>
        <button
          class="tool-btn"
          :class="[animation === 'pulse' && 'clicked']"
          @click="setAnimation('pulse')"
        >
          Pulse
        </button>
        <button
          class="tool-btn"
          :class="[animation === 'flash' && 'clicked']"
          @click="setAnimation('flash')"
        >
          Flash
        </button>
        <button
          class="tool-btn"
          :class="[animation === 'float' && 'clicked']"
          @click="setAnimation('float')"
        >
          Float
        </button>
      </div>
    </div>

    <div class="tool-section mt-3">
      <div class="tool-title">
        {{ t("toolbar.animSpeed") }}
      </div>
      <div class="flex flex-1">
        <vue-slider
          v-model="state.speed"
          class="flex-1"
          :max="3"
          :min="1"
          :interval="1"
          :tooltip-formatter="formatter"
        />
        <div class="w-8 text-right">
          {{ state.speed }}
        </div>
      </div>
    </div>

    <div class="tool-section">
      <div class="tool-title">
        {{ t("toolbar.flip") }}
      </div>
      <button class="tool-btn w-full capitalize" @click="setFlip">
        {{ flip }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import VSwatches from "vue3-swatches";
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";
import { useIconStore } from "~/stores/icon";

const { t } = useI18n();

const speedOptions = ["slow", "normal", "fast"];

const state = reactive({
  size: 0.1,
  color: "",
  speed: 2,
  isColorFocused: false
});

const iconStore = useIconStore();

const animation = computed(() => {
  return iconStore.state.animation;
});
const flip = computed(() => {
  return iconStore.state.flip;
});

const setAnimation = (value: string) => iconStore.setAnimation(value);
const setFlip = () => iconStore.setFlip();

watch(
  () => state.size,
  (value: number, preValue: number) => iconStore.setSize(value)
);

watch(
  () => state.color,
  (value: string, preValue: string) => iconStore.setColor(value)
);

watch(
  () => state.speed,
  (value: number, preValue: number) => {
    const speed = speedOptions[(value - 1) % 3];
    iconStore.setAnimSpeed(speed);
  }
);

const formatter = (v: number) => speedOptions[(v - 1) % 3];

onMounted(() => {
  state.size = iconStore.state.size;
  state.color = iconStore.state.color;
  state.speed =
    (speedOptions.findIndex((n) => n === iconStore.state.animSpeed) + 1) % 3;
});
</script>

<style lang="postcss" scoped>
:deep(.vue-slider-process) {
  @apply bg-blue-500;
}

:deep(.vue-swatches) button {
  @apply text-xs;
}

.tool-btn.clicked {
  @apply bg-gray-200 border-transparent;
}
.dark .tool-btn.clicked {
  @apply bg-gray-600 text-gray-300;
}
</style>
