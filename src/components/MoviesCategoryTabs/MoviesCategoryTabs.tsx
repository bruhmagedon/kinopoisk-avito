import { PanelLeft, PanelRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { TabsList, TabsTrigger } from "../ui/tabs";

interface MoviesCategoryTabsProps {
  className?: string;
}

export const MoviesCategoryTabs = ({ className }: MoviesCategoryTabsProps) => {
  return (
    <header className={cn("", className)}>
      <Button>
        <PanelLeft />
      </Button>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <Button>
        <PanelRight />
      </Button>
    </header>
  );
};
