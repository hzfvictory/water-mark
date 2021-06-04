import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import {terser} from "rollup-plugin-terser";

export default {
  input: ["./package/watermark.js"],
  output: {
    file: "./lib/index.es.js",
    format: "esm",
    // file: "./lib/index.js",
    // format: "umd",
    name: "waterMark",
    sourcemap: false
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    terser(),
    babel({
      babelHelpers: 'bundled'
    }),
  ], // babel这个 显式配置此选项（即使使用其默认值）
  external: ["the-answer"],
};