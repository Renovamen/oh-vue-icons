<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="text-center mb-6"
      @mouseenter="clearTimer"
      @mouseleave="startTimer(icon)"
    >
      <span class="msg-box">
        <v-icon name="ri-checkbox-circle-fill" />
        Copied '{{ icon }}'
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      duration: 2000,
      timer: null,
      show: false,
      icon: ""
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer(iconName) {
      this.show = true;
      this.icon = iconName;
      this.clearTimer();

      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (this.show) {
            this.close();
          }
        }, this.duration);
      }
    }
  }
};
</script>

<style lang="postcss">
.msg-box {
  @apply px-4 py-3 bg-white text-gray-800 shadow border-l-4 border-solid border-green-500 rounded;
}
.dark-mode .msg-box {
  @apply bg-gray-700 text-gray-400;
}
.msg-box .v-icon {
  @apply fill-current text-green-500 mr-1;
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
