import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/authSlice";
import { authApi } from "./api/authApi";
const store = configureStore({
  reducer: {
    // [] for generating dynamic property
    // so--> authApi:authApi.reducer
    [authApi.reducerPath]: authApi.reducer,
    registration: authSlice,
  },

  // vite with react hole env te access==> import.meta.env.nameOfenv variable
  devTools: import.meta.env.MODE !== "production",
  // we dont want to replace redux toolkits own mw. so we are just concatenatiin our custom mw which will come from authApi
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
