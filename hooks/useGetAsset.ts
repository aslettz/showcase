import {Asset, InfoSectionTypes} from "../components/infoSection";
import ABOUT_ME from "../assets/aboutMe";

const useGetAsset = (type: InfoSectionTypes): Asset => {
    switch(type) {
        case InfoSectionTypes.AboutMe:
            return ABOUT_ME;
    }
};

export default useGetAsset;