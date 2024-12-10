import type { UserInfoResponse } from "#/entity";
import apiClient from "../apiClient";
import type { ServiceResponse } from "./serviceService";

export enum OrderApi {
  DEFAULT = "/orders",
}

export interface OrderResponse {
  id: number;
  serviceId: number;
  service: ServiceResponse;
  employee: UserInfoResponse;
  customer: UserInfoResponse;
  employeeId: number;
  status: "pending" | "processing" | "done" | "success";
  createdAt: number;
  address: string;

  updatedAt: number;
}

export interface OrderImage {
  id: number;
  orderId: number;
  image: string;
}

const getOrders = () =>
  apiClient.get<OrderResponse[]>({ url: OrderApi.DEFAULT });

const updateOrders = (id: number, data: OrderResponse) =>
  apiClient.put<OrderResponse>({
    url: `${OrderApi.DEFAULT}/${id}`,
    data,
  });

const deleteOrders = (id: number) =>
  apiClient.delete<OrderResponse>({
    url: `${OrderApi.DEFAULT}/${id}`,
  });

const getOrderImages = (id: number) => {
  return apiClient.get<OrderImage[]>({
    url: `/orders/image/${id}`,
  });
};

export default { getOrders, deleteOrders, updateOrders, getOrderImages };
