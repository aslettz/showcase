import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import {useAccount} from "wagmi";
import {motion} from "framer-motion";
import AboutMe from "../components/aboutMe";

const Home: NextPage = () => {

    const { address, isConnected } = useAccount()

  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <motion.h1 className={styles.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            Welcome to my portfolio!
        </motion.h1>

        <div id={'home'}>
            <h1>Home</h1>
        </div>

        <AboutMe/>

        <div id={'skills-and-experience'}>
            <h1>Skills & Experience</h1>
        </div>

        <div id={'pet-projects'}>
            <h1>Pet Projects</h1>
        </div>

      </main>
    </div>
  )
}

export default Home;
