import { useEffect, useMemo, useState } from "react";

import type { DarkThemeStatus } from "./themeContext";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./themeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultThemeDark?: DarkThemeStatus;
}

export const ThemeProvider = ({ children, defaultThemeDark = true }: ThemeProviderProps) => {
  const [isThemeDark, toggleTheme] = useState<DarkThemeStatus>(() => {
    if (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === null) {
      return defaultThemeDark;
    }
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)!);
  });

  // Меняем тему в документе
  useEffect(() => {
    const root = window.document.documentElement;
    // TODO удаляем light и dark, а я хочу сделать так, чтобы это были не моковые данные,
    // а создавался объект на основе Theme
    root.classList.remove("light", "dark");
    root.classList.add(isThemeDark ? "dark" : "light");
  }, [isThemeDark]);

  const value = useMemo(
    () => ({
      isThemeDark,
      toggleTheme: (theme: DarkThemeStatus) => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, String(theme));
        toggleTheme(theme);
      }
    }),
    [isThemeDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
