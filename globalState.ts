import {makeVar} from "@apollo/client";

export interface AppConfig {
    useNftColor: boolean;
    nftImageUrl: string;
}

const initialAppConfig: AppConfig = {
    useNftColor: true,
    nftImageUrl: "",
};

const appConfigVar = makeVar<AppConfig>(initialAppConfig);

export default appConfigVar;
