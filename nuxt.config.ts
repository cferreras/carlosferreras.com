// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Sito web personal de Carlos Ferreras.",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  router: {
    options: {
      linkActiveClass: "active-class",
      linkExactActiveClass: "exact-active",
    },
  },
});
