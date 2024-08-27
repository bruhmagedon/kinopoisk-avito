import { CircleUserRound, Sparkle, TvMinimal } from "lucide-react";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.ReactNode;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: "/",
    text: "Главная",
    Icon: <TvMinimal />
  },
  {
    path: "/category",
    text: "Категории",
    Icon: <Sparkle />
  },
  {
    path: "/profile",
    text: "Профиль",
    Icon: <CircleUserRound />
  }
];
