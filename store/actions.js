export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const PRODUCTS = "PRODUCTS";

const loginAction = (user) => ({
  type: LOGIN,
  payload: user,
});

export const login = () => async (dispatch) => {
  const user = { name: "taher" };
  dispatch(loginAction(user));
};
