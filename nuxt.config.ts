export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/google-fonts"],
  compatibilityDate: "2024-07-12",
  googleFonts: {
    download: true,
    families: {
      "Space Mono": "400..700",
      "JetBrains Mono": "400,600,800",
      "Fira Mono": "400,600,800"
    },
    display: "swap"
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
