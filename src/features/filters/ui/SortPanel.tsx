import { Button, Select } from "@/shared";
import CardsViewList from "@/shared/assets/icons/cards-view-list.svg";
import CardsViewGrid from "@/shared/assets/icons/cards-view-grid.svg";
import { Filter } from "@/entities/filters";

const SORT_DATA: Filter[] = [
  {
    name: "По названию",
  },
  {
    name: "По году",
  },
  {
    name: "По рейтингу",
  },
];

const LIST_VIEW_VARIANTS: Filter[] = [
  {
    name: "10",
  },
  {
    name: "12",
  },
  {
    name: "20",
  },
];

export const SortPanel = () => {
  return (
    <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
      <div className="flex items-center">
        <p className="flex-1">Вид списка:</p>
        <div className="flex items-center">
          <Button>
            <CardsViewGrid />
          </Button>
          <Button>
            <CardsViewList />
          </Button>
        </div>
      </div>
      <Select filterData={SORT_DATA} />
      <Select filterData={LIST_VIEW_VARIANTS} />
    </div>
  );
};
