import { usePagination } from "../hooks/usePagination";
import { IPaginationProps } from "../model/types";
import { PaginationButtons } from "./PaginationButtons";

interface PaginationProps {
  children: React.ReactNode;
}

const PaginationWrapper = ({
  children,
  ...paginationProps
}: PaginationProps & IPaginationProps) => {
  const ipaginationProps = usePagination({ ...paginationProps });
  return (
    <>
      {/* № Если надо будет унифицировать расположение */}
      {/* {top && <PaginationButtons {...paginationProps} />} */}
      {children}
      {/* {bottom && <PaginationButtons {...paginationProps} />} */}
      <PaginationButtons {...paginationProps} {...ipaginationProps} />
    </>
  );
};

export default PaginationWrapper;
