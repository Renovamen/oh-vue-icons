<template>
  <div class="layout">
    <Navbar class="fixed z-40 top-0" />
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