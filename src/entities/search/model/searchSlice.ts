import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SeachState {
  keyword: string;
}

const initialState: SeachState = {
  keyword: "",
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
