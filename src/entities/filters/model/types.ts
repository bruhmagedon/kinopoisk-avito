// №Это название можно тоже унифицировать для селектов
export interface Filter {
  name: string | number;
  slug?: string;
}

export interface FilterParams {
  field: string;
}
