import { Person } from "@/entities/movies";
import { PaginationWrapper, getPaginatedData } from "@/features/pagination";
import { useState } from "react";
import { ActorCard } from "../ActorCard/ActorCard";

interface ActorsPaginationProps {
  persons: Person[];
}

export const ActorsPagination = ({ persons }: ActorsPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6); //лимит будет выставляться из фильтров

  return (
    //№Добавить унификацию стилей пагинации
    <PaginationWrapper
      limit={limit}
      siblings={1}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={Math.ceil(persons.length / limit)}
    >
      {
        <div className="flex flex-col gap-8">
          <ActorsList persons={getPaginatedData(persons, limit, currentPage)} />
        </div>
      }
    </PaginationWrapper>
  );
};

const ActorsList = ({ persons }: ActorsPaginationProps) => {
  return (
    <ul className="grid grid-cols-6 gap-[24px]">
      {persons.map((person) => {
        return <ActorCard person={person} key={person.id} />;
      })}
    </ul>
  );
};
