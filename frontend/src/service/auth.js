import { apiClient } from "../../config/axios";

export const login = async (body) => {
  const { data } = await apiClient.post("/auth/login", body);
  return data.accessToken;
};

export const register = async (body) => {
  const { data } = await apiClient.post("/auth/register", body);
  return data.accessToken;
};

export const changePassword = async (body) => {
  const { data } = await apiClient.post("/auth/change-password", body);
  return data.accessToken;
};

export const getMe = async () => {
  const { data } = await apiClient.get("/users/me");
  return data;
};
