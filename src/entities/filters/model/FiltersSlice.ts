import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedFilters {
  genres?: string | number;
  countries?: string | number;
  status?: string | number;
  type?: string | number;
}

export interface BasicState {
  filters: SelectedFilters;
  isFilterQuery: boolean;
}

const initialState: BasicState = {
  filters: {
    genres: "",
    countries: "",
    type: "",
    status: "",
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
        filterValue: string | number;
      }>
    ) => {
      state.filters[action.payload.filterName] = action.payload.filterValue;
    },
    setFilterQuery: (state, action: PayloadAction<boolean>) => {
      state.isFilterQuery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, setFilterQuery } = filtersSlice.actions;

export default filtersSlice.reducer;
