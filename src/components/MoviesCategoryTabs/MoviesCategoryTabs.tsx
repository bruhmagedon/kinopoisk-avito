import { cn } from "old/shared/lib/utils";

import { TabsList, TabsTrigger } from "../ui/tabs";

interface MoviesCategoryTabsProps {
  className?: string;
}

const TabsConfig = [
  {
    value: "movie",
    name: "Фильмы"
  },
  {
    value: "tv-series",
    name: "Сериалы"
  },
  {
    value: "anime",
    name: "Аниме"
  },
  {
    value: "cartoon",
    name: "Мультфильмы"
  }
];

export const MoviesCategoryTabs = ({ className }: MoviesCategoryTabsProps) => {
  return (
    <header className={cn("flex items-center justify-between gap-9 p-1", className)}>
      {/* <Button>
        <PanelLeft />
      </Button> */}
      <TabsList className='flex-1 items-start rounded-2xl'>
        {TabsConfig.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {/* <Button>
        <PanelRight />
      </Button> */}
    </header>
  );
};
