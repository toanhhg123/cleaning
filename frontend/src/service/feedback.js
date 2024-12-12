import { apiClient } from "../../config/axios";

// api tao feedback
export const createFeedback = async (body) => {
  const { data } = await apiClient.post("/feedback", body);
  return data;
};
