import {
  useFetchAllMoviesQuery,
  movieApi,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery,
  useFetchReviewQuery,
} from "./api/moviesApi";
import type {
  MoviesApiResponse,
  PostersApiResponse,
  SeriesApiResponse,
  MovieId,
} from "./model/MovieApiTypes";
import type { MovieIdApiResponse, Person } from "./model/MovieTypes";

export {
  PostersApiResponse,
  MovieIdApiResponse,
  MoviesApiResponse,
  useFetchAllMoviesQuery,
  movieApi,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  Person,
  SeriesApiResponse,
  useFetchSeasonsAndSeriesQuery,
  MovieId,
  useFetchReviewQuery,
};
