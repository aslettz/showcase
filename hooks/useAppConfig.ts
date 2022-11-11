import { useQuery } from '@apollo/client';
import appConfigVar from '../appConfigVar';
import GetAppConfig from "../GetAppConfig";
import saveAppConfig from '../saveAppConfig';
import AppConfig from "../appConfig";

export default function useAppConfig() {
    const data = useQuery<AppConfig>(GetAppConfig);

    console.log(data);

    return {
        useNftColor: data.data?.useNftColor || true,
        toggleUseNftColor() {
            appConfigVar({ useNftColor: !data.data?.useNftColor });
            // saveAppConfig();
        }
    };
}