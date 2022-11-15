import styled from "styled-components";
import useAccentColor, {AccentColorConfig} from "../hooks/useAccentColor";

const ProficiencyItemContainer = styled.div<{isHighlighted: boolean, accentColorConfig: AccentColorConfig}>`
    border: 1px solid ${(props) => props.accentColorConfig.baseAccentColor};
    border-radius: 4px;
    padding: 4px;
    margin: 4px;
    background-color: ${(props) => {return (props.isHighlighted ? props.accentColorConfig.mediumAccentColor : '#FFFFFF')}};
    box-shadow: ${(props) => {return (props.isHighlighted ? `3px 3px 6px ${props.accentColorConfig.baseAccentColor}` : 'none')}};
    transition: all 250ms;
`;

export interface ProficiencyItemProps {
    title: string;
    isHighlighted: boolean;
}

const ProficiencyItem = (props: ProficiencyItemProps) => {
    const accentColor = useAccentColor();

    return <ProficiencyItemContainer accentColorConfig={accentColor} isHighlighted={props.isHighlighted}>{props.title}</ProficiencyItemContainer>
}

export default ProficiencyItem;