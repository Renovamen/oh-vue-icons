<template>
  <div class="navbar">
    <NuxtLink
      to="/"
      class="site-name absolute ml-3 sm:ml-4 text-lg font-medium"
    >
      Oh, Vue Icons!
    </NuxtLink>
    <div class="flex items-center justify-end">
      <NuxtLink :to="localePath('index')" class="mr-6 hidden sm:block">
        {{ $t("nav.icons") }}
      </NuxtLink>
      <NuxtLink :to="localePath('docs')" class="mr-6 hidden sm:block">
        {{ $t("nav.docs") }}
      </NuxtLink>
      <LangSwitcher class="hidden sm:block" />
      <GitBadge class="hidden sm:block" />
      <ToggleTheme class="mr-6" />
      <a class="sidebar-toggler mr-4 sm:hidden block" @click="toggleSidebar()">
        <v-icon name="ri-menu-line" scale="1.5" />
      </a>
    </div>
  </div>
</template>

<script>
import ToggleTheme from "./ToggleTheme.vue";
import LangSwitcher from "./LangSwitcher";
import GitBadge from "./GitBadge";
import packageJson from "../../package.json";

export default {
  components: {
    ToggleTheme,
    LangSwitcher,
    GitBadge
  },
  data() {
    return {
      scrollTop: 0,
      version: "0.1.0"
    };
  },
  watch: {
    $route() {
      this.toggleSidebar(false);
    }
  },
  mounted() {
    this.version = packageJson.version;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset;
    },
    toggleSidebar(to) {
      const payload =
        typeof to === "boolean" ? to : !this.$store.state.sidebar.isSidebarOpen;
      this.$store.commit("sidebar/toggleSidebar", payload);
    }
  }
};
</script>

<style lang="postcss">
.navbar {
  @apply w-full py-3 bg-white border-b border-solid border-gray-200;
}

.dark-mode .navbar {
  @apply bg-gray-800 border-gray-700;
}

.navbar a {
  @apply text-gray-600;
}

.navbar a:hover {
  @apply text-gray-700;
}

.dark-mode .navbar a {
  @apply text-gray-400;
}

.dark-mode .navbar a:hover {
  @apply text-gray-300;
}

.navbar .site-name {
  @apply text-gray-800;
  margin-top: 2px;
}
@media (min-width: 640px) {
  .navbar .site-name {
    margin-top: -1px;
  }
}
.navbar .site-name:hover {
  @apply text-gray-900;
}
.dark-mode .navbar .site-name {
  @apply text-gray-300;
}
.dark-mode .navbar .site-name:hover {
  @apply text-gray-200;
}

.navbar .sidebar-toggler {
  @apply text-gray-700;
}

.dark-mode .navbar .sidebar-toggler {
  @apply text-gray-300;
}
</style>
