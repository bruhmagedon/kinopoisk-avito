import {
  movieApi,
  useFetchMovieByIdQuery,
  useFetchMoviesQuery,
  useFetchPostersQuery,
  useFetchReviewQuery,
  useFetchSearchQuery,
  useFetchSeasonsAndSeriesQuery
} from "./api/moviesApi";
import type {
  MovieId,
  MoviesApiResponse,
  PostersApiResponse,
  SeriesApiResponse
} from "./model/MovieApiTypes";
import type { Movie, Person } from "./model/MovieTypes";

export {
  Movie,
  movieApi,
  MovieId,
  MoviesApiResponse,
  Person,
  PostersApiResponse,
  SeriesApiResponse,
  useFetchMovieByIdQuery,
  useFetchMoviesQuery,
  useFetchPostersQuery,
  useFetchReviewQuery,
  useFetchSearchQuery,
  useFetchSeasonsAndSeriesQuery
};
