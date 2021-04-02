import { axios_instance } from "../lib/axios ";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const PRODUCTS = "PRODUCTS";

const loginAction = (user) => ({
  type: LOGIN,
  payload: user,
});

const productsAction = (products) => ({
  type: PRODUCTS,
  payload: products,
});

export const loginA = ({ email, password }) => async (dispatch) => {
  try {
    const res = await axios_instance(true)({
      method: "POST",
      url: "/users/login",
      // data: { email: "taher@gmail.com", password: "test1234" },
      data: { email, password },
    });
    const user = res.data.user || {};
    dispatch(loginAction(user));
    return { msg: "" };
  } catch (err) {
    throw err;
  }
};

export const checkAuth = (header = {}) => async (dispatch) => {
  try {
    const res = await axios_instance(true)({
      method: "GET",
      url: "users/checkAuth",
      headers: { cookie: header },
    });

    const user = res.data.user || {};
    dispatch(loginAction(user));
  } catch (err) {
    console.log(err.response);
  }
};

export const signup = ({ email, password, name, passwordConf }) => async (
  dispatch
) => {
  try {
    const res = await axios_instance(true)({
      method: "POST",
      url: "/users/signup",

      data: { email, password, passwordConf, name },
    });
    const user = res.data.user || {};
    dispatch(loginAction(user));
    return { msg: "" };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios_instance()({
      url: "/products",
      method: "GET",
    });
    dispatch(productsAction(data.products));
  } catch (error) {
    console.log(error.response);
  }
};
