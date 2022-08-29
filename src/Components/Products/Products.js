import React, { useEffect } from "react";
import axios from "axios";
import { Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slices/ProductsSlice";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container maxWidth="md">
      <ProductCard />
    </Container>
  );
};

export default Products;
