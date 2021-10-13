<template>
  <Dropdown :item="item" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Dropdown from "./Dropdown.vue";

export default defineComponent({
  name: "LangSwitcher",
  components: {
    Dropdown
  },
  computed: {
    item() {
      const items = [];
      for (let locale of this.$i18n.locales) {
        items.push({
          link: this.switchLocalePath(locale.code),
          text: locale.name,
          icon: locale.icon
        });
      }
      return {
        text: this.$t("nav.language"),
        items: items
      };
    }
  }
});
</script>
