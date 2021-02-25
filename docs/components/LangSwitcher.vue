<template>
  <Dropdown :item="item" />
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  components: {
    Dropdown
  },
  computed: {
    item() {
      let items = [];
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
};
</script>
