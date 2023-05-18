import { createSlice } from "@reduxjs/toolkit";

import { signInThunk } from "../api";

const initialState = {
  isLoading: false,
  error: null,
  profileData: {},
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.profileData = payload;
    });
    builder.addCase(signInThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
