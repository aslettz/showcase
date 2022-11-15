import {useAccount, useContractRead} from "wagmi";
import contractJson from "../AslettcoToken.json";
import {useState} from "react";
import axios from "axios";
import useHasNft from "./useHasNft";

const useGetNftColor = (): string | null => {
    const { address, isConnected } = useAccount();
    const [nftColor, setNftColor] = useState();
    const hasNft = useHasNft();
    const {data, isError} = useContractRead({
        abi: contractJson.abi,
        address: "0xD7032E28FE313870329977a2c80E708DbA818165",
        functionName: "getTokenUriByAddress",
        args: [address],
    })

    async function readAndSetNftColor(metadataUrl: string) {
        const response = await axios.get(metadataUrl);
        setNftColor(response.data.properties.color);
    }

    if (isConnected && hasNft && data && !nftColor) {
        const metadataUrl = (data as string).replace("ipfs://", "https://nftstorage.link/ipfs/");
        readAndSetNftColor(metadataUrl);
        return null;
    }
    if (!nftColor) {
        return null;
    }

    return nftColor;
}

export default useGetNftColor;