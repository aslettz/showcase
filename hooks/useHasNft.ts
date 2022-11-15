import {useAccount, useContractRead} from "wagmi";
import contractJson from "../AslettcoToken.json";

const useHasNft = () => {
    const { address, isConnected } = useAccount();

    const {data, isError} = useContractRead({
        abi: contractJson.abi,
        address: "0x6759ab6647A0D2aa471b4D7Ac512D0637cC16ECF",
        functionName: "balanceOf",
        args: [address],
    })

    return isConnected && (data != 0);
}

export default useHasNft;