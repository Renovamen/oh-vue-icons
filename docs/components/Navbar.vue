<template>
  <div
    class="
      navbar
      text-gray-600
      w-full
      py-3
      bg-white
      border-b border-solid border-gray-200
    "
  >
    <nuxt-link
      class="site-name text-gray-800 absolute ml-3 sm:ml-4 text-lg font-medium"
      :to="localePath('index')"
    >
      Oh, Vue Icons!
    </nuxt-link>

    <div class="flex items-center justify-end">
      <nuxt-link :to="localePath('index')" class="mr-6 hidden sm:block">
        {{ $t("nav.icons") }}
      </nuxt-link>
      <nuxt-link :to="localePath('docs')" class="mr-6 hidden sm:block">
        {{ $t("nav.docs") }}
      </nuxt-link>

      <LangSwitcher class="hidden sm:block" />
      <GitBadge class="hidden sm:block" />
      <ToggleTheme class="mr-6" />

      <a class="text-gray-700 mr-4 sm:hidden block" @click="toggleSidebar()">
        <v-icon name="ri-menu-line" scale="1.5" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore } from "@nuxtjs/composition-api";
import ToggleTheme from "./ToggleTheme.vue";
import LangSwitcher from "./LangSwitcher.vue";
import GitBadge from "./GitBadge.vue";

export default defineComponent({
  name: "Navbar",
  components: {
    ToggleTheme,
    LangSwitcher,
    GitBadge
  },
  setup() {
    const store = useStore();

    const toggleSidebar = (to: boolean | undefined) => {
      const value =
        typeof to === "boolean" ? to : !(store.state as any).site.sidebar;
      store.commit("site/toggleSidebar", value);
    };

    return {
      toggleSidebar
    };
  }
});
</script>

<style lang="postcss" scoped>
.dark .navbar {
  @apply bg-gray-800 border-gray-700;
}
</style>
