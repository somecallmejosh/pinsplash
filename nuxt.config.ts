// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  runtimeConfig: {
    accessKey: process.env.NUXT_ACCESS_KEY,
    applicationID: '',
    secretKey: '',
    photoApiBaseUrl: 'https://api.unsplash.com',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  fonts: {
    defaults: {
      weights: ['400', '500', '600'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
