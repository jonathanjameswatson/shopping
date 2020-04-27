import api from './api'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'shopping',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/draggable.js',
    { src: '~plugins/localStorage.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  proxy: ['http://localhost:3000/api'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },

  serverMiddleware: [
    {
      path: '/api',
      handler: api
    }
  ],

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/items'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/signin',
            method: 'post',
            propertyName: 'token.accessToken'
          },
          logout: false,
          user: false
        }
      }
    },
    localStorage: false
  },

  router: {
    middleware: ['auth']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
