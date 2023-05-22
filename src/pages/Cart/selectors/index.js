import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  cartSelector,
  (cart) => cart.items
);

export const emptyCartSelector = createSelector(
  cartItemsSelector,
  (items) => items.length === 0
);

export const totalPriceSelector = createSelector(
  cartSelector,
  (cart) => cart.totalPrice
);

export const cartItemsQuantitySelector = createSelector(
  cartSelector,
  (cart) => cart.quantity
);

export const cartErrorsSelector = createSelector(
  cartSelector,
  (cart) => cart.errors
);

export const cartLoadingSelector = createSelector(
  cartSelector,
  (cart) => cart.isLoading
);
