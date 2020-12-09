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
  },
  tailwindcss: {
    config: {
      theme: {
        boxShadow: {
          'icon': '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
          'search': '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
          'search-hover': '0 2px 10px 0 rgba(0, 0, 0, 0.15)'
        }
      }
    }
  }
}
