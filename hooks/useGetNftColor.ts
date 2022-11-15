import {useAccount, useContractRead} from "wagmi";
import contractJson from "../AslettcoToken.json";
import {useState} from "react";
import axios from "axios";

const useGetNftColor = (): string => {

    async function readAndSetNftColor(metadataUrl: string) {
        const response = await axios.get(metadataUrl);
        setNftColor(response.data.properties.color);
    }

    const { address, isConnected } = useAccount();
    const [nftColor, setNftColor] = useState();
    const {data, isError} = useContractRead({
        abi: contractJson.abi,
        address: "0xD7032E28FE313870329977a2c80E708DbA818165",
        functionName: "getTokenUriByAddress",
        args: [address],
    })

    if (!nftColor) {
        const metadataUrl = (data as string).replace("ipfs://", "https://nftstorage.link/ipfs/");
        readAndSetNftColor(metadataUrl);
        return '#FF551B';
    }

    return nftColor
}

export default useGetNftColor;