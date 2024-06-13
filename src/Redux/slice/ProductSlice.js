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

export const createNewProduct = createAsyncThunk(
  "/product/create",
  async (data) => {
    try {
      let formData = new FormData();
      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("price", data?.price);
      formData.append("category", data?.category);
      formData.append("image", data?.image);
      formData.append("rate", data?.rate);
      formData.append("count", data?.count);

      const response = axiosInstance.post("/products", formData);
      toast.promise(response, {
        loading: "Creating New Product",
        success: "Created New Product",
        error: "Failed to create Product!",
      });

      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const deleteProduct = createAsyncThunk("/product/delete", async (id) => {
  try {
    const response = axiosInstance.delete(`/products/${id}`);

    toast.promise(response, {
      loading: "Deleting Product ...",
      success: "Product deleted successfully",
      error: "Failed to delete Product",
    });
    return (await response).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
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
