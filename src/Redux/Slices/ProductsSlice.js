import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts() {
      // console.log("products fetched");
    },
    getProducts(state, action) {
      state.products = [];
      action.payload.map((item) => state.products.push(item));
    },
    filterProdcuts(state, action) {
      const filteredUsers = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.products = [];
      filteredUsers.map((product) => state.products.push(product));
    },
  },
});

export const { getProducts, fetchProducts, filterProdcuts } =
  ProductSlice.actions;
export default ProductSlice.reducer;
