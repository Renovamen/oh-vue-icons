<template>
<div
    class="toolbar fixed h-full w-56 pt-16 z-20 top-0 right-0
            text-left border-l border-solid"
    :class="{
        'bg-white text-gray-600 border-gray-200': !isDark,
        'bg-gray-800 text-gray-500 border-gray-700': isDark,
    }"
>
    <div class="p-2 mx-2">
        <div class="m-3 ml-0 mr-4 text-left">Size</div>
        <div class="flex flex-1">
            <vue-slider
                class="flex-1"
                v-model="size"
                v-bind:max="3"
                v-bind:min="0.1"
                v-bind:interval="0.1"
                tooltip="none"
            />
            <div class="w-12 ml-4 text-right">{{ size }}em</div>
        </div>
    </div>
    <div class="p-2 mx-2">
        <div class="m-3 ml-0 mr-4 text-left">Color</div>
        <div class="flex flex-1">
            <v-swatches class="flex-1" v-model="color" />
            <input
                class="bg-transparent border-2 border-solid
                        outline-none rounded-md px-1"
                style="width: 8.5rem; height: 2.65rem"
                :style="{ borderColor: isColorFocused ? color : '#9ca3af' }"
                slot="trigger"
                v-model="color"
                @focus="isColorFocused = true"
                @blur="isColorFocused = false"
            />
        </div>
    </div>
</div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import VSwatches from 'vue-swatches'
import 'vue-slider-component/theme/default.css'
import 'vue-swatches/dist/vue-swatches.css'

export default {
    components: {
        VueSlider,
        VSwatches
    },
    data() {
        return {
            size: 2.4,
            color: '#272E39',
            isColorFocused: false
        }
    },
    watch: {
        size(value) {
            this.$emit('set-size', value)
        },
        color(value) {
            this.$emit('set-color', value)
        }
    },
    computed: {
        isDark() {
            return this.$store.state.theme.isDark
        }
    }
}
</script>

<style lang="postcss">
.vue-slider-process {
    @apply bg-blue-500;
}
</style>