import { createAsyncThunk } from "@reduxjs/toolkit";

import CartApiService from "../CartApiService";

export const addOrderThunk = createAsyncThunk(
  "cart/addOrder",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CartApiService.addOrder(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
