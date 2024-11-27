import { apiClient } from "../config/axios";

export const login = async (body) => {
  const { data } = await apiClient.post("/auth/login", { data: body });
  return data;
};
