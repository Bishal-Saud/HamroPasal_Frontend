import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "./slice/ProductSlice.js";

const store = configureStore({
  reducer: {
    product: ProductSliceReducer,
  },
  devTools: true,
});

export default store;
