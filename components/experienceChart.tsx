import {useState} from "react";
import styled from "styled-components";

enum ExperienceSources {
    Awardco,
    Contract,
    RedSky,
    BYU,
}

const ChartContainer = styled.div`
    display: flex;
`

const SourceSelection = styled.ul`
    
`

const SourceItem = styled.li`

`

const ExperienceContainer = styled.div`

`

const ExperienceHeader = styled.h2`

`

const ExperienceList = styled.ul`
    
`

const ExperienceListItem = styled.li`
    
`

const ExperienceChart = () => {
    const [jobSelectedIndex, setJobSelectedIndex] = useState(ExperienceSources.Awardco)

    function renderBYUExperience() {
        return (
            <ExperienceContainer>
                <ExperienceHeader>Education - Brigham Young University</ExperienceHeader>
                <ExperienceList>
                    <ExperienceListItem>Do this and that</ExperienceListItem>
                    <ExperienceListItem>Front and back ends?!?!</ExperienceListItem>
                    <ExperienceListItem>Gain so much experience here</ExperienceListItem>
                </ExperienceList>
            </ExperienceContainer>)
    }

    function renderRedSkyExperience() {
        return (
            <ExperienceContainer>
                <ExperienceHeader>Full-Stack Web Developer - RedSky Technologies</ExperienceHeader>
                <ExperienceList>
                    <ExperienceListItem>Do this and that</ExperienceListItem>
                    <ExperienceListItem>Front and back ends?!?!</ExperienceListItem>
                    <ExperienceListItem>Gain so much experience here</ExperienceListItem>
                </ExperienceList>
            </ExperienceContainer>)
    }

    function renderContractExperience() {
        return (
            <ExperienceContainer>
                <ExperienceHeader>Web3 Engineer - Independent Contractor</ExperienceHeader>
                <ExperienceList>
                    <ExperienceListItem>Be so impressive</ExperienceListItem>
                    <ExperienceListItem>Make so much money for clients</ExperienceListItem>
                    <ExperienceListItem>Build such an impressive portfolio</ExperienceListItem>
                </ExperienceList>
            </ExperienceContainer>)
    }

    function renderAwardcoExperience() {
        return (
        <ExperienceContainer>
            <ExperienceHeader>Backend Software Engineer - Awardco</ExperienceHeader>
            <ExperienceList>
                <ExperienceListItem>Manage so many things</ExperienceListItem>
                <ExperienceListItem>Fix so many bugs</ExperienceListItem>
                <ExperienceListItem>Be such an inspiration to my peers</ExperienceListItem>
            </ExperienceList>
        </ExperienceContainer>)
    }

    function renderExperiencePoints() {
        switch (jobSelectedIndex){
            case ExperienceSources.Awardco:
                return renderAwardcoExperience();
            case ExperienceSources.Contract:
                return renderContractExperience();
            case ExperienceSources.RedSky:
                return renderRedSkyExperience();
            case ExperienceSources.BYU:
                return renderBYUExperience();
            default:
                return <div/>
        }
    }

    function renderSourceSelection() {
        return (
        <SourceSelection>
            <SourceItem onClick={() => setJobSelectedIndex(ExperienceSources.Awardco)}>
                Awardco
            </SourceItem>
            <SourceItem onClick={() => setJobSelectedIndex(ExperienceSources.Contract)}>
                Contract
            </SourceItem>
            <SourceItem onClick={() => setJobSelectedIndex(ExperienceSources.RedSky)}>
                RedSky Tech.
            </SourceItem>
            <SourceItem onClick={() => setJobSelectedIndex(ExperienceSources.BYU)}>
                BYU
            </SourceItem>
        </SourceSelection>);
    }

    return (
        <ChartContainer>
            {renderSourceSelection()}
            {renderExperiencePoints()}
        </ChartContainer>
    )
}

export default ExperienceChart;