// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "shadcn-nuxt"], // Removed @nuxt/ui
shadcn: {
  /**
   * Prefix for all the imported component
   */
  prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
},
app: {
  head: {
    title: "Carlos Ferreras",
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
                href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap',
                rel: 'stylesheet'
              }
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

compatibilityDate: "2025-03-10",
});