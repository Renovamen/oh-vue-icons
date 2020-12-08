export default {
  target: 'static',
  srcDir: "./docs/",
  generate: {
    dir: './docs/dist/'
  },
  head: {
    title: 'Oh, Vue Icons!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },
  css: [
    './assets/font.css'
  ],
  components: true,  // auto import components
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  build: {
  }
}
