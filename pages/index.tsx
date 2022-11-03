import type {NextPage} from 'next'
import styled from "styled-components";
import ExperienceChart from "../components/experienceChart";
import App from "next/app";


const AppContainer = styled.div`
    padding: 24px;
`

const ContentContainer = styled.div`

`

const MainContent = styled.div`

`

const SideContent = styled.div`

`

const Home: NextPage = () => {

    function renderHeroBanner() {
        return <div>Hero Banner</div>
    }

    function renderAboutMe() {
        const AboutMeBlock = styled.div`
            display: flex;
        `

        return (
        <AboutMeBlock>
            <div>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={'https://picsum.photos/200/300'}/>
        </AboutMeBlock>)
    }

    function renderExperience() {
        return <ExperienceChart/>
    }

    function renderSkillsDisplay() {
        const SkillsDisplay = styled.div`
            
        `;

        const ProficiencySection = styled.div`
            display: flex;
            flex-direction: column;
        `;

        const ProficiencyTitle = styled.h3`
            margin: 2px 0;
        `;

        const ProficiencyItemGroup = styled.div`
            display: flex;
        `;

        const ProficiencyItem = styled.h4`
            border: 1px solid black;
            border-radius: 4px;
            padding: 4px;
            margin: 0 4px;
        `;


        return (
        <SkillsDisplay>
            <h2>Proficiencies</h2>

            <ProficiencySection>
                <ProficiencyTitle>Advanced</ProficiencyTitle>
                <ProficiencyItemGroup>
                    <ProficiencyItem>git</ProficiencyItem>
                    <ProficiencyItem>Typescript/Javascript</ProficiencyItem>
                    <ProficiencyItem>Solidity</ProficiencyItem>
                </ProficiencyItemGroup>
            </ProficiencySection>

            <ProficiencySection>
                <ProficiencyTitle>Experienced</ProficiencyTitle>
                <ProficiencyItemGroup>
                    <ProficiencyItem>Foundry (Forge/Anvil)</ProficiencyItem>
                    <ProficiencyItem>Remix</ProficiencyItem>
                    <ProficiencyItem>ERC Token Standards</ProficiencyItem>
                </ProficiencyItemGroup>
            </ProficiencySection>

            <ProficiencySection>
                <ProficiencyTitle>Familiar</ProficiencyTitle>
                <ProficiencyItemGroup>
                    <ProficiencyItem>ethers.js</ProficiencyItem>
                    <ProficiencyItem>web3.js</ProficiencyItem>
                </ProficiencyItemGroup>
            </ProficiencySection>

        </SkillsDisplay>)
    }

    return (
        <AppContainer>
            {renderHeroBanner()}
            <ContentContainer>
                <MainContent>
                    {renderAboutMe()}
                    {renderExperience()}
                </MainContent>
                <SideContent>
                    {renderSkillsDisplay()}
                </SideContent>
            </ContentContainer>
        </AppContainer>
    )
}

export default Home;
