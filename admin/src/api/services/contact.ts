import apiClient from "../apiClient";

// Định nghĩa api liên hệ
export enum ContactApi {
  DEFAULT = "/contact",
}

// định nghĩa entity từ backend trả về
export interface ContactResponse {
  id: number;
  username: string;
  email: string;
  title: string;
  message: string;
  createdAt: number;
  updatedAt: number;
}

// api lấy danh sách liên hệ
const getContacts = () =>
  apiClient.get<ContactResponse[]>({ url: ContactApi.DEFAULT });

// api xoá liên hệ
const deleteContact = (id: number) =>
  apiClient.delete<ContactResponse>({
    url: `${ContactApi.DEFAULT}/${id}`,
  });

export default { getContacts, deleteContact };
