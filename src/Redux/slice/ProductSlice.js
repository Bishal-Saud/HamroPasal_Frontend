import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  productData: [],
};

export const getAllProducts = createAsyncThunk("/products/get", async () => {
  try {
    const response = axiosInstance.get("/products");
    toast.promise(response, {
      loading: "Loading products data...",
      success: "Products loaded successfully",
      error: "Failed to get products",
    });
    console.log("API response received:", (await response).data.products);

    return (await response).data.products;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error; // Ensure to throw the error to handle it in the component if needed
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      console.log("actionPayload", action.payload);
      if (action.payload) {
        state.productData = [...action.payload];
      }
    });
  },
});

export default productSlice.reducer;
