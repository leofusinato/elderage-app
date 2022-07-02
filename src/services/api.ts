import axios from "axios";

const config = () => {
  let config = {
    baseURL: "",
    headers: {
      Authorization: "Bearer xxxxxxxxx",
    },
  };
  return config;
};

export const api = axios.create(config());
