export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "OgabekYuldoshev",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/data.js" },
    { src: "~/plugins/aos", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n"],

  i18n: {
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en",
        file: "en"
      },
      {
        code: "ru",
        name: "Russian",
        iso: "ru",
        file: "ru"
      },
      {
        code: "uz",
        name: "Uzbek",
        iso: "uz",
        file: "uz"
      }
    ],
    defaultLocale: "en"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

// [
//       'nuxt-i18n',
//       {
//          locales: [
//           {
//              code: 'en',
//              name: 'English',
//              iso: 'en',
//              file: 'en'
//           },
//           {
//              code: 'ru',
//              name: 'Russian',
//              iso: 'ru',
//              file: 'ru'
//           },
//           {
//             code: 'uz',
//             name: 'Uzbek',
//             iso: 'uz',
//             file: 'uz'
//          }
//         ],
//         langDir: 'locales/',
//         defaultLocale: 'en',
//       }
//      ]
