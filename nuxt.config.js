export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/quests-nuxt/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'quests-nuxt',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    filenames: {
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[name]-[contenthash:7].css'
    }
  }
}
