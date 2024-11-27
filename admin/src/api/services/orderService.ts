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
  employeeId: number;
  status: "pending" | "processing" | "done";
  createdAt: number;
  updatedAt: number;
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

export default { getOrders, deleteOrders, updateOrders };
