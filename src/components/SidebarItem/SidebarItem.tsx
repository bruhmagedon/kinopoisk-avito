import { cn } from "old/shared/lib/utils";

import type { SidebarItemType } from "./SidebarItemsList";

interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = ({ className, item, collapsed }: SidebarItemProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-md bg-primary px-4 py-2 font-medium hover:bg-primary-hover hover:text-white",
        className
      )}
    >
      {item.Icon}
      {collapsed && <a>{item.text}</a>}
    </div>
  );
};
