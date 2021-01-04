<template>
<div class="toolbar">
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
    <div class="icon-color p-2 mx-2">
        <div class="m-3 ml-0 mr-4 text-left">Color</div>
        <div class="flex flex-1">
            <v-swatches class="flex-1" v-model="color" />
            <input
                class="bg-transparent border border-solid outline-none rounded-md px-1"
                :style="{ borderColor: isColorFocused ? color : '#A0AEBF' }"
                slot="trigger"
                v-model="color"
                @focus="isColorFocused = true"
                @blur="isColorFocused = false"
            />
        </div>
    </div>
    <div class="p-2 mx-2">
        <div class="m-3 ml-0 mr-4 text-left">Animation</div>
        <div class="grid grid-cols-2 gap-2 text-sm">
            <button
                @click="$emit('set-animation', 'spin')"
                :class="{ 'clicked': animation === 'spin' }"
            >
                Spin
            </button>
            <button
                @click="$emit('set-animation', 'spin-pulse')"
                :class="{ 'clicked': animation === 'spin-pulse' }"
            >
                Spin Pulse
            </button>
            <button
                @click="$emit('set-animation', 'wrench')"
                :class="{ 'clicked': animation === 'wrench' }"
            >
                Wrench
            </button>
            <button
                @click="$emit('set-animation', 'ring')"
                :class="{ 'clicked': animation === 'ring' }"
            >
                Ring
            </button>
            <button
                @click="$emit('set-animation', 'pulse')"
                :class="{ 'clicked': animation === 'pulse' }"
            >
                Pulse
            </button>
        </div>
    </div>
    <div class="p-2 mx-2">
        <div class="m-3 ml-0 mr-4 text-left">Flip</div>
        <button
            @click="$emit('set-flip')"
            class="w-full capitalize"
        >
            {{ flip }}
        </button>
    </div>
</div>
</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default {
    components: {
        VueSlider
    },
    props: ['iconSize', 'iconColor', 'animation', 'flip'],
    data() {
        return {
            size: 0.1,
            color: '',
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
    mounted () {
        this.size = this.iconSize
        this.color = this.iconColor
    }
}
</script>

<style lang="postcss">
.vue-slider-process {
    @apply bg-blue-500;
}
.toolbar {
    @apply fixed h-full w-56 pt-16 z-20 top-0 right-0 text-left border-l border-solid
           bg-white text-gray-600 border-gray-200;
}
.dark-mode .toolbar {
    @apply bg-gray-800 text-gray-500 border-gray-700;
}
.toolbar button {
    @apply border border-solid border-gray-500 outline-none rounded h-8;
}
.toolbar button:hover {
    @apply bg-gray-100;
}
.dark-mode .toolbar button:hover {
    @apply bg-gray-700;
}
.toolbar button.clicked {
    @apply bg-gray-200 border-transparent;
}
.dark-mode .toolbar button.clicked {
    @apply bg-gray-600 text-gray-300;
}
</style>

<style>
.toolbar .icon-color input {
    width: 8.5rem;
    height: 2.65rem;
}
</style>
