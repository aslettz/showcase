import styled from "styled-components";
import useAccentColor, {AccentColorConfig} from "../hooks/useAccentColor";
import ToggleSwitch from "./toggleSwitch";
import appConfigVar, {AppConfig} from "../globalState";
import useHasNft from "../hooks/useHasNft";
import {useReactiveVar} from "@apollo/client";

export interface FooterProps {

}

const Footer = (props: FooterProps) => {
    const accentColor = useAccentColor();
    const hasNft = useHasNft();
    const appConfig  = useReactiveVar<AppConfig>(appConfigVar);

    return (
        <HeroBanner accentColorConfig={accentColor}>
            <LeftContent>

            </LeftContent>
            <CenterContent backgroundImageSource={(hasNft && appConfig.useNftColor) ? appConfig.nftImageUrl : '/aslettco-transparent.png'}>
                <HeaderTitle>
                    Contact me
                </HeaderTitle>
                <HeaderSubtitle>
                    <a href={'https://www.linkedin.com/in/zankaslett/'}>Linkedin</a>
                    <a href={'https://github.com/aslettz'}>Github</a>
                </HeaderSubtitle>
            </CenterContent>
            <RightContent>

            </RightContent>
        </HeroBanner>)
}

export default Footer;

const HeroBanner = styled.div<{accentColorConfig: AccentColorConfig}>`
    width: 100%;
    box-sizing: border-box;    
    display: flex;    
    flex-wrap: wrap;
    align-items: left;     
    justify-content: space-around;  
    margin-top: 16px;     
    padding: 8px 0;    
    // border-top: 1px solid ${(props) => props.accentColorConfig.baseAccentColor}      
`;

const HeaderTitle = styled.h1`
    margin: 0;
`;

const HeaderSubtitle = styled.h2`
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    > a {
        padding: 2px;
    }
`;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const DisconnectContainer = styled.div`
    margin-bottom: 8px;
`;

const CenterContent = styled.div<{backgroundImageSource: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${(props) => props.backgroundImageSource}) no-repeat center;
    background-size: 64px auto; 
    transition: all 250ms;
    padding: 8px;
`;

const RightContent = styled.div`

`;