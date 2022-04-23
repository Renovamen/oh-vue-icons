<template>
  <span
    id="theme-toggle"
    class="bg-gray-200 dark:bg-blue-500 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    role="checkbox"
    tabindex="0"
    @click="toggleDark"
    @keydown.space.prevent="toggleDark"
  >
    <span
      aria-hidden="true"
      class="slider translate-x-0 dark:translate-x-6 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
    >
      <span
        class="absolute opacity-100 ease-out duration-100 dark:(opacity-0 ease-out duration-100) inset-0 h-full w-full flex items-center justify-center transition-opacity"
      >
        <v-icon name="ri-sun-line" class="h-3 w-3 text-blue-600" />
      </span>
      <span
        class="absolute opacity-0 ease-in duration-200 dark:(opacity-100 ease-in duration-200) inset-0 h-full w-full flex items-center justify-center transition-opacity"
      >
        <v-icon name="ri-moon-clear-line" class="h-3 w-3 text-blue-600" />
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { toggleDark } from "~/composables";
</script>
