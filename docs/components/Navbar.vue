<template>
    <div
        class="flex items-center justify-end bg-white w-full pt-3 pb-3"
        :class="{
            'bg-gray-800': isDark,
            'bg-white': !isDark,
            'border-b border-solid border-gray-200': scrollTop > 30 && !isDark,
            'border-b border-solid border-gray-700': scrollTop > 30 && isDark
        }"
    >
        <NuxtLink
            class="mr-6"
            :class="{
                'text-gray-600 hover:text-gray-700': !isDark,
                'text-gray-400 hover:text-gray-300': isDark
            }"
            to="/"
        >
            Icons
        </NuxtLink>
        <NuxtLink
            class="mr-6"
            :class="{
                'text-gray-600 hover:text-gray-700': !isDark,
                'text-gray-300 hover:text-gray-200': isDark
            }"
            to="/demo"
        >
            Demo
        </NuxtLink>
        <ToggleTheme />
        <a
            href="https://github.com/Renovamen/oh-vue-icons"
            target="_blank"
        >
            <OhVueIcon
                name="fa/brands/github"
                scale="1.7"
                class="hover:text-blue-400 ml-8 mr-8"
                :class="{
                    'text-gray-800': !isDark,
                    'text-white': isDark
                }"
            />
        </a>
    </div>
</template>

<script>
import OhVueIcon from '../../src/components/Icon.vue'
import ToggleTheme from './ToggleTheme.vue'

export default {
    components: {
        OhVueIcon,
        ToggleTheme
    },
    data () {
        return {
            scrollTop: 0
        }
    },
    computed: {
        isDark() {
            return this.$store.state.theme.isDark
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            this.scrollTop = window.pageYOffset
        }
    }
}
</script>
