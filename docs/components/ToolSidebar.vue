<template>
<div
    class="toolbar fixed h-full w-56 pt-16 z-20 top-0 right-0
            text-left border-l border-solid"
    :class="{
        'text-gray-600 border-gray-200': !isDark,
        'text-gray-500 border-gray-700': isDark,
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
    <div class="icon-color p-2 mx-2">
        <div class="m-3 ml-0 mr-4 text-left">Color</div>
        <div class="flex flex-1">
            <v-swatches class="flex-1" v-model="color" />
            <input
                class="bg-transparent border border-solid
                        outline-none rounded-md px-1"
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
                @click="$emit('change-spin')"
                :class="{ 'dark': isDark, 'clicked': spin }"
            >
                Spin
            </button>
            <button
                @click="$emit('change-spin-pulse')"
                :class="{ 'dark': isDark, 'clicked': spinPulse }"
            >
                Spin Pulse
            </button>
            <button
                @click="$emit('change-wrench')"
                :class="{ 'dark': isDark, 'clicked': wrench }"
            >
                Wrench
            </button>
            <button
                @click="$emit('change-ring')"
                :class="{ 'dark': isDark, 'clicked': ring }"
            >
                Ring
            </button>
            <button
                @click="$emit('change-pulse')"
                :class="{ 'dark': isDark, 'clicked': pulse }"
            >
                Pulse
            </button>
        </div>
    </div>
    <div class="p-2 mx-2">
        <div class="m-3 ml-0 mr-4 text-left">Flip</div>
        <button
            @click="$emit('change-flip')"
            class="w-full capitalize"
            :class="{ 'dark': isDark }"
        >
            {{ flip }}
        </button>
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
    props: ['spin', 'spinPulse', 'wrench', 'pulse', 'ring', 'flip'],
    data() {
        return {
            size: 2.4,
            color: '#222F3D',
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
.toolbar button {
    @apply border border-solid border-gray-500 outline-none rounded h-8;
}
.toolbar button:hover {
    @apply bg-gray-100;
}
.toolbar button.dark:hover {
    @apply bg-gray-700;
}
.toolbar button.clicked {
    @apply bg-gray-200 border-transparent;
}
.toolbar button.dark.clicked {
    @apply bg-gray-600 text-gray-300;
}
</style>

<style>
.toolbar .icon-color input {
    width: 8.5rem;
    height: 2.65rem;
}
</style>
