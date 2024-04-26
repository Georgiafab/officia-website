import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteImagemin from "vite-plugin-imagemin";

import viteCompression from "vite-plugin-compression";
import { join, resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      ext: ".gz",
      algorithm: "gzip",
      deleteOriginFile: false,
    }),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 8,
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 8,
    //   },
    //   mozjpeg: {
    //     quality: 80,
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 4,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: "removeViewBox",
    //       },
    //       {
    //         name: "removeEmptyAttrs",
    //         active: false,
    //       },
    //     ],
    //   },
    // }),
  ],
  server: {
    host: "0.0.0.0",
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
