import apiClient from "../apiClient";

export enum ContactApi {
  DEFAULT = "/contact",
}

export interface ContactResponse {
  id: number;
  username: string;
  email: string;
  title: string;
  message: string;
  createdAt: number;
  updatedAt: number;
}

const getContacts = () =>
  apiClient.get<ContactResponse[]>({ url: ContactApi.DEFAULT });

const deleteContact = (id: number) =>
  apiClient.delete<ContactResponse>({
    url: `${ContactApi.DEFAULT}/${id}`,
  });

export default { getContacts, deleteContact };
