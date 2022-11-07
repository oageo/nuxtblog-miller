import { defineNuxtConfig } from "nuxt";
export default defineNuxtConfig({
  css: ["bulma"],
  modules: ["@nuxt/content"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  ssr: false,
  nitro: {
    preset: "service-worker",
  },
});
