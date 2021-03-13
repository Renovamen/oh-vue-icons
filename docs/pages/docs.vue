<template>
  <div class="page">
    <Sidebar />

    <div class="page-width docs-content">
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
          <NuxtLink to="/">
            icons
          </NuxtLink>
        </p>
      </div>

      <div class="text-left">
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
import RandomIcon from "../components/RandomIcon";
import Sidebar from "../components/Sidebar.vue";

export default {
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
};
</script>

<style lang="postcss">
.docs-content {
  @apply text-gray-700 text-base;
}

.dark-mode .docs-content {
  @apply text-gray-300;
}

.docs-content h1 {
  @apply mt-10 mb-6;
}

.docs-content h2 {
  @apply mt-20 mb-4;
}

.docs-content h3 {
  @apply mt-16 mb-4;
}

.docs-content h4 {
  @apply mt-8 mb-2;
}

.docs-content h2 + h3 {
  @apply mt-4;
}

.docs-content {
  @apply pt-24 pb-16;
}

.docs-content a {
  @apply text-blue-600 font-medium;
}

.docs-content a:hover {
  @apply underline;
}

.dark-mode .docs-content a {
  @apply text-blue-400;
}

.nuxt-content-highlight {
  @apply mt-2 mb-4;
}

.nuxt-content-highlight pre {
  @apply m-0 rounded bg-transparent border border-solid border-gray-300;
}

.dark-mode .nuxt-content-highlight pre {
  @apply border-gray-700;
}

.docs-content ul {
  @apply my-2;
}

.docs-content li {
  @apply ml-8 list-disc leading-7;
}

.docs-content strong {
  @apply font-semibold;
}
</style>
