// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [
    '@kyndryl-design-system/shidoka-foundation/scss/root.scss',
    '@kyndryl-design-system/shidoka-foundation/scss/utility/typography.scss',
    '@kyndryl-design-system/shidoka-foundation/scss/utility/grid.scss',
  ],
  buildModules: ['@nuxtjs/svg'],
});
