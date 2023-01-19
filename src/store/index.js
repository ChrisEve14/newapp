import { configureStore } from "@reduxjs/toolkit";

import characterReducer from "./character.slice";
import authReducer from "./auth.slice";

export const store = configureStore({
  reducer: {
    character: characterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
