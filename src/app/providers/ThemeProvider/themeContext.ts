import { createContext } from "react";

export type DarkThemeStatus = boolean;

export interface ThemeContextProps {
  isThemeDark: DarkThemeStatus;
  toggleTheme: (theme: DarkThemeStatus) => void;
}

const initialState: ThemeContextProps = {
  isThemeDark: true,
  toggleTheme: () => null
};

export const ThemeContext = createContext<ThemeContextProps>(initialState);

export const LOCAL_STORAGE_THEME_KEY = "isDark";
