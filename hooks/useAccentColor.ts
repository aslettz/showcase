import {useAccount} from "wagmi";
import {Dispatch, SetStateAction, useState} from "react";

export interface AccentColorConfig {
    baseAccentColor: string;
    mediumAccentColor: string;
    lightAccentColor: string;
}

const useAccentColor = () : AccentColorConfig => {
    const { address, isConnected } = useAccount();
    const shouldUseNftColor = true;

    const mediumOpacity = "77";
    const heavyOpacity = "22";

    if (isConnected && shouldUseNftColor) {
        return {
            baseAccentColor: '#7D9A3D',
            mediumAccentColor: '#7D9A3D' + mediumOpacity,
            lightAccentColor: '#7D9A3D' + heavyOpacity,
        }
    }

    return {
        baseAccentColor: '#FF551B',
        mediumAccentColor: '#FF551B' + mediumOpacity,
        lightAccentColor: '#FF551B22' + heavyOpacity,
    }

}

export default useAccentColor;