import { apiClient } from "../../config/axios";

export const getServices = async () => {
  const { data } = await apiClient.get("/services/status/active");
  return data;
};

export const getServicesById = async (id) => {
  const { data } = await apiClient.get(`/services/${id}`);
  return data;
};
