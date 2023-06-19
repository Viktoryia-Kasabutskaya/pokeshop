import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.order;

export const ordersSelector = createSelector(
  baseSelector,
  (order) => order.orderData
);

export const isLoadingSelector = createSelector(
  baseSelector,
  (order) => order.isLoading
);
