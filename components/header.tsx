import styled from "styled-components";
import useAccentColor, {AccentColorConfig} from "../hooks/useAccentColor";
import ToggleSwitch from "./toggleSwitch";
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {InjectedConnector} from "@wagmi/core";
import Link from "next/link";

export interface HeaderProps {
    shouldUseNftColors: boolean;
    toggleShouldUseNftColors: () => void;
}

const Header = (props: HeaderProps) => {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect();
    const accentColor = useAccentColor();

    function renderWeb3Button() {
        if (isConnected)
            return (
                <div>
                    Connected to {address}
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            )
        return <button onClick={() => connect()}>Connect Wallet</button>
    }

    function renderGenerateNftButton() {
        if (!isConnected) {
            return;
        }

        return <button> <Link href={`/api/generate-image?address=${address}`}>Generate NFT Image</Link></button>
    }

    return (
        <HeroBanner accentColorConfig={accentColor}>
            <LeftContent>
                {renderWeb3Button()}
                {renderGenerateNftButton()}
            </LeftContent>
            <CenterContent>
                <HeaderTitle>
                    Zan Aslett
                </HeaderTitle>
                <HeaderSubtitle>
                    Engineer - Enthusiast - Lifelong Learner
                </HeaderSubtitle>
            </CenterContent>
            <RightContent>
                {isConnected &&
                    <ToggleSwitch isChecked={props.shouldUseNftColors} onToggle={props.toggleShouldUseNftColors}
                               title={"Use NFT Colors"}/>
                }
            </RightContent>
        </HeroBanner>)
}

export default Header;

const HeroBanner = styled.div<{accentColorConfig: AccentColorConfig}>`
    width: 100%;
    box-sizing: border-box;    
    display: flex;    
    align-items: center;     
    justify-content: space-around;  
    background: url('/aslettco-transparent.png') no-repeat center;
    background-size: 64px auto; 
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

`;

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RightContent = styled.div`

`;