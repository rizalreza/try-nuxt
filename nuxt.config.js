import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: 'profile', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'profile/logout', method: 'get'
          }
        }
      },
      redirect: {
          login: '/auth/login',
          home: '/'
      }
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',

    "@nuxtjs/auth",
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {
    }
  }
}
