import { PostersApiResponse } from '@/entities/movies';
import { SimilarMovie } from '@/entities/movies/model/MovieTypes';
import { Carousel as TailwindCarousel } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

interface CarouselProps {
   posters?: PostersApiResponse;
   similarMovie?: SimilarMovie[];
   isLoading?: boolean;
}

export function Carousel({ posters, isLoading, similarMovie }: CarouselProps) {
   if (isLoading) return <div>Загрузка</div>;

   return (
      <>
         {posters && <PostersCarousel posters={posters} />}
         {similarMovie && <SimilarMovieCarousel similarMovie={similarMovie} />}
      </>
   );
}

interface PostersCarouselProps {
   posters: PostersApiResponse;
}

const PostersCarousel = ({ posters }: PostersCarouselProps) => {
   return (
      <TailwindCarousel className="flex max-h-[800px] items-center rounded-xl max-sm:h-auto">
         {posters.docs.map((item) => {
            return (
               <div className="h-full" key={item.id}>
                  <img src={item.url} alt={item.url} className="h-full w-full rounded-lg object-cover" />
               </div>
            );
         })}
      </TailwindCarousel>
   );
};

interface SimilarMovieCarouselProps {
   similarMovie: SimilarMovie[];
}

const SimilarMovieCarousel = ({ similarMovie }: SimilarMovieCarouselProps) => {
   const navigate = useNavigate();

   const onNavigate = (event: React.MouseEvent<HTMLImageElement>) => {
      navigate(`/movie/${event.currentTarget.getAttribute('movie-id')}`);
   };

   return (
      <TailwindCarousel className="rounded-xl">
         {similarMovie.map((movie) => {
            return (
               <div onClick={onNavigate} movie-id={movie.id} key={movie.id} className="h-full cursor-pointer">
                  <img src={movie.poster.url} alt={movie.name} className="h-full object-cover" />
               </div>
            );
         })}
      </TailwindCarousel>
   );
};
