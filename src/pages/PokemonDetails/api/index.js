import { createAsyncThunk } from "@reduxjs/toolkit";

import { pokemonApi } from "config/pokemonApi";

const getPokemonById = (name) => pokemonApi.get(`/products/${name}`);

export const getPokemonByNameThunk = createAsyncThunk(
  "pokemonDetails/getPokemonByName",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getPokemonById(payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
