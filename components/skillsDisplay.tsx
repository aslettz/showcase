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
                return ["git", "MS SQL Server"];
            case ExperienceSources.Contract:
                return ["git", "Solidity", "Foundry (Forge/Anvil)", "Remix"];
            case ExperienceSources.RedSky:
                return ["Typescript/Javascript", "git"];
            case ExperienceSources.BYU:
                return ["git"];
            default:
                return [];
        }
    }

    return (
        <SkillsDisplayContainer>
            <h2>Proficiencies</h2>

            <ProficiencySection>
                <ProficiencyTitle>Advanced (Many Projects)</ProficiencyTitle>
                <ProficiencyItemGroup highlightedSkills={getHighlightSkills()} groupSkills={['git', 'Typescript/Javascript', 'Solidity']}/>
            </ProficiencySection>

            <ProficiencySection>
                <ProficiencyTitle>Experienced (2+ Projects)</ProficiencyTitle>
                <ProficiencyItemGroup highlightedSkills={getHighlightSkills()} groupSkills={['Foundry' +
                ' (Forge/Anvil)', 'Remix', 'ERC20 Token Standards']}/>
            </ProficiencySection>

            <ProficiencySection>
                <ProficiencyTitle>Familiar (Tutorials and/or Single Project)</ProficiencyTitle>
                <ProficiencyItemGroup highlightedSkills={getHighlightSkills()} groupSkills={['ethers.js', 'web3.js']}/>
            </ProficiencySection>

        </SkillsDisplayContainer>
    );
}

export default SkillsDisplay;