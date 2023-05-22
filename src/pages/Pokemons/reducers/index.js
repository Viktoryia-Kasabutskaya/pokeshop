import { createSlice } from "@reduxjs/toolkit";

import { getPokemonsThunk } from "../api";

const initialState = {
  data: [],
  pokemonDetails: {},
  isLoading: false,
  errors: null,
};

const pokemonsSlice = createSlice({
  name: "pokemonsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errors = null;
    });
    builder.addCase(getPokemonsThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
      state.data = [];
    });
  },
});

export default pokemonsSlice.reducer;
