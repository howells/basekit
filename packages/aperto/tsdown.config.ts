import { defineConfig } from "tsdown";

const isWatch = process.argv.includes("--watch");

export default defineConfig({
  clean: !isWatch,
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  outExtensions: () => ({ dts: ".d.ts", js: ".js" }),
  sourcemap: true,
});
