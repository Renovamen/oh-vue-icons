import { defineStore } from "pinia";

export const useSiteStore = defineStore("site", () => {
  const sidebar = ref(false);

  const toggleSidebar = (value: boolean) => {
    sidebar.value = value;
  };

  return {
    sidebar,
    toggleSidebar
  };
});
