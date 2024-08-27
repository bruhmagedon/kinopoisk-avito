import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/store";
import {
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery
} from "@/entities/movies";
import { setInputTerm, setSearchPanelStatus } from "@/entities/search";
import { Carousel, Disclosure } from "@/shared";

import { ActorsPagination } from "./ActorsPagination/ActorsPagination";
import { ReviewPagination } from "./ReviewPagination/ReviewPagination";

export const MoviePage = () => {
  const isOpen = useAppSelector((state) => state.search.searchPanelStatus);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [id]);

  useEffect(() => {
    if (isOpen) {
      dispatch(setSearchPanelStatus(!isOpen));
      dispatch(setInputTerm(""));
    }
  }, []);

  const { data: movieData, isLoading: movieLoading } = useFetchMovieByIdQuery({
    id
  });
  const { data: postersData, isLoading: postersLoading } = useFetchPostersQuery({ movieId: id });
  const { data: seasonsData, isLoading: seasonsLoading } = useFetchSeasonsAndSeriesQuery({
    movieId: id
  });

  if (movieLoading) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <h1 className='text-2xl font-medium text-white'>Загрузка...</h1>
      </div>
    );
  }

  return (
    <div className='relative py-[24px]'>
      <div className='flex max-lg:flex-col max-lg:items-center max-lg:gap-8'>
        <div className='flex w-[300px] lg:pr-6'>
          <img
            src={movieData.poster.url ?? "https://st.kp.yandex.net/images/no-poster.gif"}
            alt='Фотография'
            className='h-[400px] w-full rounded-2xl border-2 border-gray-800 object-cover'
          />
        </div>
        <div className='flex flex-1 flex-col gap-8'>
          <div className='flex rounded-lg bg-panel-darker-bg text-white max-sm:flex-col'>
            <div className='flex-3 flex flex-col gap-2 p-5 pr-8'>
              <div>
                <h1 className='mb-2 text-4xl font-bold'>{movieData.name}</h1>
                <p className='text-gray-500'>{movieData.alternativeName}</p>
              </div>
              <div className='flex gap-2'>
                <p>{movieData.countries[0].name}</p>
                <p>{`${movieData.year} г.`}</p>
              </div>
              <div className='flex gap-2'>{movieData.genres.map((genre) => `${genre.name} `)}</div>
              <p>{movieData.description}</p>
            </div>
            <div className='flex flex-1 flex-col gap-2 p-3 max-sm:p-5'>
              <p className='text-3xl font-bold text-green-400'>{movieData.rating.kp.toFixed(1)}</p>
              <p className='text-sm'>{`${movieData.votes.imdb} оценок`}</p>
            </div>
          </div>

          <div className='flex h-[400px] gap-3 font-medium text-white max-sm:h-full max-sm:flex-col max-sm:p-5'>
            {postersData?.docs.length > 0 && (
              <div className='flex-3 flex flex-col gap-5'>
                <h2>Кадры</h2>
                <Carousel posters={postersData} isLoading={postersLoading} />
              </div>
            )}
            {movieData.similarMovies?.length > 0 && (
              <div className='flex flex-1 flex-col gap-5'>
                <h2>Похожие фильмы</h2>
                <Carousel similarMovie={movieData.similarMovies} />
              </div>
            )}
          </div>

          {movieData.persons.filter((person) => person.enProfession == "actor").length > 0 && (
            <div className='flex flex-col gap-5 font-medium text-white max-sm:p-5'>
              <h2>Актеры</h2>
              <ActorsPagination
                persons={movieData.persons.filter((person) => person.enProfession == "actor")}
              />
            </div>
          )}

          <div className='flex gap-3 text-white max-lg:flex-col'>
            {movieData.isSeries ? (
              <div className='flex flex-1 flex-col gap-5'>
                <h2 className='font-medium'>Сезоны и серии</h2>
                <Disclosure seasonsData={seasonsData} isLoading={seasonsLoading} />
              </div>
            ) : null}

            <ReviewPagination movieId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
