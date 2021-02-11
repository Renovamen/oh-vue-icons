export const state = () => ({
  isSidebarOpen: false
});

export const mutations = {
  toggleSidebar(state) {
    state.isSidebarOpen = !state.isSidebarOpen;
  }
};
