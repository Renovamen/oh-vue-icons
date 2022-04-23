<template>
  <div
    class="fixed z-40 top-0 w-full flex py-3 px-4 bg-white text-gray-600 border-b border-solid border-gray-200 dark:(bg-gray-800 border-gray-700 text-gray-300)"
  >
    <RouterLink
      class="text-gray-800 dark:text-gray-100 text-lg font-medium"
      :to="localePath('/')"
    >
      <v-icon class="mr-1" name="oh-vue-icons" scale="1.2" />
      Oh, Vue Icons!
    </RouterLink>

    <div class="flex-1 flex space-x-6 items-center justify-end">
      <RouterLink
        :to="localePath('/')"
        class="hide-on-mobile dark:text-gray-300"
      >
        {{ t("nav.icons") }}
      </RouterLink>
      <RouterLink
        :to="localePath('docs')"
        class="hide-on-mobile dark:text-gray-300"
      >
        {{ t("nav.docs") }}
      </RouterLink>

      <LangSwitcher class="hide-on-mobile" />

      <GitBadge class="hide-on-mobile" />
      <ToggleTheme />

      <a
        id="sidebar-toggle"
        class="text-gray-700 dark:text-gray-200 mr-4 show-on-mobile"
        @click="toggleSidebar()"
      >
        <v-icon name="hi-menu" scale="1.5" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSiteStore } from "~/stores/site";
import { localePath } from "~/composables";

const { t } = useI18n();
const site = useSiteStore();

const toggleSidebar = (to: boolean | undefined) => {
  site.toggleSidebar(typeof to === "boolean" ? to : !site.sidebar);
};
</script>
