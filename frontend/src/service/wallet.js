import { apiClient } from "../../config/axios";

export const getWallet = async () => {
  const { data } = await apiClient.get("/wallets");
  return data;
};

export const createPayment = async (body) => {
  const { data } = await apiClient.post("/payment/vn-pay", body);
  return data;
};
