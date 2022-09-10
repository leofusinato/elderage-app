import axios from "axios";
import { getAuth } from "./auth.storage";

export const api = axios.create();

api.interceptors.request.use(async (config) => {
  config.baseURL = "http://192.168.2.7:3333";
  if (config.headers) {
    config.headers["Content-Type"] = "application/json";
    const auth = await getAuth();
    if (auth) {
      config.headers["Authorization"] = `Bearer ${auth.token}`;
    }
  }
  return config;
});
