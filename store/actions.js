import { axios_instance } from "../lib/axios ";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const PRODUCTS = "PRODUCTS";

const loginAction = (user) => ({
  type: LOGIN,
  payload: user,
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
  } catch (err) {
    return err.response.data.msg;
  }
};
