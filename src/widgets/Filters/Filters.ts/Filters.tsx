import { Select } from "@/shared/ui/Listbox";

export const Filters = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <Select />
        <Select />
        <Select />
      </div>
      <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
      </div>
    </div>
  );
};
