import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

import { t } from "@/locales/i18n";
import userStore from "@/store/userStore";

import type { Result } from "#/api";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = userStore.getState().userToken.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    if (!res.data) throw new Error(t("sys.api.apiRequestFailed"));

    const { data } = res;

    const hasSuccess = !!data;

    if (hasSuccess) {
      return data || res.data;
    }

    const errorMessage = "Lỗi dòng data response";
    throw new Error(errorMessage);
  },
  (error: AxiosError<Result>) => {
    const { response, message } = error || {};

    const errMsg =
      (response?.data?.message ?? message) || t("sys.api.errorMessage");

    toast.error(errMsg, {
      position: "top-center",
    });

    const status = response?.status;
    if (status === 401) {
      userStore.getState().actions.clearUserInfoAndToken();
    }
    return Promise.reject(error);
  }
);

class APIClient {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "PUT" });
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }
}
export default new APIClient();
