<template>
<div class="navbar">
    <div class="site-name absolute ml-3 sm:ml-4">
        <NuxtLink
            to="/"
            class="text-lg font-medium inline-block"
        >
            Oh, Vue Icons!
        </NuxtLink>
        <a
            href="https://github.com/Renovamen/oh-vue-icons"
            target="_blank"
            class="px-2 py-1 ml-2 sm:ml-3 text-sm inline-block align-middle github"
        >
            v0.1.6
        </a>
    </div>
    <div class="flex items-center justify-end">
        <NuxtLink
            to="/"
            class="mr-6 hidden sm:block"
        >
            Icons
        </NuxtLink>
        <NuxtLink
            class="mr-6 hidden sm:block"
            to="/docs"
        >
            Docs
        </NuxtLink>
        <ToggleTheme class="mr-6" />
        <a
            class="sidebar-toggler mr-4 sm:hidden block"
            @click="toggleSidebar()"
        >
            <v-icon
                name="ri-menu-line"
                scale="1.5"
            />
        </a>
    </div>
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
.navbar {
    @apply w-full py-3 bg-white border-b border-solid border-gray-200;
}

.dark-mode .navbar {
    @apply bg-gray-800 border-gray-700;
}

.navbar a {
    @apply text-gray-600;
}

.navbar a:hover {
    @apply text-gray-700;
}

.dark-mode .navbar a {
    @apply text-gray-400;
}

.dark-mode .navbar a:hover {
    @apply text-gray-300;
}

.navbar .site-name a {
    @apply text-gray-800;
    margin-top: 2px;
}

@media (min-width: 640px) {
    .navbar .site-name a {
        margin-top: -3px;
    }
}

.navbar .site-name a:hover {
    @apply text-gray-900;
}

.dark-mode .navbar .site-name a {
    @apply text-gray-300;
}

.dark-mode .navbar .site-name a:hover {
    @apply text-gray-200;
}

.navbar .site-name .github {
    @apply border-solid border border-gray-700 rounded;
}

.navbar .site-name .github:hover {
    @apply bg-gray-100;
}

.dark-mode .navbar .site-name .github {
    @apply border-gray-500;
}

.dark-mode .navbar .site-name .github:hover {
    @apply bg-gray-700;
}

.navbar .sidebar-toggler {
    @apply text-gray-700;
}

.dark-mode .navbar .sidebar-toggler {
    @apply text-gray-300;
}
</style>