<template>
  <div class="h-40 w-40 mt-4 mx-auto block relative">
    <figure
      id="logo"
      class="absolute rounded-full transition-all duration-300 cursor-pointer"
      @mouseenter="toggle"
      @mouseleave="toggle"
      @click="change"
    >
      <v-icon ref="logo" :playing="playing" :name="name" scale="4" />
    </figure>
  </div>
</template>

<script>
import OhVueIcon from "../../src/components/icon";
const keys = Object.keys(OhVueIcon.icons);

function randomIcon() {
  return keys[Math.floor(Math.random() * keys.length)];
}

export default {
  data() {
    return {
      name: randomIcon(),
      playing: true
    };
  },
  mounted() {
    setInterval(() => {
      if (this.playing) {
        this.change();
      }
    }, 200);
  },
  methods: {
    change() {
      this.name = randomIcon();
    },
    toggle: function() {
      this.playing = !this.playing;
    }
  }
};
</script>

<style lang="postcss">
#logo {
  @apply bg-gray-700 text-blue-400;
}
#logo:hover {
  @apply bg-blue-400 text-gray-700;
}
.dark-mode #logo {
  @apply bg-gray-300 text-blue-600;
}
.dark-mode #logo:hover {
  @apply bg-blue-600 text-gray-400;
}
</style>

<style scoped>
#logo {
  margin: 10px;
  padding: 30px;
}
#logo:hover {
  margin: 0;
  padding: 40px;
}
</style>
