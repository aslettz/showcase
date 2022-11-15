import styled from "styled-components";
import React from "react";
import useAccentColor, {AccentColorConfig} from "../hooks/useAccentColor";

export interface ZButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    text: string;
}

const ZButton = (props: ZButtonProps) => {
    const accentColorConfig = useAccentColor()

    return (
        <ZButtonStyled accentColorConfig={accentColorConfig} onClick={props.onClick}>{props.text}</ZButtonStyled>
    )
}

export default ZButton;

const ZButtonStyled = styled.button<{ accentColorConfig: AccentColorConfig }>`    
    background-color: ${(props) => props.accentColorConfig.mediumAccentColor};
    border-radius: 100px;
    box-shadow: ${(props) => props.accentColorConfig.lightAccentColor} 0 -25px 18px -14px inset,${(props) => props.accentColorConfig.lightAccentColor} 0 1px 2px,${(props) => props.accentColorConfig.lightAccentColor} 0 2px 4px,${(props) => props.accentColorConfig.lightAccentColor} 0 4px 8px,${(props) => props.accentColorConfig.lightAccentColor} 0 8px 16px,${(props) => props.accentColorConfig.lightAccentColor} 0 16px 32px;    
    cursor: pointer;
    display: inline-block;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    
    :hover {
        box-shadow: ${(props) => props.accentColorConfig.lightAccentColor} 0 -25px 18px -14px inset,${(props) => props.accentColorConfig.lightAccentColor} 0 1px 2px,${(props) => props.accentColorConfig.lightAccentColor} 0 2px 4px,${(props) => props.accentColorConfig.lightAccentColor} 0 4px 8px,${(props) => props.accentColorConfig.lightAccentColor} 0 8px 16px,${(props) => props.accentColorConfig.lightAccentColor} 0 16px 32px;
        transform: scale(1.05) rotate(-1deg);
    }
`;