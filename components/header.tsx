import styled from "styled-components";

export interface HeaderProps {

}

const Header = (props: HeaderProps) => {

    return (
        <HeroBanner>
            <HeaderTitle>
                Zan Aslett
            </HeaderTitle>
            <HeaderSubtitle>
                Engineer - Enthusiast - Lifelong Learner
            </HeaderSubtitle>
        </HeroBanner>)
}

export default Header;

const HeroBanner = styled.div`
    width: 100%;
    box-sizing: border-box;    
    display: flex;
    flex-direction: column;
    align-items: center;       
    background: url('/aslettco-transparent.png') no-repeat center;
    background-size: 64px auto; 
    margin-bottom: 24px;     
    padding: 8px 0;
    background-color: #9c9c9c;      
`;

const HeaderTitle = styled.h1`
    margin: 0;
`;

const HeaderSubtitle = styled.h2`
    margin: 0;
`;
