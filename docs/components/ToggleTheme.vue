<template>
  <span
    class="h-6 w-12 border-2 border-transparent rounded-full cursor-pointer
          transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    :class="{
      'bg-gray-200': !isDark,
      'bg-blue-500': isDark
    }"
    role="checkbox"
    tabindex="0"
    :aria-checked="isDark.toString()"
    @click="toggleTheme()"
    @keydown.space.prevent="toggleTheme()"
  >
    <span
      aria-hidden="true"
      class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
      :class="{
        'translate-x-6': isDark,
        'translate-x-0': !isDark
      }"
    >
      <span
        :class="{
          'opacity-0 ease-out duration-100': isDark,
          'opacity-100 ease-in duration-200': !isDark
        }"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
      >
        <v-icon name="ri-sun-line" class="h-3 w-3 text-blue-600" />
      </span>
      <span
        :class="{
          'opacity-100 ease-in duration-200': isDark,
          'opacity-0 ease-out duration-100': !isDark
        }"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
      >
        <v-icon name="ri-moon-clear-line" class="h-3 w-3 text-blue-600" />
      </span>
    </span>
  </span>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$store.state.theme.isDark;
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit("theme/toggleTheme");
    }
  }
};
</script>
