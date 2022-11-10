import styled from "styled-components";
import useAccentColor, {AccentColorConfig} from "../hooks/useAccentColor";

export interface ToggleSwitchProps {
    isChecked: boolean;
    onToggle: () => void;
    title: string;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
    const accentColor = useAccentColor();

    return (
        <ToggleContainer>
            <ToggleTitle>{props.title}</ToggleTitle>
            <>
                <ToggleInput accentColorConfig={accentColor} checked={props.isChecked} type={'checkbox'} id={props.title + "--toggle"} onChange={() => {props.onToggle()}}/>
                <Label htmlFor={props.title + "--toggle"}>{props.title}</Label>
            </>
        </ToggleContainer>
    )
}

export default ToggleSwitch;


const ToggleInput = styled.input<{accentColorConfig: AccentColorConfig}>`
    height: 0;
    width: 0;
    visibility: hidden;
    
    :checked + label {
        background: ${(props) => props.accentColorConfig.baseAccentColor};
    }
    
    :checked + label:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
    
    :active:after {
        width: 130px;
    }
`

const ToggleContainer = styled.div`    
    display: flex;
    justify-content: center;    
    align-items: center;
`;

const ToggleTitle = styled.div`
    
`

const Label = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 36px;
    height: 24px;
    background: #ABABAB;
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

