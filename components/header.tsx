import styled from "styled-components";
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {InjectedConnector} from "@wagmi/core";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll/modules';

const HorizontalNav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`

const NavItem = styled.h3`
    padding: .5rem;
`

const ClickableLink = styled.div`
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    :hover {
        color: black;
        background-color: #CAEBF2;
        text-decoration: underline;
    }
`

export interface HeaderProps {
    sectionContainerId: string;
}

const Header = (props: HeaderProps) => {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()

    function renderWalletInteface() {
        if (isConnected)
            return (
                <div>
                    Connected to {address}
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            )
        return <button onClick={() => connect()}>Connect Wallet</button>
    }

    return (
        <HorizontalNav>
            <div>
                {renderWalletInteface()}
            </div>

            <HorizontalNav>
                <NavItem>
                    <Link to={'home'} spy={true} smooth={true} duration={500}>
                        <ClickableLink>1. Home</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'about-me'} spy={true} smooth={true} duration={500}>
                        <ClickableLink>2. About Me</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'skills'} spy={true} smooth={true} duration={500}>
                        <ClickableLink>3. Skills</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'experience'} spy={true} smooth={true} duration={500}>
                        <ClickableLink>4. Experience</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'education'} spy={true} smooth={true} duration={500}>
                        <ClickableLink>5. Education</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'side-projects'} spy={true} smooth={true} duration={500}>
                        <ClickableLink>6. Side Projects</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to={'home'} spy={true} smooth={true} duration={500}>
                        <ClickableLink>7. Resume</ClickableLink>
                    </Link>
                </NavItem>
            </HorizontalNav>
        </HorizontalNav>
    );

}

export default Header