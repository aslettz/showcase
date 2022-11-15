import {useAccount, useContractRead} from "wagmi";
import contractJson from "../AslettcoToken.json";

const useHasNft = () => {
    const { address, isConnected } = useAccount();

    const {data, isError} = useContractRead({
        abi: contractJson.abi,
        address: "0xD7032E28FE313870329977a2c80E708DbA818165",
        functionName: "balanceOf",
        args: [address],
    })

    return (data != 0);
}

export default useHasNft;