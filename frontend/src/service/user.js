import { apiClient } from "../../config/axios";

export const getMe = async () => {
  const { data } = await apiClient.get("/users/me");
  return data;
};

export const updateUser = async (id, body) => {
  const { data } = await apiClient.put(`/users/${id}`, body);
  return data;
};
