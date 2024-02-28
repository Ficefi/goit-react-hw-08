import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filter: {
      value: "",
    },
  },
  reducers: {
    filterSearch(state, action) {
      state.filter.value = action.payload;
    },
  },
});

export const { filterSearch } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
