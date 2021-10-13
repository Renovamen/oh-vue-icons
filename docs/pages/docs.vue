<template>
  <div class="page">
    <Sidebar />

    <div class="page-width markdown pt-24 pb-16 text-gray-700 text-base">
      <div class="text-left sm:text-center">
        <RandomIcon />
        <h1>{{ page.title }}</h1>
        <p class="my-0">
          {{ $t("tagline") }}
        </p>
        <p class="my-0">
          <span v-for="(item, index) in page.links" :key="`doc-link-${index}`">
            <a :href="item.link" target="_blank">
              {{ item.name }}
            </a>
            ·
          </span>
          <nuxt-link :to="localePath('index')">
            icons
          </nuxt-link>
        </p>
      </div>

      <div class="text-left">
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import RandomIcon from "../components/RandomIcon.vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  components: {
    RandomIcon,
    Sidebar
  },
  async asyncData({ $content }) {
    const pageEN = await $content("docs-en").fetch();
    const pageCN = await $content("docs-cn").fetch();
    return {
      pages: {
        en: pageEN,
        cn: pageCN
      }
    };
  },
  computed: {
    page() {
      return this.pages[this.$i18n.locale];
    }
  }
});
</script>


<style lang="postcss">
.nuxt-content-highlight {
  @apply mt-2 mb-4;
}

.nuxt-content-highlight pre {
  @apply m-0 rounded bg-transparent border border-solid border-gray-300;
}

.dark .nuxt-content-highlight pre {
  @apply border-gray-700;
}
</style>
