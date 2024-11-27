import { useQuery } from "@tanstack/react-query";
import { getMe } from "../service/auth";
import { useMemo } from "react";

const useUser = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  return useMemo(() => {
    return {
      userInfo: data,
      isFetching,
    };
  }, [data, isFetching]);
};

export const useAuth = () => {
  const { userInfo } = useUser();

  return {
    isLogined: !!userInfo,
  };
};

export default useUser;
