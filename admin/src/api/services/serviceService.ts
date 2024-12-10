import type { UserInfoResponse } from "#/entity";
import apiClient from "../apiClient";

export enum ServiceApi {
  DEFAULT = "/services",
}

export interface ServiceResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  pricePerHour: number;
  customerId: number;
  customer: UserInfoResponse;
  status: string;
  phone: string;
  address: string;
  time: string;
  tag: string;
  createdAt: number;

  updatedAt: number;
}

const getServices = () =>
  apiClient.get<ServiceResponse[]>({ url: ServiceApi.DEFAULT });

const createService = (data: ServiceResponse) =>
  apiClient.post<ServiceResponse>({ url: ServiceApi.DEFAULT, data });

const updateService = (id: number, data: ServiceResponse) =>
  apiClient.put<ServiceResponse>({
    url: `${ServiceApi.DEFAULT}/${id}`,
    data,
  });

const deleteService = (id: number) =>
  apiClient.delete<ServiceResponse>({
    url: `${ServiceApi.DEFAULT}/${id}`,
  });

export default { getServices, createService, updateService, deleteService };
