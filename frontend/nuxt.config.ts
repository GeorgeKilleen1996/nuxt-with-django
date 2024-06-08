// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    api: {
      apiUrl: process.env.API_URL || "http://localhost:8000/",
    }
  }
})