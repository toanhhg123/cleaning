import type { UserInfoResponse } from "#/entity";
import apiClient from "../apiClient";

export enum FeedBackApi {
  DEFAULT = "/feedback",
}

export interface FeedBackResponse {
  id: number;
  user: UserInfoResponse;
  userId: number;
  title: string;
  message: string;
  rating: number;
  image: string;
  createdAt: number;
  updatedAt: number;
}

const getFeedbacks = () =>
  apiClient.get<FeedBackResponse[]>({ url: FeedBackApi.DEFAULT });

const deleteFeedback = (id: number) =>
  apiClient.delete<FeedBackResponse>({
    url: `${FeedBackApi.DEFAULT}/${id}`,
  });

export default { getFeedbacks, deleteFeedback };
