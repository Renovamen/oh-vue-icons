<template>
  <div
    class="sidebar fixed h-full w-64 sm:w-56 z-20 left-0 top-0 text-left border-r border-solid transform overflow-y-scroll"
    :class="{
      '-translate-x-full': !isSidebarOpen,
      '-translate-x-0': isSidebarOpen,
      hidden: !items && screenWidth >= 640
    }"
  >
    <ul class="nav-links mt-16 pb-2 text-base border-b border-solid sm:hidden">
      <li>
        <NuxtLink :to="localePath('index')">
          {{ $t("nav.icons") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('docs')">
          {{ $t("nav.docs") }}
        </NuxtLink>
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
      class="mt-2 sm:mt-20 pb-2 border-b border-solid sm:border-none"
    >
      <li
        v-for="item in items"
        :key="item.tab"
        :class="{ selected: itemSelected === item.tab }"
        @click="$emit('change-tab', item.tab)"
      >
        {{ item.tab }}
        <v-icon v-if="item.multiColor" name="fc-picture" class="ml-1" />
      </li>
    </ul>

    <slot />
  </div>
</template>

<script>
import LangSwitcher from "./LangSwitcher";
import GitBadge from "./GitBadge";

export default {
  components: {
    LangSwitcher,
    GitBadge
  },
  props: ["itemSelected", "items"],
  data() {
    return {
      screenWidth: 0
    };
  },
  computed: {
    isSidebarOpen() {
      return this.screenWidth >= 640 || this.$store.state.sidebar.isSidebarOpen;
    }
  },
  mounted() {
    const that = this;
    that.screenWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth;
      })();
    };
  }
};
</script>

<style lang="postcss">
.sidebar {
  @apply bg-white text-gray-600 border-gray-200;
}
.dark-mode .sidebar {
  @apply bg-gray-800 text-gray-500 border-gray-700;
}
.sidebar ul {
  @apply border-gray-200;
}
.dark-mode .sidebar ul {
  @apply border-gray-700;
}
.sidebar li {
  @apply leading-9 list-none cursor-pointer ml-0 px-4 border-l-2 border-solid border-transparent;
}
.sidebar li:hover {
  @apply text-blue-600;
}
.dark-mode .sidebar li:hover {
  @apply text-gray-300;
}
.sidebar li.selected {
  @apply text-blue-700 bg-blue-100 border-blue-700;
}
.dark-mode .sidebar li.selected {
  @apply text-gray-300 bg-gray-700 border-blue-500;
}
.sidebar .nav-links li {
  @apply border-transparent;
}
.sidebar .toolbar {
  @apply relative border-none w-auto h-auto pt-0 pb-8;
}

.sidebar::-webkit-scrollbar {
  display: none;
}
.sidebar .toolbar .icon-color input {
  width: 10.5rem;
}
</style>
