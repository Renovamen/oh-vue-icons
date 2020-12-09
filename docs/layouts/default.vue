<template>
  <div class="layout">
    <Navbar class="fixed z-10 top-0" />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
body {
  font: 15px "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
html, body, #__nuxt, #__layout, .layout {
  height: 100%;
}
.layout {
  display: flex;
  flex-direction: column;
}
.page {
  flex: 1 0 auto;
}
footer {
  flex: 0 0 auto;
}
</style>