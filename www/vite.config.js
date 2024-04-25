import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import autoprefixer from "autoprefixer";
import { visualizer } from "rollup-plugin-visualizer";
import babel from "vite-plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: [],
        plugins: [
          ["@babel/plugin-syntax-jsx"],
          ["@babel/plugin-proposal-decorators", { version: "2023-11" }],
        ],
      },
    }),

    visualizer({
      emitFile: true,
      filename: "stats.html",
      //template:
    }),
  ],
  resolve: {},
  server: {
    fs: {},
    open: "/",
    host: "localhost",
    port: 3000,
    proxy: {},
  },
  preview: {
    proxy: {},
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
