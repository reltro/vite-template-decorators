import { defineConfig } from "vite";

import replace from "@rollup/plugin-replace";
import del from "rollup-plugin-delete";

import babel from "vite-plugin-babel";

import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [["@babel/plugin-proposal-decorators", { version: "2023-11" }]],
      },
    }),
    del({ targets: "dist/*" }),
    replace({
      preventAssignment: true,
      // eslint-disable-next-line no-undef
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  build: {
    target: "es2020",
    lib: {
      name: "vite-lib",
      entry: "index.js",
    },
  },
  server: {
    open: "/index.html",
    host: "localhost",
    port: 3000,
    proxy: {},
  },
});
