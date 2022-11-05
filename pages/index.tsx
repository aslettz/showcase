import type {NextPage} from 'next'
import styled from "styled-components";
import ExperienceChart from "../components/experienceChart";
import App from "next/app";


const AppContainer = styled.div`
    padding: 24px;
`

const ContentContainer = styled.div`
    display: flex;
    padding: 0 8vw;
    flex-wrap: wrap;    
    justify-content: center;
`

const MainContent = styled.div`
    max-width: 66%;
`

const SideContent = styled.div`
    padding: 12px;
`

const StyledHr = styled.hr`            
            height: 1px;
            margin: 50px 0;
            background: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(0, 0, 0, 0)), color-stop(0.5, #333333), to(rgba(0, 0, 0, 0)));
            background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
            background: -moz-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
            background: -o-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
            background: linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
            border: 0;
            width: 84%
            padding: 0 8rem;
        `

const Home: NextPage = () => {

    function renderHeroBanner() {
        const HeroBanner = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;   
            font-size: 2rem;            
        `

        return (
        <HeroBanner>
            <h1>
                Zan Aslett
            </h1>
            <h3>
                Engineer - Enthusiast - Lifelong Learner
            </h3>
        </HeroBanner>)
    }

    function renderAboutMe() {
        const AboutMeBlock = styled.div`            
            font-size: 1.8rem;
        `

        const AboutMeHeader = styled.h1`
            margin: 0;
        `

        const SummarySection = styled.div`
            display: flex;            
        `

        const SummaryImage = styled.img`
            margin: 16px;
        `

        const SummaryText = styled.div`
            margin: 0;
        `

        const MotivationSection = styled.div`
            
        `

        return (
        <AboutMeBlock>
            <AboutMeHeader>About Me</AboutMeHeader>
            <SummarySection>
                <SummaryImage src={'https://picsum.photos/200/300'}/>
                <SummaryText>
                    I'm a software engineer with a drive for innovation and the cutting edge.
                    In the fast moving world of decentralization, I pride myself in the ability
                    to learn new technologies and skills quickly.
                </SummaryText>
            </SummarySection>
            <MotivationSection>
                <h4>
                    What motivates me
                </h4>
                <ul>
                    <li>
                        Freedom to take ownership over interesting problems
                    </li>
                    <li>
                        Building cool projects that reach and impact many people
                    </li>
                    <li>
                        Architecting software solutions focused on long-term scalability and efficiency
                    </li>
                </ul>
            </MotivationSection>
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
            <StyledHr/>
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
