import { createAsyncThunk } from "@reduxjs/toolkit";

import CartApiService from "../CartApiService";

export const getItemsThunk = createAsyncThunk(
  "cart/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CartApiService.getItems();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
