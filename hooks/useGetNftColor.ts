import {useAccount, useContractRead} from "wagmi";
import contractJson from "../AslettcoToken.json";
import {useState} from "react";
import axios from "axios";
import useHasNft from "./useHasNft";
import {useReactiveVar} from "@apollo/client";
import appConfigVar, {AppConfig} from "../globalState";

const useGetNftColor = (): string | null => {
    const { address, isConnected } = useAccount();
    const [nftColor, setNftColor] = useState();
    const hasNft = useHasNft();
    const appConfig  = useReactiveVar<AppConfig>(appConfigVar);
    const {data, isError} = useContractRead({
        abi: contractJson.abi,
        address: "0xD7032E28FE313870329977a2c80E708DbA818165",
        functionName: "getTokenUriByAddress",
        args: [address],
    })

    async function readAndSetNftColor(metadataUrl: string) {
        const response = await axios.get(metadataUrl);
        setNftColor(response.data.properties.color);
        appConfigVar({...appConfig, nftImageUrl: formatIpfsLink(response.data.image)})
    }

    if (isConnected && hasNft && data && !nftColor) {
        const metadataUrl = formatIpfsLink(data as string)
        readAndSetNftColor(metadataUrl);
        return null;
    }
    if (!nftColor) {
        return null;
    }

    return nftColor;
}

function formatIpfsLink(ipfsUrl: string): string {
    return ipfsUrl.replace("ipfs://", "https://nftstorage.link/ipfs/");
}

export default useGetNftColor;