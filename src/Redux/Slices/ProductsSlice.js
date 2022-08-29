import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts() {
      console.log("products fetched");
    },
    getProducts(state, action) {
      action.payload.map((item) => state.products.push(item));
    },
  },
});

export const { getProducts, fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
