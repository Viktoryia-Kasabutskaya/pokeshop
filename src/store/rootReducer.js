import { combineReducers } from "@reduxjs/toolkit";

import signInReducer from "../pages/SignIn/reducers";
import pokemonsReducer from "../pages/Pokemons/reducers";
import pokemonDetailsReducer from "../pages/PokemonDetails/reducers";
import cartReducer from "../pages/Cart/reducers";

export const rootReducer = combineReducers({
  auth: signInReducer,
  pokemonsList: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer,
  cart: cartReducer,
});
