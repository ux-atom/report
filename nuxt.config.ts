// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700],
      'JetBrains+Mono': [400, 500],
      'Plus+Jakarta+Sans': [500, 600, 700, 800], // For confident, tight-tracked display face
    },
    display: 'swap'
  }
})
