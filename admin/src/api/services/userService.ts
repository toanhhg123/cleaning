import apiClient from "../apiClient";

import type { UserInfo, UserInfoResponse, UserToken } from "#/entity";

export interface SignInReq {
  email: string;
  password: string;
}

export interface SignUpReq extends SignInReq {
  email: string;
}
export type SignInRes = UserToken & { user: UserInfo };

export enum UserApi {
  SignIn = "/auth/login",
  SignUp = "/auth/signup",
  Logout = "/auth/logout",
  Refresh = "/auth/refresh",
  User = "/user",
  Me = "/users/me",
  ADMIN_PERMISSION = "/permission/admin",
  LIST_USER = "/users",
}

const signin = (data: SignInReq) =>
  apiClient.post<SignInRes>({ url: UserApi.SignIn, data });
const signup = (data: SignUpReq) =>
  apiClient.post<SignInRes>({ url: UserApi.SignUp, data });
const logout = () => apiClient.get({ url: UserApi.Logout });
const findById = (id: string) =>
  apiClient.get<UserInfo[]>({ url: `${UserApi.User}/${id}` });
const getUsers = () =>
  apiClient.get<UserInfoResponse[]>({ url: UserApi.LIST_USER });
const getMe = () => apiClient.get<UserInfoResponse>({ url: UserApi.Me });
const createUser = (data: UserInfoResponse) =>
  apiClient.post<UserInfoResponse>({ url: UserApi.LIST_USER, data });
const updateUser = (data: UserInfoResponse) =>
  apiClient.put<UserInfoResponse>({
    url: `${UserApi.LIST_USER}/${data.id}`,
    data,
  });
const deleteUser = (id: number) =>
  apiClient.delete<UserInfoResponse>({
    url: `${UserApi.LIST_USER}/${id}`,
  });

export default {
  signin,
  signup,
  findById,
  logout,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getMe,
};
