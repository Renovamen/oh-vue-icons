<template>
  <Dropdown :item="item" />
</template>

<script setup lang="ts">
import pkgJson from "../../../package/package.json";

const { t } = useI18n();

const item = computed(() => ({
  text: `v${pkgJson.version}`,
  items: [
    {
      text: t("nav.github.repo"),
      link: "https://github.com/Renovamen/oh-vue-icons",
      icon: "ri-github-line"
    },
    {
      text: t("nav.github.changelog"),
      link: "https://github.com/Renovamen/oh-vue-icons/blob/master/CHANGELOG.md",
      icon: "oi-git-compare"
    }
  ]
}));
</script>
