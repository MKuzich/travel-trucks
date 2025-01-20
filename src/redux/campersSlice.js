import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {
    clearCampers: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.items].filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
        );

        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.total = 0;
      });
  },
});

export const { clearCampers } = slice.actions;

export default slice.reducer;
