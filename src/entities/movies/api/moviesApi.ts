import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  MovieId,
  MovieParamsType,
  MoviesApiResponse,
  PostersApiResponse,
  ReviewApiResponse,
  ReviewParamsType,
  SeriesApiResponse
} from '../model/MovieApiTypes';
import type { MovieIdApiResponse } from '../model/MovieTypes';

// TODO Повторяется, вынести в константу в отдельный файл
const X_API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('X-API-KEY', X_API_KEY);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query<MoviesApiResponse, MovieParamsType>({
      query: (params) => {
        const { query, sortField, ...otherParams } = params;
        const filteredOtherParams = Object.entries(otherParams)
          .filter(([_, value]) => value !== '')
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

        if (query != '') {
          return {
            url: `movie/search`,
            params: {
              query,
              ...filteredOtherParams
            }
          };
        } else {
          if (sortField) {
            return {
              url: `movie`,
              params: {
                sortField,
                sortType: 1,
                ...filteredOtherParams
              }
            };
          } else {
            return {
              url: `movie`,
              params: {
                ...filteredOtherParams
              }
            };
          }
        }
      }
    }),
    fetchMovieById: builder.query<MovieIdApiResponse, MovieId>({
      query: (params) => {
        const { id } = params;
        return {
          url: `movie/${id}`
        };
      }
    }),
    fetchPosters: builder.query<PostersApiResponse, MovieId>({
      query: (params) => {
        return {
          url: `image`,
          params: {
            ...params
          }
        };
      }
    }),
    fetchSeasonsAndSeries: builder.query<SeriesApiResponse, MovieId>({
      query: (params) => {
        const { movieId } = params;
        return {
          url: `season`,
          params: {
            movieId
          }
        };
      }
    }),
    fetchReview: builder.query<ReviewApiResponse, ReviewParamsType>({
      query: (params) => {
        return {
          url: `review`,
          params: {
            ...params
          }
        };
      }
    }),
    fetchSearch: builder.query<MoviesApiResponse, MovieParamsType>({
      query: (params) => {
        return {
          url: `movie/search`,
          params: {
            ...params
          }
        };
      }
    })
  })
});

export const {
  useFetchMoviesQuery,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery,
  useFetchReviewQuery,
  useFetchSearchQuery
} = movieApi;
