import { Select } from "@/shared";

export const SortPanel = () => {
  return (
    <div className="bg-panel-darker-bg text-white w-full py-6 px-3 flex flex-col gap-3 rounded-lg">
      <Select />
      <Select />
    </div>
  );
};
