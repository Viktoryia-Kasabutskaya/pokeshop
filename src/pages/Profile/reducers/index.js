import { createSlice } from "@reduxjs/toolkit";

import { getOrdersThunk } from "../api/thunks/getOrders";
import { addOrderThunk } from "../api/thunks/addOrder";

const initialState = {
  orderData: [],
  isLoading: false,
  errors: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(getOrdersThunk.fulfilled, (state, { payload: orders }) => {
        state.isLoading = false;
        state.errors = null;
        state.orderData = orders;
      })
      .addCase(getOrdersThunk.rejected, (state, { payload: error }) => {
        state.isLoading = false;
        state.errors = error;
      });

    builder
      .addCase(addOrderThunk.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(addOrderThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.errors = null;
      })
      .addCase(addOrderThunk.rejected, (state, { payload: error }) => {
        state.isLoading = false;
        state.errors = error;
      });
  },
});

export default orderSlice.reducer;
