import { createAsyncThunk } from "@reduxjs/toolkit";
import CartApiService from "../CartApiService";

export const updateItemQuantityThunk = createAsyncThunk(
  "cart/updateItemQuantity",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CartApiService.updateItem({
        id: payload.id,
        quantity: payload.quantity,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
