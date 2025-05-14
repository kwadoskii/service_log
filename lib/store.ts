// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "./features/vendors/vendorSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      vendors: vendorReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
