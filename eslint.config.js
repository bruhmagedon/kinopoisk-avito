import { eslint } from "@siberiacancode/eslint";

export default eslint(
  {
    typescript: true,
    jsx: true,
    jsxAlly: true,
    react: true,
    stylistic: true,
  },
  {
    name: "siberiacancode/hooks",
    files: ["**/hooks/**/*.ts"],
    rules: {
      "jsdoc/no-defaults": "off",
    },
  }
);
