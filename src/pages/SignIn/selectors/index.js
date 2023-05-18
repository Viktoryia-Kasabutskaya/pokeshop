import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;

export const isAuthenticatedSelector = createSelector(
  baseSelector,
  (auth) => auth.isAuthenticated
);

export const errorSelector = createSelector(baseSelector, (auth) => auth.error);
