import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
      passWithNoTests: true,
      setupFiles: ["src/test/setup.ts"],
      coverage: {
        provider: "v8",
        reporter: ["text", "text-summary"],
        include: ["src/components/**/*.{ts,tsx}", "src/features/cart/components/**/*.{ts,tsx}"],

        // focus testing on componenets only
        exclude: [
          "src/**/*.{test,spec}.{ts,tsx}",
          "src/stores/**",
          "src/api/**",
          "src/pages/**",
          "src/layouts/**",
          "src/test/**",
          "src/main.tsx",
          "src/vite-env.d.ts"
        ],
        thresholds: {
          lines: 70,
          functions: 70,
          branches: 70,
          statements: 70
        }
      }
    }
  })
);
