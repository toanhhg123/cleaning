import { apiClient } from "../../config/axios";

export const createServiceFeedback = async (body) => {
  const { data } = await apiClient.post("/service-feedback", body);
  return data;
};

export const getServiceFeedbackByServiceId = async (id) => {
  const { data } = await apiClient.get(`/service-feedback/service/${id}`);
  return data;
};
