export interface MovieIdApiResponseDoc {
  docs: MovieIdApiResponse[];
}

export interface MovieIdApiResponse {
  id: number; // Id фильма с кинопоиска
  externalId?: ExternalId | null;
  name?: string | null;
  alternativeName?: string | null;
  enName?: string | null;
  names?: Names[] | null;
  type: Type; // Тип тайтла
  typeNumber: number; // №Возможно как record 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)
  year?: number | null; // Год премьеры №(1860-2030) протипизировать диапазон
  description?: string | null; // Описание тайтла
  shortDescription?: string | null; // Сокращенное описание
  slogan?: string | null; // Слоган
  status?: Status | null; // Статус релиза тайтла
  rating?: Rating | null;
  votes?: Votes | null;
  movieLength?: number | null; // Продолжительность фильма
  ratingMpaa?: string | null; // Возрастной рейтинг по MPAA
  ageRating?: number | null; // Возрастной рейтинг
  logo?: Logo | null;
  poster?: Poster | null;
  backdrop?: Poster | null;
  videos?: Videos | null;
  genres?: Genre[] | null;
  countries?: Country[] | null;
  persons?: Person[] | null;
  reviewInfo?: ReviewInfo | null;
  seasonsInfo?: SeasonInfo[] | null;
  budget?: Budget | null;
  fees?: Fees | null;
  premiere?: Premiere | null;
  similarMovies?: SimilarMovie[] | null;
  sequelsAndPrequels?: SequelOrPrequel[] | null;
  watchability?: WatchabilityItem[] | null;
  releaseYears?: ReleaseYears[] | null;
  top10?: number | null; // Позиция тайтла в топ 10
  top250?: number | null; // Позиция тайтла в топ 250
  ticketsOnSale?: boolean | null; // Признак того, что тайтл находится в прокате
  totalSeriesLength?: number | null; // Продолжительность всех серий
  seriesLength?: number | null; // Средняя продолжительность серии
  isSeries?: boolean | null; // Признак сериала
  audience?: Audience[] | null;
  lists?: string[] | null;
  networks?: { items: Network[] } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
  facts?: Fact[] | null;
  imagesInfo?: ImagesInfo | null;
}

interface ExternalId {
  kpHD?: string | null; // ID из kinopoisk HD
  imdb?: string | null;
  tmdb?: number | null;
}

interface Names {
  name?: string | null;
  language?: string | null;
  type?: string | null;
}

type Type = "movie" | "tv-series" | "cartoon" | "anime" | "animated-series" | "tv-show";

type Status = "filming" | "pre-production" | "completed" | "announced" | "post-production";

interface Rating {
  kp?: number | null; // Рейтинг кинопоиска
  imdb?: number | null; // Рейтинг IMDB
  tmdb?: number | null; // Рейтинг TMDB
  filmCritics?: number | null; // Рейтинг кинокритиков
  russianFilmCritics?: number | null; // Рейтинг кинокритиков из РФ
  await?: number | null; // Рейтинг основанный на ожиданиях пользователей
}

interface Votes {
  kp?: number | string | null;
  imdb?: number | null;
  tmdb?: number | null;
  filmCritics?: number | null; // Количество голосов кинокритиков
  russianFilmCritics?: number | null; // Количество голосов кинокритиков из РФ
  await?: number | null; // Количество ожидающих выхода
}

interface Logo {
  url?: string | null;
}

interface Poster {
  url?: string | null;
  previewUrl?: string | null;
}

interface Videos {
  trailers?: Video[] | null;
  teasers?: Video[] | null;
}

interface Video {
  url?: string | null; // Url трейлера
  name?: string | null;
  site?: string | null;
  type?: string | null;
  size: number;
}

interface Genre {
  name?: string | null;
}

interface Country {
  name?: string | null;
}

export interface Person {
  id?: number | null; // Id персоны с кинопоиска
  photo?: string | null;
  name?: string | null;
  enName?: string | null;
  description: string;
  profession: string;
  enProfession: string;
}

interface ReviewInfo {
  count?: number | null;
  positiveCount?: number | null;
  percentage?: string | null;
}

interface SeasonInfo {
  number?: number | null;
  episodesCount?: number | null;
}

interface Budget {
  value?: number | null; // Сумма
  currency?: string | null; // Валюта
}

interface Fees {
  world?: Budget | null;
  russia?: Budget | null;
  usa?: Budget | null;
}

interface Premiere {
  country?: string | null;
  world?: string | null; // № 01.02.2022-01.02.2023 типизировать
  russia?: string | null; // № 01.02.2022-01.02.2023 типизировать
  digital?: string | null;
  cinema?: string | null; // № 01.02.2022-01.02.2023 типизировать
  bluray: string;
  dvd: string;
}

export interface SimilarMovie {
  id?: number | null;
  rating: Rating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string | null;
  poster: Poster;
}

interface SequelOrPrequel {
  id?: number | null;
  rating: Rating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string | null;
  poster: Poster;
}

interface WatchabilityItem {
  name?: string | null;
  logo: Logo;
  url: string;
}

interface ReleaseYears {
  start?: number | null;
  end?: number | null;
}

interface Audience {
  count: number; // Количество просмотров в кино
  country: string; // Страна в которой проходил показ
}

interface Network {
  name: string;
  logo: Logo;
}

interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

interface ImagesInfo {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}
