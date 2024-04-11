// №Это название можно тоже унифицировать для селектов
export interface Filter {
  name: string | number;
  slug?: string;
}

export interface FilterParams {
  field: string;
}

export interface FilterTypes {
  genres?: Filter[];
  countries?: Filter[];
  status?: Filter[];
  type?: Filter[];
}
