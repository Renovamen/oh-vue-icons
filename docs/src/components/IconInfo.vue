<template>
  <div
    v-if="iconSelected && close === false"
    class="z-30 max-w-screen-xl mx-auto fixed bottom-0 inset-x-0 pb-2 sm:pb-5"
  >
    <Message ref="message" />

    <div class="px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-blue-500 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-blue-700 text-white">
              <v-icon :name="iconSelected" scale="1.5" />
            </span>
            <p class="ml-3 font-medium text-white code truncate">
              <span class="text-xs md:inline md:text-base">
                {{ importCode }}
              </span>
            </p>
          </div>
          <div
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
          >
            <div class="flex rounded-md">
              <button
                class="ml-4 flex items-center justify-center space-x-1 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-600 bg-white hover:text-blue-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                @click="copyToClipboard"
              >
                <v-icon name="fa-regular-copy" />
                <span>Copy</span>
              </button>
            </div>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 transition ease-in-out duration-150"
              @click="onCloseClick"
            >
              <v-icon name="ri-close-fill" class="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import camelcase from "camelcase";
import copyText from "copy-text-to-clipboard";

const props = defineProps(["categorySelected", "iconSelected"]);
const emit = defineEmits(["close"]);

const close = ref(false);

const moduleName = computed(() => {
  return camelcase(props.iconSelected, { pascalCase: true });
});

const importCode = computed(() => {
  return `import { ${moduleName.value} } from "oh-vue-icons/icons";`;
});

watch(
  () => props.iconSelected,
  () => (close.value = false)
);

const message = ref("null");
// const proxy = getCurrentInstance()?.proxy;

const copyToClipboard = () => {
  const isSuccess = copyText(moduleName.value);

  if (isSuccess) message.value.startTimer(moduleName.value);
  else alert("Oops, unable to copy");
};

const onCloseClick = () => {
  close.value = true;
  emit("close");
};
</script>

<style scoped>
.code {
  font-family: "Roboto Mono", Monaco, courier, monospace;
}
</style>
