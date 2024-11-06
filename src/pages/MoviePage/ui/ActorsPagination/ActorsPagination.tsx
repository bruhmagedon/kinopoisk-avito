import { Person } from '@/entities/movies';
import { PaginationWrapper, getPaginatedData } from '@/features/pagination';
import { useState } from 'react';
import { ActorCard } from '../ActorCard/ActorCard';

interface ActorsPaginationProps {
   persons: Person[];
}

export const ActorsPagination = ({ persons }: ActorsPaginationProps) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [limit] = useState(6);

   return (
      <PaginationWrapper
         type="small"
         limit={limit}
         siblings={1}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         totalPages={Math.ceil(persons.length / limit)}
      >
         {
            <div className="flex flex-col items-center gap-8">
               <ActorsList persons={getPaginatedData(persons, limit, currentPage)} />
            </div>
         }
      </PaginationWrapper>
   );
};

const ActorsList = ({ persons }: ActorsPaginationProps) => {
   return (
      <ul className="max-lg:grid-row-3 grid gap-[24px] max-lg:grid-cols-3 lg:h-[200px] lg:grid-cols-6">
         {persons.map((person, index) => {
            return <ActorCard person={person} key={index} />;
         })}
      </ul>
   );
};
