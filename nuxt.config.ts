// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/normalize.css",
    "~/assets/style.scss",
    "~/assets/custom.scss",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",
        },
      ],
    },
  },
});
