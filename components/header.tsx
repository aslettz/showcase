import Link from 'next/link'
import styled from "styled-components";

const HorizontalNav = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    position: top;
`

const NavItem = styled.h2`
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
    return (
        <HorizontalNav>
            <NavItem>
                <Link href="#home">
                    <ClickableLink>Home</ClickableLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="#about-me">
                    <ClickableLink>About Me</ClickableLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="#skills-and-experience">
                    <ClickableLink>Skills & Experience</ClickableLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="#pet-projects">
                    <ClickableLink>Pet Projects</ClickableLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="#resume">
                    <ClickableLink>Resume</ClickableLink>
                </Link>
            </NavItem>
        </HorizontalNav>
    );

}

export default Header