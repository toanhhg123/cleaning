import apiClient from "../apiClient";
import type { OrderResponse } from "./orderService";

// Định nghĩa api liên hệ
export enum CommissionApi {
  DEFAULT = "/commission-order",
}

// định nghĩa entity từ backend trả về
export interface CommissionResponse {
  id: number;
  order: OrderResponse;
  price: number;
}

// api lấy danh sách liên hệ
const getAllCommission = () =>
  apiClient.get<CommissionResponse[]>({ url: CommissionApi.DEFAULT });

export default { getAllCommission };
