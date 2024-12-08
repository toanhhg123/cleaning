import type { UserInfoResponse } from "#/entity";
import apiClient from "../apiClient";
import type { ServiceResponse } from "./serviceService";

export enum ServiceFeedbackApi {
  DEFAULT = "/service-feedback",
}

export interface ServiceFeedbackResponse {
  id: number;
  user: UserInfoResponse;
  userId: number;
  service?: ServiceResponse;
  serviceId?: number;
  title: string;
  message: string;
  rating: number;
  image: string;
  createdAt: number;
  updatedAt: number;
}

const getFeedbacks = () =>
  apiClient.get<ServiceFeedbackResponse[]>({ url: ServiceFeedbackApi.DEFAULT });

const getFeedbacksByService = (id: number) =>
  apiClient.get<ServiceFeedbackResponse[]>({
    url: `${ServiceFeedbackApi.DEFAULT}/service/${id}`,
  });

const deleteFeedback = (id: number) =>
  apiClient.delete<ServiceFeedbackResponse>({
    url: `${ServiceFeedbackApi.DEFAULT}/${id}`,
  });

export default { getFeedbacks, deleteFeedback, getFeedbacksByService };
