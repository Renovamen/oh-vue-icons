<template>
  <div class="layout bg-white">
    <script :dangerouslySetInnerHTML="{ __html: nightwind.init() }" />
    <Navbar class="fixed z-40 top-0" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import nightwind from "nightwind/helper";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup() {
    return {
      nightwind
    }
  }
});
</script>

<style lang="postcss">
body {
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
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

.dark .page {
  @apply bg-gray-800 !important;
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
