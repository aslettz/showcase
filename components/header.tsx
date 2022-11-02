import Link from 'next/link'
import styled from "styled-components";
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {InjectedConnector} from "@wagmi/core";

const HorizontalNav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`

const NavItem = styled.h3`
    padding: .5rem;
`

const ClickableLink = styled.a`
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

    function smoothScrollToElement(event: any) {
        event.preventDefault();
        let id = event.target.id;

        let position = document.getElementById(id); //removing extra last - (dash)
        window.location.href = "#" + id; // changing the url
        position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
    }

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
                    <Link href="#home">
                        <ClickableLink onClick={smoothScrollToElement}>1. Home</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#about-me">
                        <ClickableLink onClick={smoothScrollToElement}>2. About Me</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#skills">
                        <ClickableLink onClick={smoothScrollToElement}>3. Skills</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#experience">
                        <ClickableLink onClick={smoothScrollToElement}>4. Experience</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#education">
                        <ClickableLink onClick={smoothScrollToElement}>5. Education</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#side-projects">
                        <ClickableLink onClick={smoothScrollToElement}>6. Side Projects</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#resume">
                        <ClickableLink>7. Resume</ClickableLink>
                    </Link>
                </NavItem>
            </HorizontalNav>
        </HorizontalNav>
    );

}

export default Header