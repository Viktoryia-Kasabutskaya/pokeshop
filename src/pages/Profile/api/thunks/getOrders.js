import { createAsyncThunk } from "@reduxjs/toolkit";

import OrderApiService from "../OrderApiService";

export const getOrdersThunk = createAsyncThunk(
  "profile/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await OrderApiService.getOrders();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
