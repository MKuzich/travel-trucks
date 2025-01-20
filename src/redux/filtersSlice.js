import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    type: "",
    page: 1,
  },
  reducers: {
    resetPage(state) {
      state.page = 1;
    },
    changeFilter(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { resetPage, changeFilter } = slice.actions;

export default slice.reducer;
