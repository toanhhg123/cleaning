import { apiClient } from "../../config/axios";

export const createOrder = async (body) => {
  const { data } = await apiClient.post("/orders", body);
  return data;
};

export const getOrderById = async (id) => {
  const { data } = await apiClient.get(`/orders/${id}`);
  return data;
};

export const getMyOrders = async () => {
  const { data } = await apiClient.get("/orders/my-orders");
  return data;
};
