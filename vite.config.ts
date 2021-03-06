import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";
import ViteComponents from "vite-plugin-components";
import Markdown from "vite-plugin-md";
// import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Prism from "markdown-it-prism";
import vitePluginImport from "vite-plugin-babel-import";

export default defineConfig({
  alias: {
    "~/": `${path.resolve(__dirname, "src")}/`,
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue", "md"],
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: "prose prose-sm m-auto",
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (id) => id.endsWith(".md"),

      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: "",
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),

    // // https://github.com/antfu/vite-plugin-pwa
    // VitePWA({
    //   inlineRegister: false,
    //   manifest: {
    //     name: 'Vitesse',
    //     short_name: 'Vitesse',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: '/pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    // }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, "locales/**")],
    }),
    vitePluginImport([
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style(name) {
          return `vant/es/${name}/index.css`;
        },
      },
      {
        libraryName: 'element-plus',
        libraryDirectory: 'es',
        style(name) {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style(name) {
          return `ant-design-vue/lib/${name}/style/index.css`;
        },
      },
    ]),
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
    exclude: ["vue-demi"],
  },
});
