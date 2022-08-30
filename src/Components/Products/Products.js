import React, { useEffect } from "react";
import axios from "axios";
import { Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slices/ProductsSlice";
import ProductCard from "./ProductCard";
import { productsSelector } from "../../Redux/Selectors/index";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container maxWidth="md" style={{ padding: 0 }}>
      {products.length > 1 ? <ProductCard /> : <p>loading</p>}
    </Container>
  );
};

export default Products;
