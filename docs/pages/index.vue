<template>
  <div class="page">
    <Sidebar
      :item-selected="tabSelected"
      :items="iconSets"
      @change-tab="changeTab"
    >
      <ToolSidebar
        class="sm:hidden"
        :icon-size="iconSize"
        :icon-color="iconColor"
        :animation="iconAnimation"
        :anim-speed="iconAnimSpeed"
        :flip="iconFlip"
        @set-size="setSize"
        @set-color="setColor"
        @set-animation="setAnimation"
        @set-animation-speed="setAnimSpeed"
        @set-flip="setFlip"
      />
    </Sidebar>

    <ToolSidebar
      class="hidden sm:block"
      :icon-size="iconSize"
      :icon-color="iconColor"
      :animation="iconAnimation"
      :anim-speed="iconAnimSpeed"
      :flip="iconFlip"
      @set-size="setSize"
      @set-color="setColor"
      @set-animation="setAnimation"
      @set-animation-speed="setAnimSpeed"
      @set-flip="setFlip"
    />

    <div class="page-width pt-16">
      <div class="flex justify-center pt-16 pb-6">
        <div class="flex flex-col text-center">
          <h1>Oh, Vue Icons!</h1>
          <p class="desc">
            {{ $t("tagline") }}
          </p>
        </div>
      </div>
    </div>

    <div class="page-width pb-16">
      <!----------------- Search Box ----------------->
      <div class="search-box w-full pt-3 pb-1 -mt-4 -mb-5 z-10">
        <div
          class="grid grid-cols-8 sm:grid-cols-12 rounded-md border border-gray-500 transition duration-200"
        >
          <div class="relative col-start-1 col-span-1">
            <v-icon
              name="ri-search-2-line"
              scale="1.3"
              class="absolute h-full right-0 mr-2 sm:mr-4 transition duration-200"
              :class="{ 'search-focused': isSearchFocused }"
            />
          </div>
          <input
            id="search"
            ref="search"
            v-model="search"
            class="col-start-2 col-span-7 sm:col-span-11 py-3 sm:py-4 inline-block align-middle text-base bg-transparent focus:outline-none"
            :placeholder="`Search ${countIconsByTab} icons...`"
            @focus="isSearchFocused = true"
            @blur="isSearchFocused = false"
          />
        </div>
      </div>

      <!----------------- Icons ----------------->
      <div class="mt-10">
        <div class="grid grid-cols-4 sm:grid-cols-8 gap-3">
          <div
            v-for="(icon, index) in filterBySearch(getIconSet.components).slice(
              0,
              maxIcons
            )"
            :key="`icon-${index}`"
            class="icon-block"
            :class="{ selected: iconSelected === icon }"
            @click="selectIcon(icon, getIconSet.tab.toLowerCase())"
          >
            <v-icon
              :name="icon"
              :scale="iconSize"
              :animation="iconAnimation"
              :speed="iconAnimSpeed === 'normal' ? null : iconAnimSpeed"
              :flip="iconFlip === 'normal' ? null : iconFlip"
              :fill="iconColor"
            />
          </div>
        </div>
        <button
          v-if="filterBySearch(getIconSet.components).length > maxIcons"
          class="load-btn"
          @click="loadMore"
        >
          Load More
        </button>
      </div>
    </div>

    <IconInfo
      :icon-selected="iconSelected"
      :category-selected="categorySelected"
      class="z-30"
      @close="resetSelectedIcon"
    />
  </div>
</template>

<script>
import OhVueIcon from "../../src/components/icon";
import IconInfo from "../components/IconInfo.vue";
import Sidebar from "../components/Sidebar.vue";
import ToolSidebar from "../components/ToolSidebar.vue";
import { icons } from "../icons";

const iconKeys = Object.keys(OhVueIcon.icons);
const flipOptions = ["normal", "horizontal", "vertical", "both"];
const max = 304;

export default {
  components: {
    IconInfo,
    Sidebar,
    ToolSidebar
  },
  data() {
    return {
      search: "",
      isSearchFocused: false,
      tabSelected: "All",
      iconSelected: "",
      categorySelected: "",
      iconSets: [
        {
          tab: "All",
          components: iconKeys
        }
      ],
      maxIcons: max,
      iconSize: 2.4,
      iconColor: "#222F3D",
      iconAnimation: null,
      iconFlip: "normal",
      iconAnimSpeed: "normal"
    };
  },
  computed: {
    getIconSet() {
      const tabSelected = this.tabSelected;
      return this.iconSets.find(x => {
        return x.tab === tabSelected;
      });
    },
    countIconsByTab() {
      return this.getIconSet.components.length;
    }
  },
  mounted() {
    for (let icon of icons) {
      this.iconSets.push({
        tab: icon.name,
        components: iconKeys.filter(function(x) {
          return x.slice(0, icon.id.length) === icon.id;
        }),
        multiColor: icon.multiColor
      });
    }
  },
  methods: {
    selectIcon(name, category) {
      this.iconSelected = name;
      this.categorySelected = category;
    },
    changeTab(name) {
      this.resetSelectedIcon();
      this.tabSelected = name;
      this.maxIcons = max;
    },
    filterBySearch(components) {
      return Object.values(components).filter(component =>
        component.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    resetSelectedIcon() {
      this.iconSelected = "";
      this.categorySelected = "";
    },
    loadMore() {
      this.maxIcons += max;
    },
    setSize(value) {
      this.iconSize = value;
    },
    setColor(value) {
      this.iconColor = value;
    },
    setAnimation(value) {
      if (this.iconAnimation === value) this.iconAnimation = null;
      else this.iconAnimation = value;
    },
    setAnimSpeed(value) {
      this.iconAnimSpeed = value;
    },
    setFlip() {
      const currentIndex = flipOptions.indexOf(this.iconFlip);
      const nextIndex = (currentIndex + 1) % flipOptions.length;
      this.iconFlip = flipOptions[nextIndex];
    }
  }
};
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

.load-btn,
.load-btn:focus {
  @apply outline-none;
}
.load-btn {
  @apply mt-6 capitalize text-gray-600 border border-solid border-gray-500 rounded py-1 px-3;
}
.load-btn:hover {
  @apply bg-gray-100;
}
.dark-mode .load-btn {
  @apply text-gray-500;
}
.dark-mode .load-btn:hover {
  @apply bg-gray-700;
}

p.desc {
  @apply text-gray-600 font-medium mt-3;
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
