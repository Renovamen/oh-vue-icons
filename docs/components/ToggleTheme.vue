<template>
  <span
    class="nightwind-prevent-block theme-toggle bg-gray-200 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    role="checkbox"
    tabindex="0"
    :aria-checked="dark.toString()"
    @click="toggleTheme()"
    @keydown.space.prevent="toggleTheme()"
  >
    <span
      aria-hidden="true"
      class="slider translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
    >
      <span class="sun absolute opacity-0 ease-out duration-100 inset-0 h-full w-full flex items-center justify-center transition-opacity">
        <v-icon name="ri-sun-line" class="h-3 w-3 text-blue-600" />
      </span>
      <span class="moon absolute opacity-100 ease-in duration-200 inset-0 h-full w-full flex items-center justify-center transition-opacity">
        <v-icon name="ri-moon-clear-line" class="h-3 w-3 text-blue-600" />
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: "ToggleTheme",
  setup() {
    const store = useStore();

    const dark = computed(() => {
      return (store.state as any).site.dark;
    });

    const toggleTheme = () => {
      store.commit("site/setDark", !dark.value)
    }

    return {
      dark,
      toggleTheme
    }
  }
});
</script>

<style lang="postcss" scoped>
.dark .theme-toggle {
  @apply bg-blue-500;
}

.dark .theme-toggle .slider {
  @apply translate-x-6;
}

.dark .theme-toggle .sun {
  @apply opacity-0 ease-out duration-100;
}

.dark .theme-toggle .moon {
  @apply opacity-100 ease-in duration-200;
}
</style>
