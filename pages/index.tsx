import type {NextPage} from 'next'
import styled from "styled-components";
import ExperienceChart from "../components/experienceChart";

const Home: NextPage = () => {


    function renderHeroBanner() {
        return <div>Hero Banner</div>
    }

    const AboutMeBlock = styled.div`
        display: flex;
    `

    function renderAboutMe() {
        return (
        <AboutMeBlock>
            <div>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={'https://picsum.photos/200/300'}/>
        </AboutMeBlock>)
    }

    function renderExperience() {
        return <ExperienceChart/>
    }

    function renderSkillsDisplay() {
        return <div>Skills</div>
    }

    return (
        <>
            <div>
                {renderHeroBanner()}
                {renderAboutMe()}
                {renderExperience()}
            </div>
            <div>
                {renderSkillsDisplay()}
            </div>
        </>
    )
}

export default Home;
