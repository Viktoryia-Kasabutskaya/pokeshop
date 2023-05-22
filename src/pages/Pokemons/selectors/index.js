import { createSelector } from "@reduxjs/toolkit";

const PokemonsSelector = (store) => store.pokemonsList;

export const PokemonsListSelector = createSelector(
  PokemonsSelector,
  (pokemonsList) => pokemonsList.data
);

export const PokemonsErrorsSelector = createSelector(
  PokemonsSelector,
  (pokemonsList) => pokemonsList.errors
);

export const PokemonsLoadingSelector = createSelector(
  PokemonsSelector,
  (pokemonsList) => pokemonsList.isLoading
);
