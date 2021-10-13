<template>
  <div class="h-40 w-40 mt-4 mx-auto block relative">
    <figure
      id="random-icon"
      class="
        absolute
        rounded-full
        transition-all
        duration-300
        cursor-pointer
        bg-gray-700
        text-blue-400
        hover:bg-blue-400 hover:text-gray-700
      "
      @mouseenter="toggle"
      @mouseleave="toggle"
      @click="change"
    >
      <client-only>
        <v-icon ref="logo" :playing="playing" :name="name" scale="4" />
      </client-only>
    </figure>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs
} from "@nuxtjs/composition-api";
import { getIcons } from "oh-vue-icons/dist/index.esm.min";
const keys = Object.keys(getIcons());

const randomIcon = () => {
  return keys[Math.floor(Math.random() * keys.length)];
};

export default defineComponent({
  name: "RandomIcon",
  setup() {
    const state = reactive({
      name: randomIcon(),
      playing: true
    });

    onMounted(() => {
      setInterval(() => {
        if (state.playing) {
          change();
        }
      }, 200);
    });

    const change = () => {
      state.name = randomIcon();
    };

    const toggle = () => {
      state.playing = !state.playing;
    };

    return {
      ...toRefs(state),
      toggle,
      change
    };
  }
});
</script>

<style scoped>
#random-icon {
  margin: 10px;
  padding: 30px;
}
#random-icon:hover {
  margin: 0;
  padding: 40px;
}
</style>
