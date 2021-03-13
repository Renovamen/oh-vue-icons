<template>
  <div class="dropdown-wrapper cursor-pointer mr-6 relative" :class="{ open }">
    <a @click="toggle">
      <span class="title">{{ item.text }}</span>
    </a>

    <ul v-show="open" class="dropdown">
      <li v-for="(subItem, index) in item.items" :key="subItem.link || index">
        <NuxtLink v-if="!isExternal(subItem.link)" :to="subItem.link">
          <v-icon v-if="subItem.icon" :name="subItem.icon" />
          <span>{{ subItem.text }}</span>
        </NuxtLink>
        <a v-else :href="subItem.link" target="_blank">
          <v-icon v-if="subItem.icon" :name="subItem.icon" />
          <span>{{ subItem.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    isExternal(path) {
      const outboundRE = /^(https?:|mailto:|tel:)/;
      return outboundRE.test(path);
    }
  }
};
</script>

<style lang="postcss">
.dropdown {
  @apply text-gray-600 bg-white;
}
.dark-mode .dropdown {
  @apply bg-gray-800 text-gray-400;
}

.dropdown li:hover {
  @apply bg-gray-100;
}
.dark-mode .dropdown li:hover {
  @apply bg-gray-700;
}
.dropdown li a span,
.dropdown li a .v-icon {
  @apply align-middle;
}
.dark-mode .dropdown li a span {
  @apply text-gray-500;
}

@media (min-width: 640px) {
  .dropdown {
    @apply absolute invisible right-0 w-32 text-sm rounded-md border border-solid border-gray-300;
    display: block !important;
  }
  .dropdown-wrapper:hover .dropdown {
    @apply visible;
  }
  .dark-mode .dropdown {
    @apply border-gray-700;
  }
  .dropdown li a {
    @apply leading-8 px-2;
  }
  .dark-mode .dropdown li a span {
    @apply text-gray-400;
  }
}
</style>
