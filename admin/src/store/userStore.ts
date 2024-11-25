import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import userService, {
	UserApi,
	type SignInReq,
} from "@/api/services/userService";

import type {
	Permission,
	UserInfo,
	UserInfoResponse,
	UserToken,
} from "#/entity";
import { BasicStatus, StorageEnum } from "#/enum";
import { toast } from "sonner";
import apiClient from "@/api/apiClient";
import { setItem } from "@/utils/storage";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

type UserStore = {
	userInfo: Partial<UserInfo>;
	userToken: UserToken;
	actions: {
		setUserInfo: (userInfo: UserInfo) => void;
		setUserToken: (token: UserToken) => void;
		clearUserInfoAndToken: () => void;
	};
};

const useUserStore = create<UserStore>()(
	persist(
		(set) => ({
			userInfo: {},
			userToken: {},
			actions: {
				setUserInfo: (userInfo) => {
					set({ userInfo });
				},
				setUserToken: (userToken) => {
					set({ userToken });
				},
				clearUserInfoAndToken() {
					set({ userInfo: {}, userToken: {} });
				},
			},
		}),
		{
			name: "userStore",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				[StorageEnum.UserInfo]: state.userInfo,
				[StorageEnum.UserToken]: state.userToken,
			}),
		},
	),
);

export const useUserInfo = () => useUserStore((state) => state.userInfo);
export const useUserToken = () => useUserStore((state) => state.userToken);
export const useUserPermission = () =>
	useUserStore((state) => state.userInfo.permissions);
export const useUserActions = () => useUserStore((state) => state.actions);

export const useSignIn = () => {
	const navigate = useNavigate();
	const { setUserToken, setUserInfo } = useUserActions();

	const signInMutation = useMutation({
		mutationFn: userService.signin,
	});

	const signIn = async (data: SignInReq) => {
		try {
			const res = await signInMutation.mutateAsync(data);

			const userInfo = await apiClient.get<UserInfoResponse>({
				url: UserApi.Me,
				headers: {
					Authorization: `Bearer ${res.accessToken}`,
				},
			});

			const permissions = await apiClient.get<Permission[]>({
				url: UserApi.ADMIN_PERMISSION,
				headers: {
					Authorization: `Bearer ${res.accessToken}`,
				},
			});

			res.user = {
				...res.user,
				permissions: permissions,
				role: {
					id: userInfo.id.toString(),
					name: userInfo.role,
					label: userInfo.role,
					status: BasicStatus.ENABLE,
					permission: permissions,
				},
			};

			const { user, accessToken, refreshToken = "" } = res;
			setUserToken({ accessToken, refreshToken });
			setUserInfo(user);
			setItem(StorageEnum.UserToken, { accessToken, refreshToken });
			navigate(HOMEPAGE, { replace: true });
			toast.success("Sign in success!");
		} catch (err) {}
	};

	return signIn;
};

export default useUserStore;
