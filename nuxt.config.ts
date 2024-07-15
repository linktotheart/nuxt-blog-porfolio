export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/google-fonts"],
  compatibilityDate: "2024-07-12",
  googleFonts: {
    download: true,
    families: {
      "Space Mono": "400..700"
    },
    display: "swap"
  }
});
