import { LOGIN, LOGOUT, PRODUCTS } from "./actions";

export const initialState = {
  user: {},
  logedIn: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        logedIn: true,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        logedIn: false,
        user: {},
      };
    case PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };

    default:
      return state;
  }
};
