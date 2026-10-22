import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["lib/**/*.test.ts"],
    coverage: {
      provider: "v8",
      // Count every source file, including screens with no tests yet, so the CI
      // coverage gate reflects the whole app instead of only the files tests import.
      include: ["app/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
      exclude: ["**/__tests__/**"],
    },
  },
});
