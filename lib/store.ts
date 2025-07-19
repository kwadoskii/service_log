// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import vendorReducer from "./features/vendors/vendorSlice";
import userReducer from "./features/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // only persist user slice
};

const rootReducer = combineReducers({
  user: userReducer,
  vendors: vendorReducer,
  // add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
