import { Filter, useFetchFiltersQuery } from "@/entities/filters";
import { useState } from "react";

interface IFilters {
  genres: Filter[];
  countries: Filter[];
  status: Filter[];
  type: Filter[];
}

export const useFilters = () => {
  //Здесь нужно будет достать вообще всю инфу по фильтрам

  const [filters, setFilters] = useState<IFilters>();

  // Запросы - тип, жанры, год(хардкод, можно рэнжом), статус, страна
  const { data: genresData } = useFetchFiltersQuery({
    field: "genres.name",
    // № Название жанра должно быть с большой буквы
  });
  const { data: countriesData } = useFetchFiltersQuery({
    field: "countries.name",
  });
  const { data: statusData } = useFetchFiltersQuery({
    field: "status",
    // № Русифицировать (ключ значение, где ключ идёт в редакс, значение выводим)
  });
  const { data: typesData } = useFetchFiltersQuery({
    field: "type",
    // № Русифицировать (ключ значение, где ключ идёт в редакс, значение выводим)
  });

  let isLoading = true;
  if (genresData && countriesData && statusData && typesData) {
    isLoading = false;
    return {
      isLoading,
      data: {
        genres: genresData,
        countries: countriesData,
        status: statusData,
        type: typesData,
      },
    };
  }
  return {
    isLoading,
    data: {
      genres: genresData,
      countries: countriesData,
      status: statusData,
      type: typesData,
    },
  };
};
