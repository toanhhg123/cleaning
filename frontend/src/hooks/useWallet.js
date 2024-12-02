import { useQuery } from "@tanstack/react-query";
import { getWallet } from "../service/wallet";

const useWallet = () =>
  useQuery({
    queryFn: getWallet,
    queryKey: ["wallet"],
  });

export default useWallet;
