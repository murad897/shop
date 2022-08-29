import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas/Sagas";
import ProductSlice from "../Slices/ProductsSlice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
  ProductSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
