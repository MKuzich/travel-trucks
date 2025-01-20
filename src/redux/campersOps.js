import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterBuilder } from "../helpers/filterBuilder";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filter, thunkAPI) => {
    try {
      const { data } = await axios.get("/campers" + filterBuilder(filter));
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchCamper = async (id) => {
  try {
    const { data } = await axios.get("/campers/" + id);
    return data;
  } catch (e) {
    return e.response.data;
  }
};
