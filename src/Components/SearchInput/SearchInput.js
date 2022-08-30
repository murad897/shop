import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProdcuts } from "../../Redux/Slices/ProductsSlice";
import { fetchProducts } from "../../Redux/Slices/ProductsSlice";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    inputValue.length > 2
      ? dispatch(filterProdcuts(inputValue))
      : dispatch(fetchProducts());
  }, [inputValue]);

  return (
    <Box>
      <TextField
        id="outlined-basic"
        value={inputValue}
        label="search"
        variant="outlined"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Box>
  );
};

export default SearchInput;
