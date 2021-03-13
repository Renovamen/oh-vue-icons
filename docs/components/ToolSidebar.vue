<template>
  <div class="toolbar">
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
    <div class="icon-color section">
      <div class="title">
        {{ $t("toolbar.color") }}
      </div>
      <div class="flex flex-1">
        <v-swatches v-model="color" class="flex-1" />
        <input
          slot="trigger"
          v-model="color"
          class="bg-transparent border border-solid outline-none rounded-md px-1"
          :style="{ borderColor: isColorFocused ? color : '#A0AEBF' }"
          @focus="isColorFocused = true"
          @blur="isColorFocused = false"
        />
      </div>
    </div>
    <div class="section">
      <div class="title">
        {{ $t("toolbar.animation") }}
      </div>
      <div class="grid grid-cols-2 gap-2 text-sm">
        <button
          :class="{ clicked: animation === 'spin' }"
          @click="$emit('set-animation', 'spin')"
        >
          Spin
        </button>
        <button
          :class="{ clicked: animation === 'spin-pulse' }"
          @click="$emit('set-animation', 'spin-pulse')"
        >
          Spin Pulse
        </button>
        <button
          :class="{ clicked: animation === 'wrench' }"
          @click="$emit('set-animation', 'wrench')"
        >
          Wrench
        </button>
        <button
          :class="{ clicked: animation === 'ring' }"
          @click="$emit('set-animation', 'ring')"
        >
          Ring
        </button>
        <button
          :class="{ clicked: animation === 'pulse' }"
          @click="$emit('set-animation', 'pulse')"
        >
          Pulse
        </button>
        <button
          :class="{ clicked: animation === 'flash' }"
          @click="$emit('set-animation', 'flash')"
        >
          Flash
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
      <button class="w-full capitalize" @click="$emit('set-flip')">
        {{ flip }}
      </button>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";

const speedOptions = ["slow", "normal", "fast"];

export default {
  components: {
    VueSlider
  },
  props: ["iconSize", "iconColor", "animation", "animSpeed", "flip"],
  data() {
    return {
      size: 0.1,
      color: "",
      isColorFocused: false,
      speed: 2,
      formatter: v => speedOptions[(v - 1) % 3]
    };
  },
  watch: {
    size(value) {
      this.$emit("set-size", value);
    },
    color(value) {
      this.$emit("set-color", value);
    },
    speed(value) {
      this.$emit("set-animation-speed", speedOptions[(value - 1) % 3]);
    }
  },
  mounted() {
    this.size = this.iconSize;
    this.color = this.iconColor;
    this.speed = (speedOptions.findIndex(n => n === this.animSpeed) + 1) % 3;
  }
};
</script>

<style lang="postcss">
.vue-slider-process {
  @apply bg-blue-500;
}
.toolbar {
  @apply fixed h-full w-56 pt-16 z-20 top-0 right-0 text-left border-l border-solid bg-white text-gray-600 border-gray-200;
}
.dark-mode .toolbar {
  @apply bg-gray-800 text-gray-500 border-gray-700;
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
.dark-mode .toolbar button:hover {
  @apply bg-gray-700;
}
.toolbar button.clicked {
  @apply bg-gray-200 border-transparent;
}
.dark-mode .toolbar button.clicked {
  @apply bg-gray-600 text-gray-300;
}

.toolbar .icon-color input {
  width: 8.5rem;
  height: 2.65rem;
}
</style>
