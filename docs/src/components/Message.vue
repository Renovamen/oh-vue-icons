<template>
  <transition name="slide-fade">
    <div
      v-if="state.show"
      class="text-center mb-6"
      @mouseenter="clearTimer"
      @mouseleave="startTimer(state.icon)"
    >
      <span
        class="px-4 py-3 bg-white text-gray-800 shadow border-l-4 border-solid border-green-500 dark:(bg-gray-700 text-gray-300) rounded"
      >
        <v-icon
          name="ri-checkbox-circle-fill"
          class="fill-current text-green-500 mr-1"
        />
        Copied "{{ state.icon }}"
      </span>
    </div>
  </transition>
</template>

<script setup lang="ts">
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

const startTimer = (icon: string) => {
  state.show = true;
  state.icon = icon;
  clearTimer();

  if (time.duration > 0) {
    time.timer = setTimeout(() => {
      if (state.show) {
        close();
      }
    }, time.duration);
  }
};

defineExpose({
  startTimer
});
</script>

<style scoped lang="postcss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  @apply transition duration-300;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply translate-y-2 opacity-0;
}
</style>
