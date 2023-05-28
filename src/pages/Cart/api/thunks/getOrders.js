import { createAsyncThunk } from "@reduxjs/toolkit";

import CartApiService from "../CartApiService";

export const getOrdersThunk = createAsyncThunk(
  "profile/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CartApiService.getOrders();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
