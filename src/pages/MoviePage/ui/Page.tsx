import {
  movieApi,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery,
} from "@/entities/movies";
import { Carousel } from "@/shared";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ActorsPagination } from "./ActorsPagination/ActorsPagination";
import Disclosure from "@/shared/ui/Disclosure";
import { ReviewPagination } from "./ReviewPagination/ReviewPagination";

export const MoviePage = () => {
  let { id } = useParams();

  const { data: movieData, isLoading: movieLoading } = useFetchMovieByIdQuery({
    id,
  });
  const { data: postersData, isLoading: postersLoading } = useFetchPostersQuery(
    { movieId: id }
  );
  const { data: seasonsData, isLoading: seasonsLoading } =
    useFetchSeasonsAndSeriesQuery({
      movieId: id,
    });

  if (movieLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <div className="p-[24px] relative">
      <div className="flex">
        <div className="w-[255px] flex p-6">
          <img
            src={movieData.poster.url}
            alt={"Фотография"}
            className="object-cover w-full h-[333px] rounded-2xl border-2 border-gray-200"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex">
            <div className="bg-purple-300 flex-3 pr-8 flex flex-col gap-2">
              <div>
                <h1 className="text-4xl font-bold mb-2">{movieData.name}</h1>
                <p>{movieData.alternativeName}</p>
              </div>
              <p>
                {movieData.countries[0].name + ", " + movieData.year + " г."}
              </p>
              <p>{movieData.description}</p>
            </div>
            <div className="bg-green-300 flex-1 flex flex-col p-3 gap-2">
              <p className="text-3xl font-bold text-green-400">
                {movieData.rating.kp.toFixed(1)}
              </p>
              <p className="text-sm">{movieData.votes.imdb + " оценок"}</p>
            </div>
          </div>

          {/* Постеры */}
          <div className="flex h-[400px] gap-3">
            <div className="flex flex-col flex-3">
              <h2>Кадры</h2>
              <Carousel posters={postersData} isLoading={postersLoading} />
            </div>

            <div className="flex flex-col flex-1">
              <h2>Похожие фильмы</h2>
              <Carousel similarMovie={movieData.similarMovies} />
            </div>
          </div>

          {/* Актеры */}
          <div className="flex flex-col">
            <h2>Актеры</h2>
            {/* №Добавить на все списки заглушку, если они пустые */}
            <ActorsPagination
              persons={movieData.persons.filter(
                (person) => person.enProfession == "actor"
              )}
            />
          </div>

          <div className="flex">
            {movieData.isSeries ? (
              <div className="flex flex-col flex-1">
                <h2>Сезоны и серии</h2>
                <Disclosure
                  seasonsData={seasonsData}
                  isLoading={seasonsLoading}
                />
              </div>
            ) : null}
            <div className="flex flex-col flex-1">
              <h2>Отзывы</h2>
              <ReviewPagination movieId={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
