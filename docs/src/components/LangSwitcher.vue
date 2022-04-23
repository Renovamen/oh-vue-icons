<template>
  <Dropdown :item="item" />
</template>

<script setup lang="ts">
import SUPPORT_LOCALES from "~/i18n";
import { switchLocalePath } from "~/composables";

const { t, availableLocales } = useI18n();
const route = useRoute();

const item = computed(() => {
  const items = [];

  for (const locale of availableLocales) {
    items.push({
      link: switchLocalePath(locale),
      text: SUPPORT_LOCALES[locale].name,
      icon: SUPPORT_LOCALES[locale].icon
    });
  }

  return {
    text: t("nav.language"),
    items: items
  };
});
</script>
