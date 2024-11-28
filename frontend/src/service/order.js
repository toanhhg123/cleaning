import { apiClient } from "../../config/axios";

export const createOrder = async (body) => {
  const { data } = await apiClient.post("/orders", body);
  return data;
};

export const updateOrder = async (id, body) => {
  const { data } = await apiClient.put(`/orders/${id}`, body);
  return data;
};

export const acceptOrder = async (id) => {
  const { data } = await apiClient.post(`/orders/accept/${id}`);
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

export const getMyWorks = async () => {
  const { data } = await apiClient.get("/orders/my-works");
  return data;
};

export const getOrdersStatus = async (status) => {
  const { data } = await apiClient.get(`/orders/status/${status}`);
  return data;
};

export const createOrderImage = async (body) => {
  const { data } = await apiClient.post("/orders/image", body);
  return data;
};

export const getOrderImages = async (id) => {
  const { data } = await apiClient.get(`/orders/image/${id}`);
  return data;
};
