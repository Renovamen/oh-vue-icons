<template>
<div
    class="navbar flex items-center justify-end bg-white w-full pt-3 pb-3"
    :class="{
        'bg-gray-800': isDark,
        'bg-white': !isDark,
        'border-b border-solid border-gray-200': scrollTop > 30 && !isDark,
        'border-b border-solid border-gray-700': scrollTop > 30 && isDark
    }"
>
    <NuxtLink
        to="/"
        class="mr-6"
        :class="{'dark' : isDark}"
    >
        Icons
    </NuxtLink>
    <NuxtLink
        class="mr-6"
        to="/docs"
        :class="{'dark' : isDark}"
    >
        Docs
    </NuxtLink>
    <ToggleTheme />
    <a
        href="https://github.com/Renovamen/oh-vue-icons"
        target="_blank"
    >
        <v-icon
            name="fa-github"
            scale="1.7"
            class="hover:text-blue-500 ml-8 mr-8"
            :class="{
                'text-gray-800': !isDark,
                'text-white': isDark
            }"
        />

    </a>
</div>
</template>

<script>
import ToggleTheme from './ToggleTheme.vue'

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
        }
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
</style>