import type {NextPage} from 'next'
import ExperienceChart from "../components/experienceChart";
import SkillsDisplay from "../components/skillsDisplay";
import Header from "../components/header";
import {useState} from "react";
import AboutMe from "../components/AboutMe";
import styled from "styled-components";

export enum ExperienceSources {
    Awardco,
    Contract,
    RedSky,
    BYU,
    SideProjects
}

const Home: NextPage = () => {
    const [selectedExperienceSource, setSelectedExperienceSource] = useState<ExperienceSources>(ExperienceSources.Awardco)

    return (
        <>
            <Header/>
            <IndexPageContainer>
                <MainContentGrid>
                    <GridAboutMe>
                        <AboutMe/>
                    </GridAboutMe>
                    <GridExperience>
                        <ExperienceChart selectedExperienceSource={selectedExperienceSource} onSelectionChange={setSelectedExperienceSource}/>
                    </GridExperience>
                    <GridSkills>
                        <SkillsDisplay selectedExperienceSource={selectedExperienceSource}/>
                    </GridSkills>
                </MainContentGrid>
            </IndexPageContainer>
        </>
    )
}

export default Home;

const IndexPageContainer = styled.div`
    padding: 0 2%;
`;

const MainContentGrid = styled.div`
    display: grid;      
    grid-template-columns: repeat(3, 1fr);    
    grid-auto-rows: minmax(100px, auto);
    gap: 10px;        
    @media screen and (max-width: 900px) {
        justify-items: center;    
    }
`;

const GridAboutMe = styled.div`
    grid-column: 1/3;
    grid-row: 1;
    
    @media screen and (max-width: 900px) {
        grid-column: 1/4;        
    }
`;

const GridExperience = styled.div`
    grid-column: 1/3;
    grid-row: 2;
    @media screen and (max-width: 900px) {
        grid-column: 1/4;        
    }
`;

const GridSkills = styled.div`
    grid-column: 3/4;
    grid-row: 1/3;
        
    @media screen and (max-width: 900px) {         
        grid-column: 1/4;
        grid-row: 3/4;     
    }
`;
