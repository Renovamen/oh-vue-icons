<template>
  <div class="dropdown cursor-pointer mr-6 relative">
    <div @click="toggle">
      <span class="title">{{ item.text }}</span>
    </div>

    <ul
      v-show="open || width >= 1024"
      class="bg-white dark:bg-gray-800 lg:(absolute block invisible right-0 w-31 text-sm rounded border border-solid border-gray-300 dark:border-gray-700)"
    >
      <li
        v-for="(subItem, index) in item.items"
        :key="subItem.locale || index"
        class="flex space-x-1.5 items-center pl-4 hover:bg-gray-100 dark:hover:bg-gray-700 lg:(leading-8 px-3)"
        @click="subItem.func ? subItem.func() : toLink(subItem.link)"
      >
        <v-icon v-if="subItem.icon" :name="subItem.icon" :scale="0.9" />
        <span class="align-middle">{{ subItem.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps(["item"]);

const router = useRouter();
const { width } = useWindowSize();

const open = ref(false);

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
</script>

<style lang="postcss" scoped>
@media (min-width: 1024px) {
  .dropdown:hover ul {
    @apply visible;
  }
}
</style>
