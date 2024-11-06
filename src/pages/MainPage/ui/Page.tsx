import { useEffect } from 'react';
import { Filters } from './Filters/Filters';
import { MoviePanel } from './MoviePanel/MoviePanel';

export const MainPage = () => {
   useEffect(() => {
      window.scrollTo({
         top: 0,
      });
   }, []);

   return (
      <div className="relative bg-background-dark py-6">
         <div className="column-gap grid grid-cols-filter-list items-start max-lg:flex max-lg:flex-col-reverse max-lg:items-center">
            <Filters />
            <MoviePanel />
         </div>
      </div>
   );
};
