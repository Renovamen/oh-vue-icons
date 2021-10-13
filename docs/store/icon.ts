export const state = () => ({
  size: 2.4,
  color: "#222F3D",
  animation: null,
  flip: "normal",
  animSpeed: "normal"
});

const flipOptions = ["normal", "horizontal", "vertical", "both"];

export const mutations = {
  setSize(state: any, value: number) {
    state.size = value;
  },
  setColor(state: any, value: string) {
    state.color = value;
  },
  setAnimation(state: any, value: string) {
    if (state.animation === value) state.animation = null;
    else state.animation = value;
  },
  setAnimSpeed(state: any, value: string) {
    state.animSpeed = value;
  },
  setFlip(state: any) {
    const currentIndex = flipOptions.indexOf(state.flip);
    const nextIndex = (currentIndex + 1) % flipOptions.length;
    state.flip = flipOptions[nextIndex];
  }
};
