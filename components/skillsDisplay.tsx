import styled from "styled-components";
import ProficiencyItemGroup from "./proficiencyItemGroup";
import {ExperienceSources} from "./experienceChart";

const SkillsDisplayContainer = styled.div`
    position: sticky;    /* Keep in position on scroll */
    top: 30%;
`

const ProficiencySection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
`;

const ProficiencyTitle = styled.h3`
            margin: 2px 0;
        `;

export interface SkillsDisplayProps {
    selectedExperienceSource: ExperienceSources | null;
}

const SkillsDisplay = (props: SkillsDisplayProps) => {


    function getHighlightSkills() {
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
            <h2>Proficiencies</h2>

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