import { defineStore } from "pinia";

const flipOptions = ["normal", "horizontal", "vertical", "both"];

export const useIconStore = defineStore("icon", () => {
  const state = reactive({
    size: 2.4,
    color: "#222F3D",
    animation: null as string | null,
    flip: "normal",
    animSpeed: "normal"
  });

  const setSize = (value: number) => {
    state.size = value;
  };

  const setColor = (value: string) => {
    state.color = value;
  };

  const setAnimation = (value: string) => {
    state.animation = state.animation === value ? null : value;
  };

  const setAnimSpeed = (value: string) => {
    state.animSpeed = value;
  };

  const setFlip = () => {
    const currentIndex = flipOptions.indexOf(state.flip);
    const nextIndex = (currentIndex + 1) % flipOptions.length;
    state.flip = flipOptions[nextIndex];
  };

  return {
    state,
    setSize,
    setColor,
    setAnimation,
    setAnimSpeed,
    setFlip
  };
});
