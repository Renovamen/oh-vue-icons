<template>
  <div class="page">
    <Sidebar
      @change-tab="changeTab"
      :itemSelected="tabSelected"
      :items="tabs"
    >
      <ToolSidebar
        class="sm:hidden"
        :iconSize="iconSize"
        :iconColor="iconColor"
        :animation="iconAnimation"
        :flip="iconFlip"
        @set-size="setSize"
        @set-color="setColor"
        @set-animation="setAnimation"
        @set-flip="setFlip"
      />
    </Sidebar>

    <ToolSidebar
      class="hidden sm:block"
      :iconSize="iconSize"
      :iconColor="iconColor"
      :animation="iconAnimation"
      :flip="iconFlip"
      @set-size="setSize"
      @set-color="setColor"
      @set-animation="setAnimation"
      @set-flip="setFlip"
    />

    <div class="page-width pt-16">
      <div class="flex justify-center font-medium pt-16 pb-6">
        <div class="flex flex-col text-center">
          <h1>Oh, Vue Icons!</h1>
          <p class="desc">
            A Vue component for including inline SVG icons from different
            icon packs easily.
          </p>
        </div>
      </div>
    </div>

    <div class="page-width pb-16">
      <div class="search-box w-full pt-3 pb-1 -mt-4 -mb-5 z-10">
        <div class="grid grid-cols-8 sm:grid-cols-12 rounded-md
                    border border-gray-500 transition duration-200">
          <div class="relative col-start-1 col-span-1">
            <v-icon
              name="ri-search-2-line"
              scale="1.3"
              class="absolute h-full right-0 mr-2 sm:mr-4 transition duration-200"
              :class="{ 'search-focused': isSearchFocused }"
            />
          </div>
          <input
            ref="search"
            id="search"
            v-model="search"
            class="col-start-2 col-span-7 sm:col-span-11 py-3 sm:py-4 inline-block
                   align-middle text-base bg-transparent focus:outline-none"
            :placeholder="`Search ${countIconsByTab} icons...`"
            @focus="isSearchFocused = true"
            @blur="isSearchFocused = false"
          />
        </div>
      </div>

      <div class="mt-10">
        <div v-for="(iconSet, index) in iconSets" :key="`set-${index}`">
          <div v-if="tabSelected === iconSet.tab || tabSelected === 'All'">
            <div class="grid grid-cols-4 sm:grid-cols-8 gap-3">
              <lazy-component
                v-for="(icon, index) in filterBySearch(iconSet.components)"
                :key="`icon-${index}`"
              >
                <div
                  class="icon-block"
                  :class="{ 'selected': iconSelected === icon }"
                  @click="selectIcon(icon, iconSet.tab.toLowerCase())"
                >
                  <v-icon
                    :name="icon"
                    :scale="iconSize"
                    :animation="iconAnimation"
                    :flip="iconFlip"
                    :fill="isMultiColor ? null : iconColor"
                  />
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
</template>

<script>
import OhVueIcon from '../../src/components/Icon.vue'
import IconInfo from '../components/IconInfo.vue'
import Sidebar from '../components/Sidebar.vue'
import ToolSidebar from '../components/ToolSidebar.vue'
import { icons } from '../../iconpacks'

const iconKeys = Object.keys(OhVueIcon.icons)
const flipOptions = ['normal', 'horizontal', 'vertical', 'both']
const multiColor = ['Flat Color Icons']

export default {
  components: { 
    IconInfo,
    Sidebar,
    ToolSidebar
  },
  data() {
    return {
      search: '',
      isSearchFocused: false,
      tabSelected: 'All',
      iconSelected: '',
      categorySelected: '',
      tabs: ['All'],
      iconSets: [],
      iconSize: 2.4,
      iconColor: '#222F3D',
      iconAnimation: null,
      iconFlip: 'normal'
    }
  },
  mounted () {
    for(let icon of icons) {
      this.iconSets.push({
        tab: icon.name,
        components: iconKeys.filter(function (x) {
          return x.slice(0, icon.id.length) === icon.id
        })
      })
      this.tabs.push(icon.name)
    }
  },
  computed: {
    countIconsByTab() {
      const tabSelected = this.tabSelected
      if (tabSelected === 'All') return iconKeys.length
      return this.iconSets.find(x => {
        return x.tab === tabSelected
      }).components.length
    },
    isMultiColor() {
      return multiColor.includes(this.tabSelected)
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
      this.iconSelected = ''
      this.categorySelected = ''
    },
    setSize(value) {
      this.iconSize = value
    },
    setColor(value) {
      this.iconColor = value
    },
    setAnimation(value) {
      if(this.iconAnimation === value) this.iconAnimation = null
      else this.iconAnimation = value
    },
    setFlip() {
      const currentIndex = flipOptions.indexOf(this.iconFlip)
			const nextIndex = (currentIndex + 1) % flipOptions.length
			this.iconFlip = flipOptions[nextIndex]
    }
  }
}
</script>

<style lang="postcss">
.search-box {
  @apply bg-white;
}
.dark-mode .search-box {
  @apply bg-gray-800;
}

.search-box input {
  @apply text-gray-900;
}
.dark-mode .search-box input {
  @apply text-white;
}

.search-box .v-icon {
  @apply text-gray-500;
}
.search-box .v-icon.search-focused {
  @apply text-blue-600;
}
.dark-mode .search-box .v-icon.search-focused {
  @apply text-blue-400;
}

.icon-block {
  @apply w-20 h-20 cursor-pointer rounded-lg flex justify-center items-center
         transition ease-out duration-300 border-2 border-solid border-transparent;
}
.icon-block.selected {
  @apply bg-gray-200;
}
.dark-mode .icon-block.selected {
  @apply bg-gray-700;
}
.icon-block:not(.selected):hover {
  @apply border-gray-400;
}
.dark-mode .icon-block:not(.selected):hover {
  @apply border-gray-600;
}

p.desc {
  @apply text-gray-600 mt-3;
}
.dark-mode p.desc {
  @apply text-gray-500;
}
</style>

<style scoped>
.search-box {
  position: -webkit-sticky;
  position: sticky;
  top: 49px;
}
</style>