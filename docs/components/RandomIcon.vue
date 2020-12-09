<template>
<div class="h-40 w-40 mt-4 mx-auto block relative">
  <figure
    id="logo"
    @mouseenter="toggle"
    @mouseleave="toggle"
    @click="change"
    class="absolute rounded-full transition-all duration-300 cursor-pointer"
    :class="{
      'bg-gray-400 text-blue-600 hover:bg-blue-600 hover:text-gray-400': isDark,
      'bg-gray-700 text-blue-400 hover:bg-blue-400 hover:text-gray-700': !isDark
    }"
  >
    <OhVueIcon
      ref="logo"
      :playing="playing"
      :name="name"
      scale="4"
    />
  </figure>
</div>
</template>

<script>
import '../../src/icons'
import OhVueIcon from '../../src/components/Icon.vue'
const keys = Object.keys(OhVueIcon.icons)

function randomIcon () {
  return keys[Math.floor(Math.random() * keys.length)]
}

export default {
  components: {
    OhVueIcon
  },
  data () {
    return {
      name: randomIcon(),
      playing: true
    }
  },
  mounted () {
    setInterval(() => {
      if (this.playing) {
        this.change()
      }
    }, 200)
  },
  computed: {
    isDark() {
      return this.$store.state.theme.isDark
    }
  },
  methods: {
    change () {
      this.name = randomIcon()
    },
    toggle: function () {
      this.playing = !this.playing
    }
  }
}
</script>

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