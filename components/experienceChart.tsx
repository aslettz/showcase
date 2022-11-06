import styled from "styled-components";

export enum ExperienceSources {
    Awardco,
    Contract,
    RedSky,
    BYU,
}

const ChartContainer = styled.div`
    display: flex;    
    font-size: 1.8rem;
`

const ChartHeader = styled.h1`
    font-size: 4rem;
`

const SourceSelection = styled.ul`
    list-style-type: none;
    padding: 8px;
    border-right: 1px solid black;
    min-width: fit-content;
`

const SourceItem = styled.li<{ isSelected: boolean }>`
    padding: 4px;
    margin: 4px;
    border-radius: 4px;
    background-color: ${(props) => {return (props.isSelected ? '#9C9C9C55' : '#FFFFFF')}};
    box-shadow: ${(props) => {return (props.isSelected ? '3px 3px 1px' : 'none')}};
    cursor: pointer;
`

const ExperienceContainer = styled.div`
    padding: 8px;
`

const ExperienceHeader = styled.h2`    
    margin: 0 0 8px 0;
`

const ExperienceList = styled.ul`
    
`

const ExperienceListItem = styled.li`
    
`

export interface ExperienceChartProps {
    selectedExperienceSource: ExperienceSources | null;
    onSelectionChange(experienceSource: ExperienceSources): void;
}

const ExperienceChart = (props: ExperienceChartProps) => {

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
        switch (props.selectedExperienceSource){
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
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.Awardco)} isSelected={props.selectedExperienceSource==ExperienceSources.Awardco}>
                Awardco
            </SourceItem>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.Contract)} isSelected={props.selectedExperienceSource==ExperienceSources.Contract}>
                Contract
            </SourceItem>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.RedSky)} isSelected={props.selectedExperienceSource==ExperienceSources.RedSky}>
                RedSky Tech.
            </SourceItem>
            <SourceItem onClick={() => props.onSelectionChange(ExperienceSources.BYU)} isSelected={props.selectedExperienceSource==ExperienceSources.BYU}>
                BYU
            </SourceItem>
        </SourceSelection>);
    }

    return (
        <>
            <ChartHeader>Experience</ChartHeader>
            <ChartContainer>
                {renderSourceSelection()}
                {renderExperiencePoints()}
            </ChartContainer>
        </>
    )
}

export default ExperienceChart;