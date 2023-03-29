import { SET_PRODUCTS_LIST } from "./constant";

const initialState = {
  products: [],
};

const mainreducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        products: { ...payload },
      };
    default:
      return {
        ...state,
      };
  }
};

export default mainreducer;
