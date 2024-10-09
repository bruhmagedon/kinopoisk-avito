import { usePagination } from "../hooks/usePagination";
import type { IPaginationProps } from "../model/types";

interface PaginationProps {
  children: React.ReactNode;
  type: "large" | "small";
}

const PaginationWrapper = ({
  children,
  ...paginationProps
}: PaginationProps & IPaginationProps) => {
  const ipaginationProps = usePagination({ ...paginationProps });
  return (
    <>
      {children}
      {/* <PaginationButtons {...paginationProps} {...ipaginationProps} /> */}
    </>
  );
};

export default PaginationWrapper;
