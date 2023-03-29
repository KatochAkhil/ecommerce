import { allProducts } from "@/utils/endpoints";
import axios from "../utils/axios";
import { takeEvery, put } from "redux-saga/effects";
import { ALL_PRODUCTS, SET_PRODUCTS_LIST } from "./constant";

function* getProducts() {
  let data = yield axios.get(allProducts);
  yield put({ type: SET_PRODUCTS_LIST, data });
}

export function* productSaga() {
  yield takeEvery(SET_PRODUCTS_LIST, getProducts);
}
