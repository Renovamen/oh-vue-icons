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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700' }
    ]
  },
  css: [
    './assets/font.css',
    './assets/code-light.css',
    './assets/code-dark.css'
  ],
  components: true,  // auto import components
  modules: [
    '@nuxt/content'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  build: {
  },
  plugins: [
    '~/plugins/lazyload.js',
    '~/plugins/icons.js'
  ]
}
