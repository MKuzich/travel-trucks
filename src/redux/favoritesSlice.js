import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFav: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeFav: (state, action) => {
      return {
        ...state,
        items: state.items.filter((id) => id !== action.payload),
      };
    },
  },
});

export const selectCampers = createSelector(
  [(state) => state.campers.items, (state) => state.filters.name],
  (campers) => {
    return campers;
  }
);

export const { addFav, removeFav } = slice.actions;

export default slice.reducer;
