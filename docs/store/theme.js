export const state = () => ({
  isDark: false
});

export const mutations = {
  toggleTheme(state) {
    state.isDark = !state.isDark;
  }
};
