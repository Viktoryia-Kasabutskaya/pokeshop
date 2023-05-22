import { createAsyncThunk } from "@reduxjs/toolkit";

import CartApiService from "../CartApiService";

export const addItemThunk = createAsyncThunk(
  "cart/addItem",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CartApiService.addItem(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
