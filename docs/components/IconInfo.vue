<template>
  <div
    v-if="iconComponent && close === false"
    class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5"
  >
    <Message ref="msg" />
    <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-blue-500 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-blue-700 text-white">
              <v-icon :name="iconComponent" scale="1.5" />
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
                class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-600 bg-white hover:text-blue-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                @click="onDownloadSVG"
              >
                <v-icon name="ri-download-fill" class="h-4 w-4 mr-1" />
                <span>SVG</span>
              </button>
              <button
                class="ml-4 flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-600 bg-white hover:text-blue-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                @click="copyToClipboard"
              >
                <v-icon name="fa-regular-copy" class="h-5 w-5 mr-1" />
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

<script>
import camelcase from "camelcase";
import Message from "./Message.vue";

export default {
  components: {
    Message
  },
  props: {
    categorySelected: {},
    iconSelected: {}
  },
  data() {
    return {
      close: false
    };
  },
  computed: {
    iconComponent() {
      return this.iconSelected;
    },
    moduleName() {
      return camelcase(this.iconSelected, { pascalCase: true });
    },
    importCode() {
      return `import { ${this.moduleName} } from 'oh-vue-icons/icons'`;
    }
  },
  watch: {
    iconComponent() {
      this.close = false;
    }
  },
  methods: {
    copyToClipboard() {
      const $input = document.createElement("input");
      $input.type = "text";
      $input.value = camelcase(this.iconSelected, { pascalCase: true });
      document.body.appendChild($input);
      $input.select();

      try {
        document.execCommand("copy");
        // TODO: notify copy to clipboard success
      } catch (err) {
        // TODO: notify copy to clipboard error
        alert("Oops, unable to copy");
      }

      $input.remove();

      this.$refs.msg.startTimer(this.moduleName);
    },
    onCloseClick() {
      this.close = true;
      this.$emit("close");
    },
    onDownloadSVG() {
      const fileName = this.iconSelected;
      const iconSet = fileName.slice(0, fileName.indexOf("-"));
      const url = `https://cdn.jsdelivr.net/gh/Renovamen/oh-vue-icons@master/assets/${iconSet}/${fileName}.svg`;
      const xhr = new XMLHttpRequest();

      xhr.responseType = "blob";
      xhr.onload = function() {
        let a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = fileName;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
      };
      xhr.open("GET", url);
      xhr.send();
    }
  }
};
</script>

<style scoped>
.code {
  font-family: "Roboto Mono", Monaco, courier, monospace;
}
</style>
