<template>
  <div
    class="page"
    :class="{
      'text-gray-900 bg-white': !isDark,
      'text-white bg-gray-800': isDark
    }"
  >
    <Sidebar
      @change-tab="changeTab"
      :itemSelected="tabSelected"
      :items="tabs"
    />
    <div class="page-width py-16">
      <div class="flex justify-center font-medium pt-16 pb-6">
        <div class="flex flex-col text-center">
          <div class="text-3xl font-semibold">Oh, Vue Icons!</div>
          <div
            class="mt-3 px-2"
            :class="{
              'text-gray-600': !isDark,
              'text-gray-500': isDark
            }"
          >
            A Vue component for including inline SVG icons from different
            icon packs easily.
          </div>
        </div>
      </div>
      <div
        class="search-box w-full pt-3 pb-1 -mt-1 -mb-5 z-10"
        :class="{
          'bg-white': !isDark,
          'bg-gray-800': isDark
        }"
      >
        <div class="grid grid-cols-8 sm:grid-cols-12 rounded-md
                    border border-gray-500 transition duration-200">
          <div class="relative col-start-1 col-span-1">
            <v-icon
              name="ri-search-2-line"
              scale="1.3"
              class="absolute h-full right-0 mr-2 sm:mr-4 transition duration-200"
              :class="{
                'text-gray-500': !isSearchFocused,
                'text-blue-600': isSearchFocused & !isDark,
                'text-blue-400': isSearchFocused & isDark
              }"
            />
          </div>
          <input
            ref="search"
            id="search"
            v-model="search"
            class="col-start-2 col-span-7 sm:col-span-11 py-3 sm:py-4
                    text-base focus:outline-none bg-transparent
                    inline-block align-middle"
            :class="{
              'text-gray-900': !isDark,
              'text-white': isDark
            }"
            :placeholder="`Search ${countIconsByTab} icons...`"
            @focus="isSearchFocused = true"
            @blur="isSearchFocused = false"
          />
        </div>
      </div>
      <div>
        <div class="mt-10">
          <div v-for="(iconSet, index) in iconSets" :key="`set-${index}`">
            <div v-if="tabSelected === iconSet.tab || tabSelected === 'All'">
              <div class="grid grid-cols-4 sm:grid-cols-8 gap-3">
                <lazy-component
                  v-for="(icon, index) in filterBySearch(iconSet.components)"
                  :key="`icon-${index}`"
                >
                  <div
                    class="px-4 py-5 cursor-pointer rounded-lg
                            transition ease-out duration-300"
                    :class="{
                      'text-gray-300': isDark,
                      'text-gray-800': !isDark,
                      'bg-gray-200': !isDark && iconSelected === icon,
                      'bg-gray-700': isDark && iconSelected === icon,
                      'hover:shadow-icon': !(iconSelected === icon)
                    }"
                    @click="selectIcon(icon, iconSet.tab.toLowerCase())"
                  >
                    <div class="flex justify-center">
                      <v-icon
                        :name="icon"
                        scale="2"
                      />
                    </div>
                  </div>
                </lazy-component>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IconInfo
        :iconSelected="iconSelected"
        :categorySelected="categorySelected"
        @close="resetSelectedIcon"
        class="z-30"
      />
    </div>
  </div>
</template>

<script>
import OhVueIcon from '../../src/components/Icon.vue'
import IconInfo from "../components/IconInfo.vue"
import Sidebar from "../components/Sidebar.vue"

var iconKeys = Object.keys(OhVueIcon.icons)
// Font Awesome
var faIcons = iconKeys.filter(function (x) {
  return x.slice(0, 2) === 'fa'
})
// Remix Icon
var riIcons = iconKeys.filter(function (x) {
  return x.slice(0, 2) === 'ri'
})
// academicons
var aiIcons = iconKeys.filter(function (x) {
  return x.slice(0, 2) === 'ai'
})
// Simple Icons
var siIcons = iconKeys.filter(function (x) {
  return x.slice(0, 2) === 'si'
})
// Weather Icons
var wiIcons = iconKeys.filter(function (x) {
  return x.slice(0, 2) === 'wi'
})
// gameicons
var gameIcons = iconKeys.filter(function (x) {
  return x.slice(0, 4) === 'game'
})

export default {
  components: { 
    IconInfo,
    Sidebar
  },
  data() {
    return {
      search: "",
      isSearchFocused: false,
      tabSelected: "All",
      iconSelected: "",
      categorySelected: "",
      tabs: [
        "All",
        "Font Awesome",
        "Remix Icon",
        "academicons",
        "Simple Icons",
        "Weather Icons",
        "gameicons"
      ],
      iconSets: [
        {
          tab: "Font Awesome",
          components: faIcons,
          count: faIcons.length
        },
        {
          tab: "Remix Icon",
          components: riIcons,
          count: riIcons.length
        },
        {
          tab: "academicons",
          components: aiIcons,
          count: aiIcons.length
        },
        {
          tab: "Simple Icons",
          components: siIcons,
          count: siIcons.length
        },
        {
          tab: "Weather Icons",
          components: wiIcons,
          count: wiIcons.length
        },
        {
          tab: "gameicons",
          components: gameIcons,
          count: gameIcons.length
        }
      ]
    }
  },
  computed: {
    countIconsByTab() {
      if (this.tabSelected === "Font Awesome") return faIcons.length
      else if (this.tabSelected === "Remix Icon") return riIcons.length
      else if (this.tabSelected === "academicons") return aiIcons.length
      else if (this.tabSelected === "Simple Icons") return siIcons.length
      else if (this.tabSelected === "Weather Icons") return wiIcons.length
      else if (this.tabSelected === "gameicons") return gameIcons.length
      else if (this.tabSelected === "All") return iconKeys.length
    },
    isDark() {
      return this.$store.state.theme.isDark
    }
  },
  methods: {
    selectIcon(name, category) {
      this.iconSelected = name
      this.categorySelected = category
    },
    changeTab(name) {
      this.resetSelectedIcon()
      this.tabSelected = name
    },
    filterBySearch(components) {
      return Object.values(components).filter(component =>
        component.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    resetSelectedIcon() {
      this.iconSelected = ""
      this.categorySelected = ""
    }
  }
}
</script>

<style scoped>
.search-box {
  position: -webkit-sticky;
  position: sticky;
  top: 53px;
}
</style>