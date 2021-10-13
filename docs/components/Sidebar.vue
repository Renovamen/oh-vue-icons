<template>
  <div
    class="sidebar nightwind-prevent-block bg-white text-gray-600 border-gray-200 fixed h-full w-64 sm:w-56 z-20 left-0 top-0 text-left border-r border-solid transform overflow-y-scroll"
    :class="{
      '-translate-x-full': !isSidebarOpen,
      '-translate-x-0': isSidebarOpen,
      'hidden': !items && screenWidth >= 640
    }"
  >
    <ul class="nav-links mt-16 pb-2 text-base border-gray-200 border-b border-solid sm:hidden">
      <li>
        <router-link :to="localePath('index')">
          {{ $t("nav.icons") }}
        </router-link>
      </li>
      <li>
        <router-link :to="localePath('docs')">
          {{ $t("nav.docs") }}
        </router-link>
      </li>
      <li>
        <LangSwitcher />
      </li>
      <li>
        <GitBadge />
      </li>
    </ul>

    <ul
      v-if="items"
      class="mt-2 sm:mt-20 pb-2 border-gray-200 border-b border-solid sm:border-none"
    >
      <li
        v-for="item in items"
        :key="item.tab"
        :class="{ selected: itemSelected === item.tab }"
        @click="$emit('changeTab', item.tab)"
      >
        {{ item.tab }}
        <v-icon v-if="item.multiColor" name="fc-picture" class="ml-1" />
      </li>
    </ul>

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, useStore } from '@nuxtjs/composition-api'
import LangSwitcher from "./LangSwitcher.vue";
import GitBadge from "./GitBadge.vue";

export default defineComponent({
  components: {
    LangSwitcher,
    GitBadge
  },
  props: ["itemSelected", "items"],
  emits: ["changeTab"],
  setup() {
    const store = useStore();
    const screenWidth = ref(0);

    const isSidebarOpen = computed(() => {
      return screenWidth.value >= 640 || (store.state as any).site.sidebar;
    });

    onMounted(() => {
      screenWidth.value = document.body.clientWidth;
      window.onresize = () => {
        return (() => {
          screenWidth.value = document.body.clientWidth;
        })();
      };
    });

    return {
      isSidebarOpen,
      screenWidth
    }
  }
});
</script>

<style lang="postcss" scoped>
.dark .sidebar {
  @apply bg-gray-800 text-gray-400;
}

.dark .sidebar ul {
  @apply border-gray-700;
}

.sidebar li {
  @apply leading-9 list-none cursor-pointer ml-0 px-4 border-l-2 border-solid border-transparent;
}
.sidebar li:hover {
  @apply text-blue-600;
}

.dark .sidebar li:hover {
  @apply text-gray-300 !important;
}

.sidebar li.selected {
  @apply text-blue-700 bg-blue-100 border-blue-700;
}
.dark .sidebar li.selected {
  @apply text-gray-300 bg-gray-700 border-blue-500;
}

.sidebar >>> .toolbar {
  @apply relative border-none w-auto h-auto pt-0 pb-8;
}
</style>
