import styled from "styled-components";
import useAccentColor, {AccentColorConfig} from "../hooks/useAccentColor";
import ToggleSwitch from "./toggleSwitch";
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {InjectedConnector} from "@wagmi/core";
import ZButton from "./zButton";
import {useReactiveVar} from "@apollo/client";
import appConfigVar, {AppConfig} from "../globalState";
import useHasNft from "../hooks/useHasNft";
// @ts-ignore
import Popup from "reactjs-popup";

export interface HeaderProps {

}

const Header = (props: HeaderProps) => {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
        chainId: 80001
    });
    const { disconnect } = useDisconnect();
    const accentColor = useAccentColor();
    const appConfig  = useReactiveVar<AppConfig>(appConfigVar);
    const hasNft = useHasNft();
    function renderWeb3Button() {
        if (isConnected)
            return (
                <DisconnectContainer>
                    <ZButton text={"Disconnect"} onClick={() => disconnect()}/>
                </DisconnectContainer>
            )
        return (
        <ItemWithTooltipPopup>
            <ZButton text={"Connect Wallet"} onClick={() => connect()}/>
            {renderConnectButtonPopup()}
        </ItemWithTooltipPopup>
        )
    }

    function renderGenerateNftButton() {
        if (!isConnected || hasNft) {
            return;
        }

        const openInNewTab = (url: string) => {
            window.open(url, '_blank', 'noopener,noreferrer');
        };

        return (
            <ItemWithTooltipPopup>
                <ZButton
                    text={"Generate NFT Art"}
                    onClick={() => openInNewTab(`/api/generate-image?address=${address}`)}
                />
                {renderGenerateNFTPopup()}
            </ItemWithTooltipPopup>)
    }

    function renderConnectButtonPopup() {
        return (
            <StyledPopup trigger={<PopupTrigger>?</PopupTrigger>} modal>
               <PopupContent>
                   Connect your wallet via the&nbsp;
                   {<a href={"https://chainlist.org/chain/80001"}>
                       polygon mumbai testnet
                   </a>}
                   &nbsp;to get a free airdropped NFT that enables some unique
                   features on this site!
               </PopupContent>
            </StyledPopup>
        )
    }

    function renderGenerateNFTPopup() {
        return (
            <StyledPopup trigger={<PopupTrigger>?</PopupTrigger>} modal>
                <PopupContent>
                    Generates a unique version (color) of my logo based on your
                    crypto address. This uniquely colored logo is airdropped to
                    your connected polygon-mumbai address and used to customize
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    the accent color of this page. Don't like your random color?
                    You can always revert back to the default color later.
                </PopupContent>
            </StyledPopup>
        )
    }

    return (
        <HeroBanner accentColorConfig={accentColor}>
            <LeftContent>
                {renderWeb3Button()}
                {renderGenerateNftButton()}
            </LeftContent>
            <CenterContent backgroundImageSource={(hasNft && appConfig.useNftColor) ? appConfig.nftImageUrl : '/aslettco-transparent.png'}>
                <HeaderTitle>
                    Zan Aslett
                </HeaderTitle>
                <HeaderSubtitle>
                    Engineer - Enthusiast - Lifelong Learner
                </HeaderSubtitle>
            </CenterContent>
            <RightContent>
                {isConnected && hasNft &&
                    <ToggleSwitch
                        isChecked={appConfig.useNftColor}
                        onToggle={() => appConfigVar({...appConfig, useNftColor: !appConfig.useNftColor})}
                        title={"Use NFT Colors"}
                    />
                }
            </RightContent>
        </HeroBanner>)
}

export default Header;

const HeroBanner = styled.div<{accentColorConfig: AccentColorConfig}>`
    width: 100%;
    box-sizing: border-box;    
    display: flex;    
    flex-wrap: wrap;
    align-items: center;     
    justify-content: space-around;  
    margin-bottom: 24px;     
    padding: 8px 0;
    background-color: #CFCFCF;
    border-bottom: 1px solid ${(props) => props.accentColorConfig.baseAccentColor}      
`;

const HeaderTitle = styled.h1`
    margin: 0;
`;

const HeaderSubtitle = styled.h2`
    margin: 0;
    text-align: center;
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

const ItemWithTooltipPopup = styled.div`
    display: flex;
    align-items: center;
`;

const StyledPopup = styled(Popup)`
    &-overlay {
        backdrop-filter: blur(5px);
    }
    
    &-content {
        background: white;
        border: 1px solid black;
        border-radius: 8px;
        min-height: 40px;
        padding: 16px;
        max-width: 80%;
    }    
`;

const PopupContent = styled.div`
    font-size: 32px;  
`;

const PopupTrigger = styled.h3`
    border: 1px solid black;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    margin: 4px;
    cursor: pointer;
`;