import { eslint } from "@siberiacancode/eslint";

export default eslint(
  {
    typescript: true,
    jsx: true,
    jsxA11y: true,
    react: true,
    stylistic: false
  },
  {
    rules: {
      "style/quotes": "off",
      "siberiacancode-react/prop-types": "off"
    }
  }
);
