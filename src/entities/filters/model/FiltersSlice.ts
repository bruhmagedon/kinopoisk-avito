import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterTypes {
  genres?: string | number;
  countries?: string | number;
  status?: string | number;
  type?: string | number;
}

export interface CounterState {
  filters: FilterTypes;
}

const initialState: CounterState = {
  filters: {
    genres: "",
    countries: "",
    type: "",
    status: "",
  },
};

export const filtersSlice = createSlice({
  name: "movieFilters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        filterName: keyof CounterState["filters"];
        filterValue: string | number;
      }>
    ) => {
      console.log(
        "REDUX ",
        action.payload.filterName,
        action.payload.filterValue
      );
      state.filters[action.payload.filterName] = action.payload.filterValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
