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
      'Hind+Siliguri': [400, 500, 600, 700], // Bangla glyph coverage — falls back in automatically wherever Inter/Plus Jakarta Sans has no Bangla glyph, no extra markup needed
    },
    display: 'swap'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'bn' } // primary content language is Bangla with inline English technical terms
    }
  }
})
