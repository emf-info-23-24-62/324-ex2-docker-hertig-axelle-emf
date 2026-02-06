import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
  files: ["**/*.{js,mjs,cjs,jsx}"],
  plugins: { js },
  extends: ["js/recommended"], 
  languageOptions: {
    ecmaVersion: 2021, // Ajoute une version ECMAScript si nécessaire
    sourceType: "module", // Définit le type de module
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  } },
  pluginReact.configs.flat.recommended,
]);
