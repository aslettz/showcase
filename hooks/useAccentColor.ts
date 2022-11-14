import {chain, useAccount, useContract, useContractRead} from "wagmi";
import {useReactiveVar} from "@apollo/client";
import appConfigVar from "../globalState";
import {ethers, getDefaultProvider} from "ethers";
import contractJson from "../AslettcoToken.json";
import axios from "axios";
import {useState} from "react";

export interface AccentColorConfig {
    baseAccentColor: string;
    mediumAccentColor: string;
    lightAccentColor: string;
}

const useAccentColor = () : AccentColorConfig => {
    const { address, isConnected } = useAccount();
    const { useNftColor } = useReactiveVar(appConfigVar);
    const [nftColor, setNftColor] = useState();
    const {data, isError} = useContractRead({
        abi: contractJson.abi,
        address: "0xD7032E28FE313870329977a2c80E708DbA818165",
        functionName: "getTokenUriByAddress",
        args: [isConnected ? address : "0xD7032E28FE313870329977a2c80E708DbA818165"],
    });

    const mediumOpacity = "77";
    const heavyOpacity = "22";

    async function readAndSetNftColor(metadataUrl: string) {
        const response = await axios.get(metadataUrl);
        setNftColor(response.data.properties.color);
    }

    if (isConnected && useNftColor && !isError) {
        if (!nftColor) {
            const metadataUrl = (data as string).replace("ipfs://", "https://nftstorage.link/ipfs/");
            readAndSetNftColor(metadataUrl);
        }
        else {
            return {
                baseAccentColor: nftColor,
                mediumAccentColor: nftColor + mediumOpacity,
                lightAccentColor: nftColor + heavyOpacity,
            }
        }
    }

    return {
        baseAccentColor: '#FF551B',
        mediumAccentColor: '#FF551B' + mediumOpacity,
        lightAccentColor: '#FF551B22' + heavyOpacity,
    }

}

export default useAccentColor;