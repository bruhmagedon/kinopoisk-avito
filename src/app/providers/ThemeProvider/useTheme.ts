import { useContext } from "react";

import { ThemeContext } from "./themeContext";

export const useTheme = () => {
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);

  return {
    isThemeDark,
    toggleTheme
  };
};
