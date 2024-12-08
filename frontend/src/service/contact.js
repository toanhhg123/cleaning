import { apiClient } from "../../config/axios";

export const createContact = async (body) => {
  const { data } = await apiClient.post("/contact", body);
  return data;
};
