// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },
  $development: {
    runtimeConfig:{
      public: {
        apiBase: 'http://10.40.255.104'
      }
    }
  }
})