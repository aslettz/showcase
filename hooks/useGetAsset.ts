import {Asset, InfoSectionTypes} from "../components/infoSection";
import HOME from "../assets/home";
import ABOUT_ME from "../assets/aboutMe";
import SKILLS from "../assets/skills";
import EXPERIENCE from "../assets/experience";
import Education from "../assets/education";
import SIDE_PROJECTS from "../assets/sideProjects";

const useGetAsset = (type: InfoSectionTypes): Asset => {
    switch(type) {
        case InfoSectionTypes.Home:
            return HOME;
        case InfoSectionTypes.AboutMe:
            return ABOUT_ME;
        case InfoSectionTypes.Skills:
            return SKILLS;
        case InfoSectionTypes.Experience:
            return EXPERIENCE;
        case InfoSectionTypes.Education:
            return Education;
        case InfoSectionTypes.SideProjects:
            return SIDE_PROJECTS;
        default:
            return {
                header: "",
                body: "",
                imgPath: "",
            }
    }
};

export default useGetAsset;