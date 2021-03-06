export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "OgabekYuldoshev",
    htmlAttrs: {
      lang: "en",
    },
    description:
      "Hi, I am a Frontend Developer and a freelancer. Contact me if you need me!",
    meta: [
      { charset: "utf-8" },
      {name:"google-site-verification", content: "zQpJ5zxHrlZvKWt9pU0ZyNAh_UbKCG7A-yhWjcZXBQU"},
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  ssr: false,
  loadingIndicator: {
    name: "wandering-cubes",
    color: "#3B8070",
    background: "black",
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/data.js" }, { src: "~/plugins/aos", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    [
      "nuxt-mail",
      {
        message: {
          to: "yuldashoff1@gmail.com",
        },
        smtp: {
          host: "smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: process.env.USER,
            pass: process.env.PASS,
          },
        },
      },
    ],
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            name: "English",
            iso: "en",
            file: "en",
          },
          {
            code: "ru",
            name: "Russian",
            iso: "ru",
            file: "ru",
          },
          {
            code: "uz",
            name: "Uzbek",
            iso: "uz",
            file: "uz",
          },
        ],
        langDir: "locales/",
        defaultLocale: "en",
      },
    ],
  ],

  // i18n: {
  //   lazy: true,
  //   langDir: "locales/",
  //   locales: [
  //     {
  //       code: "en",
  //       name: "English",
  //       iso: "en",
  //       file: "en"
  //     },
  //     {
  //       code: "ru",
  //       name: "Russian",
  //       iso: "ru",
  //       file: "ru"
  //     },
  //     {
  //       code: "uz",
  //       name: "Uzbek",
  //       iso: "uz",
  //       file: "uz"
  //     }
  //   ],
  //   defaultLocale: "en"
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
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
