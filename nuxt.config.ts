export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxt/content"
  ],
  compatibilityDate: "2024-07-12",
  googleFonts: {
    download: true,
    families: {
      "Space Mono": [400, 700],
    },
    display: "swap"
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});