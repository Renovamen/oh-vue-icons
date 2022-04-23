<template>
  <RouterView />
</template>

<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "Oh, Vue Icons!",
  meta: [
    {
      name: "description",
      content:
        "Include inline SVG icons from different popular icon packs in Vue 2 & 3 easily."
    }
  ]
});

const { availableLocales, locale } = useI18n();
const route = useRoute();

const toggleLocale = () => {
  if (route.path === "/" || route.path === "/docs") {
    locale.value = "en";
    return;
  }

  for (const l of availableLocales) {
    if (route.path.startsWith(`/${l}`)) {
      locale.value = l;
      return;
    }
  }

  locale.value = "en"; // fall back to "en"
};

watch(
  () => route.path,
  () => toggleLocale()
);

toggleLocale();
</script>
