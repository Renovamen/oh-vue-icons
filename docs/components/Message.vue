<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="text-center mb-6"
      @mouseenter="clearTimer"
      @mouseleave="startTimer(icon)"
    >
      <span
        class="
          msg-box
          px-4
          py-3
          bg-white
          text-gray-800
          shadow
          border-l-4 border-solid border-green-500
          rounded
        "
      >
        <client-only>
          <v-icon
            name="ri-checkbox-circle-fill"
            class="fill-current text-green-500 mr-1"
          />
        </client-only>
        Copied '{{ icon }}'
      </span>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Message",
  setup() {
    const state = reactive({
      show: false,
      icon: ""
    });

    const time = reactive({
      duration: 2000,
      timer: null as any
    });

    const close = () => {
      state.show = false;
    };

    const clearTimer = () => {
      clearTimeout(time.timer);
    };

    const startTimer = (iconName: string) => {
      state.show = true;
      state.icon = iconName;
      clearTimer();

      if (time.duration > 0) {
        time.timer = setTimeout(() => {
          if (state.show) {
            close();
          }
        }, time.duration);
      }
    };

    return {
      ...toRefs(state),
      clearTimer,
      startTimer
    };
  }
});
</script>

<style lang="postcss">
.dark .msg-box {
  @apply bg-gray-700 text-gray-400;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  @apply transition-all duration-300;
}
.slide-fade-enter,
.slide-fade-leave-to {
  @apply transform translate-y-2 opacity-0;
}
</style>
