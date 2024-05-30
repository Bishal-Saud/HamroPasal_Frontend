import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "./slice/ProductSlice";

const store = configureStore({
  reducer: {
    product: ProductSliceReducer,
  },
  devTools: true,
});

export default store;
