import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sort: string;
  viewCount: string;
}

const initialState: SortState = {
  sort: "Отсутствует",
  viewCount: "10",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort: (
      state,
      action: PayloadAction<{ sort: string; viewCount: string }>
    ) => {
      state.sort = action.payload.sort;
      state.viewCount = action.payload.viewCount;
    },
    resetSort: (state) => {
      state.sort = initialState.sort;
      state.viewCount = initialState.viewCount;
    },
  },
});

export const { setSort, resetSort } = sortSlice.actions;
export default sortSlice.reducer;
