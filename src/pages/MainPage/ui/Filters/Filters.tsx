import { FiltersPanel, SortPanel } from "@/features/filters";

export const Filters = () => {
  return (
    <div className="flex flex-col gap-3">
      <SortPanel />
      <FiltersPanel />
    </div>
  );
};
