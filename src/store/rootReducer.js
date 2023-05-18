import { combineReducers } from "@reduxjs/toolkit";

import signInReducer from "../pages/SignIn/reducers";

export const rootReducer = combineReducers({
  auth: signInReducer,
});
