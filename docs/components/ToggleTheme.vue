<template>
    <span
        :class="{ 'bg-gray-200': !isDark, 'bg-blue-500': isDark }"
        class="h-6 w-12 border-2 border-transparent rounded-full
                cursor-pointer transition-colors ease-in-out duration-200
                focus:outline-none focus:shadow-outline"
        role="checkbox"
        tabindex="0"
        @click="toggleTheme()"
        @keydown.space.prevent="toggleTheme()"
        :aria-checked="isDark.toString()"
    >
        <span
            aria-hidden="true"
            class="relative inline-block h-5 w-5 rounded-full bg-white
                    shadow transform transition ease-in-out duration-200"
            :class="{
                'translate-x-6': isDark,
                'translate-x-0': !isDark
            }"
        >
            <span
                :class="{
                    'opacity-0 ease-out duration-100': isDark,
                    'opacity-100 ease-in duration-200': !isDark
                }"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            >
                <OhVueIcon
                    name="ri/sun-line"
                    class="h-3 w-3 text-blue-600"
                />
            </span>
            <span
                :class="{
                    'opacity-100 ease-in duration-200': isDark,
                    'opacity-0 ease-out duration-100': !isDark
                }"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            >
                <OhVueIcon
                    name="ri/moon-clear-line"
                    class="h-3 w-3 text-blue-600"
                />
            </span>
        </span>
    </span>
</template>

<script>
import OhVueIcon from '../../src/components/Icon.vue'
import { mapMutations } from 'vuex'

export default {
    components: {
        OhVueIcon
    },
    computed: {
        isDark() {
            return this.$store.state.theme.isDark
        }
    },
    methods: {
        ...mapMutations({
            toggleTheme: 'theme/toggleTheme'
        })
    }
}
</script>
