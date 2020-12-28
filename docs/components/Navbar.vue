<template>
<div
    class="navbar flex items-center justify-end
        w-full pt-3 pb-3 bg-white border-b border-solid"
    :class="{
        'bg-gray-800 border-gray-700': isDark,
        'bg-white border-gray-200': !isDark
    }"
>
    <NuxtLink
        to="/"
        class="mr-6 hidden sm:block"
        :class="{'dark' : isDark}"
    >
        Icons
    </NuxtLink>
    <NuxtLink
        class="mr-6 hidden sm:block"
        to="/docs"
        :class="{'dark' : isDark}"
    >
        Docs
    </NuxtLink>
    <ToggleTheme />
    <a
        href="https://github.com/Renovamen/oh-vue-icons"
        target="_blank"
        class="px-2 py-1 ml-6 mr-2 sm:mr-4 text-sm github"
        :class="{'dark' : isDark}"
    >
        v1.5.0
    </a>
    <a
        class="mx-4 sm:hidden block"
        @click="toggleSidebar()"
    >
        <v-icon
            name="ri-menu-line"
            scale="1.5"
            :class="{
                'text-gray-700': !isDark,
                'text-gray-300': isDark
            }"
        />
    </a>
</div>
</template>

<script>
import ToggleTheme from './ToggleTheme.vue'
import { mapMutations } from 'vuex'

export default {
    components: {
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
        },
        ...mapMutations({
            toggleSidebar: 'sidebar/toggleSidebar'
        })
    }
}
</script>

<style lang="postcss">
.navbar a {
    @apply text-gray-600;
}

.navbar a:hover {
    @apply text-gray-700;
}

.navbar a.dark {
    @apply text-gray-400;
}

.navbar a.dark:hover {
    @apply text-gray-300;
}

.navbar .github {
    @apply border-solid border border-gray-700 rounded;
}

.navbar .github:hover {
    @apply bg-gray-100;
}

.navbar .github.dark {
    @apply border-gray-400;
}

.navbar .github.dark:hover {
    @apply bg-gray-700;
}
</style>