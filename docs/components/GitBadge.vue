<template>
  <Dropdown :item="item" />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Dropdown from "./Dropdown.vue";
// @ts-ignore
import pkgJson from "../../package/package.json";

export default defineComponent({
  name: "GitBadge",
  components: {
    Dropdown
  },
  computed: {
    item() {
      return {
        text: `v${pkgJson.version}`,
        items: [
          {
            text: this.$t("nav.github.repo"),
            link: "https://github.com/Renovamen/oh-vue-icons",
            icon: "ri-github-line"
          },
          {
            text: this.$t("nav.github.changelog"),
            link: "https://github.com/Renovamen/oh-vue-icons/blob/master/CHANGELOG.md",
            icon: "oi-git-compare"
          }
        ]
      };
    }
  }
});
</script>
