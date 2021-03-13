<template>
  <div class="layout" :class="{ 'dark-mode': isDark }">
    <Navbar class="fixed z-40 top-0" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$store.state.theme.isDark;
    }
  }
};
</script>

<style lang="postcss">
.page {
  @apply bg-white;
}

.dark-mode .page {
  @apply bg-gray-800;
}

h1 {
  @apply text-3xl font-bold;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

h2,
h3,
h4 {
  @apply font-semibold;
}

h1,
h2,
h3,
h4 {
  @apply text-gray-800;
}

.dark-mode h1,
.dark-mode h2,
.dark-mode h3,
.dark-mode h4 {
  @apply text-gray-200;
}

p {
  @apply my-2 leading-6;
}

table {
  @apply block mt-4 w-full overflow-auto leading-6;
}

table th {
  @apply font-medium;
}

table td,
table th {
  @apply py-2 px-4 border border-solid border-gray-300;
}

.dark-mode table td,
.dark-mode table th {
  @apply border-gray-700;
}

table tr:nth-child(2n) {
  @apply bg-gray-100;
}

.dark-mode table tr:nth-child(2n) {
  @apply bg-transparent;
}
</style>

<style>
body {
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
html,
body,
#__nuxt,
#__layout,
.layout {
  height: 100%;
}
.layout {
  display: flex;
  flex-direction: column;
}
.page {
  flex: 1 0 auto;
}
.page-width {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
}
footer {
  flex: 0 0 auto;
}
</style>
