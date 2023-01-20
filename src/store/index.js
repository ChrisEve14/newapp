import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import characterReducer from "./character.slice";
import { authReducer } from './reducers';


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
