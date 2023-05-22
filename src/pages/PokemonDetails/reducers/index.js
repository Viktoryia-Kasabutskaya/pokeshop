import { createSlice } from "@reduxjs/toolkit";

import { getPokemonByNameThunk } from "../api";

const initialState = {
  isLoading: false,
  errors: null,
  data: {
    id: 0,
    name: "",
    image: "",
    abilities: [],
    stats: [],
    price: 0,
  },
};

const PokemonDetailsSlice = createSlice({
  name: "PokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonByNameThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonByNameThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getPokemonByNameThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default PokemonDetailsSlice.reducer;
