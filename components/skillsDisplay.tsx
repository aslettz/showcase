import styled from "styled-components";
import ProficiencyItemGroup from "./proficiencyItemGroup";
import {ExperienceSources} from "../pages/index";
import {useState} from "react";

export interface SkillsDisplayProps {
    selectedExperienceSource: ExperienceSources | null;
}

const SkillsDisplay = (props: SkillsDisplayProps) => {
    const [shouldHighlightSkills, setShouldHighlightSkills] = useState(true);

    function getHighlightSkills() {
        if (!shouldHighlightSkills) {
            return [];
        }

        switch (props.selectedExperienceSource) {
            case ExperienceSources.Awardco:
                return ["git", "MS SQL Server", "Agile Development"];
            case ExperienceSources.Contract:
                return ["git", "Solidity", "Foundry (Forge/Anvil)", "Remix", "Smart Contract Testing and Security", "Typescript/Javascript", "ERC Token Standards", "Software Engineering Design Patterns"];
            case ExperienceSources.RedSky:
                return ["Typescript/Javascript", "git", "Solidity", "Smart Contract Testing and Security", "React", "Alchemy", "Hardhat", "Mocha (Unit Tests)", "MariaDB", "ethers.js", "web3.js"];
            case ExperienceSources.BYU:
                return ["git", "Software Engineering Design Patterns", "Solidity", "Agile Development", "Smart Contract Testing and Security"];
            case ExperienceSources.SideProjects:
                return ["git", "Solidity", "Styled-Components", "next.js", "Vercel", "React", "Hardhat", "Foundry" +
                " (Forge/Anvil)", "ERC Token Standards", "ethers.js", "web3.js", "Remix"];
            default:
                return [];
        }
    }

    return (
        <SkillsDisplayContainer>

            <TitleAndToggleContainer>
                <Title>Proficiencies</Title>

                <HighlightToggleContainer>
                    <HighlightToggleTitle>Highlight Skills</HighlightToggleTitle>
                    <>
                        <HighlightToggle checked={shouldHighlightSkills} type={'checkbox'} id={'highlight-switch'} onClick={() => {setShouldHighlightSkills(!shouldHighlightSkills)}}/>
                        <HighlightLabel htmlFor={"highlight-switch"}>Highlight skills</HighlightLabel>
                    </>
                </HighlightToggleContainer>
            </TitleAndToggleContainer>

            <ProficiencySection>
                <ProficiencyTitle>Advanced (Many Projects)</ProficiencyTitle>
                <ProficiencyItemGroup highlightedSkills={getHighlightSkills()} groupSkills={
                    ['git', 'Typescript/Javascript', 'Solidity', 'Smart Contract Testing and Security', 'Software' +
                    ' Engineering Design Patterns']
                }/>
            </ProficiencySection>

            <ProficiencySection>
                <ProficiencyTitle>Experienced (2+ Projects)</ProficiencyTitle>
                <ProficiencyItemGroup highlightedSkills={getHighlightSkills()} groupSkills={
                    ['Foundry (Forge/Anvil)', 'Remix', 'ERC Token Standards', 'React', 'Hardhat', 'Mocha (Unit' +
                    ' Tests)', 'Agile Development', 'MS SQL Server', 'MariaDB']
                }/>
            </ProficiencySection>

            <ProficiencySection>
                <ProficiencyTitle>Familiar (Tutorials and/or Single Project)</ProficiencyTitle>
                <ProficiencyItemGroup highlightedSkills={getHighlightSkills()} groupSkills={
                    ['ethers.js', 'web3.js', 'next.js', 'Vercel', 'Styled-Components', 'Alchemy']
                }/>
            </ProficiencySection>

        </SkillsDisplayContainer>
    );
}

export default SkillsDisplay;

const SkillsDisplayContainer = styled.div`
    position: sticky;    /* Keep in position on scroll */
    top: 5%;
    @media screen and (max-width: 900px) {
        position: unset;
        top: unset;
    }
`

const TitleAndToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h2`

`

const HighlightToggle = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
    
    :checked + label {
        background: #bada55;
    }
    
    :checked + label:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
    
    :active:after {
        width: 130px;
    }
`

const HighlightToggleContainer = styled.div`    
    display: flex;
    justify-content: center;    
    align-items: center;
`;

const HighlightToggleTitle = styled.div`
    
`

const HighlightLabel = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 36px;
    height: 24px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
    
    :after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }
`

const ProficiencySection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
`;

const ProficiencyTitle = styled.h3`
    margin: 2px 0;
`;