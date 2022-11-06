import type {NextPage} from 'next'
import styled from "styled-components";
import ExperienceChart, {ExperienceSources} from "../components/experienceChart";
import Image from 'next/image'
import {useEffect, useState} from "react";
import SkillsDisplay from "../components/skillsDisplay";
import {useInView} from "react-intersection-observer";
import Link from "next/link";


const AppContainer = styled.div`
    padding: 24px;
`

const ContentContainer = styled.div`
    display: flex;
    padding: 0 2vw 0 6vw;
    flex-wrap: wrap;    
    justify-content: center;
`

const MainContent = styled.div`
    max-width: 66%;
`

const SideContent = styled.div`
    padding: 12px;
    min-width: fit-content;
`

const StyledHr = styled.hr`            
    height: 1px;
    margin: 50px 0;
    background: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(0, 0, 0, 0)), color-stop(0.5, #333333), to(rgba(0, 0, 0, 0)));
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    background: -moz-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    background: -o-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    background: linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    border: 0;
    width: 84%
    padding: 0 8rem;
`

const VerticleRule = styled.div`
    width: 2px;
    background: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(0, 0, 0, 0)), color-stop(0.5, #333333), to(rgba(0, 0, 0, 0)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    background: linear-gradient(top, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
    margin: 16px;
`

const Home: NextPage = () => {
    const [selectedExperienceSource, setSelectedExperienceSource] = useState<ExperienceSources | null>(null)
    const [previouslySelectedExperienceSource, setPreviouslySelectedExperienceSource] = useState<ExperienceSources | null>(null)

    const {ref, inView} = useInView({trackVisibility: true, delay: 100});

    useEffect(() => {
        if (!inView) {
            setPreviouslySelectedExperienceSource(selectedExperienceSource);
            setSelectedExperienceSource(null);
        }
        if (inView) {
            setSelectedExperienceSource(previouslySelectedExperienceSource || ExperienceSources.Awardco );
        }

    }, [inView])

    function renderHeroBanner() {
        const HeroBanner = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;   
            font-size: 2rem;            
        `

        return (
        <HeroBanner>
            <h1>
                Zan Aslett
            </h1>
            <h3>
                Engineer - Enthusiast - Lifelong Learner
            </h3>
        </HeroBanner>)
    }

    function renderAboutMe() {
        const AboutMeBlock = styled.div`            
            font-size: 1.8rem;
        `

        const AboutMeHeader = styled.h1`
            margin: 0 0 8px 0;
            font-size: 4rem;
        `

        const SummarySection = styled.div`
            display: flex;      
            flex-wrap: wrap;      
        `

        const SummaryImage = styled.div`
            width: 50%;
            border-radius: 4px;

            > div {
                position: unset !important;
                overflow: hidden;
            }
    
            .image {
                object-fit: contain;
                width: 100% !important;
                position: relative !important;
                height: unset !important;
            }                                                 
        `

        const AboutMeText = styled.div`
            width: 50%;
        `

        const SummaryText = styled.div`
            margin: 0;
        `

        const MotivationSection = styled.div`
            
        `

        return (
        <AboutMeBlock>
            <AboutMeHeader>About Me</AboutMeHeader>
            <SummarySection>
                <SummaryImage>
                    <Image src={'/headshot.jpg'} width={500} height={700} objectFit={'contain'} priority />
                </SummaryImage>
                <AboutMeText>
                    <SummaryText>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm a software engineer with a drive for innovation and the cutting edge.
                        In the fast moving world of decentralization, I pride myself in the ability
                        to learn new technologies and skills quickly.
                    </SummaryText>
                    <MotivationSection>
                        <h4>
                            What motivates me
                        </h4>
                        <ul>
                            <li>
                                Freedom to take ownership over interesting problems
                            </li>
                            <li>
                                Building cool projects that reach and impact many people
                            </li>
                            <li>
                                Architecting software solutions focused on long-term scalability and efficiency
                            </li>
                        </ul>
                    </MotivationSection>
                </AboutMeText>
            </SummarySection>

        </AboutMeBlock>)
    }

    function renderExperience() {
        return (
            <div ref={ref}>
                <ExperienceChart onSelectionChange={setSelectedExperienceSource} selectedExperienceSource={selectedExperienceSource}/>
            </div>)
    }

    function renderSkillsDisplay() {

        return <SkillsDisplay selectedExperienceSource={selectedExperienceSource}/>
    }

    function renderHeroFooter() {
        const HeroFooter = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;   
            font-size: 1.5rem;            
        `

        const ContactLinks = styled.ul`
            list-style-type: none;
            display: flex;              
        `

        const ContactLink = styled.li`
            margin: 8px;
        `

        return (
            <HeroFooter>
                <h1>
                    Contact Me
                </h1>
                <ContactLinks>
                    <ContactLink>
                        <Link href={''}>
                            GitHub
                        </Link>
                    </ContactLink>
                    <ContactLink>
                        <Link href={''}>
                            Email
                        </Link>
                    </ContactLink>
                    <ContactLink>
                        <Link href={''}>
                            Linkedin
                        </Link>
                    </ContactLink>
                </ContactLinks>
            </HeroFooter>)
    }

    return (
        <AppContainer>
            {renderHeroBanner()}
            <StyledHr/>
            <ContentContainer>
                <MainContent>
                    {renderAboutMe()}
                    <StyledHr/>
                    {renderExperience()}
                </MainContent>
                <VerticleRule/>
                <SideContent>
                    {renderSkillsDisplay()}
                </SideContent>
            </ContentContainer>
            <StyledHr/>
            {renderHeroFooter()}
        </AppContainer>
    )
}

export default Home;
