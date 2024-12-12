import { apiClient } from "../../config/axios";

// api tao lien he
export const createContact = async (body) => {
  const { data } = await apiClient.post("/contact", body);
  return data;
};
