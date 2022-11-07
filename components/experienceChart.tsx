import styled from "styled-components";

export enum ExperienceSources {
    Awardco,
    Contract,
    RedSky,
    BYU,
    SideProjects
}

const ChartContainer = styled.div`
    display: flex;    
    font-size: 1.8rem;
`

const ChartHeader = styled.h1`
    font-size: 4rem;
`

const SourceSelection = styled.ul`
    list-style-type: none;
    padding: 8px;
    border-right: 1px solid black;
    min-width: fit-content;
`

const SourceItem = styled.li<{ isSelected: boolean }>`
    padding: 4px;
    margin: 4px;
    border-radius: 4px;
    background-color: ${(props) => {return (props.isSelected ? '#9C9C9C55' : '#FFFFFF')}};
    box-shadow: ${(props) => {return (props.isSelected ? '3px 3px 1px' : 'none')}};
    cursor: pointer;
`

const ExperienceContainer = styled.div`
    padding: 8px;
`

const ExperienceHeader = styled.h2`    
    margin: 0 0 8px 0;
`

const ExperienceList = styled.ul`
    
`

const ExperienceListItem = styled.li`
    font-size: 1.5rem;
    padding: 4px;
`

export interface ExperienceChartProps {
    selectedExperienceSource: ExperienceSources | null;
    onSelectionChange(experienceSource: ExperienceSources): void;
}

const ExperienceChart = (props: ExperienceChartProps) => {

    function renderSideProjectExperience() {
        return (
            <ExperienceContainer>
                <ExperienceHeader>Personal Side Projects</ExperienceHeader>
                <ExperienceList>
                    <ExperienceListItem>
                        This site (Built with Next.js + Vercel, Styled-Components, and Typescript)
                    </ExperienceListItem>
                    <ExperienceListItem>
                        Smart Contract Hacking Challenges (In progress)
                    </ExperienceListItem>
                    <ExperienceListItem>
                        Personal NFT Collection (Coming Soon!)
                    </ExperienceListItem>
                </ExperienceList>
            </ExperienceContainer>)
    }

    function renderBYUExperience() {
        return (
            <ExperienceContainer>
                <ExperienceHeader>Education - Brigham Young University</ExperienceHeader>
                <ExperienceList>
                    <ExperienceListItem>
                        Graduated <em>Magna Cum Laude</em> in Applied Physics and Computer Science
                    </ExperienceListItem>
                </ExperienceList>
            </ExperienceContainer>)
    }

    function renderRedSkyExperience() {
        return (
            <ExperienceContainer>
                <ExperienceHeader>Full-Stack Web Developer - RedSky Technologies</ExperienceHeader>
                <ExperienceList>
                    <ExperienceListItem>
                        Developed full-stack software solutions using Typescript, React, and Express
                    </ExperienceListItem>
                    <ExperienceListItem>
                        Worked highly autonomously, building on complex, existing codebase
                    </ExperienceListItem>
                    <ExperienceListItem>
                        Maintained and improved a multitenant and versioned backend server
                    </ExperienceListItem>
                </ExperienceList>
            </ExperienceContainer>)
    }

    function renderContractExperience() {
        return (
            <ExperienceContainer>
                <ExperienceHeader>Web3 Engineer - Independent Contractor</ExperienceHeader>
                <ExperienceList>
                    <ExperienceListItem>
                        Audit the live NFT project space+ (spaceplus.xyz) currently deployed to mainnet for security
                        vulnerabilities and potential gas optimizations
                    </ExperienceListItem>
                    <ExperienceListItem>
                        Architect and build a system (Server + Smart Contracts) for facilitating recurring payments using
                        ERC20 tokens on the Polygon blockchain currently on Mumbai Testnet
                    </ExperienceListItem>
                    <ExperienceListItem>
                        Write unit tests to verify functionality, security, and efficiency of smart contracts
                    </ExperienceListItem>
                </ExperienceList>
            </ExperienceContainer>)
    }

    function renderAwardcoExperience() {
        return (
        <ExperienceContainer>
            <ExperienceHeader>Backend Software Engineer - Awardco</ExperienceHeader>
            <ExperienceList>
                <ExperienceListItem>Develop and maintain 3rd party vendor integrations with a large existing platform</ExperienceListItem>
                <ExperienceListItem>Review peers’ work for bugs and security vulnerabilities for continuous deployment of code</ExperienceListItem>
                <ExperienceListItem>Work in an agile framework within a cross functional team to meet bi-weekly release goals</ExperienceListItem>
            </ExperienceList>
        </ExperienceContainer>)
    }

    function renderExperiencePoints() {
        switch (props.selectedExperienceSource){
            case ExperienceSources.Awardco:
                return renderAwardcoExperience();
            case ExperienceSources.Contract:
                return renderContractExperience();
            case ExperienceSources.RedSky:
                return renderRedSkyExperience();
            case ExperienceSources.BYU:
                return renderBYUExperience();
            case ExperienceSources.SideProjects:
                return renderSideProjectExperience();
            default:
                return <div/>
        }
    }

    function renderSourceSelection() {
        return (
        <SourceSelection>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.Awardco)} isSelected={props.selectedExperienceSource==ExperienceSources.Awardco}>
                Awardco
            </SourceItem>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.Contract)} isSelected={props.selectedExperienceSource==ExperienceSources.Contract}>
                Contract Work
            </SourceItem>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.RedSky)} isSelected={props.selectedExperienceSource==ExperienceSources.RedSky}>
                RedSky Tech.
            </SourceItem>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.BYU)} isSelected={props.selectedExperienceSource==ExperienceSources.BYU}>
                BYU
            </SourceItem>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.SideProjects)} isSelected={props.selectedExperienceSource==ExperienceSources.SideProjects}>
                Side Projects
            </SourceItem>
        </SourceSelection>);
    }

    return (
        <>
            <ChartHeader>Experience</ChartHeader>
            <ChartContainer>
                {renderSourceSelection()}
                {renderExperiencePoints()}
            </ChartContainer>
        </>
    )
}

export default ExperienceChart;