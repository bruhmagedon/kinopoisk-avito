import { useState } from "react";
import type { Episode } from "old/entities/movies/model/MovieApiTypes";
import { getPaginatedData, PaginationWrapper } from "old/features/pagination";

import { SeriesCard } from "../SeriesCard/SeriesCard";

interface SeriesPaginationProps {
  series: Episode[];
}

export const SeriesPagination = ({ series }: SeriesPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6);

  return (
    <PaginationWrapper
      type='small'
      limit={limit}
      siblings={1}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={Math.ceil(series.length / limit)}
    >
      <div className='mb-7 flex flex-col gap-8'>
        <SeriesList series={getPaginatedData(series, limit, currentPage)} />
      </div>
    </PaginationWrapper>
  );
};

const SeriesList = ({ series }: SeriesPaginationProps) => {
  return (
    <ul className='grid grid-rows-3 gap-[24px]'>
      {series.map((item, index) => {
        return <SeriesCard series={item} key={index} />;
      })}
    </ul>
  );
};
