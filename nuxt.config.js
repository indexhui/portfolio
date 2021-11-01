import en from './locales/en.js'
import tw from './locales/tw.js'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hugh',
    htmlAttrs: {
      lang: 'zh-tw',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-windicss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  i18n: {
    locales: [
      { code: 'en', name: 'En', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'zh-tw', name: '中文', iso: 'zh-tw', file: 'tw.js', dir: 'ltr' },
    ],
    defaultLocale: 'zh-tw',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: en,
        'zh-tw': tw,
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  windicss: {
    scan: {
      exclude: ['node_modules', 'node_modules_dev', 'node_modules_prod'],
    },
  },
}
