// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  app: {
    head: {
      title: 'Table Perks - Turn Every Visit & Customers Into Everlasting Loyalty',
      meta: [
        { name: 'description', content: 'A complete, white-label loyalty platform for restaurants and businesses.' }
      ]
    }
  }
})
