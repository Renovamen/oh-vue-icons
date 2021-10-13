<template>
  <div class="dropdown-wrapper cursor-pointer mr-6 relative" :class="{ open }">
    <a @click="toggle">
      <span class="title">{{ item.text }}</span>
    </a>

    <ul v-show="open" class="dropdown text-gray-600 bg-white">
      <li
        class="hover:bg-gray-100"
        v-for="(subItem, index) in item.items"
        @click="subItem.func ? subItem.func() : toLink(subItem.link)"
        :key="subItem.locale || index"
      >
        <v-icon v-if="subItem.icon" :name="subItem.icon" class="mr-1" />
        <span class="align-middle">{{ subItem.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api';

export default defineComponent({
  name: "Dropdown",
  props: ["item"],
  setup() {
    const open = ref(false);
    const router = useRouter();

    const toggle = () => {
      open.value = !open.value;
    };

    const toLink = (path: string) => {
      if (isExternal(path)) window.open(path);
      else router.push(path);
    };

    const isExternal = (path: string) => {
      const outboundRE = /^(https?:|mailto:|tel:)/;
      return outboundRE.test(path);
    };

    return {
      toggle,
      toLink,
      open
    }
  }
});
</script>

<style lang="postcss" scoped>
.dark .dropdown {
  @apply bg-gray-800 text-gray-400;
}

.dark .dropdown li:hover {
  @apply bg-gray-700;
}

.dropdown li .ov-icon {
  @apply align-middle;
}

@media (min-width: 640px) {
  .dropdown-wrapper:hover .dropdown {
    @apply visible;
  }

  .dropdown {
    @apply absolute invisible right-0 w-32 text-sm rounded-md border border-solid border-gray-300;
    display: block !important;
  }
  .dark .dropdown {
    @apply border-gray-700;
  }

  .dropdown li {
    @apply leading-8 px-2;
  }
}
</style>
