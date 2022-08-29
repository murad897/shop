import { all, takeLatest } from "redux-saga/effects";
import { takeEvery, call, take, put } from "redux-saga/effects";
import axios from "axios";
import { getProducts } from "../Slices/ProductsSlice";

const GetProducts = async () => {
  const res = await axios.get("http://localhost:3000/products");
  return res.data;
};

function* fetchProducts() {
  try {
    const products = yield GetProducts();
    yield put(getProducts(products));
  } catch (e) {
    console.log(e.message);
  }
}

export default function* rootSaga() {
  yield all([takeLatest("products/fetchProducts", fetchProducts)]);
}
