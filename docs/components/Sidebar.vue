<template>
<div
    class="sidebar fixed h-full w-56 z-20 left-0 top-0
            text-left border-r border-solid transform"
    :class="{
        'bg-white text-gray-600 border-gray-200': !isDark,
        'bg-gray-800 text-gray-500 border-gray-700': isDark,
        '-translate-x-full': !isSidebarOpen,
        '-translate-x-0': isSidebarOpen,
        'hidden': !items && screenWidth >= 640
    }"
>
    <ul
        class="mt-16 pb-2 border-b border-solid sm:hidden"
        :class="{
            'border-gray-200': !isDark,
            'border-gray-700': isDark,
        }"
    >
        <li>
            <NuxtLink to="/">Icons</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/docs">Docs</NuxtLink>
        </li>
    </ul>

    <ul
        v-if="items"
        class="mt-2 sm:mt-20 pb-2 border-b border-solid sm:border-none"
        :class="{
            'border-gray-200': !isDark,
            'border-gray-700': isDark,
        }"
    >
        <li
            v-for="item in items"
            :key="item"
            :class="{
                'text-blue-700 bg-blue-100 border-blue-700': itemSelected === item && !isDark,
                'text-gray-300 bg-gray-700 border-blue-500': itemSelected === item && isDark,
                'hover:text-blue-600': !isDark,
                'hover:text-gray-300': isDark
            }"
            @click="$emit('change-tab', item)"
        >
            {{ item }}
        </li>
    </ul>

    <slot></slot>
</div>
</template>

<script>
export default {
    props: ['itemSelected', 'items'],
    props: {
        itemSelected: null,
        items: null
    },
    data () {
        return {
            screenWidth: 0
        }
    },
    mounted() {
        const that = this
        that.screenWidth = document.body.clientWidth
        window.onresize = () => {
            return (() => {
                that.screenWidth = document.body.clientWidth
            })()
        }
    },
    computed: {
        isDark() {
            return this.$store.state.theme.isDark
        },
        isSidebarOpen() {
            return this.screenWidth >= 640 || this.$store.state.sidebar.isSidebarOpen
        }
    }
}
</script>

<style lang="postcss">
.sidebar li {
    @apply leading-9 list-none cursor-pointer ml-0 px-4 border-l-2 border-solid border-transparent;
}
.sidebar .toolbar {
    @apply relative h-auto w-auto pt-0
}
</style>