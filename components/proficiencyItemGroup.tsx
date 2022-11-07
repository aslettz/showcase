import styled from "styled-components";
import ProficiencyItem from "./proficiencyItem";

export interface ProficiencyItemGroupProps {
    highlightedSkills: string[];
    groupSkills: string[];
}

const ProficiencyItemGroupContainer = styled.div`
            display: flex;
            flex-wrap: wrap;
            max-width: 20vw;
        `;

const ProficiencyItemGroup = (props: ProficiencyItemGroupProps) => {

    function renderProficiencyItems() {
        let result: JSX.Element[] = [];

        props.groupSkills.forEach((skill, idx) => {
            result.push(<ProficiencyItem title={skill} isHighlighted={props.highlightedSkills.indexOf(skill) !== -1} key={idx}/>);
        })

        return result;
    }

    return (
        <ProficiencyItemGroupContainer>
            {renderProficiencyItems()}
        </ProficiencyItemGroupContainer>
    );
}

export default ProficiencyItemGroup;