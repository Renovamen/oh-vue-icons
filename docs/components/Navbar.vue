<template>
<div
    class="navbar w-full py-3 bg-white border-b border-solid"
    :class="{
        'bg-gray-800 border-gray-700': isDark,
        'bg-white border-gray-200': !isDark
    }"
>
    <div class="logo absolute ml-3 sm:ml-4">
        <NuxtLink
            to="/"
            class="text-lg font-medium inline-block align-middle"
            :class="{'dark' : isDark}"
        >
            Oh, Vue Icons!
        </NuxtLink>
        <a
            href="https://github.com/Renovamen/oh-vue-icons"
            target="_blank"
            class="px-2 py-1 ml-2 sm:ml-3 text-sm inline-block github"
            :class="{'dark' : isDark}"
        >
            v0.1.5
        </a>
    </div>
    <div class="flex items-center justify-end">
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
        <ToggleTheme class="mr-6" />
        <a
            class="mr-4 sm:hidden block"
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

.navbar .logo {
    margin-top: 2px;
}

@media (min-width: 640px) {
    .navbar .logo {
        margin-top: -2px;
    }
}

.navbar .logo a {
    @apply text-gray-800;
}

.navbar .logo a:hover {
    @apply text-gray-900;
}

.navbar .logo a.dark {
    @apply text-gray-300;
}

.navbar .logo a.dark:hover {
    @apply text-gray-200;
}

.navbar .logo .github {
    @apply border-solid border border-gray-700 rounded;
}

.navbar .logo .github:hover {
    @apply bg-gray-100;
}

.navbar .logo .github.dark {
    @apply border-gray-500;
}

.navbar .logo .github.dark:hover {
    @apply bg-gray-700;
}
</style>