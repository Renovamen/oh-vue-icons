<template>
<v-icon
  :name="name"
  scale="4"
/>
</template>

<script>
import '../src/icons'
import OhVueIcon from '../src/components/Icon.vue'
const keys = Object.keys(OhVueIcon.icons)

function randomIcon () {
  return keys[Math.floor(Math.random() * keys.length)]
}

export default {
  name: 'random-icon',
  props: {
    playing: Boolean
  },
  data () {
    return {
      name: randomIcon()
    }
  },
  mounted () {
    setInterval(() => {
      if (this.playing) {
        this.change()
      }
    }, 200)
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
