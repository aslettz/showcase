import {motion} from "framer-motion";

const AboutMe = () => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 id={'about-me'}>About Me</h1>
            <p>
                This is where I will put a lot of information about me. It will
                make me look cool and also very personable probably. People
                should want to be my friend and hire me after reading all of
                this. It's a good thing I can build a website!
                (Don't forget a picture of myself!)
            </p>
        </motion.div>
    );

}

export default AboutMe