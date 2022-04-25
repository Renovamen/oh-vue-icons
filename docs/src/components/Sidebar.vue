<template>
  <div
    ref="sidebar"
    class="bg-white text-gray-600 border-gray-200 dark:(bg-gray-800 text-gray-400 border-gray-700) fixed h-full w-64 lg:w-56 z-20 left-0 top-0 text-left border-r border-solid overflow-y-scroll transition-transform"
    :class="[
      isSidebarOpen ? '-translate-x-0' : '-translate-x-full',
      !items && 'lg:hidden'
    ]"
  >
    <ul
      class="mt-16 pb-2 text-base border-gray-200 border-b border-solid dark:border-gray-700 show-on-mobile"
    >
      <li class="sidebar-li">
        <RouterLink :to="localePath('/')">
          {{ t("nav.icons") }}
        </RouterLink>
      </li>
      <li class="sidebar-li">
        <RouterLink :to="localePath('docs')">
          {{ t("nav.docs") }}
        </RouterLink>
      </li>
      <li class="sidebar-li">
        <LangSwitcher />
      </li>
      <li class="sidebar-li">
        <GitBadge />
      </li>
    </ul>

    <ul
      v-if="items"
      class="mt-2 lg:mt-20 pb-2 border-gray-200 dark:border-gray-700 border-b border-solid lg:border-none"
    >
      <li
        v-for="item in items"
        :key="item.tab"
        class="sidebar-li"
        :class="[itemSelected === item.tab && 'selected']"
        @click="$emit('changeTab', item.tab)"
      >
        {{ item.tab }}
        <v-icon v-if="item.multiColor" name="fc-picture" class="ml-1" />
      </li>
    </ul>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { useSiteStore } from "~/stores/site";
import { localePath } from "~/composables";

defineProps(["itemSelected", "items"]);
defineEmits(["changeTab"]);

const { t } = useI18n();
const { width } = useWindowSize();
const site = useSiteStore();

const isSidebarOpen = computed(() => {
  return width.value >= 1024 || site.sidebar;
});

const sidebar = ref(null);

onMounted(() => {
  const siderToggle = document.getElementById("sidebar-toggle");
  const themeToggle = document.getElementById("theme-toggle");

  onClickOutside(sidebar, () => site.toggleSidebar(false), {
    ignore: [siderToggle, themeToggle]
  });
});
</script>

<style lang="postcss" scoped>
.sidebar-li.selected {
  @apply text-blue-700 bg-blue-100 border-blue-700;
}
.dark .sidebar-li.selected {
  @apply text-gray-300 bg-gray-700 border-blue-500;
}

:deep(.toolbar) {
  @apply relative border-none w-auto h-auto pt-0 pb-8;
}
</style>
