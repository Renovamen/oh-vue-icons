<template>
  <div
    v-if="iconComponent && close === false"
    class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5"
  >
    <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-blue-500 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-blue-700 text-white">
              <OhVueIcon
                :name="iconComponent"
                scale="1.5"
              />
            </span>
            <p class="ml-3 font-medium text-white code truncate">
              <span class="md:hidden text-xs">
                {{ importCode }}
              </span>
              <span class="hidden md:inline "> {{ importCode }} </span>
            </p>
          </div>
          <div
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
          >
            <div class="flex rounded-md shadow-sm">
              <button
                class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-600 bg-white hover:text-blue-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                @click="onDownloadSVG"
              >
                <OhVueIcon
                  name="ri/download-fill"
                  class="h-4 w-4 mr-1"
                />
                <span>SVG</span>
              </button>
              <button
                class="ml-4 flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-600 bg-white hover:text-blue-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                @click="copyToClipboard"
              >
                <OhVueIcon
                  name="fa/regular/copy"
                  class="h-5 w-5 mr-1"
                />
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
              <OhVueIcon
                name="ri/close-fill"
                class="h-6 w-6 text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../src/icons'
import OhVueIcon from '../../src/components/Icon.vue'

export default {
  components: {
    OhVueIcon
  },
  props: {
    categorySelected: {},
    iconSelected: {}
  },
  data() {
    return {
      close: false
    }
  },
  computed: {
    iconComponent() {
      return this.iconSelected
    },
    importCode() {
      return `import "oh-vue-icons/${this.iconSelected}"`;
    }
  },
  watch: {
    iconComponent() {
      this.close = false;
    }
  },
  methods: {
    copyToClipboard() {
      const $input = document.createElement("input")
      $input.type = "text"
      $input.value = this.iconSelected
      document.body.appendChild($input)
      $input.select()

      try {
        document.execCommand("copy")
        // TODO: notify copy to clipboard success
      }
      catch(err) {
        // TODO: notify copy to clipboard error
        alert("Oops, unable to copy")
      }

      $input.remove()
    },
    onCloseClick() {
      this.close = true
      this.$emit('close')
    },
    onDownloadSVG() {
      let iconSet = this.iconSelected.slice(0, this.iconSelected.indexOf("/"))
      let svgName = this.iconSelected.substring(this.iconSelected.lastIndexOf("/") + 1)
      let fileName = `${iconSet}-${svgName}.svg`
      let dirName = this.iconSelected.substring(0, this.iconSelected.lastIndexOf("/"))
      if(dirName === 'fa/regular') dirName = 'fa'
      else if(dirName === 'fa') dirName = 'fa/solid'

      let url = `https://cdn.jsdelivr.net/gh/Renovamen/oh-vue-icons@master/assets/svg/${dirName}/${fileName}`
      let xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = function() {
        let a = document.createElement('a')
        a.href = window.URL.createObjectURL(xhr.response)
        a.download = fileName // Set the file name.
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
      }
      xhr.open('GET', url)
      xhr.send()
    }
  }
}
</script>

<style scoped>
.code {
  font-family: "Roboto Mono", Monaco, courier, monospace;
}
</style>
