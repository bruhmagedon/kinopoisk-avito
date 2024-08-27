import { eslint } from "@siberiacancode/eslint";

export default eslint(
  {
    typescript: true,
    jsx: true,
    jsxA11y: true,
    react: true,
    stylistic: true
  },
  {
    rules: {
      "style/quotes": "off",
      "siberiacancode-react/prop-types": "off"
    }
  }
);
