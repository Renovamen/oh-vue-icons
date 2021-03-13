<template>
  <Dropdown :item="item" />
</template>

<script>
import Dropdown from "./Dropdown";
import packageJson from "../../package.json";

export default {
  components: {
    Dropdown
  },
  computed: {
    item() {
      return {
        text: `v${packageJson.version}`,
        items: [
          {
            text: this.$t("nav.github.repo"),
            link: "https://github.com/Renovamen/oh-vue-icons",
            icon: "ri-github-line"
          },
          {
            text: this.$t("nav.github.changelog"),
            link:
              "https://github.com/Renovamen/oh-vue-icons/blob/master/CHANGELOG.md",
            icon: "oi-git-compare"
          }
        ]
      };
    }
  }
};
</script>
