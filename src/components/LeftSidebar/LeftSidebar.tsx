import { ChevronLeft, ChevronRight, Milk } from "lucide-react";

import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import { useCollapse } from "@/hooks/useCollapse";
import { cn } from "@/lib/utils";

import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarItemsList } from "../SidebarItem/SidebarItemsList";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

interface SidebarProps {
  className?: string;
}

export const LeftSidebar = ({ className }: SidebarProps) => {
  const { collapse, toggleCollapse } = useCollapse({
    storageKey: "isSidebarOpen",
    defaultValue: true
  });

  const { isThemeDark, toggleTheme } = useTheme();

  return (
    <aside className='bg-background-secondary px-4 py-4'>
      <div
        className={cn(
          "relative flex h-full flex-col gap-5 rounded-2xl bg-background px-4 py-8",
          "duration-400 transform transition-all ease-in-out",
          { "items-center": !collapse },
          className
        )}
      >
        {collapse ? (
          <p className='text-2xl font-bold'>
            <span className='text-black'>Flixi</span>fy
          </p>
        ) : (
          <Milk />
        )}

        <nav className='flex flex-col gap-3'>
          {SidebarItemsList.map((item) => {
            return <SidebarItem collapsed={collapse} key={item.path} item={item} />;
          })}
        </nav>
        <hr className='' />
        <div className='flex items-center space-x-2'>
          <Switch id='airplane-mode' checked={isThemeDark} onCheckedChange={toggleTheme} />
          {collapse && <Label htmlFor='airplane-mode'>Dark Mode</Label>}
        </div>
        <Button
          className='absolute right-[-20px] rounded-full'
          size='icon'
          onClick={() => toggleCollapse((open) => !open)}
        >
          {collapse ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
    </aside>
  );
};
