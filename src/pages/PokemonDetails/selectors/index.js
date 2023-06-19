import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonDetails;

export const pokemonSelector = createSelector(
  baseSelector,
  (details) => details.data
);

export const PokemonLoadingSelector = createSelector(
  baseSelector,
  (details) => details.isLoading
);

export const PokemonErrorsSelector = createSelector(
  baseSelector,
  (details) => details.errors
);
