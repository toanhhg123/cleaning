import { apiClient } from "../../config/axios";

export const createFeedback = async (body) => {
  const { data } = await apiClient.post("/feedback", body);
  return data;
};
