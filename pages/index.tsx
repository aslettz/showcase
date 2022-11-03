import type {NextPage} from 'next'

const Home: NextPage = () => {


    function renderHeroBanner() {
        return <div>Hero Banner</div>
    }

    function renderAboutMe() {
        return <div>About Me</div>
    }

    function renderExperience() {
        return <div>Experience</div>
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
