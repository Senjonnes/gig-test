import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const Http = axios.create({ baseURL });

Http.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default Http;
