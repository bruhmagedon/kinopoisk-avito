import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import { filterApi, FiltersSlice } from "old/entities/filters";
// import SortSlice from "old/entities/filters/model/SortSlice";
// import { movieApi } from "old/entities/movies";
// import { searchSlice } from "old/entities/search";

export const store = configureStore({
  reducer: {
    // [movieApi.reducerPath]: movieApi.reducer,
    // [filterApi.reducerPath]: filterApi.reducer,
    // filters: FiltersSlice,
    // search: searchSlice,
    // sort: SortSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
