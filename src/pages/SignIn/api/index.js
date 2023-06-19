import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "config/pokemonApi";

import LocalStorageService from "services/LocalStorageService";

const signInRequest = (body) => pokemonApi.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await signInRequest(payload);

      const { accessToken, ...profileData } = data;

      LocalStorageService.saveToken(accessToken);

      return profileData;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
