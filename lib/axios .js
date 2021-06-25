import axios from "axios";
// export const axios_instance = axios.create({
//   baseURL: "http://localhost:5000/",
//   withCredentials: true,
// });
export const axios_instance = (withCredentials = false) =>
  axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: withCredentials,
  });
