import axios from "axios";

export const axios_instance = (withCredentials = false) =>
  axios.create({
    baseURL: "https://fashion-app-taher.herokuapp.com/",
    withCredentials: withCredentials,
  });
