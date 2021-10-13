import nightwind from "nightwind/helper";

export const state = () => ({
  dark: false,
  sidebar: false
});

export const mutations = {
  setDark(state: any, value: boolean) {
    state.dark = value;
    nightwind.enable(value);
  },
  toggleSidebar(state: any, value: boolean) {
    state.sidebar = value;
  }
};
