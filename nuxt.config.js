export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  meta: {
    title: 'nuxtblog-miller',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This description can be changed at nuxt.config.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma'
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
    '@aceforth/nuxt-optimized-images',
    'nuxt-purgecss',
    '@nuxtjs/pwa'
  ],
  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkExternalLinks: {
        target: '_self'
      },
      remarkPlugins: [
        'remark-math',
        'remark-autolink-headings', {
          behavior: 'after'
        }
      ],
      rehypePlugins: [
        'rehype-mathjax'
      ]
    }
  },

  pwa: {
    icon: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  extendWebpackConfig: {
    extractCSS: {
      ignoreOrder: true
    }
  },

  render: {
    injectScripts: false
  }
})
