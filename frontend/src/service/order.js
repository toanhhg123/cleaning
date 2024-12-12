import { apiClient } from "../../config/axios";

// api tao order
export const createOrder = async (body) => {
  const { data } = await apiClient.post("/orders", body);
  return data;
};

// api cap nhat order
export const updateOrder = async (id, body) => {
  const { data } = await apiClient.put(`/orders/${id}`, body);
  return data;
};

// api xac nhan don hang
export const acceptOrder = async (id) => {
  const { data } = await apiClient.post(`/orders/accept/${id}`);
  return data;
};

// api lay thong tin don hang
export const getOrderById = async (id) => {
  const { data } = await apiClient.get(`/orders/${id}`);
  return data;
};

// api lay danh sach don hang cua nguoi dung
export const getMyOrders = async () => {
  const { data } = await apiClient.get("/orders/my-orders");
  return data;
};

// api lay danh sach cong viec cua nhan vien
export const getMyWorks = async () => {
  const { data } = await apiClient.get("/orders/my-works");
  return data;
};

// api lay don hang theo trang thai
export const getOrdersStatus = async (status) => {
  const { data } = await apiClient.get(`/orders/status/${status}`);
  return data;
};

// api tao hinh anh don hang
export const createOrderImage = async (body) => {
  const { data } = await apiClient.post("/orders/image", body);
  return data;
};

// api lay danh sach order image
export const getOrderImages = async (id) => {
  const { data } = await apiClient.get(`/orders/image/${id}`);
  return data;
};
