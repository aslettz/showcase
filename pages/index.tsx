import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to my portfolio!
        </h1>

        <div id={'home'}>
            <h1>Home</h1>
        </div>

        <div id={'about-me'}>
            <h1>About Me</h1>
        </div>

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
