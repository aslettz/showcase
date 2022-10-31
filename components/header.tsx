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

const Header = () => {
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
                    <Link href="#home">
                        <ClickableLink>1. Home</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#about-me">
                        <ClickableLink>2. About Me</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#skills">
                        <ClickableLink>3. Skills</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#experience">
                        <ClickableLink>4. Experience</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#education">
                        <ClickableLink>5. Education</ClickableLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="#pet-projects">
                        <ClickableLink>6. Pet Projects</ClickableLink>
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