<template>
  <div
    class="page"
    :class="{
      'text-gray-900 bg-white': !isDark,
      'text-white bg-gray-800': isDark
    }"
  >
    <div class="pb-16 pt-20">
      <div class="flex justify-center font-medium pt-12 pb-12">
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
        class="tool-bar w-full py-2 -mt-2 -mb-6 z-10"
        :class="{
          'bg-white': !isDark,
          'bg-gray-800': isDark
        }"
      >
        <div class="page-width my-4 flex justify-center">
          <nav>
            <button
              v-for="tab in tabs"
              :key="tab"
              class="sm:mr-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500
                      hover:text-blue-600 focus:outline-none focus:text-blue-600 focus:bg-blue-50"
              :class="{
                'text-blue-700 bg-blue-100': tabSelected === tab
              }"
              @click="changeTab(tab)"
            >
              {{ tab }}
            </button>
          </nav>
        </div>
        <div
          class="page-width grid grid-cols-8 sm:grid-cols-12 rounded-md
                  border border-gray-500 transition duration-200">
          <div class="relative col-start-1 col-span-1">
            <OhVueIcon
              name="ri/search-2-line"
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
            class="col-start-2 col-span-7 sm:col-span-11 pt-4 pb-4
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
      <div class="page-width">
        <div class="mt-10">
          <div v-for="(iconSet, index) in iconSets" :key="index">
            <div v-if="tabSelected === iconSet.tab || tabSelected === 'All'">
              <div class="grid grid-cols-4 sm:grid-cols-8 gap-3">
                <lazy-component
                  v-for="(icon, index) in filterBySearch(iconSet.components)"
                  :key="index"
                >
                  <div
                    class="px-4 py-5 sm:py-6 cursor-pointer rounded-lg
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
                      <OhVueIcon
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
      />
    </div>
  </div>
</template>

<script>
import OhVueIcon from '../../src/components/Icon.vue'
import Navbar from "../components/Navbar.vue"
import IconInfo from "../components/IconInfo.vue"
import Footer from "../components/Footer.vue"
import '../../src/icons'

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
// gameicons
var gameIcons = iconKeys.filter(function (x) {
  return x.slice(0, 4) === 'game'
})

export default {
  components: { 
    IconInfo,
    OhVueIcon
  },
  data() {
    return {
      search: "",
      isSearchFocused: false,
      tabs: ["All", "Font Awesome", "Remix Icon", "academicons", "gameicons"],
      tabSelected: "All",
      iconSelected: "",
      categorySelected: "",
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
          tab: "gameicons",
          components: gameIcons,
          count: gameIcons.length
        }
      ]
    };
  },
  computed: {
    countIconsByTab() {
      if (this.tabSelected === "Font Awesome") return faIcons.length;
      else if (this.tabSelected === "Remix Icon") return riIcons.length
      else if (this.tabSelected === "academicons") return aiIcons.length
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
.page-width {
  max-width: 800px;
  margin: 16px auto;
  padding: 0 10px;
}
.tool-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
}
</style>