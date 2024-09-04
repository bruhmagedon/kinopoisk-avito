import { useMemo } from "react";

import { fetchCarouselQuery } from "@/constants/mock/fetchCarouselQuery";
import { cn } from "@/lib/utils";

import {
  MovieCard,
  MovieCardContent,
  MovieCardDescription,
  MovieCardFooter,
  MovieCardHeader,
  MovieCardTitle
} from "../MovieCard/MovieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";

interface MoviesCarouselProps {
  className?: string;
}

export const MoviesCarousel = ({ className }: MoviesCarouselProps) => {
  const mockedMovies = useMemo(() => fetchCarouselQuery, []);

  return (
    <div className={cn("flex justify-center", className)}>
      <Carousel className='w-full'>
        <CarouselContent>
          {mockedMovies.docs.map((item) => (
            <CarouselItem key={item.id}>
              <MovieCard movie={item}>
                <MovieCardContent genres={item.genres}>
                  <MovieCardTitle name={item.name}></MovieCardTitle>
                  <MovieCardDescription description={item.shortDescription}></MovieCardDescription>
                </MovieCardContent>
                <MovieCardFooter></MovieCardFooter>
              </MovieCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute bottom-10 right-20'>
          <CarouselPrevious />
          <CarouselNext className='absolute right--5' />
        </div>
      </Carousel>
    </div>
  );
};
