import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonApi } from "config/pokemonApi";

const getPokemonsCall = ({ page, limit = 12 }) =>
  pokemonApi.get("/products", {
    params: {
      page,
      limit,
    },
  });

export const getPokemonsThunk = createAsyncThunk(
  "pokemonsList/getPokemons",
  async (body, { rejectWithValue }) => {
    try {
      const response = await getPokemonsCall(body);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
