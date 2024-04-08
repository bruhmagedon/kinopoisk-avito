import { Button } from "../../../shared/ui/Button";
import ArrowStart from "@/shared/assets/icons/arrow-start.svg";
import ArrowPrev from "@/shared/assets/icons/arrow-prev.svg";
import ArrowNext from "@/shared/assets/icons/arrow-next.svg";
import ArrowEnd from "@/shared/assets/icons/arrow-end.svg";
import { IPaginationProps } from "../model/types";

export const PaginationButtons = ({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  handleEndPage,
  handleStartPage,
  currentPage,
}: IPaginationProps) => {
  const activePageStyles = "font-medium bg-red-300 cursor-auto";

  return (
    <>
      <div className="flex items-center w-full justify-center gap-[12px] text-2xl">
        <Button
          onClick={handleStartPage}
          disabled={currentPage <= 1}
          className="paggination-button pagination-button-hover "
        >
          {<ArrowStart pointerEvents="none" />}
        </Button>
        <Button
          disabled={currentPage <= 1}
          onClick={handlePrevPage}
          className="paggination-button pagination-button-hover "
        >
          {<ArrowPrev />}
        </Button>
        <div className="flex items-center justify-center">
          {[...Array(totalPages)].map((_, index) => {
            const activePage = currentPage === index + 1;

            return (
              <button
                onClick={() => handlePageClick(index + 1)}
                className={
                  "paggination-button pb-[3px] pagination-button-hover " +
                  (activePage ? activePageStyles : "cursor-pointer")
                }
                key={index}
                disabled={activePage}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <Button
          disabled={currentPage >= 10}
          onClick={handleNextPage}
          className="paggination-button pagination-button-hover "
        >
          {<ArrowNext />}
        </Button>
        <Button
          disabled={currentPage >= 10}
          onClick={handleEndPage}
          className="paggination-button pagination-button-hover"
        >
          {<ArrowEnd />}
        </Button>
      </div>
    </>
  );
};
