import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { RefreshTokenResponse } from "../global/models/auth";
import { getAuth, setAuth } from "./auth.storage";

export const api = axios.create({
  baseURL: "http://192.168.2.9:3333",
});

export const refreshTokenSignIn = async (): Promise<void> => {
  try {
    const user = await getAuth();

    if (!user) {
      throw new Error("User not found.");
    }

    const { data } = await api.post<RefreshTokenResponse>("/refreshToken", {
      refresh_token: user.refreshToken,
    });

    await setAuth({ ...user, token: data.token });
  } catch (e) {
    if (e instanceof AxiosError && e.isAxiosError && e?.response?.data) {
      const [error] = e.response.data;

      throw new Error(error);
    }

    throw new Error("Serviço indisponível, tente novamente mais tarde.");
  }
};

const authInterceptor = async (config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers["Content-Type"] = "application/json";
    const auth = await getAuth();
    if (auth) {
      config.headers["Authorization"] = `Bearer ${auth.token}`;
    }
  }
  return config;
};

const refreshAuthInterceptor = async (error: AxiosError) => {
  if (error.response?.status === 401) {
    await refreshTokenSignIn();
    return await api.request(error.config);
  }
  return Promise.reject(error);
};

api.interceptors.request.use(authInterceptor);
api.interceptors.response.use(undefined, refreshAuthInterceptor);
