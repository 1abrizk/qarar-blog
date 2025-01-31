// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        highlight: {
          theme: "vitesse-light",
        },
      },
    },
  },
  compatibilityDate: "2024-04-03",
});
