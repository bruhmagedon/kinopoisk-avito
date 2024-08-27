import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { Select } from "@/shared";

import { LIST_VIEW_VARIANTS, SORT_DATA } from "../model/constants";

export const SortPanel = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sort.sort);
  const viewCount = useAppSelector((state) => state.sort.viewCount);

  return (
    <div className='flex w-full flex-col gap-3 rounded-lg bg-panel-darker-bg px-3 py-6 text-white'>
      <div className=''>
        <p>Тип сортировки</p>
        <Select sortData={SORT_DATA} type='sort' initialValue={sort} />
      </div>
      <div className=''>
        <p>Сколько показывать</p>
        <Select sortData={LIST_VIEW_VARIANTS} type='viewCount' initialValue={viewCount} />
      </div>
    </div>
  );
};
