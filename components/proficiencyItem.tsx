import styled from "styled-components";

const ProficiencyItemContainer = styled.h4<{isHighlighted: boolean}>`
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;
    margin: 4px;
    background-color: ${(props) => {return (props.isHighlighted ? '#9C9C9C55' : '#FFFFFF')}};
    box-shadow: ${(props) => {return (props.isHighlighted ? '3px 3px 1px' : 'none')}};
`;

export interface ProficiencyItemProps {
    title: string;
    isHighlighted: boolean;
}

const ProficiencyItem = (props: ProficiencyItemProps) => {
    return <ProficiencyItemContainer isHighlighted={props.isHighlighted}>{props.title}</ProficiencyItemContainer>
}

export default ProficiencyItem;