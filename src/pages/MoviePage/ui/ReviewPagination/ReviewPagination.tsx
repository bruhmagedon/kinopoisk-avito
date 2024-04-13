import { Person, useFetchReviewQuery } from "@/entities/movies";
import { PaginationWrapper, getPaginatedData } from "@/features/pagination";
import { useEffect, useState } from "react";
import { ActorCard } from "../ActorCard/ActorCard";
import { ReviewData } from "@/entities/movies/model/MovieApiTypes";
import { ReviewCard } from "../ReviewCard/ReviewCard";

interface ReviewPaginationProps {
  movieId: string;
}

export const ReviewPagination = ({ movieId }: ReviewPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(4); //лимит будет выставляться из фильтров

  const { data, isLoading } = useFetchReviewQuery({
    movieId: movieId,
    limit,
    page: currentPage,
  });

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <PaginationWrapper
      limit={limit}
      siblings={1}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={data.pages}
    >
      {
        <div className="flex flex-col gap-4">
          <ReviewPaginationList isLoading={isLoading} rewiews={data.docs} />
        </div>
      }
    </PaginationWrapper>
  );
};

interface ReviewPaginationListProps {
  rewiews: ReviewData[];
  isLoading: boolean;
}

const ReviewPaginationList = ({
  rewiews,
  isLoading,
}: ReviewPaginationListProps) => {
  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <ul className="grid grid-rows-4 gap-[24px]">
      {rewiews.map((review) => {
        return <ReviewCard review={review} key={review.id} />;
      })}
    </ul>
  );
};
