// eslint.config.js
import { defineConfig } from "eslint/config";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vuePlugin from "eslint-plugin-vue";
import vueParser from 'vue-eslint-parser';

export default defineConfig([
    {
        files: ["src/**/*.js", "src/**/*.ts"],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        rules: {
            ...tseslint.configs.recommended.rules, // apply the recommended rules
            "no-else-return": "error",
            semi: "error",
            quotes: ["error", "single"],
            "eol-last": ["error", "always"], // Enforces newline at the end of files
            "no-unused-vars": ["error", { "argsIgnorePattern": "^_*" }]
        },
    },
    {
        files: ["src/**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser, // Use TypeScript parser for <script> tags in Vue
            },
        },
        plugins: {
            vue: vuePlugin,
            "@typescript-eslint": tseslint,
        },
        rules: {
            ...tseslint.configs.recommended.rules, // apply the recommended rules
            "vue/no-unused-vars": "warn",  // Example Vue rule
            "no-else-return": "error",
            semi: "error",
            quotes: ["error", "single"],
            "eol-last": ["error", "always"], // Enforces newline at the end of files
            "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
        },
    },
]);

