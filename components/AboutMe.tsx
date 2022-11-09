import styled from "styled-components";
import Image from 'next/image';

export interface AboutMeProps {

}

const AboutMe = (props: AboutMeProps) => {

    return (
        <AboutMeBlock>
            <AboutMeContent>
                <GridTitle>
                    <AboutMeHeader>
                        About Me
                    </AboutMeHeader>
                </GridTitle>
                <GridPicture>
                    <SummaryImage>
                        <Image src={'/headshot.jpg'} width={200} height={300} objectFit={'contain'} priority />
                    </SummaryImage>
                </GridPicture>
                <GridSummary>
                    <SummaryText>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm a software engineer with a drive for innovation and the cutting edge.
                        In the fast moving world of decentralization, I pride myself in the ability
                        to learn new technologies and skills quickly.
                    </SummaryText>
                </GridSummary>
                <GridMotivation>
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
                </GridMotivation>
            </AboutMeContent>

        </AboutMeBlock>
    );
}

export default AboutMe;


const AboutMeBlock = styled.div`            
    
`

const AboutMeHeader = styled.h1`
    margin: 0;       
`

const AboutMeContent = styled.div`
    display: grid;        
    gap: 10px;
    grid-template-areas:
        "picture title"
        "picture summary"
        "picture motivation";  
        
    @media screen and (max-width: 700px) {
        justify-items: center;    
        grid-template-areas:
            "title"
            "picture"
            "picture"
            "picture"
            "summary"
            "motivation";
    }   
`

const GridTitle = styled.div`
    grid-area: title;
`

const GridPicture = styled.div`
    grid-area: picture;
`

const GridSummary = styled.div`
    grid-area: summary;
`

const GridMotivation = styled.div`
    grid-area: motivation;
`

const SummaryImage = styled.div`    
    border-radius: 4px;
    max-height: 300px;
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

const SummaryText = styled.div`
    margin: 0;
`

const MotivationSection = styled.div`
            
`