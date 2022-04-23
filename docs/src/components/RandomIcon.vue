<template>
  <div class="h-40 w-40 mt-4 mx-auto block relative">
    <figure
      class="absolute rounded-full transition-all duration-250 cursor-pointer bg-gray-700 text-blue-400 m-2.5 p-7.5 hover:(m-0 p-10 bg-blue-400 text-gray-700) dark:(bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-gray-200)"
      @mouseenter="toggle"
      @mouseleave="toggle"
      @click="change"
    >
      <v-icon :name="state.name" scale="4" />
    </figure>
  </div>
</template>

<script setup lang="ts">
import { listIcons } from "oh-vue-icons";
const keys = Object.keys(listIcons());

const randomIcon = () => {
  return keys[Math.floor(Math.random() * keys.length)];
};

const state = reactive({
  name: randomIcon(),
  playing: true
});

onMounted(() => {
  setInterval(() => {
    if (state.playing) change();
  }, 200);
});

const change = () => {
  state.name = randomIcon();
};

const toggle = () => {
  state.playing = !state.playing;
};
</script>
