// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s | IT Learning Center',
      meta: [
        {
          name: 'author',
          content: 'IT Learning Ltd., Thailand'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5'
        }
      ]
    }
  },
  modules: [
    'nuxt-icon'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: {
    enabled: true 
  },
  // modules: [
  //   [
  //     '@nuxtjs/robots',
  //     {
  //       UserAgent: "*",
  //       Disallow: "",
  //     }
  //   ]
  // ]
})
