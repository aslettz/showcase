import {motion} from "framer-motion";
import useGetAsset from "../hooks/useGetAsset";

export interface InfoSectionProps {
    infoSectionType: InfoSectionTypes;
    anchorId: string;
}

export enum InfoSectionTypes {
    Home,
    AboutMe,
    Skills,
    Experience,
    Education,
    SideProjects,
}

export interface Asset {
    header: string;
    body: string;
    imgPath: string;
}

const AboutMe = (props: InfoSectionProps) => {
    const asset = useGetAsset(props.infoSectionType);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            id={props.anchorId}
        >
            <h1>{asset.header}</h1>
            <p>
                {asset.body}
            </p>
        </motion.div>
    );

}

export default AboutMe