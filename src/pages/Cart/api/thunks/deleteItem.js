import { createAsyncThunk } from "@reduxjs/toolkit";

import CartApiService from "../CartApiService";

export const deleteItemThunk = createAsyncThunk(
  "cart/deleteItem",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CartApiService.deleteItem(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
