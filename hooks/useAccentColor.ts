import {chain, useAccount, useContract, useContractRead, useContractReads} from "wagmi";
import {useReactiveVar} from "@apollo/client";
import appConfigVar from "../globalState";
import contractJson from "../AslettcoToken.json";
import axios from "axios";
import {useState} from "react";
import useHasNft from "./useHasNft";
import useGetNftColor from "./useGetNftColor";

export interface AccentColorConfig {
    baseAccentColor: string;
    mediumAccentColor: string;
    lightAccentColor: string;
}

const useAccentColor = () : AccentColorConfig => {
    const { address, isConnected } = useAccount();
    const { useNftColor } = useReactiveVar(appConfigVar);
    const nftColor = useGetNftColor();

    const mediumOpacity = "77";
    const heavyOpacity = "22";

    if (isConnected && useNftColor && nftColor) {
        return {
            baseAccentColor: nftColor,
            mediumAccentColor: nftColor + mediumOpacity,
            lightAccentColor: nftColor + heavyOpacity,
        }
    }

    return {
        baseAccentColor: '#FF551B',
        mediumAccentColor: '#FF551B' + mediumOpacity,
        lightAccentColor: '#FF551B22' + heavyOpacity,
    }
}

export default useAccentColor;