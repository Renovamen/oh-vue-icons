export const state = () => ({
  isSidebarOpen: false
});

export const mutations = {
  toggleSidebar(state, payload) {
    state.isSidebarOpen = payload;
  }
};
