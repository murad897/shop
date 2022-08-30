import { Container } from "@mui/material";
import React from "react";
import Products from "../../Components/Products/Products";
import SearchInput from "../../Components/SearchInput/SearchInput";

const HomePage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: 50 }}>
      <SearchInput />
      <Products />
    </Container>
  );
};

export default HomePage;
