import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedFilters {
  "genres.name": string;
  "countries.name"?: string;
  status?: string;
  type?: string;
  year?: string;
}

export interface BasicState {
  filters: SelectedFilters;
  isFilterQuery: boolean;
}

const initialState: BasicState = {
  filters: {
    "genres.name": "",
    "countries.name": "",
    type: "",
    status: "",
    year: "",
  },
  isFilterQuery: false,
};

export const filtersSlice = createSlice({
  name: "movieFilters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        filterName: keyof BasicState["filters"];
        filterValue: string;
      }>
    ) => {
      if (action.payload.filterValue.toLowerCase() === "нет") {
        state.filters[action.payload.filterName] = "";
      } else {
        state.filters[action.payload.filterName] = action.payload.filterValue;
      }
    },
    setFilterQuery: (state, action: PayloadAction<boolean>) => {
      state.isFilterQuery = action.payload;
    },
    // Сюда можно добавить обнуление, потом их перетащить в FilterSelect, взять Select нет с локальным стейтом, а с редаксом
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, setFilterQuery } = filtersSlice.actions;

export default filtersSlice.reducer;
