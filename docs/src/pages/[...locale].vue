<template>
  <div class="flex-1 px-3">
    <Sidebar
      :item-selected="state.tabSelected"
      :items="iconSets"
      @changeTab="changeTab"
    >
      <ToolSidebar class="show-on-mobile" />
    </Sidebar>

    <ToolSidebar class="hide-on-mobile" />

    <div class="homepage mx-auto text-center pt-16">
      <div class="flex justify-center pt-16 pb-6">
        <div class="flex flex-col text-center">
          <h1 class="text-gray-800 dark:text-gray-100 text-3xl font-bold">
            Oh, Vue Icons!
          </h1>
          <p class="text-gray-600 dark:text-gray-300 font-medium mt-3">
            {{ t("tagline") }}
          </p>
        </div>
      </div>
    </div>

    <div class="homepage mx-auto text-center pb-16">
      <!-- --------- Search box --------- -->
      <div
        class="sticky top-13 bg-white dark:bg-gray-800 w-full pt-3 pb-1 -mt-4 -mb-5 z-10"
      >
        <div
          class="grid grid-cols-8 sm:grid-cols-10 xl:grid-cols-12 rounded-md border border-gray-500 dark:border-gray-400 transition duration-200"
        >
          <div
            class="relative col-start-1 col-span-1 flex items-center justify-center"
          >
            <v-icon
              name="ri-search-2-line"
              scale="1.3"
              class="search-icon text-gray-500 transition duration-200"
              :class="[state.isSearchFocused && 'text-blue-600']"
            />
          </div>
          <input
            v-model="state.searchTerm"
            class="text-gray-900 dark:text-gray-100 col-start-2 col-span-7 sm:col-span-9 xl:col-span-11 py-3 sm:py-4 inline-block align-middle text-base bg-transparent focus:outline-none"
            :placeholder="`Search ${countIconsByTab} icons...`"
            @focus="state.isSearchFocused = true"
            @blur="state.isSearchFocused = false"
          />
        </div>
      </div>

      <!-- --------- Icon list --------- -->
      <div class="mt-10 grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-8 gap-3">
        <div
          v-for="(icon, index) in filterBySearch.slice(0, state.maxIcons)"
          :key="`icon-${index}`"
          class="w-20 h-20 cursor-pointer rounded-lg flex justify-center items-center transition ease-out duration-300 border-2 border-solid border-transparent"
          :class="[
            state.iconSelected === icon && 'bg-gray-200 dark:bg-gray-700',
            state.iconSelected !== icon &&
              'hover:border-gray-400 dark:hover:border-gray-500'
          ]"
          @click="selectIcon(icon, getIconSet.tab.toLowerCase())"
        >
          <v-icon
            :name="icon"
            :scale="iconState.size"
            :animation="iconState.animation"
            :speed="
              iconState.animSpeed === 'normal' ? null : iconState.animSpeed
            "
            :flip="iconState.flip === 'normal' ? null : iconState.flip"
            :fill="iconState.color"
          />
        </div>
      </div>

      <!-- --------- Load more --------- -->
      <button
        v-if="filterBySearch.length > state.maxIcons"
        class="mt-6 capitalize text-gray-600 border border-solid border-gray-500 hover:bg-gray-100 dark:(text-gray-300 border-gray-400 hover:bg-gray-700) rounded py-1 px-3"
        @click="loadMore"
      >
        Load More
      </button>
    </div>

    <IconInfo
      :icon-selected="state.iconSelected"
      :category-selected="state.categorySelected"
      class="z-30"
      @close="resetSelectedIcon"
    />
  </div>
</template>

<script setup lang="ts">
import { listIcons } from "oh-vue-icons";
import { useIconStore } from "~/stores/icon";
import icons from "~/icons";

const { t } = useI18n();

const max = 304;
const iconKeys = Object.keys(listIcons()).filter(
  (v) =>
    ["baidu", "webpack", "vue", "html5-c", "oh-vue-icons"].indexOf(v) === -1
);

const state = reactive({
  searchTerm: "",
  isSearchFocused: false,
  tabSelected: "All",
  iconSelected: "",
  categorySelected: "",
  maxIcons: max
});

const iconSets = [
  {
    tab: "All",
    components: iconKeys
  }
] as any[];

for (const icon of icons) {
  iconSets.push({
    tab: icon.name,
    id: icon.id,
    components: iconKeys.filter(function (x) {
      return x.slice(0, icon.id.length) === icon.id;
    }),
    multiColor: icon.multiColor,
    website: icon.website
  });
}

const getIconSet = computed(() => {
  const tabSelected = state.tabSelected;
  return iconSets.find((x) => {
    return x.tab === tabSelected;
  });
});

const countIconsByTab = computed(() => {
  return getIconSet.value.components.length;
});

const filterBySearch = computed(() => {
  const components = getIconSet.value.components;
  return components.filter((component: string) => {
    return component.toLowerCase().includes(state.searchTerm.toLowerCase());
  });
});

const changeTab = (name: string) => {
  resetSelectedIcon();
  state.tabSelected = name;
  state.maxIcons = max;
};

const resetSelectedIcon = () => {
  state.iconSelected = "";
  state.categorySelected = "";
};

const loadMore = () => {
  state.maxIcons += max;
};

const selectIcon = (name: string, category: string) => {
  state.iconSelected = name;
  state.categorySelected = category;
};

const iconStore = useIconStore();
const iconState = computed(() => iconStore.state);
</script>
