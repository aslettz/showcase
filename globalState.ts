import {makeVar} from "@apollo/client";

export interface AppConfig {
    useNftColor: boolean;
}

const initialAppConfig: AppConfig = {
    useNftColor: true
};

const appConfigVar = makeVar<AppConfig>(initialAppConfig);

export default appConfigVar;
