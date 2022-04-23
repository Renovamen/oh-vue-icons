<template>
  <div class="bg-blackdark:bg-gray-800 flex flex-col">
    <Navbar />
    <Sidebar />

    <div class="flex-1 pt-24 px-4">
      <div class="text-center">
        <RandomIcon />

        <h1 class="text-3xl font-bold mt-10 mb-6 dark:text-gray-100">
          Oh, Vue Icons!
        </h1>
        <p class="dark:text-gray-100">{{ t("tagline") }}</p>
        <p class="mt-2">
          <a
            class="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            href="https://github.com/Renovamen/oh-vue-icons"
            target="_blank"
          >
            github
          </a>
          ·
          <a
            class="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            href="https://www.npmjs.com/package/oh-vue-icons"
            target="_blank"
          >
            npm
          </a>
          ·
          <RouterLink
            class="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            :to="localePath('/')"
          >
            icons
          </RouterLink>
        </p>
      </div>

      <RouterView />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { localePath } from "~/composables";

const { t } = useI18n();
</script>
