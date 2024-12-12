import { apiClient } from "../../config/axios";

// api login
export const login = async (body) => {
  const { data } = await apiClient.post("/auth/login", body);
  return data.accessToken;
};

// api dang ki
export const register = async (body) => {
  const { data } = await apiClient.post("/auth/register", body);
  return data.accessToken;
};

// api doi mat khau
export const changePassword = async (body) => {
  const { data } = await apiClient.post("/auth/change-password", body);
  return data.accessToken;
};

// api lay thong tin nguoi dung dang dang nhap
export const getMe = async () => {
  const { data } = await apiClient.get("/users/me");
  return data;
};
