import { createAsyncThunk } from "@reduxjs/toolkit";

import OrderApiService from "../OrderApiService";
import { getItemsThunk } from "pages/Cart/api/thunks/getItems";

export const addOrderThunk = createAsyncThunk(
  "profile/addOrder",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await OrderApiService.addOrder(payload);
      dispatch(getItemsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
