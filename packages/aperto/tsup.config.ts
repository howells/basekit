import { defineConfig } from "tsup";

const isWatch = process.argv.includes("--watch");

export default defineConfig({
  clean: !isWatch,
  // tsup injects baseUrl for its TS6 compiler-API declaration build.
  dts: { compilerOptions: { ignoreDeprecations: "6.0" } },
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: true,
});
