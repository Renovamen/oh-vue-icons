<template>
<div class="page">
  <Sidebar />
  
  <div class="page-width docs-content">
    <div class="text-left sm:text-center">
      <RandomIcon />
      <h1>{{ page.title }}</h1>
      <p class="my-0">{{ page.desc }}</p>
      <p class="my-0">
        <span
          v-for="(item, index) in page.links"
          :key="`doc-link-${index}`"
        >
          <a
            :href="item.link"
            target="_blank"
          >
            {{ item.name }}
          </a>
          ·
        </span>
        <NuxtLink to="/">icons</NuxtLink>
      </p>
      <p class="my-0">
        Now the following icon packs are supported:
      </p>
      <p class="mt-0 mb-20">
        <span
          v-for="(iconset, index) in page.iconsets"
          :key="`doc-set-${index}`"
        >
          <a
            :href="iconset.link"
            target="_blank"
          >
            {{ iconset.name }}
          </a>
          <span v-if="index !== page.iconsets.length - 1">·</span>
        </span>
      </p>
    </div>

    <div class="text-left">
      <nuxt-content :document="page" />
    </div>
  </div>
</div>
</template>

<script>
import RandomIcon from '../components/RandomIcon'
import Sidebar from "../components/Sidebar.vue"

export default {
  components: {
    RandomIcon,
    Sidebar
  },
  async asyncData ({ $content }) {
    const page = await $content('docs').fetch()
    return {
      page
    }
  }
}
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
  @apply mt-20 text-2xl pb-2;
}

.docs-content h3 {
  @apply my-4 mt-16 text-xl;
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
  @apply text-blue-400
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
</style>
